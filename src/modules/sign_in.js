import {createSlice} from '@reduxjs/toolkit'

export const signInModule = createSlice({
  name: 'signin',
  initialState: {
    account:  '',
    password: ''
  },
  reducers: {
    updateText: (state, action) => ({...state, [action.name]: action.value})
  }
})

// ActionType
export const ACTION = {
  UPDATE_TEXT: 'signin/update/text'    // テキスト項目を更新
}

const initialState = {
  payload: {
    account:    '',
    password:   ''
  }
}

// reducer
const REDUCER = {
  [ACTION.UPDATE_TEXT]: (state, action) =>
    ({...state, payload: {...state.payload, [action.name]: action.value}})
}

export default function reducer(state=initialState, action={type:null}) {
  if (!(action.type in REDUCER)) return state
  return REDUCER[action.type](state, action)
}

//
// action creator
//

// テキスト入力
export const updateText = evt => ({type:ACTION.UPDATE_TEXT, name:evt.target.name, value:evt.target.value})
