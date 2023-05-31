import React, { useState } from "react";
import Styles from "./SubHeader.module.css";
import Image from "next/image";
import { SubHeaderItem } from "./Reusable/SubHeaderItem";
import { SubHeaderMenuItem } from "./SubHeaderMenuItem";
import {expert, plexaar, chelsford, deltrum, dummy, microsoft, oracle, expert2, expertApp} from "./assets";

export const SubHeaderSolutions = ({ handleClose }) => {
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
                title="SalesPlex"
                desc="CRM"
                style="red"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Plexaar "
                desc="ERP"
                style="green"
                link="/healthcare-and-medical"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Calendex"
                desc="Booking System"
                style="yellow"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Ondel "
                desc="Accounting and Finance"
                style="blue"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Buzz"
                desc="Communications"
                style="purple"
                link="/under-development"
              />
            </div>
          </div>

          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Formbiz "
                desc="Forms"
                style="red"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Stockpro"
                desc="Inventory"
                style="green"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="iReach"
                desc="HR"
                style="yellow"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Forwarde "
                desc="Onboarding"
                style="blue"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Ondel"
                desc="Project Management "
                style="purple"
                link="/under-development"
              />
            </div>
          </div>
          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Expert Pay"
                desc="POS"
                style="red"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Eblurb"
                desc="LMS"
                style="green"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Onlog"
                desc="Scheduling"
                style="yellow"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Foggle"
                desc="Insights/Analytics"
                style="blue"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Docloud"
                desc="Document Management "
                style="purple"
                link="/under-development"
              />
            </div>
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
        <p>Our partners</p>
        <div className={Styles.subHeaderPortfolio}>
          <Image
              src={microsoft}
              alt="Microsoft"
              style={{ width: "6.5vw", height: "1.5vw" }}
              className={Styles.imgHover}
          />
          <Image
              src={oracle}
              alt="Oracle"
              style={{ width: "7.5vw", height: "1.5vw" }}
              className={Styles.imgHover}
          />

          <Image
              src={expert2}
              alt="Expert"
              style={{ width: "6vw", height: "2vw" }}
              className={Styles.imgHover}
          />
          <Image
              src={plexaar}
              alt="Plexaar"
              style={{ width: "5.5vw", height: "2vw" }}
              className={Styles.imgHover}
          />
          <Image
              src={expertApp}
              alt="Expert"
              style={{ width: "7vw", height: "2vw" }}
              className={Styles.imgHover}
          />
        </div>
      </div>
    </div>
  );
};
