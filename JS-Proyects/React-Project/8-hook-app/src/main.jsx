import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import HooksApp from './HooksApp'
import {CounterApp} from "./01-useState/CounterApp.jsx";
import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook.jsx";
import {SimpleForm} from "./02-useEffect/SimpleForm.tsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
)
