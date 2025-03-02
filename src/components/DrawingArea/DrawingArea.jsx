import React from 'react'
import { use, useEffect, useRef, useState } from 'react'
import canvasToSvg from "canvas-to-svg"

function DrawingArea({width, height, pixelSize, colorMatrix}) {
    // const [width, setWidth] = useState(500)
    // const [height, setHeight] = useState(400)
    // const [pixelSize, setPixelSize] = useState(10)
    // console.log(colorMatrix)
    const ctx = new canvasToSvg(width, height);
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const [alpha, setAlpha] = useState(1)
    const [erase, setErase] = useState(false)
    // console.log(colorMatrix)
    const canvasRef = useRef(null)
    const drawGrid = () => {
      const canvas = canvasRef.current
      if(!canvasRef)
      return
    const draw = canvas.getContext('2d')
    // draw.clearRect(0, 0, width, height)
    draw.lineWidth = 1
    draw.strokeStyle = "#000"
    for (let x = 0; x <=width; x+=pixelSize) {
      draw.beginPath()
      draw.moveTo(x, 0)
      draw.lineTo(x, height)  
      draw.stroke();
    }
    for (let y = 0; y <=height; y+=pixelSize) {
      draw.beginPath()
      draw.moveTo(0, y)
      draw.lineTo(width, y)  
      draw.stroke();
    }
  }
  
  useEffect(()=>{
    const canvas = canvasRef.current
      if(!canvasRef)
      return
    const draw = canvas.getContext('2d')
    draw.clearRect(0, 0, width, height)
    drawGrid()
    // const canvasRef = useRef(null)
    // const draw = canvas.getContext('2d')
    // draw.addEventListener("click", ()=>{
      //   console.log("haha")
      // })
    }, [pixelSize, width, height, colorMatrix])
    
    
    function downloadSvg(){
    const mySerializedSVG = ctx.getSerializedSvg();
    const blob = new Blob([mySerializedSVG], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'grid-art.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  
  const draw = (e) => {
    if(!e.buttons)
    return
    const canvas = canvasRef.current
    const canvasLeftPosition = canvas.getBoundingClientRect().left
    const canvasTopPosition = canvas.getBoundingClientRect().top
    const x = Math.floor((e.clientX-canvasLeftPosition)/pixelSize)
    const y = Math.floor((e.clientY-canvasTopPosition)/pixelSize)
    const drawit = canvas.getContext('2d')
    if(!erase)
    {
      drawit.fillStyle = `${document.getElementById("drawColor").value}`
      ctx.fillStyle = `${document.getElementById("drawColor").value}`
      drawit.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize)
      ctx.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize)
    }
    else{
      drawit.fillStyle = `rgba(0,0,0,0)`
      ctx.fillStyle = `rgba(0,0,0,0)`
      drawit.clearRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize)
      ctx.clearRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize)
    }
    drawGrid()

  }
  
  
  
  return (
    <>
        {/* <h1 className='bg-red-500'>Hello World</h1> */}
  
        <canvas id='drawing' ref={canvasRef} width={width} height={height} style={{border:'1px solid red',cursor:"crosshair"}} onMouseMoveCapture={draw} onMouseDown={draw}>
  
        </canvas>
        {<br/>}
        <label htmlFor="drawColor">Pick Color: </label>
        <input type="color" name="color" id="drawColor" />
        <br/>
         
        <input type="checkbox" className='w-5 h-5' style={{marginLeft:"25px"}}
        onChange={(e)=>{setErase(e.target.checked);console.log(erase)}} /> : Erase<br/><br/><br/>
        <button className='border rounded-md border-black py-1 px-5 bg-green-500 hover:bg-green-400 active:bg-green-300 text-white font-bold' onClick={downloadSvg}>Download</button>
        {/* Stroke weight{<br/>}
        <input type="number" style={{border:`1px solid black`}} value={alpha*1000} onChange={(event)=>{setAlpha(Number(event.target.value)/1000)}}/> */}
        <br /><br /><br />
      </>
    )
  }

export default DrawingArea