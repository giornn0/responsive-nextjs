import styles from './header.module.scss'
import Image from 'next/image'
import people from '../../public/assets/people.png'
import ai from '../../public/assets/ai.png'

export default function Header(){
    return (
        <>
        <div className={`${styles["gpt3__header"]} section__padding`} id={"home"}>
            <div className={`${styles["gpt3__header-content"]}`}>
                <h1 className={`gradient__text`}>Let's Build Something Amazing with GPT-3 AI</h1>
                <p>
Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <div className={`${styles["gpt3__header-content__input"]}`}>
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Get Started</button>
                </div>
                <div className={`${styles["gpt3__header-content__people"]}`}>
                    <Image src={people}  height="38" width="181.79"  alt="people"></Image>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className={`${styles["gpt3__header-image"]}`}>
                    <Image src={ai} alt='ai' ></Image>
            </div>
        </div>
        </>
    )
}