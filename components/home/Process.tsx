


import styles from '../../styles/Process.module.css'

const stepsData = [
    {id: 1, step: '01', title: 'Select your best menus', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' },
    {id: 2, step: '02', title: 'Complete the payment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    {id: 3, step: '03', title: 'Complete the payment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
]

const Process = () => {
    return (
        <div className={styles.rootWrapper}>
            <div className={styles.title}>Process</div>
            <div className={styles.titleDescription}>Just easy step for you</div>
            <div className={styles.cardWrapper}>
                <div className={styles.stepsWrapper}>
                    {stepsData.map(step =>
                        <div key={step.id}>
                            <div><span className={styles.stepCard}>{step.step}</span>  <span className={styles.cardTitle}>{step.title}</span></div>
                            <div  className={styles.cardDescription}>{step.description}</div>
                            <hr/>
                        </div>
                    )}
                </div>
                <img className={styles.imageWrapper} src="/images/Pictureimage.png"/>
            </div>
        </div>
    )
}

export default Process;
