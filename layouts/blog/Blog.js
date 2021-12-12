import styles from './blog.module.scss'
import {Article} from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from './import'
export default function Blog(){
    return(
        <>
            <div className={`${styles["gpt3__blog"]} section__padding`} id="blog">
                <div className={`${styles["gpt3__blog-heading"]}`}>
                    <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
                </div>
                <div className={`${styles["gpt3__blog-container"]}`}>
                    <div className={`${styles["gpt3__blog-container_groupA"]}`}>
                        <Article imgUrl={blog01} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
                    </div>
                    <div className={`${styles["gpt3__blog-container_groupB"]}`}>
                        <Article imgUrl={blog02} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
                        <Article imgUrl={blog03} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
                        <Article imgUrl={blog04} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
                        <Article imgUrl={blog05} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}></Article>
                    </div>
                </div>
            </div>
        </>
    )
}