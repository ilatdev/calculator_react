import React, { useState } from 'react'
import { Button, Box, Typography } from '@material-ui/core'
import useStyles from './Calculator.styles'

function compute(str) {
  // eslint-disable-next-line
  return Function(`'use strict'; return (${str})`)()
}

// check if last char is an operator
const isLastCharOperator = (string) =>
  /([+\-/*])/.test(string.charAt(string.length - 1))

function Calculator() {
  const cls = useStyles()
  const [input, setInput] = useState('')
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const addNumber = (event) => {
    if (input !== '0') setInput(input.concat(event.currentTarget.value))
  }

  const addOperator = (event) => {
    if (!isLastCharOperator(calc) || input) {
      let temp = input.concat(event.currentTarget.value)
      setCalc(calc.concat(temp))
      setInput('')
    }
  }

  const getResult = () => {
    // concat last input
    let joinLastInput = calc.concat(input)
    setCalc(joinLastInput)
    setInput('') // clear input
    let fixMultiply = joinLastInput.replace(/x/g, '*') // remplace x with *
    if (fixMultiply.substring(0, 1) === '0/') return setResult('0') // 0 devided is 0
    if (/^(0\/0+)$/.test(fixMultiply)) return setResult('Resultado indefinido') // avoid divide by 0

    isLastCharOperator(fixMultiply)
      ? setResult(compute(fixMultiply.substring(0, fixMultiply.length - 1)))
      : setResult(compute(fixMultiply))
  }

  const resetAll = () => {
    setInput('')
    setCalc('')
    setResult('')
  }

  return (
    <Box>
      <Typography variant="h4">Calculadora Javascript</Typography>
      <Box className={cls.root}>
        <Box className={cls.display}>
          <Box className={cls.calcView}>
            <Typography variant="subtitle1">{calc}</Typography>
          </Box>
          <Box className={cls.inputView}>
            <Typography variant="h4">{input}</Typography>
          </Box>
          <Box className={cls.resultView}>{result}</Box>
        </Box>
        <Box className={cls.btnWrapper}>
          <Box className={cls.numberKeys}>
            <Button
              id="one"
              variant="contained"
              color="primary"
              value={1}
              onClick={addNumber}>
              1
            </Button>
            <Button
              variant="contained"
              color="primary"
              value="2"
              onClick={addNumber}>
              2
            </Button>
            <Button
              variant="contained"
              color="primary"
              value={3}
              onClick={addNumber}>
              3
            </Button>
            <Button
              variant="contained"
              color="primary"
              value={4}
              onClick={addNumber}>
              4
            </Button>
            <Button
              variant="contained"
              color="primary"
              value={5}
              onClick={addNumber}>
              5
            </Button>
            <Button
              variant="contained"
              color="primary"
              value={6}
              onClick={addNumber}>
              6
            </Button>
            <Button
              variant="contained"
              color="primary"
              value={7}
              onClick={addNumber}>
              7
            </Button>
            <Button
              variant="contained"
              color="primary"
              value={8}
              onClick={addNumber}>
              8
            </Button>
            <Button
              variant="contained"
              color="primary"
              value={9}
              onClick={addNumber}>
              9
            </Button>
            <Button
              variant="contained"
              color="primary"
              value={0}
              onClick={addNumber}>
              0
            </Button>
          </Box>
          <Box className={cls.numberKeys}>
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
              variant="contained"
              color="primary"
              value={'-'}
              onClick={resetAll}>
              C
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
            <Button variant="contained" color="primary" onClick={getResult}>
              =
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Calculator
