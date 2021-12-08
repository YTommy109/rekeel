import React from 'react'
import {RecoilRoot} from 'recoil'
import RecoilLogger from 'recoil-logger'
import './App.css'
import SignIn from 'containers/sign_in'

const App = () => (
  <React.StrictMode>
    <RecoilRoot>
      <RecoilLogger />
      <div className="App">
        <SignIn />
      </div>
    </RecoilRoot>
  </React.StrictMode>
)

export default App
