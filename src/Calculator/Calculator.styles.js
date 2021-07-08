import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    width: 500
  },
  displayView: {
    backgroundColor: 'black',
    padding: theme.spacing(1),
    color: 'white'
  },
  inputView: {
    minHeight: 45,
    textAlign: 'right'
  },
  calcView: {
    minHeight: 35,
    textAlign: 'left',
    wordWrap: 'break-word',
    maxWidth: 300
  },
  resultView: {
    minHeight: 45,
    textAlign: 'right',
    color: '#8EE3F5'
  },
  keyboard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 1,
    '& button': {
      fontSize: 28,
      fontWeight: 'bold'
    }
  },
  mainRowKeys: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '& button': {
      width: 95,
      height: 95,
      margin: 1
    }
  },
  zeroAndDot: {
    '& button': {
      width: 145,
      height: 95,
      margin: 1
    }
  },
  clearAll: {
    '& button': {
      backgroundColor: '#d32f2f'
    }
  },
  equalKey: {
    '& button': {
      width: 200,
      height: 95,
      margin: 2,
      backgroundColor: '#388e3c'
    }
  }
}))

export default useStyles
