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
                {/* button 1 */}
                <div className="px-4"  >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(1)}
                  >
                   <span className="btn_active_text"> POWERFUL 
                   </span> <br/> & SMOOTH SOLUTIONS
                  </button>
                </div>
                {/* button 2 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    PROBLEMS <br/>   BUGS & FUNCTIONALITY
                  </button>
                </div>
                {/* button 3 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    
                    CUSTOM <br/> TAILORED WEBSITES
                  </button>
                </div>
                {/* button 4 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    FULL STACK WEB  <br/> DEVELOPMENT
                  </button>
                </div>
             </div>
            </div>

            {/* body of the content    */}
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-7 mt-5">
                  <h5 className={styles.heading_process}>
                  Tech-Driven Website Solutions
                  </h5>
                  <p className={styles.subheading_process}>
                  We create a comprehensive, fully robust, user-friendly website that grows your business exponentially. With our focus on scalability, reliability, and security, we leverage the latest web technologies and trends, such as:
                  </p>
                  <div className="col-md-12">
                  <ul>
                    <li className={styles.subheading_process_lis}> Progressive web apps (PWA)</li>
                    <li className={styles.subheading_process_lis}>Single-page applications (SPA)</li>
                    <li className={styles.subheading_process_lis}> Headless CMS</li>
                    <li className={styles.subheading_process_lis}> Agile software development methodology</li>
                   
                  </ul>
                  </div>
                  <div className="col-md-12 px-0 mt-5">
                  <h5 className={styles.heading_process}>
                  <Link className="text_dec_link" href="/contact-us">   Book Consultation&nbsp;&nbsp;&nbsp;
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
                {/* button 1 */}
                <div className="px-4"  >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                   POWERFUL 
                   <br/> & SMOOTH SOLUTIONS
                  </button>
                </div>
                {/* button 2 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(2)}
                  >
                   <span className="btn_active_text">  PROBLEMS </span> <br/>   BUGS & FUNCTIONALITY
                  </button>
                </div>
                {/* button 3 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    
                    CUSTOM <br/> TAILORED WEBSITES
                  </button>
                </div>
                {/* button 4 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    FULL STACK WEB  <br/> DEVELOPMENT
                  </button>
                </div>
             </div>
            </div>

            {/* body of the content    */}
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-7 mt-5">
                  <h5 className={styles.heading_process}>
                  Securing & Scaling
                  </h5>
                  <p className={styles.subheading_process}>
                  Bugs, functionality, performance, framework etc., are the main challenges in creating secure and scalable websites. Implementing regular vulnerability scans can further enhance the security and scalability of websites. To address these challenges, companies must adopt robust testing and deployment methodologies, such as:
                  </p>
                  <div className="col-md-12">
                  <ul>
                    <li className={styles.subheading_process_lis}> Agile</li>
                    <li className={styles.subheading_process_lis}> TDD (Test-Driven Development)</li>
                    <li className={styles.subheading_process_lis}> CI/CD (Continuous Integration/Continuous Deployment)</li>
                   
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
        ) : tabone == 3 ? (
          <div className={styles.background_process4}>
          {/* // Tab 3 */}
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-3">
            <div className="display_fleex ">
                {/* button 1 */}
                <div className="px-4"  >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                    POWERFUL 
                    <br/> & SMOOTH SOLUTIONS
                  </button>
                </div>
                {/* button 2 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    PROBLEMS <br/>   BUGS & FUNCTIONALITY
                  </button>
                </div>
                {/* button 3 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(3)}
                  >
                    
                    <span className="btn_active_text">  CUSTOM </span> <br/> TAILORED WEBSITES
                  </button>
                </div>
                {/* button 4 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    FULL STACK WEB  <br/> DEVELOPMENT
                  </button>
                </div>
             </div>
            </div>

            {/* body of the content    */}
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-7 mt-5">
                <h5 className={styles.heading_process}>
                Best-in-Class Development
                  </h5>
                  <p className={styles.subheading_process}>
                  Our development team will focus on functionality, speed, responsiveness, ease of use and create harmony within the systems. Our stellar team of developers focuses on:
                  </p>
                  <div className="col-md-12">
                  <ul>
                    <li className={styles.subheading_process_lis}> Adheres to efficient project management</li>
                    <li className={styles.subheading_process_lis}> Incorporates latest web development technologies (HTML5, CSS3, JavaScript)</li>
                    <li className={styles.subheading_process_lis}> Deployment through cloud hosting services</li>
                    <li className={styles.subheading_process_lis}> Leverages virtualized computing environments for scalability and reliability</li>
                   
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
        ) : tabone == 4 ? (
          <div className={styles.background_process3}>
          {/* // Tab 4 */}
          <div className="col-md-12 p-0">
            {/* button section  */}
            <div className="container pt-3">
            <div className="display_fleex ">
                {/* button 1 */}
                <div className="px-4"  >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(1)}
                  >
                   POWERFUL 
                    <br/> & SMOOTH SOLUTIONS
                  </button>
                </div>
                {/* button 2 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(2)}
                  >
                    PROBLEMS <br/>   BUGS & FUNCTIONALITY
                  </button>
                </div>
                {/* button 3 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_one}
                    onClick={() => setTabone(3)}
                  >
                    
                    CUSTOM <br/> TAILORED WEBSITES
                  </button>
                </div>
                {/* button 4 */}
                <div className="px-4" >
                  <button
                    className={styles.button_process_active}
                    onClick={() => setTabone(4)}
                  >
                    
                    
                    <span className="btn_active_text"> FULL STACK WEB </span>  <br/> DEVELOPMENT
                  </button>
                </div>
             </div>
            </div>

            {/* body of the content    */}
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-7 mt-5">
                <h5 className={styles.heading_process}>
                Technologies & Results
                  </h5>
                  
                  <p className={styles.subheading_process}>
                  Our Full stack developers are experienced coders in C#, C++, Python, ASP.net, PHP, .Net Core, SQL, Angular.JS, React.JS and Java Script. By keeping in view higher ROI and search results, we exclusively focus on: 
                  </p>
                  <div className="col-md-12">
                  <ul>
                    <li className={styles.subheading_process_lis}> Focus on user interface & experience for higher ROI & search results</li>
                    <li className={styles.subheading_process_lis}> Web development services based on tailored plans for clients</li>
                    <li className={styles.subheading_process_lis}> Skilled developers with rich experience in web application development</li>
                    <li className={styles.subheading_process_lis}> Leading position in global market for high-end solutions</li>
                   
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
          <h6 className="text_color_heading_white">Technologies</h6>
         </div>
        <div className="col-md-12 px-4">
          <p className="mb-0 text_promising">React JS</p>
          <p className="mb-0 sub_text_promising pt-2">Our developers are skilled at building web application that merges SEO goals with SCAND technology.</p>
        </div>
        <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">Angular JS</p>
          <p className="mb-0 sub_text_promising pt-2">When it comes to creating cross-platform compatible web solutions, our AngularJS developers excel.</p>
        </div>
        <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">ASP.NET</p>
          <p className="mb-0 sub_text_promising pt-2">We specialize in developing web applications using ASP.NET and other open-source technologies.</p>
        </div>
        <div className="col-md-12 px-4 pt-3">
          <p className="mb-0 text_promising">Ruby on Rails</p>
          <p className="mb-0 sub_text_promising pt-2">Our passion for Ruby on Rails has fueled our web applications created with the most recent technologies.</p>
        </div>
        <div className="col-md-12 px-4 pt-3 pb-4">
          <p className="mb-0 text_promising">PHP</p>
          <p className="mb-0 sub_text_promising pt-2">We work with clients to build high quality websites. We’re a team of qualified PHP web developers.</p>
        </div>
        <div className="col-md-12 px-4 pt-3 pb-4">
          <p className="mb-0 text_promising">Node JS</p>
          <p className="mb-0 sub_text_promising pt-2">If you need Node.js web application development, our team can get your project rolling in no time.</p>
        </div>
        <div className="col-md-12 px-4 pt-3 pb-4">
          <p className="mb-0 text_promising">Python</p>
          <p className="mb-0 sub_text_promising pt-2">An interpreted & general-purpose language. We deliver an attractive web app with security & stability.</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Process
