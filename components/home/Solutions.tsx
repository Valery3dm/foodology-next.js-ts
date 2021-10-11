
import styles from '../../styles/Solutions.module.css'

const Solutions = () => {
    return (
        <div className={styles.rootWrapper}>
            <img src='/images/Rectangle24.png' className={styles.imageWrapper}/>
            <div className={styles.infoWrapper}>
                <div className={styles.firstTitle}>SUBSCRIBE</div>
                <div className={styles.secondTitle}>Perfect Solutions for Your Foods</div>
                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
                <div className={styles.button}>Subscribe</div>
            </div>
        </div>
    )
}

export default Solutions;
