import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Modal from 'react-modal'

const rootElement = document.getElementById('root')

Modal.setAppElement(rootElement)

const render = (Component) => {
  if (rootElement.hasChildNodes()) {
    return ReactDOM.hydrate(<Component />, rootElement)
  } else {
    return ReactDOM.render(<Component />, rootElement)
  }
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
