import styles from './article.module.scss'

import Image from 'next/image'

export default function  Article({imgUrl,date,title}){
    return (
        <>
        <div className={`${styles["gpt3__blog-container_article"]}`}>
            <div className={`${styles["gpt3__blog-container_article-image"]}`}>
                <Image src={imgUrl} alt="log image"></Image>
            </div>
            <div className={`${styles["gpt3__blog-container_article-content"]}`}>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
        </>
    )
} 