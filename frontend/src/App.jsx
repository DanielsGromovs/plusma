import './styles/App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  return (
    <div className='app-main'>
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
