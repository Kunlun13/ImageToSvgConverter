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
    <div className='w-full overflow-auto' style={{height:"900px", width:"100%"}}>

<div style={{marginBottom:"50px",top:"1000px", zIndex:"5"}}>

    <input type="range" max={100} min={1} value={pixelSize} onChange={(event)=>{setPixelSize(Number(event.target.value))}}/>
    <p>Pixel size : <input type="number" max={100} min={1} onChange={(e)=>{setPixelSize(Math.min(Math.max(Number(e.target.value), 1), 100))}} value={pixelSize} className='border text-center border-black' /></p>
    <input type="range" max={500} min={100} value={squareSide} onChange={(event)=>{setSquareSide(Number(event.target.value))}}/>
    <p>Canvas Side Length : <input type="number" max={500} min={100} onChange={(e)=>{setSquareSide(Math.min(Math.max(Number(e.target.value), 1), 500))}} value={squareSide} className='border text-center border-black' /></p>

    </div>
<p className='bg-red-400 inline font-bold p-1 rounded-sm'>
      Whole Drawing will be lost after refreshing the page Or changing Above specifications
</p>
      <div style={{marginLeft:"70px",justifyItems:"center",marginTop:"20px"}}>

      <DrawingArea width={squareSide} height={squareSide} pixelSize={pixelSize} colorMatrix={colorMatrix}/>
      </div>
      
      </div>
  )
}

export default DrawingSoftware