import React, { useState } from 'react'
import { Button, Box, Typography, Paper } from '@material-ui/core'
import useStyles from './Calculator.styles'
import BackspaceIcon from '@material-ui/icons/Backspace'

// ############ START UTILITIES ############################

// Operator regex
const regexOperator = /([+\-/*])/
// Remplace x for *
const fixMultiply = (string) => string.replace(/x/g, '*')
// Eval alternative
const compute = (string) => {
  // eslint-disable-next-line
  return Function(`'use strict'; return (${string})`)()
}
// check if last char is an operator
const isLastCharOperator = (string) => {
  const temp = fixMultiply(string)
  return regexOperator.test(temp.charAt(temp.length - 1))
}
// round results
const round = (number) => Math.round((number + Number.EPSILON) * 100) / 100

// ############ END UTILITIES ############################

function Calculator() {
  const cls = useStyles()
  const [input, setInput] = useState('0')
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const addImput = (event) => {
    // if result reset all
    if (!!result) resetAll()
    if (input === '0' && event.currentTarget.value) {
      return setInput(event.currentTarget.value)
    }
    if (input.includes('.') && event.currentTarget.value === '.') return null
    return setInput(input.concat(event.currentTarget.value))
  }

  const backSpace = () => {
    if (input) {
      return setInput(input.substring(0, input.length - 1))
    }
    return setCalc(calc.substring(0, calc.length - 1))
  }

  const addOperator = (event) => {
    // continue concat from last result
    if (!!result) {
      setCalc(result + event.currentTarget.value)
      setInput('')
      return setResult('')
    }

    // avoid dot repeat
    if (input === '.') return null

    // change last operator
    if (isLastCharOperator(calc) && input === '') {
      let changeOperator = calc.slice(0, -1).concat(event.currentTarget.value)
      return setCalc(changeOperator)
    }

    setCalc(calc + input + event.currentTarget.value)
    return setInput('')
  }

  const getResult = () => {
    if (!input || !calc) return null
    // concat last input and clear
    const joinLastInput = calc.concat(input)
    setCalc(joinLastInput)
    setInput('')

    try {
      // remplace x with *
      const toCompute = fixMultiply(joinLastInput)
      // avoid devide by 0
      if (/(0\/0)$/.test(toCompute)) {
        resetAll()
        return setResult('Resultado indefinido')
      }

      if (/(\d+\/0)$/.test(toCompute)) {
        resetAll()
        return setResult('No se puede dividir por cero')
      }

      // 0 devided always 0
      if (/^(0\/)/.test(toCompute)) return setResult('0')

      isLastCharOperator(toCompute)
        ? setResult(
            round(compute(toCompute.substring(0, toCompute.length - 1)))
          )
        : setResult(round(compute(toCompute)))
    } catch (error) {
      if (error) resetAll()
      return setResult('ERROR')
    }
  }

  const resetAll = () => {
    setInput('0')
    setCalc('')
    setResult('')
  }

  return (
    <Box>
      <Paper elevation={3} className={cls.root}>
        <Box className={cls.displayView}>
          <Box className={cls.calcView}>
            <Typography variant="h5">{calc}</Typography>
          </Box>
          <Box className={cls.inputView}>
            <Typography variant="h4">{input}</Typography>
          </Box>
          <Box className={cls.resultView}>
            <Typography variant="h4">{result}</Typography>
          </Box>
        </Box>
        <Box className={cls.keyboard}>
          <Button
            variant="contained"
            color="secondary"
            value={7}
            onClick={addImput}>
            7
          </Button>
          <Button
            variant="contained"
            color="secondary"
            value={8}
            onClick={addImput}>
            8
          </Button>
          <Button
            variant="contained"
            color="secondary"
            value={9}
            onClick={addImput}>
            9
          </Button>
          <Button
            id="clearAll"
            color="primary"
            variant="contained"
            onClick={resetAll}>
            C
          </Button>
          <Button variant="contained" color="primary" onClick={backSpace}>
            <BackspaceIcon />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            value={4}
            onClick={addImput}>
            4
          </Button>
          <Button
            variant="contained"
            color="secondary"
            value={5}
            onClick={addImput}>
            5
          </Button>
          <Button
            variant="contained"
            color="secondary"
            value={6}
            onClick={addImput}>
            6
          </Button>
          <Button
            variant="contained"
            color="primary"
            value={'+'}
            onClick={addOperator}>
            +
          </Button>
          <Button
            variant="contained"
            color="primary"
            value={'-'}
            onClick={addOperator}>
            -
          </Button>
          <Button
            id="one"
            variant="contained"
            color="secondary"
            value={1}
            onClick={addImput}>
            1
          </Button>
          <Button
            variant="contained"
            color="secondary"
            value="2"
            onClick={addImput}>
            2
          </Button>
          <Button
            variant="contained"
            color="secondary"
            value={3}
            onClick={addImput}>
            3
          </Button>
          <Button
            variant="contained"
            color="primary"
            value={'x'}
            onClick={addOperator}>
            x
          </Button>
          <Button
            variant="contained"
            color="primary"
            value={'/'}
            onClick={addOperator}>
            /
          </Button>
          <Box className={cls.lastRowKeys}>
            <Button
              variant="contained"
              color="secondary"
              value={0}
              onClick={addImput}>
              0
            </Button>
            <Button
              variant="contained"
              color="primary"
              value={'.'}
              onClick={addImput}>
              .
            </Button>
            <Button
              id="equalKey"
              variant="contained"
              color="primary"
              onClick={getResult}>
              =
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Calculator
