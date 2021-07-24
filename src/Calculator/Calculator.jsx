import React, { useState } from 'react'
import { Paper } from '@material-ui/core'
import Keyboard from './Keyboard'
import Display from './Display'

// ############ START UTILITIES ############################

// Operator regex
const regexOperator = /([+\-/*])/

// Remplace x for *
const fixMultiply = (string) => string.replace(/x/g, '*')

// check if last char is an operator
const isLastCharOperator = (string) => {
  const temp = fixMultiply(string)
  return regexOperator.test(temp.charAt(temp.length - 1))
}

// round results
const round = (number) =>
  typeof number === 'number'
    ? Math.round((number + Number.EPSILON) * 100) / 100
    : number

// with Errors
const withError = (string) => isNaN(Number(string))

// Eval alternative
const compute = (string) => {
  // remplace x with *
  const preCompute = fixMultiply(string)
  // zero devided by zero
  if (/(0\/0)$/.test(preCompute)) {
    return 'Resultado indefinido'
  }
  // no division by zero
  if (/(\d+\/0)$/.test(preCompute)) {
    return 'No existe divicion por cero'
  }
  // no 0/.0...
  if (/^(0\/\.0+)/.test(preCompute)) return 'Error'
  // no 0/.
  if (/^(0\/\.)$/.test(preCompute)) return 'Error'
  // 0 devided always 0
  if (/^(0\/)/.test(preCompute)) return '0'

  try {
    if (isLastCharOperator(preCompute)) {
      const withOutLastChar = preCompute.substring(0, preCompute.length - 1)
      // eslint-disable-next-line
      return Function(`'use strict'; return (${withOutLastChar})`)()
    }
    // eslint-disable-next-line
    return Function(`'use strict'; return (${preCompute})`)()
  } catch (error) {
    return 'Error'
  }
}

// ############ END UTILITIES ############################

function Calculator() {
  const [input, setInput] = useState('0')
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const addImput = (event) => {
    // if result reset all
    if (!!result) resetAll()
    if (input === '0') return setInput(event.currentTarget.value)
    if (input.includes('.') && event.currentTarget.value === '.') return null
    return setInput(input.concat(event.currentTarget.value))
  }

  const backSpace = () => {
    return input
      ? setInput(input.substring(0, input.length - 1))
      : setCalc(calc.substring(0, calc.length - 1))
  }

  const addOperator = (event) => {
    // if result error reset and return 0+operator
    if (withError(result)) {
      setResult('')
      return setCalc('0' + event.currentTarget.value)
    }

    // continue concat from last result
    if (!!result) {
      setCalc(result + event.currentTarget.value)
      setInput('')
      return setResult('')
    }

    // change last operator
    if (isLastCharOperator(calc) && input === '') {
      let changeOperator = calc.slice(0, -1).concat(event.currentTarget.value)
      return setCalc(changeOperator)
    }

    setCalc(calc + input + event.currentTarget.value)
    return setInput('')
  }

  const getResult = () => {
    // concat last input and clear
    const joinLastInput = calc.concat(input)
    setCalc(joinLastInput)
    setInput('')
    return setResult(round(compute(joinLastInput)))
  }

  const resetAll = () => {
    setInput('0')
    setCalc('')
    setResult('')
  }

  const keyboardProps = {
    addImput,
    addOperator,
    backSpace,
    getResult,
    resetAll
  }

  const displayProps = {
    input,
    calc,
    result
  }

  return (
    <Paper elevation={2}>
      <Display {...displayProps} />
      <Keyboard {...keyboardProps} />
    </Paper>
  )
}

export default Calculator
