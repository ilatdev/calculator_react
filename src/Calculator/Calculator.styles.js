import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    width: 500
  },
  displayView: {
    backgroundColor: '#000',
    padding: theme.spacing(1),
    color: 'white'
  },
  inputView: {
    minHeight: 40,
    textAlign: 'right'
  },
  calcView: {
    minHeight: 40,
    textAlign: 'left',
    wordWrap: 'break-word',
    maxWidth: 300
  },
  resultView: {
    minHeight: 40,
    textAlign: 'right',
    color: '#8EE3F5'
  },
  keyboard: {
    display: 'flex',
    padding: 1,
    '& button': {
      fontSize: 28,
      fontWeight: 'bold'
    }
  },
  leftGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  zeroAndDot: {
    '& button': {
      width: 135,
      height: 95,
      margin: 1
    }
  },
  numbers: {
    display: 'flex',
    flexWrap: 'wrap',
    '& button': {
      width: 90,
      height: 90,
      margin: 1
    }
  },
  actionsKeys: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    '& button': {
      width: 110,
      height: 120
    }
  }
}))

export default useStyles
