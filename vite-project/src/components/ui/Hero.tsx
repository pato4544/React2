import React from 'react'

const Hero = () => {
  return (
    <div className='pt-24 h-screen p-8 text-xl' 
    style={{backgroundImage: 'url(https://wallpaperaccess.com/full/2308739.jpg)'}}>
       <img className="size-80"src="https://th.bing.com/th/id/R.30fa2f45660d1a8fee2564cec71716b4?rik=8SqzIskspbRLLQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2ffr%2fb%2fb3%2fGuns_N%27_Roses-logo.JPG&ehk=ohuv89JSajJ0bgmW8WJTelmNeR%2bf3sOubxiFTLx%2bKaM%3d&risl=&pid=ImgRaw&r=0" alt="" />
       <p className='text-white w-[35%] '>Guns N' Roses es una banda estadounidense de hard rock formada en Hollywood, Los Ángeles, en la zona de Sunset Strip, en 1985. El grupo musical fue fundado por el vocalista y pianista Axl Rose y el guitarrista Izzy Stradlin.</p> 
    </div>
  )
}

export default Hero