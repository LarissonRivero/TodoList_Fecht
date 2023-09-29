import React from 'react'
import ReactDOM from 'react-dom/client'
import AppFetch from './AppFetch.jsx'
//import AppAsync from './AppAsync.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppFetch/>
   {/* <AppAsync/> */}
  </React.StrictMode>,
)

{/* Para utilizar el codigo con Async solo debes comentar las lineas; 3 y 9 y descomenatar las lineas 4 y 10 */}