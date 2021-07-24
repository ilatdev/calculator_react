import React from 'react'
import { Box, Button } from '@material-ui/core'
import BackspaceIcon from '@material-ui/icons/Backspace'
import useStyles from './Keyboard.styles'

export default function Keyboard({
  addImput,
  backSpace,
  addOperator,
  resetAll,
  getResult
}) {
  const cls = useStyles()
  return (
    <Box className={cls.keyboard}>
      <Box className={cls.numberKeys}>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((el, index) => (
          <Button
            id={`key-${index}`}
            key={`key-${index}`}
            variant="contained"
            color="secondary"
            value={el}
            onClick={addImput}>
            {el}
          </Button>
        ))}
      </Box>
      <Box className={cls.OperatorKeys}>
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
        {['+', '-', 'x', '/'].map((el, index) => (
          <Button
            key={`optr-key-${index}`}
            variant="contained"
            color="primary"
            value={el}
            onClick={addOperator}>
            {el}
          </Button>
        ))}
        <Button
          id="equalKey"
          variant="contained"
          color="primary"
          onClick={getResult}>
          =
        </Button>
      </Box>
    </Box>
  )
}
