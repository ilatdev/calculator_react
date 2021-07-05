import React, { useState } from 'react'
import { Container, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid black'
  },
  numberKeys: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 200
  },
  display: {
    width: 450,
    height: 100,
    backgroundColor: theme.palette.primary.main
  }
}))

export default function Calculator() {
  const [screen, setScreen] = useState('')
  const [result, setResult] = useState('')
  const [input, setInput] = useState('')
  const cls = useStyles()

  function addNumber(event) {
    if (result !== '') {
      setInput(input.concat(event.target.value))
    }
  }

  function addOperator(event) {}

  function getResult(event) {}

  return (
    <Box className={cls.root}>
      <Box className={cls.display}></Box>
      <Box>
        <Box className={cls.numberKeys}>
          <Button variant="contained" color="primary" onClick={addNumber}>
            1
          </Button>
          <Button variant="contained" color="primary">
            2
          </Button>
          <Button variant="contained" color="primary">
            3
          </Button>
          <Button size="lage" variant="contained" color="primary">
            4
          </Button>
          <Button variant="contained" color="primary">
            5
          </Button>
          <Button variant="contained" color="primary">
            6
          </Button>
          <Button variant="contained" color="primary">
            7
          </Button>
          <Button variant="contained" color="primary">
            8
          </Button>
          <Button variant="contained" color="primary">
            9
          </Button>
          <Button variant="contained" color="primary">
            0
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
