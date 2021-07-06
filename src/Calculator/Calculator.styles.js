import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid black',
    backgroundColor: '#3473d1',
    width: 400,
    minHeight: 500
  },
  numberKeys: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 200
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap'
  },
  display: {
    backgroundColor: 'black',
    padding: '8px'
  },
  inputView: {
    minHeight: 50,
    textAlign: 'right'
  },
  calcView: {
    minHeight: 50,
    textAlign: 'left',
    wordWrap: 'break-word',
    maxWidth: 300
  },
  resultView: {
    textAlign: 'right'
  }
}))

export default useStyles
