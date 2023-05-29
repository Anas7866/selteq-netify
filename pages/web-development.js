import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from "../styles/index.module.css";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from '../Components/Webdev/Banner';
import Solutions from '../Components/Webdev/Solutions';
import Learning from '../Components/Webdev/Learning';
import Process from '../Components/Webdev/Process';
import Digital from '../Components/Webdev/Digital';
import Productup from '../Components/Webdev/Productup';
import Ascand from '../Components/Webdev/Ascand';
import Newheader from '@/Components/Newheader/Newheader';
import Newfooter from '@/Components/Newfooter/Newfooter';
import Productrunning from '@/Components/Webdev/Productrunning';
import Businessdev from '@/Components/Webdev/Businessdev';
const Software = () => {
  return (
    <>
      <Head>
        <title>Professional Web Development Services |  Selteq</title>
        <meta name="description" content="Selteq's web development services ensure that your website stands out with seamless functionality, intuitive design, and top-notch security." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        {/* fontasome V5 cdn  */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Head>
      <main className={styles.main_height}>
        <Newheader />
        <Banner />
        <Solutions />
        <Process />
        <Productrunning />
        <Digital />
        <Businessdev />
        <Newfooter />
      </main>
    </>
  )
}

export default Software
