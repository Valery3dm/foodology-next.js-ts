


import styles from '../../styles/CompleteSelection.module.css'

const CompleteSelection = () => {
    return (
        <div className={styles.rootWrapper}>
            <div className={styles.imageWrapper}>
                <img src="/images/PictureProfile.png"/>
                <div className={styles.imageDescriptionWrapper}>
                    <div className={styles.name}>Mason Jonas</div>
                    <div>Human Resource Development</div>
                </div>
            </div>
            <div className={styles.blockWrapper}>
                <div className={styles.rightBlockFirstTitle}>TESTIMONIALS</div>
                <div className={styles.rightBlockSecondTitle}>What they say?</div>
                <div className={styles.rightBlockParagraph}>“</div>
                <div className={styles.rightBlocThirdTitle}>Complete Selection</div>
                <div  className={styles.rightBlockDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
            </div>
        </div>
    )
}

export default CompleteSelection;
