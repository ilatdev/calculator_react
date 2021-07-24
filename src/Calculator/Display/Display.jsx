import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Display.styles'

export default function Display({ calc, input, result }) {
  const cls = useStyles()
  return (
    <Box className={cls.displayView}>
      <Typography className={cls.calcView}>{calc}</Typography>
      <Typography className={cls.inputView}>{input}</Typography>
      <Typography
        className={result === 'Error' ? cls.errorResult : cls.resultView}>
        {result}
      </Typography>
    </Box>
  )
}
