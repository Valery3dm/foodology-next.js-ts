

import styles from '../../styles/PerfectFoods.module.css'

const PerfectFoods = () => {
    return (
        <div className={styles.rootWrapper}>
            <div className={styles.rootDescription}>
                <div className={styles.topTitle}>Changing your catering way</div>
                <div className={styles.firstTitle}>Perfect Foods</div>
                <div className={styles.secondTitle}>Better Live</div>
                <div className={styles.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. rong para duija naago conporat der
                    Andomo lakoc amet aven.
                </div>
                <div className={styles.button}>Subscribe</div>
            </div>
            <div className={styles.imageWrapper}>
                <img
                    src="/images/headimage.png"
                    alt="Foods Header"
                    className={styles.image}
                />

                <div className={styles.imageBackground}>

                </div>
            </div>
        </div>
    )
}

export default PerfectFoods
