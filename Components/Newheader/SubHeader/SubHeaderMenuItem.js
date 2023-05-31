import React, { useEffect, useState } from "react";
import Styles from "./SubHeader.module.css";
import Link from "next/link";

export const SubHeaderMenuItem = ({ show, handleClose }) => {
  const [menuList, setMenuList] = useState([
    {
      name: "CRM",
      link: "/iot_software_dev/crm_solutions",
      id: 0,
      active: false,
    },
    {
      name: "ERP",
      link: "/iot_software_dev/erp",
      id: 5,
      active: false,
    },
    {
      name: "AI & Machine Learning",
      link: "/iot_software_dev/Ai_learning",
      id: 4,
      active: false,
    },
    {
      name: "BlockChain",
      link: "/iot_software_dev/blockchain",
      id: 3,
      active: false,
    },
    {
      name: "Internet of Things",
      link: "/iot_software_dev/Iot",
      id: 14,
      active: false,
    },
    {
      name: "HR Software",
      link: "/iot_software_dev/Hr_software",
      id: 8,
      active: false,
    },
    {
      name: "DevOps",
      link: "/iot_software_dev/Devops",
      id: 7,
      active: false,
    },
    {
      name: "Communication Software",
      link: "/iot_software_dev/Communication",
      id: 2,
      active: false,
    },
    {
      name: "Finance Software",
      link: "/iot_software_dev/Finance_software",
      id: 13,
      active: false,
    },
    {
      name: "Web Application",
      link: "/iot_software_dev/high_performance_web_app",
      id: 1,
      active: false,
    },
    {
      name: "Data Analytics",
      link: "/iot_software_dev/Data_analysis",
      id: 9,
      active: false,
    },
    {
      name: "Agile Software",
      link: "/iot_software_dev/Agile_software",
      id: 6,
      active: false,
    },
    {
      name: "Ecommerce",
      link: "/iot_software_dev/Ecommerce",
      id: 12,
      active: false,
    },
    {
      name: "EdTech",
      link: "/iot_software_dev/Edtech",
      id: 11,
      active: false,
    },
    {
      name: "MedTech",
      link: "/iot_software_dev/Medtech",
      id: 10,
      active: false,
    },
  ]);

  const handleActive = () => {
    handleClose();
  };

  return (
    <>
      {show && (
        <div>
          {/* <div className={Styles.subHeaderMenuItemActive}>
            <p>Android App</p>
          </div> */}

          {menuList.map((item, index) => (
            <Link
              style={{ textDecoration: "none" }}
              key={index}
              href={{
                pathname: item.link,
                // query: {
                //   data: item.id,
                // },
              }}
              onClick={handleActive}
            >
              <div
                className={
                  item.active
                    ? Styles.subHeaderMenuItemActive
                    : Styles.subHeaderMenuItem
                }
              >
                <p>{item.name}</p>
              </div>
            </Link>
          ))}

          {/* <div className={Styles.subHeaderMenuItem}>
            <p>Business Process Outsourcing Service</p>
          </div> */}
        </div>
      )}
    </>
  );
};
