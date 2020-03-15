import {createSlice} from '@reduxjs/toolkit'

const signInModule = createSlice({
  name: 'signin',
  initialState: {
    account:  '',
    password: ''
  },
  reducers: {
    updateText: (state, action) => ({...state, [action.payload.name]: action.payload.value})
  }
})

export default signInModule
