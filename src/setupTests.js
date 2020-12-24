import '@testing-library/jest-dom/extend-expect'
import {LocalStorage} from "node-localstorage"
import {enableFetchMocks} from 'jest-fetch-mock'
 
global.localStorage = new LocalStorage('./mock/localstorage')
enableFetchMocks()
