import logo from './logo.svg'
import './App.css'
import { Button } from '@material-ui/core'
import '@fontsource/roboto'
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
      </header>
    </div>
  )
}

export default App
