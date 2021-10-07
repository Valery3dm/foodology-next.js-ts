import Link from "next/link";
import styles from '../../styles/Bundle.module.css'


const cardsList = [
    {
        id: 1,
        title: 'Breakfast',
        image: null,
        price: 15,
        description: ['Lorem Ipsum Dolor Sit Amet', 'Ipmo Doj Samat', 'Sed do eiusmod tempor']
    },
    {
        id: 2,
        title: 'Lunch',
        image: null,
        price: 15,
        description: ['Lorem Ipsum Dolor Sit Amet', 'Ipmo Doj Samat', 'Sed do eiusmod tempor']
    },
    {
        id: 3,
        title: 'Dinner',
        image: null,
        price: 15,
        description: ['Lorem Ipsum Dolor Sit Amet', 'Ipmo Doj Samat', 'Sed do eiusmod tempor']
    }
]

const Bundle = () => (
    <div className={styles.wrapper}>
        <div className={styles.header}>Bundle</div>
        <div className={styles.firstTitle}>Suitable Bundles For You</div>
        <div className={styles.secondTitle}>Select your suitable catering bundles easy</div>
        <div className={styles.cardsWrapper}>
            {cardsList.map(card =>
                <div key={card.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div className={styles.image}>{card.image}</div>
                        <div>
                            <div className={styles.cardTitle}>{card.title}</div>
                            <div><span className={styles.cardPrice}>${card.price}</span>/ pcs</div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <ul>
                        {card.description.map((el,idx) =>
                            <li key={idx} className={styles.description}>
                                {el}
                            </li>
                        )}
                    </ul>
                    <Link href={'/'}><a className={styles.buttonName}>Add</a></Link>
                </div>
            )}
        </div>
    </div>
)

export default Bundle
