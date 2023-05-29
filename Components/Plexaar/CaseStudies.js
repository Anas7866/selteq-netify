import { useRouter } from "next/router";
import styles from "../../styles/Casestudy.module.css"

function CaseStudies() {

    const router = useRouter();
    const plexarr = () => {
        router.push("/case-study-expert")
    }

    const livechat = () => {
        router.push("/live-chat-system")
    }

   
  return (
    <div className="col-md-12 mt-5">
        <div className="col-md-12 text-center" >
           <h2 className={styles.heading_casestudy}><b> CaseStudies </b></h2>
           <div className="mt-4">
           <h6 className={styles.sub_heading_casestudy}>See examples of the bespoke software solutions,</h6>
           <h6 className={styles.sub_heading_casestudy}><strong>CRM, LMS</strong> and <strong>mobile apps</strong> we’ve created for our clients.</h6>
           </div>
            </div>
            <div className="container mt-5 pt-4 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-12 px-md-5 text-center">
                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/expertt.png" className="img-fluid"  />
                        <h3 className={styles.heading_casestudy_p}><b>EXPERT</b></h3>
                        <h6 className={styles.sub_heading_casestudy}>Expert is an on-demand service app that provides multitude of services bookable through one convenient interface.</h6>
                        <button onClick={()=>plexarr()}  className="btn btn-danger px-4 py-3 mt-3"> CASE STUDY </button>
                        </div>
                    </div>
                    <div className="col-md-6 margin_t_expert">
                        <div className="col-md-12  px-md-5 text-center">
                        <img src="https://1864597015.rsc.cdn77.org/selteqreact/images/laptop2.png" className="img-fluid"  />
                        <h3 className={styles.heading_casestudy_p}><b>LIVE CHAT SYSTEM</b></h3>
                        <h6 className={styles.sub_heading_casestudy}>A multi-purpose Chat System for customers & service providers</h6>
                        <button onClick={()=>livechat()}  className="btn btn-danger px-4 py-3 mt-3"> CASE STUDY </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CaseStudies