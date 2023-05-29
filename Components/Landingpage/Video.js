import React from 'react'

function Video() {
  return (
    <div className='col-md-12 p-0'>
        <div className='col-md-12 video-container p-0 display_h'>
        <video loop autoPlay muted className='video_main'>
       <source src='https://1864597015.rsc.cdn77.org/selteqreact/video/new1.mp4' type="video/mp4" />
        </video>
        </div>
        <div className='col-md-12 video-container1 p-0 display_pc '>
        <video loop autoPlay muted className='video_main2'>
           <source src='https://1864597015.rsc.cdn77.org/selteqreact/video/mob.mp4' type="video/mp4" />
        </video>
        </div>
    </div>
  )
}

export default Video