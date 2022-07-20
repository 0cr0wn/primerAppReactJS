import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import NavBar from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
  <h1>hola mundo</h1>
  <NavBar 
     Boton1='Tulio Corona'
     Boton2='Desarrollador'
     Boton3='Contacto'>

  </NavBar>
  <App />
  </>
)

