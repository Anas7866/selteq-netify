import React, { useState } from "react";
import Styles from "./SubHeader.module.css";
import Image from "next/image";
import { SubHeaderItem } from "./Reusable/SubHeaderItem";
import { SubHeaderMenuItem } from "./SubHeaderMenuItem";
import { expert, plexaar, chelsford, deltrum, dummy } from "./assets";

export const SubHeaderCaseStudies = ({ handleClose }) => {
  const [showSoftwares, setShowSoftwares] = useState(false);
  return (
    <div
      style={{ background: "white" }}
      className={Styles.subHeaderMainContainer}
    >
      <div className={Styles.subHeaderContainer}>
        <div className={Styles.subHeaderChildContainer}>
          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Expert"
                desc="An on-demand service app iOS & Android case study"
                style="red"
                link="/case-study-expert"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Chelsford"
                desc="LMS"
                style="green"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="London Franchise"
                desc="Expert franchise program "
                style="yellow"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Digicon "
                desc="Construction negotiating prices system"
                style="blue"
                link={"/under-development"}
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
                title="Buzz"
                desc="communication system"
                style="red"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="iReach"
                desc="Present the onboarding system "
                style="green"
                link="/under-development"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Live Chat System"
                desc="A multi-purpose chat system for customers & businesses"
                style="yellow"
                link="/live-chat-system"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Plexaar"
                desc="A leading CRM solution to track business operations"
                style="green"
                link="/case-study-plexarr"
              />
            </div>
          </div>

          {/*<div*/}
          {/*  style={{ marginLeft: "2vw" }}*/}
          {/*  className={Styles.subHeadingSubChild}*/}
          {/*>*/}
          {/*  */}
          {/*</div>*/}

          {/* <div
            style={
              showSoftwares ? { marginLeft: "1.5vw" } : { marginLeft: "7.81vw" }
            }
            className={Styles.subHeadingSubChild}
          >
            <SubHeaderItem
              icon="meta"
              title="Metaversa"
              desc="Enabling Next-Generation Interactions"
              style="meta"
              link={"/metaverse"}
            />
            <SubHeaderItem
              icon="data"
              title="IT Outsourcing"
              desc="Your Trusted Partner for Outsourcing Excellence"
              style="purple"
              link={"/it-outsourcing"}
            />
            <SubHeaderItem
              icon="iot"
              title="BPO"
              desc="Reliable IT Support & Outsourcing"
              style="red"
              link={"/BPO"}
            />
            <SubHeaderItem
              icon="devops"
              title="Consulting"
              desc="Equip Your Startup for Success Today"
              style="green"
              link={"/consulting"}
            />
          </div> */}
        </div>
        <div
          className={Styles.subHeaderChildContainer}
          style={{ marginLeft: "30px" }}
        >
          {/*<Image src={dummy} alt="Dummy image" />*/}
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
