import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import Slider from './slider'

storiesOf('l2_molecules', module)
  .addDecorator(withKnobs)
  .add('画像スライダー', () => 
    <Slider
      image1 = '/ekiben1.jpeg'
      image2 = '/ekiben2.jpeg'
    />
  , {
    info: {
      inline: true,
      header: false
    }
  })
