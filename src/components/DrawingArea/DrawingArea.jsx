import React from 'react'
import { use, useEffect, useRef, useState } from 'react'

function DrawingArea({width, height, pixelSize, colorMatrix}) {
    // const [width, setWidth] = useState(500)
    // const [height, setHeight] = useState(400)
    // const [pixelSize, setPixelSize] = useState(10)
    // console.log(colorMatrix)
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const [alpha, setAlpha] = useState(1)
    // console.log(colorMatrix)
    const canvasRef = useRef(null)
    const drawGrid = () => {
      const canvas = canvasRef.current
      if(!canvasRef)
      return
    const draw = canvas.getContext('2d')
    draw.clearRect(0, 0, width, height)
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
    drawGrid()
    // const canvasRef = useRef(null)
    // const draw = canvas.getContext('2d')
    // draw.addEventListener("click", ()=>{
    //   console.log("haha")
    // })
  }, [pixelSize, width, height, colorMatrix])
  
  
  const draw = (e) => {
    if(!e.buttons)
    return
    const canvas = canvasRef.current
    const canvasLeftPosition = canvas.getBoundingClientRect().left
    const canvasTopPosition = canvas.getBoundingClientRect().top
    const x = Math.floor((e.clientX-canvasLeftPosition)/pixelSize)
    const y = Math.floor((e.clientY-canvasTopPosition)/pixelSize)
    colorMatrix[y][x] = {red, green, blue};
    const drawit = canvas.getContext('2d')
    // drawit.fillStyle = `rgba(255, 255, 255, 255)`
    // drawit.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize)
    drawit.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`
    drawit.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize)
    // drawGrid()
    // console.log(e.clientX-canvasLeftPosition)
    // console.log(e.clientY-canvasTopPosition)
    // console.log(colorMatrix)
  }
  
  
  return (
    <>
        {/* <h1 className='bg-red-500'>Hello World</h1> */}
  
        <canvas ref={canvasRef} width={width} height={height} style={{border:'1px solid red'}} onMouseMoveCapture={draw} onMouseDown={draw}>
  
        </canvas>
        Red{<br/>}
        <input type="range" max={255} min={0} value={red} onChange={(event)=>{setRed(Number(event.target.value))}}/>{<br/>}
        Green{<br/>}
        <input type="range" max={255} min={0} value={green} onChange={(event)=>{setGreen(Number(event.target.value))}}/>
        {<br/>}
        Blue{<br/>}
        <input type="range" max={255} min={0} value={blue} onChange={(event)=>{setBlue(Number(event.target.value))}}/>
        {<br/>}
    Color:
    <div className='w-10 h-5' style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`}}></div>
        Stroke weight{<br/>}
        <input type="number" style={{border:`1px solid black`}} value={alpha*1000} onChange={(event)=>{setAlpha(Number(event.target.value)/1000)}}/>
        <br /><br /><br />
  
      </>
    )
  }

export default DrawingArea