import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Frame from 'l1_atoms/frame'
import ImageWithPreview from './image_preview'
import VideoWithPreview from './video_preview'

storiesOf('l2_molecules', module).add(
  'プレビュー',
  () => (
    <div>
      <Frame>
        <h2>画像プレビューのサンプル</h2>
        <ImageWithPreview />
      </Frame>
      <Frame>
        <h2>動画プレビューのサンプル</h2>
        <VideoWithPreview />
      </Frame>
    </div>
  ),
  {
    info: {
      inline: true,
      header: false,
    },
  }
)
