import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactelement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to visit google ",
};

const anotherelement  = {

   
}


createRoot(document.getElementById('root')).render(
  
    <App />
  
)
