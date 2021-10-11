


import styles from '../../styles/Commitment.module.css'

const cardsCommitmentBlock = [
    {id: 1, image: null, title: 'Top Rated', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit form du lahoke.'},
    {id: 2, image: null, title: 'Fresh Food', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit form du lahoke.'},
]

const Ommitment = () => {
    return (
        <div className={styles.commitmentWrapper}>
            <div className={styles.firstTitle}>Commitment</div>
            <div className={styles.secondTitle}>Why we are good for you</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit form du lahoke.</div>
            <div className={styles.descriptionWrapper}>
                <div className={styles.contentWrapper}>
                    {cardsCommitmentBlock.map(card =>
                        <div key={card.id} className={styles.cardsWrapper}>
                            <div className={styles.cardsImage}>
                                {card.image}
                            </div>
                            <div className={styles.cardsTitle}>
                                {card.title}
                            </div>
                            <div className={styles.cardsDescription}>
                                {card.description}
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.deliveryWrapper}>
                    <div className={styles.deliveryTitle}>Express Delivery</div>
                    <div className={styles.descriptionTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit form du lahoke.</div>
                    <div><span className={styles.deliveryFirstTime}>37</span><span className={styles.deliverySecondTime}>min</span></div>
                    <div className={styles.descriptionTitle}>Average delivery times.</div>
                    <div className={styles.button}>See More</div>
                </div>
            </div>
        </div>
    )
}

export default Ommitment
