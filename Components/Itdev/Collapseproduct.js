import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import styles from "../../styles/digital.module.css";

function Collapseproduct() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
  return (
    <div>
         
         <div className={styles.background_productup}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
         >
         <div className={styles.show_div}>
         <h6><b>+</b> Create your own Winning Team</h6>
         <Collapse in={open}>
            <div id="example-collapse-text">
            <h6 className={styles.sub_head}>   Our global team of elite developers and designers can build your desktop, iOS, and Android apps in many languages like Native applications, Ionic framework, or react-native.

From experienced UX/UI designers & researchers all the way to .Net core developers, Java, React native experts, product managers, and c-level executives, you can focus on growing your business while we deliver your product flawlessly.
            </h6>
            <ul className={styles.sub_head}>
              <li>PHP, Javascript, and Python Specialists</li>
              <li>Angular, React, NodeJS Experts</li>
              <li>Native App Development Developers</li>
              <li>Big Data Computation Experts</li>
              <li>Progressive Web Apps Developers</li>
              <li>Cross-platform and Hybrid Deployment</li>
            </ul>
            </div>
        </Collapse>
         </div>
         </div>

         <div className={styles.background_productup}
          onClick={() => setOpen1(!open1)}
          aria-controls="example-collapse-text1"
          aria-expanded={open1}
         >
         <div className={styles.show_div}>
         <h6><b>+</b> Build & Lead the Team</h6>
         <Collapse in={open1}>
            <div id="example-collapse-text1">
            <h6 className={styles.sub_head}>Our dedicated resources are experts on our client’s needs and will focus on delivering quality. With Selteq, you always get a full-time team member who will work with you from start to finish—from the very first call to your project’s delivery.
            </h6>
            <h6 className={styles.sub_head}>Owing to our experience and expertise, our dedicated software development experts can handle any challenge for a vast array of industries. Be it starting from scratch, creating a prototype, or developing bespoke software to enhance your business process & growth. We can do it all.
            </h6>
            <h6 className={styles.sub_head}>Using the latest methodologies, their innovative approach to every project enables them to create incredible software solutions that are intelligent, scalable, fast, and user-friendly. All this is done to provide you with tailored solutions that bring about the highest levels of business efficiency.
            </h6>
            </div>
        </Collapse>
         </div>
         </div>

         {/* <div className={styles.background_productup}
          onClick={() => setOpen2(!open2)}
          aria-controls="example-collapse-text2"
          aria-expanded={open2}
         >
         <div className={styles.show_div}>
         <h6><b>+</b> IoT Development</h6>
         <Collapse in={open2}>
            <div id="example-collapse-text2">
            <h6 className={styles.sub_head}>   We can help you connect your devices and systems to the internet, allowing you to collect and analyse data in real-time.
            </h6>
            </div>
        </Collapse>
         </div>
         </div>

         <div className={styles.background_productup}
          onClick={() => setOpen3(!open3)}
          aria-controls="example-collapse-text3"
          aria-expanded={open3}
         >
         <div className={styles.show_div}>
         <h6><b>+</b>Maintenance and Support</h6>
         <Collapse in={open3}>
            <div id="example-collapse-text3">
            <h6 className={styles.sub_head}> Our software development services don’t end after deployment. We also provide maintenance and support to ensure that your software stays up-to-date and runs smoothly.
            </h6>
            </div>
        </Collapse>
         </div>
         </div>

         <div className={styles.background_productup}
          onClick={() => setOpen4(!open4)}
          aria-controls="example-collapse-text4"
          aria-expanded={open4}
         >
         <div className={styles.show_div}>
         <h6><b>+</b> Chatbot Development</h6>
         <Collapse in={open4}>
            <div id="example-collapse-text4">
            <h6 className={styles.sub_head}>   We can help you automate customer service and support by developing a chatbot to answer common questions and resolve issues.
            </h6>
            </div>
        </Collapse>
         </div>
         </div> */}
    </div>
  )
}

export default Collapseproduct