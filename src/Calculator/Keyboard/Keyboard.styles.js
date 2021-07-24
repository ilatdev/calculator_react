import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  keyboard: {
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '0 2px 2px',
    '& button': {
      width: 80,
      height: 80,
      margin: '2px 1px 0px 0px',
      fontSize: 28,
      fontWeight: 'bold'
    }
  },
  numberKeys: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 243,
    '& .MuiButton-containedSecondary': {
      backgroundColor: '#457b9d',
      '&:hover': {
        backgroundColor: '#6399BB'
      }
    },
    '& #key-9, #key-10': {
      width: 120
    }
  },
  OperatorKeys: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 162,
    '& .MuiButton-containedPrimary': {
      backgroundColor: '#2E548A',
      '&:hover': {
        backgroundColor: '#3D70B8'
      }
    },
    '& #clearAll': {
      backgroundColor: '#e63946',
      '&:hover': {
        backgroundColor: '#EB5C68'
      }
    },
    '& #equalKey': {
      width: 160,
      backgroundColor: '#049F76',
      '&:hover': {
        backgroundColor: '#05C793'
      }
    }
  }
}))

export default useStyles
