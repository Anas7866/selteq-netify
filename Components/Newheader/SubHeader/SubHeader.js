import React, { useState } from "react";
import Styles from "./SubHeader.module.css";
import Image from "next/image";
import { SubHeaderItem } from "./Reusable/SubHeaderItem";
import { SubHeaderMenuItem } from "./SubHeaderMenuItem";
import { expert, plexaar, chelsford, deltrum, dummy } from "./assets";

export const SubHeader = ({ handleClose }) => {
  const [showSoftwares, setShowSoftwares] = useState(false);
  return (
    <div style={{ background: "white" }}>
      <div className={Styles.subHeaderContainer}>
        <div className={Styles.subHeaderChildContainer}>
          <div
            style={
              showSoftwares
                ? { display: "flex", position: "relative", width: "46.8vw" }
                : null
            }
          >
            <div
              style={{ marginLeft: "2vw" }}
              className={Styles.subHeadingSubChild}
            >
              <div onClick={() => handleClose()}>
                <SubHeaderItem
                  icon="devops"
                  title="Consulting Services "
                  desc="Transformation Consultancy & Start-up Consultancy"
                  style="green"
                  link={"/consulting"}
                />
              </div>
              <div
                className={Styles.subMenuHoverContainer}
                onMouseEnter={() => {
                  setShowSoftwares(true);
                }}
                onMouseLeave={() => {
                  setShowSoftwares(!showSoftwares);
                }}
                onClick={() => handleClose()}
              >
                <SubHeaderItem
                  icon="software"
                  title="Software Development"
                  desc="Building Highly Intuitive, Next Generation Software Solutions"
                  style="yellow"
                  link="/software-development"
                />
              </div>
              <div onClick={() => handleClose()}>
                <SubHeaderItem
                  icon="mobile"
                  title="Mobile Apps"
                  desc="Robust, Scalable, Secure and 100% Customised"
                  style="red"
                  link="/app-development"
                />
              </div>
              <div onClick={() => handleClose()}>
                <SubHeaderItem
                  icon="web"
                  title="Web Development"
                  desc="Solid Web Solutions within any Industry"
                  style="green"
                  link="/web-development"
                />
              </div>
              {/*<SubHeaderItem*/}
              {/*  icon="marketing"*/}
              {/*  title="Digital Marketing"*/}
              {/*  desc="Driving Marketing Success with Innovative Strategies"*/}
              {/*  style="blue"*/}
              {/*  link={"/digital-marketing"}*/}
              {/*/>*/}
            </div>
            <div
              onMouseEnter={() => {
                setShowSoftwares(true);
              }}
              onMouseLeave={() => {
                setShowSoftwares(false);
              }}
              className={showSoftwares ? Styles.subMenuHoverItem : null}
            >
              <SubHeaderMenuItem
                show={showSoftwares}
                handleClose={handleClose}
              />
            </div>
          </div>

          <div
            style={
              showSoftwares ? { marginLeft: "-6vw" } : { marginLeft: "2vw" }
            }
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="iot"
                title="Data Analytics "
                desc="Powerful Analytics Insights through AI & Data Services"
                style="red"
                link={"/iot_software_dev/Data_analysis"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Marketing"
                desc="Keeping you at Forefront of the Ever-changing Digitised World"
                style="blue"
                link={"/digital-marketing"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="meta"
                title="Devops"
                desc="Transform your Organisation with Security Best Practices "
                style="meta"
                link={"/iot_software_dev/Devops"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="IT Outsourcing"
                desc="Your Trusted Partner for Outsourcing Excellence "
                style="purple"
                link={"/it-outsourcing"}
              />
            </div>

            {/*<SubHeaderItem*/}
            {/*  icon="devops"*/}
            {/*  title="Consulting"*/}
            {/*  desc="Equip Your Startup for Success Today"*/}
            {/*  style="green"*/}
            {/*  link={"/consulting"}*/}
            {/*/>*/}
          </div>

          <div
            style={
              showSoftwares ? { marginLeft: "1.5vw" } : { marginLeft: "2vw" }
            }
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Internet of Things  "
                desc="Innovative Solutions to Automate Work & Reduce Labou"
                style="purple"
                link={"/iot_software_dev/Iot"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="iot"
                title="BPO"
                desc="Fastest way to Outsource Business Processes Globally"
                style="red"
                link={"/BPO"}
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="meta"
                title="Metaversa"
                desc="Enabling Next-Generation Interactions"
                style="meta"
                link={"/metaverse"}
              />
            </div>
          </div>
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
