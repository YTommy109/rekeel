import {atom} from 'recoil'

const authentication = atom({
  key:        'authentication',
  default:  {
    account:  '',
    password: ''
  },
  persistence_UNSTABLE: {
    type: 'log'
  }
})

const atoms = {authentication}


export default atoms
