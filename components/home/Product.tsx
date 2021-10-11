


import styles from '../../styles/Product.module.css';

const dataList = [
    {id: 1, title: 'Main Course', text: 'Lorem ipsum dolor sit amet.', image: null},
    {id: 1, title: 'Dessert', text: 'Lorem ipsum dolor sit amet.', image: null},
    {id: 1, title: 'Appetizer', text: 'Lorem ipsum dolor sit amet.', image: null}
]

const Product = () => {
    return (
        <div className={styles.rootWrapper}>
            <div className={styles.titleBlock}>
                <div className={styles.firstTitle}>PRODUCT</div>
                <div className={styles.secondTitle}>Menus for tofday</div>
                <div className={styles.titleDescriptionBlock}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</div>
            </div>
            <div className={styles.contentWrapper}>
                <img className={styles.imgWrapper} src='../images/Picture.png'/>
                <div className={styles.rootRightWrapper}>
                    <div className={styles.rightTitleWrapper}>
                        <div className={styles.rightTitle}>Breakfast Monday</div>
                        <div className={styles.rightDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labort.</div>
                    </div>
                    {dataList.map(item =>
                        <div key={item.id} className={styles.cardsWrapper}>
                            <div className={styles.cardsWrapperInfo}>
                                <div className={styles.cardsTitle}>{item.title}</div>
                                <div className={styles.cardsText}>{item.text}</div>
                            </div>
                            <img src={item.image}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product;
