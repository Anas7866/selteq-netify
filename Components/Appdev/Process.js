import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import styles from "../../styles/Process.module.css"

function Process() {
  //  hooks
  const [tabone, setTabone] = useState(1)

  return (
    <div className="col-sm-12 p-0 margin_set_for_new pt-4">
      <div className="col-md-12 p-0 display_h">
      
      
        {tabone == 1 ? (
          // Tab one
          <div className="col-md-12 pt-0 px-0">
            <div className={styles.background_process1}>
            {/* button section  */}
            <div className="container pt-3">
              <div className="display_fleex ">
                <div className="px-4"  >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(1)}
                  >
                   <span className="btn_active_text"> FUTURISTIC 
                   </span> <br/>APPLICATIONS
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    UI/UX  <br/>   DESIGN
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    
                    BEACON  <br/> TECHNOLOGY
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    FULL-CYCLE <br/> APP DEVLOPMENT
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-7 mt-5">
                  <h5 className={styles.heading_process}>
                  Integrated with New-Age Technology
                  </h5>
                  <p className={styles.subheading_process}>
                  Building world-class mobile applications & supplying remarkable Front-End services to businesses of all sizes. Our expertise stretches across a broad range of technologies. We use:
                  </p>
                  <div className="col-md-12">
                  <ul>
                    <li className={styles.subheading_process_lis}> Google Material design</li>
                    <li className={styles.subheading_process_lis}>Firebase Cloud Messaging</li>
                    <li className={styles.subheading_process_lis}> MVVM architecture</li>
                    <li className={styles.subheading_process_lis}>Enterprise Mobility Management (EMM) solutions</li>
                    <li className={styles.subheading_process_lis}> machine learning frameworks </li>
                    <li className={styles.subheading_process_lis}> Custom-tailored Android SDKs </li>
                  </ul>
                  </div>
                  <div className="col-md-12 px-0 mt-5">
                  <h5 className={styles.heading_process}>
                  <Link className="text_dec_link" href="/contact-us"> Book Consultation&nbsp;&nbsp;&nbsp;
                    <button className={styles.button_right}>
                      {" "}
                      <span className={styles.icon_size}>
                        {" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                      </span>
                    </button>{" "}
                    </Link>
                  </h5>
                  </div>
                </div>
                <div className="col-md-5">
                  {/* <img src="../images/vxcc1.png" className="img-fluid img_set_pos" /> */}
                </div>
              </div>
            </div>
            </div>
          </div>
        ) : tabone == 2 ? (
          <div className={styles.background_process2}>
          {/* // Tab 2 */}
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-3">
            <div className="display_fleex ">
                <div className="px-4"  >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    FUTURISTIC 
                    <br/>APPLICATIONS
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(2)}
                  >
                    <span className="btn_active_text"> UI/UX </span>  <br/>   DESIGN
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    
                    BEACON  <br/> TECHNOLOGY
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    FULL-CYCLE <br/> APP DEVLOPMENT
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-7 mt-5">
                  <h5 className={styles.heading_process}>
                  Smart & Stylish Apps
                  </h5>
                  <p className={styles.subheading_process}>
                  Designing the overall layout and interface of an app, including how users interact with it, in order to make it as user-friendly as possible. This includes:
                  </p>
                  <div className="col-md-12 pt-3">
                  <ul>
                    <li className={styles.subheading_process_lis}>Conducting user research</li>
                    <li className={styles.subheading_process_lis}>Creating wireframes and mockups</li>
                    <li className={styles.subheading_process_lis}>Testing the app’s usability</li>
                   
                  </ul>
                  
                  </div>
                  <p className={styles.subheading_process11}>
                  Designing the visual elements of an app, including its layout, colour scheme, and typography. This involves creating high-fidelity mockups and prototypes of the app’s interface and ensuring that it is visually appealing and easy to use.
                  </p>
                  <div className="col-md-12 px-0 mt-5">
                  <h5 className={styles.heading_process}>
                    Book Consultation&nbsp;&nbsp;&nbsp;
                    <button className={styles.button_right}>
                      {" "}
                      <span className={styles.icon_size}>
                        {" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                      </span>
                    </button>{" "}
                  </h5>
                  </div>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
          </div>
          </div>
        ) : tabone == 3 ? (
          <div className={styles.background_process4}>
          {/* // Tab 3 */}
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-3">
            <div className="display_fleex ">
                <div className="px-4"  >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                   FUTURISTIC 
                    <br/>APPLICATIONS
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    UI/UX  <br/>   DESIGN
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(3)}
                  >
                    
                    <span className="btn_active_text">  BEACON </span>  <br/> TECHNOLOGY
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    FULL-CYCLE <br/> APP DEVLOPMENT
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-7 mt-5">
                <h5 className={styles.heading_process}>
                Immersive Experiences
                  </h5>
                  <p className={styles.subheading_process}>
                  Our eye-catching & clever apps will leave your customers awestruck. 
                  </p>
                  <div className="col-md-12 pt-3">
                  <ul>
                    <li className={styles.subheading_process_lis}><b>One App, Multiple Platforms:</b> Beautifully designed native apps for Android & iOS.</li>
                    <li className={styles.subheading_process_lis}><b>Quick Turnaround Time:</b> On-time delivery of a business-friendly app within your budget.</li>
                   
                  </ul>
                  
                  </div>
                  <p className={styles.subheading_process11}>
                  We tailor your app development to encompass the exact needs of your project using Python, Java, Flutter, React Native, Swift, Kotlin, R Programming, C++, HTML5, PHP, PhoneGap, Appcelerator, RhoMobil and more.
                  </p>
                  <div className="col-md-12 px-0 mt-5">
                  <h5 className={styles.heading_process}>
                    Book Consultation&nbsp;&nbsp;&nbsp;
                    <button className={styles.button_right}>
                      {" "}
                      <span className={styles.icon_size}>
                        {" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                      </span>
                    </button>{" "}
                  </h5>
                  </div>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
          </div>
          </div>
        ) : tabone == 4 ? (
          <div className={styles.background_process3}>
          {/* // Tab 4 */}
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-3">
            <div className="display_fleex ">
                <div className="px-4"  >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                   FUTURISTIC 
                    <br/>APPLICATIONS
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    UI/UX  <br/>   DESIGN
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    
                    BEACON  <br/> TECHNOLOGY
                  </button>
                </div>
                <div className="px-4" >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    <span className="btn_active_text">   FULL-CYCLE</span>  <br/>  APP DEVLOPMENT
                  </button>
                </div>
              </div>
            </div>

            {/* body of the content    */}
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-7 mt-5">
                <h5 className={styles.heading_process}>
                Powered by Complex Technologies
                  </h5>
                  
                  <p className={styles.subheading_process}>
                  Our apps are fast, reliable, beautiful and user-friendly. Whether you need to create a single MVP (Minimum Viable Product) to test with your users or a series of mobile products, we have the expertise, experience and resources to help you along the way.
                  </p>
                  <div className="col-md-12">
                  <ul>
                    <li className={styles.subheading_process_lis}>Native: Android App, IOS App</li>
                    <li className={styles.subheading_process_lis}>Cross-Platform: React Native App, Flutter, Titanium, Xamrain App</li>
                    <li className={styles.subheading_process_lis}>Hybrid App: Native script, Ionic App, Quasar, React Native</li>
                    <li className={styles.subheading_process_lis}>AR/VR, Wearables & TV Apps</li>
                   
                  </ul>
                  </div>
                 
                 
                  <div className="col-md-12 px-0 mt-5">
                  <h5 className={styles.heading_process}>
                    Book Consultation&nbsp;&nbsp;&nbsp;
                    <button className={styles.button_right}>
                      {" "}
                      <span className={styles.icon_size}>
                        {" "}
                        <i class="fas fa-arrow-right"></i>{" "}
                      </span>
                    </button>{" "}
                  </h5>
                  </div>
                </div>
                <div className="col-md-5"></div>
              </div>
            </div>
          </div>
          </div>
        ): null}
     
    
      </div>
     {/* mobile  */}
     <div className="col-md-12 p-0 display_pc">
        <div className="col-md-12">
      <div className="row pt-2">
                <div className="col-md-6 col-5 cust_padding m-auto  text-left">
                    <img className="img_width_sel"  src="https://1864597015.rsc.cdn77.org/selteqreact/mobimg/sel.png" />
                </div>
                <div className="col-md-6 col-7">
                    <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/pperson.png" className="img-fluid " />
                </div>
            </div>
            </div>
      <div className={styles.background_process1}>
         <div className="col-md-12 text-center">
          <h6 className="text_color_heading_white">EMPOWERING YOUR BRAND</h6>
         </div>
        <div className="col-md-12 px-4">
          <p className="mb-0 text_promising">FinTech Apps</p>
          <p className="mb-0 sub_text_promising pt-2">Our expertise includes robo-advisory, mobile banking & payments, wealth management, PFM, portfolio tracking apps.</p>
        </div>
        <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">Medical Health</p>
          <p className="mb-0 sub_text_promising pt-2">Simplifying the healthcare ecosystem by empowering all users through personalization & real-time engagement. </p>
        </div>
        <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">Mobile IoT Apps</p>
          <p className="mb-0 sub_text_promising pt-2">Create smart systems for homes or offices using customized software. Developing controls for any devices & wearable.</p>
        </div>
        <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">eLearning</p>
          <p className="mb-0 sub_text_promising pt-2">Facilitating the communication between teachers & students with a clear interface & seamless interaction. </p>
        </div>
        <div className="col-md-12 px-4 pt-3 pb-4">
          <p className="mb-0 text_promising">ECommerce</p>
          <p className="mb-0 sub_text_promising pt-2">Building scalable eCommerce apps using modern technologies. Time to leave the development of your digital shops to us.</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Process
