import { useState } from "react";
import styles from "../../styles/digital.module.css";
import Collapseproduct from "./Collapseproduct";
import sit from "../../public/images/sit.png"
import Image from "next/image";
import { useRouter } from "next/router";
function Productup() {
    // const [tabone, setTabone] = useState(true)
    // const [tabtwo, setTabtwo] = useState(true)
    // const [tabthree, setTabthree] = useState(true)
    // const [tabfour, setTabfour] = useState(true)
    // const [tabfive, setTabfive] = useState(true)
    // const [tabsix, setTabsix] = useState(true)
    const router = useRouter();
    const contact = () => {
        router.push("/contact-us")
    }

  return (
    <div className="col-md-12 p-0">
        <div className="display_h">
        <div className="col-md-12 text-center py-5 ">
            <h3><b>PROMISING DIGITAL GROWTH</b></h3>
            <h6>WHY CHOOSE SELTEQ FOR SOFTWARE NEEDS?</h6>
        </div>
        <div className={styles.background_main_productup}>
        <div className="container">
            <div className="row" > 
            <div className="col-md-6 ">
                <div className="col-md-12 pt-4 px-0 pb-5 pt-5">
                    <h3 className={styles.software_head}> <b>Advancing through Digital Mastery</b></h3>
                    <div className="col-md-12 p-0 mt-5">
                        <Collapseproduct />
                    </div>
                </div>
               
            </div>
            <div className="col-md-6 text-center">
                <Image src={sit} className="img-fluid"  />
            </div>
            </div>
        </div>
        </div>
        </div>
         {/* mobile  */}
         <div className='col-md-12 pt-5 pb-5 display_pc background_img_for_mob'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3><b>Advancing through Digital Mastery</b></h3>
                    <div className='row mt-4 pt-2' >
                        <div className='col-md-1 col-1 '>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>Create your own Winning Team</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Our global team of elite developers and designers can build your desktop, iOS and Android apps, LMS, ERP, Fintech, & CRM apps.</p>
                        
                        </div>
                    </div>
                    <div className='row mt-4' >
                        <div className='col-md-1 col-1 '>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>Build & Lead the Team</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Be it starting from scratch, creating a prototype, or developing bespoke software, we can do it all using the latest methodologies.</p>
                        
                        </div>
                    </div>
                    {/* <div className='row mt-4' >
                        <div className='col-md-1 col-1 '>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>IoT Development</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Helping you connect your devices and systems to the internet, allowing you to collect and analyse data in real-time</p>
                        
                        </div>
                    </div>
                    <div className='row mt-4' >
                        <div className='col-md-1 col-1'>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>Maintenance and  Support</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Our software development services don’t end after deployment. We also provide maintenance and support to ensure that your software stays up-to-date and runs smoothly.</p>
                        
                        </div>
                    </div>
                    <div className='row mt-4' >
                        <div className='col-md-1 col-1'>
                        <i style={{color:"#DDDDDD", fontSize:"17px"}} class="far fa-circle"></i>
                        </div>
                        <div className='col-md-11 col-10 pt-md-1 pl-md-1'> 
                         <h6 className='cutom_font_prod_runn1'>Chatbot Development</h6>
                         <p className='mb-0 pb-0 custom_paraa_font'>Automating customer service and support by developing a chatbot to answer common questions and resolve issues.</p>
                        
                        </div>
                    </div> */}
                    <div className='col-md-12 padding_sol_1'>
                        <button onClick={()=>contact()} className='btn btn-danger w-100 button_style_red'>
                        Book Consultation
                        </button>
                    </div>
                </div>
                <div className='col-md-6 display_h'>
                    <div className='col-md-12 text-center pl-5'>
                        <img className='img-fluid with_control' src='../images/girl1.png' />
                    </div>
                </div>
            </div>
            
            </div>
    </div>
  )
}

export default Productup