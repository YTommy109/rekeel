import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import Slider from './slider'

describe('Slider コンポネントについて', () => {
  beforeEach(() => {
    render(
      <Slider
        image1        = 'img1'
        image2        = 'img2'
      />
    )
  })
  describe('img タグについて', () => {
    it('image1 用の img があること', () => {
      const target = screen.getByTestId('img1')
      expect(target).toBeInTheDocument()
      expect(target).toHaveAttribute('src', 'img1')
    })
    it('image2 用の img があること', () => {
      const target = screen.getByTestId('img2')
      expect(target).toBeInTheDocument()
      expect(target).toHaveAttribute('src', 'img2')
    })
  })

  describe('slider について', () => {
    it('slider があること', () => {
      const target = screen.getByRole('slider')
      expect(target).toBeInTheDocument()
      expect(target).toHaveAttribute('type', 'range')
    })

    it('初期値が 50% であること', () => {
      const target = screen.getByTestId('img1')
      expect(target.parentNode).toHaveStyle({'width': '50%'})
    })

    it('スライダーで幅が変わること', () => {
      const target = screen.getByTestId('img1')
      const slider = screen.getByRole('slider')
      fireEvent.change(slider, {target: {value: 60}})
      expect(target.parentNode).toHaveStyle({'width': '60%'})
    })
  })
})
