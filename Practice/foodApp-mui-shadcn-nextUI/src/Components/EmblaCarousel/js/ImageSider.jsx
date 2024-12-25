import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'

import '../css/embla.css'

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const ImageSider = () => (
  <div className='flex flex-col justify-center items-center  h-dvh'>
  <div style={{ backgroundColor: "#11111"}}>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </div>
  </div>

)


export default ImageSider;