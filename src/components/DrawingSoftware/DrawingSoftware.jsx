import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import DrawingArea from '../DrawingArea/DrawingArea'
import canvasToSvg from "canvas-to-svg"


function DrawingSoftware() {
    const [width, setWidth] = useState(500)
  const [height, setHeight] = useState(400)
  const [squareSide, setSquareSide] = useState(500)
  const [pixelSize, setPixelSize] = useState(100)
  const [colorMatrix, setColorMatrix] = useState(Array(Math.ceil(squareSide/pixelSize)).fill().map(() => Array(Math.ceil(squareSide/pixelSize)).fill().map(()=>Array(4).fill([255, 255, 255, 0]))))

  useEffect(()=>{
    setColorMatrix(Array(Math.ceil(squareSide/pixelSize)).fill().map(() => Array(Math.ceil(squareSide/pixelSize)).fill().map(()=>Array(4).fill(255))))
  },
  [squareSide, pixelSize])


  const canvasRef = useRef(null)

  // function downloadSvg(){
    
  //   const canvas = canvasRef.current
  //   console.log(canvas)
  //   const svgElement = document.getElementById('drawing');
  //   // console.log(svgElement)
  //   const svgData = new XMLSerializer().serializeToString(svgElement);
  //   const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  //   const url = URL.createObjectURL(blob);

  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'grid-art.svg';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   URL.revokeObjectURL(url);
  // }

  return (
    <div className='w-full overflow-scroll' style={{height:`800px`, width:"100%"}}>

      <div style={{marginLeft:"70px"}}>

      <DrawingArea width={squareSide} height={squareSide} pixelSize={pixelSize} colorMatrix={colorMatrix}/>
      </div>
      <div style={{position:'absolute',top:"900px", zIndex:"5"}}>

    <input type="range" max={100} min={1} value={pixelSize} onChange={(event)=>{setPixelSize(Number(event.target.value))}}/>
    <p>Pixel size : <input type="text" onChange={(e)=>{setPixelSize(Math.max(Number(e.target.value), 1))}} value={pixelSize} className='border text-center border-black' /></p>
    <input type="range" max={500} min={100} value={squareSide} onChange={(event)=>{setSquareSide(Number(event.target.value))}}/>
    <p>Square Side : {squareSide}</p>

      

    </div>
      </div>
  )
}

export default DrawingSoftware