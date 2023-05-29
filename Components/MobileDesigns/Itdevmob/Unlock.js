import { useRouter } from 'next/router';
import React from 'react'

function Unlock() {
  const router = useRouter();
  const contact = () => {
      router.push("/contact-us")
  }
  return (
    <div className='col-md-12  pt-5'>
        <div className='col-md-12 text-center'>
       <p className='mb-0 text_size_sol'> Dedicated IT Team</p>
        </div>
        <div className='col-md-12 px-0 pt-4'>
       <p className='mb-0 sub_text_size_sol'>A Powerful IT Squad Tailored to Your Project</p>
       <p className='mb-0 sub_sub_text_size_sol'>Our stellar team of software engineers will have your product up and running in no time at all. </p>
        </div>
        <div className='col-md-12 px-0 pt-4'>
       <p className='mb-0 sub_text_size_sol'>Improving Business Efficiency</p>
       <p className='mb-0 sub_sub_text_size_sol'>Selteq leads your project with a full-time, dedicated team from start to finish.</p>
        </div>
        <div className='col-md-12 px-0 pt-4'>
       <p className='mb-0 sub_text_size_sol'>Qualified Professionals</p>
       <p className='mb-0 sub_sub_text_size_sol'>Our professionals will manage every aspect of your IT infrastructure to provide your teams with the flexibility & agility.</p>
        </div>
        <div className='col-md-12'>
        <div className='row'>
        <div className='col-md-5 col-6 px-0 pt-4'>
       <p className='mb-0 sub_text_size_sol'>Create your Dream Team Today</p>
       <p className='mb-0 sub_sub_text_size_sol1'>Stay connected with your offshore team no matter where they are, what time it is, or what device they’re using.</p>
        </div>
        <div className='col-md-7 col-6 px-0 pt-4'>
          <img className='img-fluid' src='../mobimg/Frame.png' />
        </div>
        </div>
        </div>
        <div className='col-md-12 px-0 pt-3 pb-4'>
            <button onClick={()=>contact()}  className='btn btn-danger w-100 background_button_red'>BOOK CONSULTATION</button>
        </div>
    </div>
  )
}

export default Unlock