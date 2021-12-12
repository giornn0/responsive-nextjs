import styles from './brand.module.scss'
import Image from 'next/image'
import {
    google,
    slack,
    atlassian,
    dropbox,
    shopify,
} from './import'

export default function Brand(){
    return (
        <>
        <div className={`${styles["gpt3__brand"]} section__padding`}>
            <div>
                <Image src={google} alt="google"></Image>
            </div>
            <div>
                <Image src={slack} alt="slack"></Image>
            </div>
            <div>
                <Image src={atlassian} alt="atlassian"></Image>
            </div>
            <div>
                <Image src={dropbox} alt="dropbox"></Image>
            </div>
            <div>
                <Image src={shopify} alt="shopify"></Image>
            </div>
        </div>
        </>
    )
}