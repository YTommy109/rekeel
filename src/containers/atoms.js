import {atom} from 'recoil'

const authentication = atom({
  key:        'authentication',
  default:  {
    account:  '',
    password: ''
  }
})

const atoms = {authentication}


export default atoms
