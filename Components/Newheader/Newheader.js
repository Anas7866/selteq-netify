import Head from "next/head";
import styles from "../../styles/index.module.css";
import { useState } from "react";
import Link from "next/link";
import Collapse from "react-bootstrap/Collapse";
import { useRouter } from "next/router";


export default function Newheader() {
  const [newnav, setNewnav] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const router = useRouter();
  const software = () => {
      router.push("/software-development")
  }
  const web = () => {
    router.push("/web-development")
  }
  const app = () => {
    router.push("/app-development")
  }
  const It = () => {
    router.push("/it-services")
  }
  const expert = () => {
    router.push("/case-study-expert")
  }
  const plexarr = () => {
    router.push("/case-study-plexarr")
  }
  const livechat = () => {
    router.push("/live-chat-system")
  }
  const banking = () => {
    router.push("/banking-and-finance")
  }
  const healthcare = () => {
    router.push("/healthcare-and-medical")
  }
  const education = () => {
    router.push("/education")
  }
  const ecomm = () => {
    router.push("/e-commerce")
  }
  const erp = () => {
    router.push("/erp")
  }
  const aboutus = () => {
    router.push("/about-us")
  }
  const blog = () => {
    router.push("/blog")
  }
  const contactus = () => {
    router.push("/contact-us")
  }

  const test = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(!open2);
  };

  const test1 = () => {
    setOpen(false);
    setOpen1(!open1);
    setOpen2(false);
  };

  const test2 = () => {
    setOpen(!open);
    setOpen1(false);
    setOpen2(false);
  };

  return (
    <>
      <Head>
       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        {/* fontasome V5 cdn  */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main_head}>
        
        <div className="col-md-12  background_header_new px-0">
          <div className="container  ">
            <div className="row display_h">
              <div className="col-md-4 m-auto">
                <Link href="/">
                  {" "}
                  <img
                    className="img-fluid img_width_logo"
                    src="https://1864597015.rsc.cdn77.org/selteqreact/images/logo.png"
                  />{" "}
                </Link>
              </div>
              <div className="col-md-8 m-auto ">
                <div className="col-md-12 text-right flex_style_new ">
                  <div class="dropdown">
                    <div class="dropbtn ">
                      Services{" "}
                     
                    </div>
                    <div class="dropdown-content">
                      
                        {" "}
                        <Link className="text_dec_link" href="/software-development">
                        <div  class="abc" >
                          Software Development
                        </div>
                        </Link>
                      
                        <Link className="text_dec_link" href="/web-development">
                        {" "}
                        <div   class="abc" >
                          Web Development
                        </div>{" "}
                        </Link>
                     
                        <Link className="text_dec_link" href="/app-development">
                        {" "}
                        <div   class="abc" >
                          App Development
                        </div>{" "}
                        </Link>
                      
                        <Link className="text_dec_link" href="/it-services">
                        {" "}
                        <div   class="abc" >
                          IT Services
                        </div>{" "}
                        </Link>
                    
                    </div>
                  </div>
                  <div class="dropdown pl-4">
                    <div class="dropbtn ">
                      Case Studies{" "}
                     
                    </div>
                  

                    <div class="dropdown-content">
                    <Link className="text_dec_link" href="/case-study-expert">
                        {" "}
                        <div   class="abc" >
                          Expert
                        </div>{" "}
                        </Link>
                  
                        <Link className="text_dec_link" href="/case-study-plexarr">
                        {" "}
                        <div   class="abc" >
                          Plexaar
                        </div>{" "}
                        </Link>
                     
                        <Link className="text_dec_link" href="/live-chat-system">
                        {" "}
                        <div   class="abc" >
                          Live Chat System
                        </div>{" "}
                        </Link>
                      
                    </div>
                  </div>
                  <div class="dropdown pl-4">
                    <div class="dropbtn ">
                      Solutions{" "}
                      {/* <span className="icon_logo_down">
                        {" "}
                        <i class="fas fa-chevron-down"></i>
                      </span> */}
                    </div>
                   {/* /// */}
                   <div class="dropdown-content">
                   <Link className="text_dec_link" href="/banking-and-finance">
                        {" "}
                        <div   class="abc" >
                          FinTech
                        </div>{" "}
                        </Link>
                     
                        <Link className="text_dec_link" href="/healthcare-and-medical">
                        {" "}
                        <div   class="abc" >
                          MedTech & mHealth
                        </div>{" "}
                        </Link>
                      
                        <Link className="text_dec_link" href="/education">
                        <div   class="abc" >
                          EdTech
                        </div>
                        </Link>
                     
                        <Link className="text_dec_link" href="/e-commerce">
                        <div   class="abc" >
                          E-Commerce
                        </div>
                        </Link>
                     
                        <Link className="text_dec_link" href="/erp">
                        <div   class="abc" >
                          ERP
                        </div>
                        </Link>
                    </div>
                  </div>
                 
                  <div class="dropbtn  pl-4 ">
                  <Link className="text_dec_link" href="/about-us">
                    <span  >
                      About us
                      </span>
                      </Link>
                  </div>
                  <div class="dropbtn  pl-4 ">
                  <Link className="text_dec_link" href="/blog">
                   <span  >
                      blog
                      </span>
                      </Link>
                  </div>
                  <div class="dropbtn  pl-4 ">
                  <Link className="text_dec_link" href="/contact-us">
                    <span  >
                      Contact us</span>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile navigation -------------------------------------------------------------------------------------------------  */}
          {newnav ? (
            //  {/* content mobile  */}
            <div className="col-md-12 background_color_whitee position_content">
              <div className=" col-md-12 p-0 display_pc position_cc py-2">
                <div className="row ">
                  <div className="col-md-4 col-4">
                    <Link href="/" >
                    <img className="img-fluid " src="https://1864597015.rsc.cdn77.org/selteqreact/images/logom.png" />
                    </Link>
                  </div>
                  <div className="col-md-8 col-8 text-right  ">
                    <button
                      className="btn btn-dark btn_style_mobile"
                      onClick={() => setNewnav(!newnav)}
                    >
                      <i  id="color_button" class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* one  */}
              <div
                className="btn btn-danger w-100 text-left pt-2 mt-2"
                onClick={() => test2()}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <div className="row">
                    <div className="col-md-6 col-6" >  <h6> Services</h6></div>
                    <div className="col-md-6 col-6 text-right" >  <h6> <i class="fas fa-chevron-down"></i></h6></div>
                    </div>
              
              </div>
              <div>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                   
                  <Link className="text_dec_link" href="/software-development">
                      {" "}
                      <button className="btn btn-dark mt-1 w-100 text-left">
                        {" "}
                        Software Development{" "}
                      </button>{" "}
                      </Link>
                   
                      <Link className="text_dec_link" href="/web-development">
                      {" "}
                      <button  className="btn btn-dark mt-1 w-100 text-left">
                        {" "}
                        Web Development{" "}
                      </button>{" "}
                      </Link>
                   
                      <Link className="text_dec_link" href="/app-development">
                      {" "}
                      <button  className="btn btn-dark mt-1 w-100 text-left">
                        {" "}
                        App Development{" "}
                      </button>{" "}
                      </Link>
                   
                      <Link className="text_dec_link" href="/it-services">
                      {" "}
                      <button  className="btn btn-dark mt-1 w-100 text-left">
                        {" "}
                        IT Development{" "}
                      </button>{" "}
                      </Link>
                   
                  </div>
                </Collapse>
              </div>

              {/* Two  */}
              <div
                className="btn btn-danger w-100 text-left pt-2 mt-2"
                onClick={() => test1()}
                aria-controls="example-collapse-text1"
                aria-expanded={open1}
              >
                
                <div className="row">
                    <div className="col-md-6 col-6" > <h6> Case Studies</h6></div>
                    <div className="col-md-6 col-6 text-right" >  <h6> <i class="fas fa-chevron-down"></i></h6></div>
                    </div>
              </div>
              <Collapse in={open1}>
                <div id="example-collapse-text1">
                
                <Link className="text_dec_link" href="/case-study-expert">
                    {" "}
                    <button  className="btn btn-dark mt-1 w-100 text-left">
                      {" "}
                      Expert{" "}
                    </button>{" "}
                    </Link>
                
                    <Link className="text_dec_link" href="/case-study-plexarr">
                    {" "}
                    <button  className="btn btn-dark mt-1 w-100 text-left">
                      {" "}
                      Plexaar{" "}
                    </button>{" "}
                 </Link>
                  
                 <Link className="text_dec_link" href="/live-chat-system">
                    {" "}
                    <button  className="btn btn-dark mt-1 w-100 text-left">
                      {" "}
                      Live Chat System{" "}
                    </button>{" "}
                    </Link>
                  
                </div>
              </Collapse>

              {/* Three  */}
              <div
                className="btn btn-danger w-100 text-left pt-2 mt-2"
                onClick={() => test()}
                aria-controls="example-collapse-text1"
                aria-expanded={open2}
              >
              
                <div className="row">
                    <div className="col-md-6 col-6" >   <h6> Solutions</h6></div>
                    <div className="col-md-6 col-6 text-right" >  <h6> <i class="fas fa-chevron-down"></i></h6></div>
                    </div>
              </div>
              <Collapse in={open2}>
                <div id="example-collapse-text1">
                <Link className="text_dec_link" href="/banking-and-finance">
                    <button  className="btn btn-dark mt-1 w-100 text-left">
                      {" "}
                      FinTech{" "}
                    </button>
                    </Link>
                 
                    <Link className="text_dec_link" href="/healthcare-and-medical">
                    <button  className="btn btn-dark mt-1 w-100 text-left">
                      {" "}
                      MedTech & mHealth{" "}
                    </button>
                    </Link>
                 
                    <Link className="text_dec_link" href="/education">
                    <button  className="btn btn-dark mt-1 w-100 text-left">
                      {" "}
                      EdTech{" "}
                    </button>
                    </Link>
                  
                    <Link className="text_dec_link" href="/e-commerce">
                    <button  className="btn btn-dark mt-1 w-100 text-left">
                      {" "}
                      E-commerce{" "}
                    </button>
                    </Link>
                  
                    <Link className="text_dec_link" href="/erp">
                    <button  className="btn btn-dark mt-1 w-100 text-left">
                      {" "}
                      Erp{" "}
                    </button>
                    </Link>
                </div>
              </Collapse>

              <Link className="text_dec_link" href="/about-us">
                <div  className="btn btn-danger w-100 text-left pt-2 mt-2">
                  <h6> About Us</h6>
                </div>
                </Link>
             
                <Link className="text_dec_link" href="/blog">
                <div  className="btn btn-danger w-100 text-left pt-2 mt-2">
                  <h6> Blog</h6>
                </div>
                </Link>
             
                <Link className="text_dec_link" href="/contact-us">
                <div  className="btn btn-danger w-100 text-left pt-2 mt-2">
                  <h6> Contact Us</h6>
                </div>
                </Link>
            </div>
          ) : (
            // {/* mobile  */}
            <div className=" col-md-12 display_pc position_cc py-2">
              <div className="row ">
                <div className="col-md-4 col-4">
                  <Link href="/">
                  <img className="img-fluid " src="https://1864597015.rsc.cdn77.org/selteqreact/images/logom.png" />
                  </Link>
                </div>
                <div className="col-md-8 col-8 text-right  ">
                  <button
                    className="btn btn-dark btn_style_mobile"
                    onClick={() => setNewnav(!newnav)}
                  >
                    <i id="color_button" class="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
