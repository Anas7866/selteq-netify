import styles from "../../styles/Landing.module.css"
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function Youdream() {
    useEffect(() => {
       
        Aos.init({
          offset: 200,
          duration: 1500,
        });
      }, []);
  return (
    <div className="col-md-12 text-center py-5 px-0">
        <div className={styles.background_dream}>

         <div className="col-md-12 px-0 display_h">   
        <div className="container">
        <h3   className={styles.landing_create}><b>You Dream. We Create.</b></h3>
        <h6   className={styles.h6_solutions}>With Our Future-Proof Software Solutions</h6>
        </div>
        </div>
        <div className="col-md-12 text-center display_pc">
        <h3   className={styles.landing_create1}><b>You Dream. We Create.</b></h3>
        <h6   className={styles.h6_solutions1}>With Our Future-Proof Software Solutions</h6>
        </div>


        </div>
    </div>
  )
}

export default Youdream