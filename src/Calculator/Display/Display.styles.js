import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  displayView: {
    maxWidth: 410,
    backgroundColor: '#333',
    padding: theme.spacing(1),
    color: 'white',
    border: '2px solid #f1faee',
    borderRadius: 5,
    '& .MuiTypography-root': {
      fontFamily: `'Roboto Mono', monospace`,
      fontWeight: 500,
      wordWrap: 'break-word'
    }
  },
  inputView: {
    textAlign: 'right',
    fontSize: '30px',
    minHeight: 45
  },
  calcView: {
    minHeight: 35,
    fontSize: '20px'
  },
  resultView: {
    minHeight: 42,
    color: '#81c784',
    textAlign: 'right',
    fontSize: '28px'
  },
  errorResult: {
    minHeight: 42,
    color: '#e63946',
    textAlign: 'right',
    fontSize: '28px'
  }
}))

export default useStyles
