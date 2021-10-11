
import Link from "next/link";

import styles from '../../styles/TrustUs.module.css'


const TrustUs = () => {

    return (
        <div className={styles.rootWrapper}>
            <img src="/images/PictureBG.png"/>
            <div className={styles.informationWrapper}>
                <div className={styles.title}>
                    Trust Us, All Set Just For You
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                </div>
                <Link href={'/'}><a className={styles.button}>Subscribe</a></Link>
            </div>
        </div>
    )
}

export default TrustUs
