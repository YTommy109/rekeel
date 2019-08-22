import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
addDecorator(withInfo)
