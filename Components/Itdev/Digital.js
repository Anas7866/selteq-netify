import { useState } from "react";
import styles from "../../styles/digital.module.css";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Digital() {
    const[openone, setOpenone] = useState(false)
    const[opentwo, setOpentwo] = useState(true)
    const[openthree, setOpenthree] = useState(true)
    const[openfour, setOpenfour] = useState(true)
    const[openfive, setOpenfive] = useState(true)
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(false);
    const [one1, setOne1] = useState(true);
    const [one2, setOne2] = useState(false);

  return (
    <div className="col-md-12 p-0" style={{backgroundColor:"white"}}>
        <div className="col-md-12 p-0 display_h">
        <div className="col-md-12 text-center py-5 ">
            <h3><b>POWER-PACKED SERVICES</b></h3>
            <h6><b>SALIENT FEATURES OF OUR DEDICATED
DEVELOPMENT SERVICES</b></h6>
        </div>
        <div className={styles.digital_background}>
        <div className="container">
            <div className="row" > 
            <div className="col-md-8  pt-5 pb-5 mb-5">
                
                <div className={styles.border_left_red} >
                {/* Tabs */}
                <div className="col-md-12">
                <div className="row">
                
                    {openone ? (
                        <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    <div className="col-md-10 col-11" onClick={()=>setOpenone(!openone)} >
                    <h5 className={styles.head} >
                    Flexible Development
                    Methodologies</h5>
                    </div>
                    </div>
                    ):(
                        <div className="row">
                    <div className="col-md-1 col-1 margin_left_icon1">
                    <i class="fas fa-circle"></i>
                    </div>
                        <div className="col-md-11 col-11 px-2" onClick={()=>setOpenone(!openone)}>
                        <h5 className={styles.head_active}>
                        Flexible Development
                        Methodologies</h5>
                        <p className="font_pa">
                        Our resources start building your system after carefully studying your business, determining business requirements, and identifying challenges faced by your business. Based on the industry and the size of your business, Selteq’s dedicated IT resources will develop tailored solutions meant to benefit your business and its operations.


                        </p>
                        </div>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 <div className="col-md-12 pt-4">
                <div className="row">
                   
                    {opentwo ? (
                        <div className="row">
                             <div className="col-md-1 col-1  margin_left_icon">
                    <i class="fas fa-circle"></i>
                    </div>
                    <div className="col-md-11 col-11  pl-2" onClick={()=>setOpentwo(!opentwo)}>
                    <h5 className={styles.head} >
                    Integration Of
Innovative Methodologies</h5>
                    </div>
                    </div>
                    ):(
                        <div className="row">
                              <div className="col-md-1 col-1 margin_left_icon1">
                    <i class="fas fa-circle"></i>
                    </div>
                        <div className="col-md-11 col-11 px-2" onClick={()=>setOpentwo(!opentwo)}>
                        <h5 className={styles.head_active}>
                        Integration Of
Innovative Methodologies</h5>
                        <p className="font_pa">The creation of business-friendly and effective software is possible only because of our latest development processes combined with the knowledge of our development maestros. Thanks to their experience and skill, they can approach every project the right way and hence provide software that improves your core business processes.</p>
                    </div>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 <div className="col-md-12 pt-4">
                <div className="row">
                   
                    {openthree ? (
                        <div className="row">
                         <div className="col-md-1 col-1 margin_left_icon">
                         <i class="fas fa-circle"></i>
                         </div>
                    <div className="col-md-11 col-11" onClick={()=>setOpenthree(!openthree)}>
                    <h5 className={styles.head} >
                    Fully-Functional
& Scalable Software</h5>
                    </div>
                    </div>
                    ):(
                        <div className="row" >
                             <div className="col-md-1 col-1 margin_left_icon1">
                    <i class="fas fa-circle"></i>
                    </div>
                        <div className="col-md-11 col-11 px-2" onClick={()=>setOpenthree(!openthree)}>
                        <h5 className={styles.head_active}>
                        Fully-Functional
& Scalable Software</h5>
                        <p className="font_pa">
                        All software solutions created by our full-stack developers can be upgraded and developed further to meet your future business needs. They are designed to be adapted to the processes and integrated with other systems..</p>
                    </div>
                    </div>
                    )}
                   
                </div>
                </div>
                 {/* Tabs */}
                 <div className="col-md-12 pt-4">
                <div className="row">
                   
                  
                </div>
                </div>
                        
            
                </div>
            </div>
            <div className="col-md-4 text-center " >
                <img src="/images/person.png" className="img-fluid ig_sec_width "  />
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Digital