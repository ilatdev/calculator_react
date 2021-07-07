import React, { useState } from 'react'
import { Button, Box, Typography, Paper } from '@material-ui/core'
import useStyles from './Calculator.styles'
import BackspaceIcon from '@material-ui/icons/Backspace'

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

function Calculator() {
  const cls = useStyles()
  const [input, setInput] = useState('')
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const addImput = (event) => {
    if (input.includes('.') && event.currentTarget.value === '.') return null
    if (input === '0' && event.currentTarget.value === '0') return null
    if (input === '0' && event.currentTarget.value !== '0') {
      return setInput(event.currentTarget.value)
    }
    setInput(input.concat(event.currentTarget.value))
  }

  const backSpace = () => {
    if (input) {
      const temp = input
      return setInput(temp.substring(0, temp.length - 1))
    }
  }

  const addOperator = (event) => {
    if (!isLastCharOperator(calc) || input) {
      let temp = input.concat(event.currentTarget.value)
      setCalc(calc.concat(temp))
      setInput('')
    }

    if (isLastCharOperator(calc) && !input) {
      let changeOperator = calc.slice(0, -1).concat(event.currentTarget.value)
      setCalc(changeOperator)
    }
  }

  const getResult = () => {
    if (!input || !calc) return null
    // concat last input and clear
    const joinLastInput = calc.concat(input)
    setCalc(joinLastInput)
    setInput('')
    // remplace x with *
    const toCompute = fixMultiply(joinLastInput)
    // basic validations
    if (/(\/0)$/.test(toCompute)) {
      resetAll()
      return setResult('Resultado indefinido')
    }
    if (/^(0\/)/.test(toCompute)) return setResult('0')

    isLastCharOperator(toCompute)
      ? setResult(compute(toCompute.substring(0, toCompute.length - 1)))
      : setResult(compute(toCompute))
  }

  const resetAll = () => {
    setInput('')
    setCalc('')
    setResult('')
  }

  return (
    <Box>
      <Paper className={cls.root}>
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
          <Box className={cls.columnWrapper}>
            <Box className={cls.numbers}>
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
            </Box>
            <Box className={cls.zeroAndDot}>
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
            </Box>
          </Box>
          <Box className={cls.columnWrapper}>
            <Box className={cls.actionsKeys}>
              <Box className={cls.clearAll}>
                <Button color="primary" variant="contained" onClick={resetAll}>
                  C
                </Button>
              </Box>
              <Button variant="contained" color="primary" onClick={backSpace}>
                <BackspaceIcon />
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
            </Box>
            <Box className={cls.equalKey}>
              <Button variant="contained" color="primary" onClick={getResult}>
                =
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Calculator
