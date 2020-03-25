import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import {enableFetchMocks} from 'jest-fetch-mock'
import 'jest-localstorage-mock'

Enzyme.configure({adapter: new Adapter()})
enableFetchMocks()
