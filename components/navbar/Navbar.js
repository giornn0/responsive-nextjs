import styles from './navbar.module.scss'

//BEM ->block elements modifier
import logo from "../../public/assets/logo.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMinus } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Menu = ()=> (<>
       <Link href={"#home"}><a>Home</a></Link>
        <Link href={"#wgpt3"}><a>What is GPT?</a></Link>
        <Link href={"#possibility"}><a>Open AI</a></Link>
        <Link href={"#features"}><a>Case Studies</a></Link>
        <Link href={"#blog"}><a>Library</a></Link>
    </>
)


export default function Navbar(){

    const[toggleMenu, setToggleMenu]= useState(false)

    return(
        <>
        <div className={styles["gpt3__navbar"]}>
            <div className={styles["gpt3__navbar-links"]}>
                <div className={styles["gpt3__navbar-links_logo"]}>
                    <Image src={logo} height="16" width="62"  alt="logo"></Image>
                </div>
                    <div className={styles["gpt3__navbar-links_container"]}>
                     <Menu></Menu>
                    </div>
            </div>
            <div className={styles["gpt3__navbar-sign"]}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className={styles["gpt3__navbar-menu"]}>
                {toggleMenu?
                <FontAwesomeIcon icon={faMinus} color="#FFF" size={"sm"} onClick={()=>setToggleMenu(false)} />:
                <FontAwesomeIcon icon={faBars} color="#FFF" size={"sm"} onClick={()=>setToggleMenu(true)} />
                }
                {
                    toggleMenu && ( /* esto para que se renderice solamente cuando la var sea truethy*/
                        <div className={`${styles["gpt3__navbar-menu_container"]} scale-up-center`}>
                                <Menu></Menu>
                            <div className={styles["gpt3__navbar-menu_container-links-sign"]}>
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    )
}