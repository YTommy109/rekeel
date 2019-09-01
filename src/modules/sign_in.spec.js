import reducer, {updateText} from './sign_in'

const init = {
  payload: {
    account:    '',
    password:   ''
  }
}

describe('サインインについて', () => {
  describe('初期状態について', () => {
    it('Reducer が初期 state を返すこと', () => {
      expect(reducer()).toEqual(init)
    })
  })

  describe('テキスト入力について', () => {
    it('アカウント入力が state に反映されること', () => {          
      const e = {
        target: {
          name:     'account',
          value:    'dummy'
        }
      }
      const exp = {...init, payload: {...init.payload, account: 'dummy'}}
      const ret = reducer(init, updateText(e))
      expect(ret).toEqual(exp)
    })
    it('パスワード入力が state に反映されること', () => {          
      const e = {
        target: {
          name:     'password',
          value:    'dummy'
        }
      }
      const exp = {...init, payload: {...init.payload, password: 'dummy'}}
      const ret = reducer(init, updateText(e))
      expect(ret).toEqual(exp)
    })
  })
})
