import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'

import '../css/embla.css'

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const ImageSider = () => (
  <div style={{ backgroundColor: "#11111"}}>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </div>

)


export default ImageSider;