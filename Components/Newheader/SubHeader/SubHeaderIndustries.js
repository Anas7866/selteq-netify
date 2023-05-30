import React, { useState } from "react";
import Styles from "./SubHeader.module.css";
import Image from "next/image";
import { SubHeaderItem } from "./Reusable/SubHeaderItem";
import { SubHeaderMenuItem } from "./SubHeaderMenuItem";
import { expert, plexaar, chelsford, deltrum, dummy } from "./assets";

export const SubHeaderIndustries = ({ handleClose }) => {
  const [showSoftwares, setShowSoftwares] = useState(false);
  return (
    <div style={{ background: "white" }}>
      <div className={Styles.subHeaderContainer}>
        <div className={Styles.subHeaderChildContainer}>
          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Retail"
                desc="CRM"
                style="red"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Healthcare "
                desc="ERP"
                style="green"
                link="/healthcare-and-medical"
              />
            </div>

            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Education"
                desc="Booking System"
                style="yellow"
                link="/education"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Finance and Banking "
                desc="Accounting and Finance"
                style="blue"
                link="/banking-and-finance"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Energy and Utilities"
                desc="Communications"
                style="purple"
                link="/under-development"
              />{" "}
            </div>
          </div>

          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Government  "
                desc="Forms"
                style="red"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Logistic and Supply chain"
                desc="Inventory"
                style="green"
                link="/under-development"
              />{" "}
            </div>

            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Manufacturing"
                desc="HR"
                style="yellow"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Telecom "
                desc="Onboarding"
                style="blue"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="AgriTech"
                desc="Project Management "
                style="purple"
                link="/under-development"
              />{" "}
            </div>
          </div>
          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="InsurTech"
                desc="Insurance software tech"
                style="red"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Media and Entertainment"
                desc="custom media entertainment software"
                style="green"
                link="/under-development"
              />{" "}
            </div>

            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Hospitality"
                desc="Scheduling"
                style="yellow"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Aviation"
                desc="Insights/Analytics"
                style="blue"
                link="/under-development"
              />{" "}
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="ERP"
                desc="Automating businesses with bespoke ERP system"
                style="purple"
                link="/iot_software_dev/erp"
              />{" "}
            </div>
          </div>
          <div
            className={Styles.subHeadingSubChild}
            style={
              showSoftwares ? { marginLeft: "1.5vw" } : { marginLeft: "2vw" }
            }
          >
            {/*  onClick={()=> handleClose()}<div><SubHeaderItem
              icon="mobile"
              title="FinTech"
              desc="Core banking & non-banking solutions with digital agility"
              style="red"
              link="/banking-and-finance"
            /> </div>
            <div onClick={()=> handleClose()}><SubHeaderItem
              icon="web"
              title="MedTech & mHealth"
              desc="Patient & billing management, EMR & EHR solutions"
              style="green"
              link="/healthcare-and-medical"
            /> </div>

            <div><S onClick={()=> handleClose()}ubHeaderItem
              icon="software"
              title="EdTech"
              desc="Learning management system, student management portal"
              style="yellow"
              link="/education"
            /> */}
            {/*<div onClick={() => handleClose()}>*/}
            {/*  <SubHeaderItem*/}
            {/*    icon="marketing"*/}
            {/*    title="E-Commerce"*/}
            {/*    desc="Ecom app development, Supply & resupply system"*/}
            {/*    style="blue"*/}
            {/*    link="/e-commerce"*/}
            {/*  />{" "}*/}
            {/*</div>*/}
            {/* <div onClick={()=> handleClose()}><SubHeaderItem
              icon="meta"
              title="ERP"
              desc="Automating businesses with bespoke ERP system"
              style="meta"
              link={"/erp"}
            /> */}
          </div>
        </div>
        <div
          className={Styles.subHeaderChildContainer2}
          style={{ marginLeft: "30px" }}
        >
          {/*<Image src={dummy} alt="Dummy image" style={{width:"150px", height:"150px"}} />*/}
        </div>
      </div>
      <div className={Styles.alignSubHeaderPortfolio}>
        <div className={Styles.subHeaderPortfolio}>
          <Image
            src={expert}
            alt="Expert"
            style={{ width: "4vw", height: "2vw" }}
          />
          <Image
            src={plexaar}
            alt="Plexaar"
            style={{ width: "4vw", height: "2vw" }}
          />
          <Image
            src={deltrum}
            alt="Deltrum"
            style={{ width: "4.5vw", height: "2vw" }}
          />
          <Image
            src={chelsford}
            alt="Chelsford"
            style={{ width: "6vw", height: "2vw" }}
          />
          <Image
            src={expert}
            alt="Expert"
            style={{ width: "4vw", height: "2vw" }}
          />
          <Image
            src={plexaar}
            alt="Plexaar"
            style={{ width: "4vw", height: "2vw" }}
          />
        </div>
      </div>
    </div>
  );
};
