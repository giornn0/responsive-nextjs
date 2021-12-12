import styles from './feature.module.scss'

export default function Feature({title,text}){
    return (
        <>
        <div className={`${styles["gpt3__features-container__feature"]}`}>
            <div className={`${styles["gpt3__features-container__feature-title"]}`}>
                <div/>
                    <h1>{title}</h1>
            </div>
                <div className={`${styles["gpt3__features-container__feature-text"]}`}>
                    <p>{text}</p>
                </div>
        </div>
        </>
    )
}