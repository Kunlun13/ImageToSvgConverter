import React from 'react'
import { useEffect, useState } from 'react'
import DrawingArea from '../DrawingArea/DrawingArea'

function DrawingSoftware() {
    const [width, setWidth] = useState(500)
  const [height, setHeight] = useState(400)
  const [squareSide, setSquareSide] = useState(500)
  const [pixelSize, setPixelSize] = useState(100)
  const [colorMatrix, setColorMatrix] = useState(Array(Math.ceil(squareSide/pixelSize)).fill().map(() => Array(Math.ceil(squareSide/pixelSize)).fill().map(()=>Array(4).fill(255))))

  useEffect(()=>{
    setColorMatrix(Array(Math.ceil(squareSide/pixelSize)).fill().map(() => Array(Math.ceil(squareSide/pixelSize)).fill().map(()=>Array(4).fill(255))))
  },
  [squareSide, pixelSize])
  return (
    <div><DrawingArea width={squareSide} height={squareSide} pixelSize={pixelSize} colorMatrix={colorMatrix}/>
    <input type="range" max={100} min={1} value={pixelSize} onChange={(event)=>{setPixelSize(Number(event.target.value))}}/>
    <p>Pixel size : {pixelSize}</p>
    <input type="range" max={500} min={100} value={squareSide} onChange={(event)=>{setSquareSide(Number(event.target.value))}}/>
    <p>Square Side : {squareSide}</p></div>
  )
}

export default DrawingSoftware