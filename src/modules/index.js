import {combineReducers} from '@reduxjs/toolkit'
import signInModule from './sign_in'

export default combineReducers({signin: signInModule.reducer})
