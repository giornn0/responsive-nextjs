import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "../layouts/index";
import { Cta, Brand, Navbar } from "../components/index";

export default function Home() {
  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar></Navbar>
          <Header></Header>
        </div>
        <Brand></Brand>
        <WhatGPT3></WhatGPT3>
        <Features></Features>
        <Possibility></Possibility>
        <Cta></Cta>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </>
  );
}
