import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500
  },
  displayView: {
    backgroundColor: 'black',
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
    minHeight: 45,
    textAlign: 'right'
  },
  calcView: {
    minHeight: 35,
    textAlign: 'left',
    maxWidth: 300
  },
  resultView: {
    minHeight: 45,
    textAlign: 'right',
    color: '#81c784',
    fontSize: '30px'
  },
  errorResult: {
    minHeight: 45,
    textAlign: 'right',
    color: '#e63946',
    fontSize: '28px'
  },
  keyboard: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 1,
    '& button': {
      width: 95,
      height: 95,
      margin: 1,
      fontSize: 28,
      fontWeight: 'bold'
    },
    '& #clearAll': {
      backgroundColor: '#e63946',
      '&:hover': {
        backgroundColor: '#EB5C68'
      }
    },
    '& .MuiButton-containedSecondary': {
      backgroundColor: '#457b9d',
      '&:hover': {
        backgroundColor: '#6399BB'
      }
    },
    '& .MuiButton-containedPrimary': {
      backgroundColor: '#2E548A',
      '&:hover': {
        backgroundColor: '#3D70B8'
      }
    }
  },
  lastRowKeys: {
    '& button': {
      width: 145,
      height: 95,
      margin: 1
    },
    '& #equalKey': {
      width: 195,
      height: 95,
      margin: 2,
      backgroundColor: '#049F76',
      '&:hover': {
        backgroundColor: '#05C793'
      }
    }
  }
}))

export default useStyles
