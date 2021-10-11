

import styles from '../../styles/ItemsPayment.module.css'

const itemsPayments = [
    {id: 1, image: '/images/Rectangle36.png', title: 'Chicken Parmesan', price: 15.00},
    {id: 2, image: '/images/Rectangle51.png', title: 'Chicken Fried Rice', price: 15.00},
    {id: 3, image: '/images/RectangleItem54.png', title: 'Barbeque Steak', price: 15.00},
    {id: 4, image: '/images/Rectangle53.png', title: 'Smoked Beef Bulgogi', price: 15.00}
]

const shippingInformation = ['Fauzi Akmal', 'Lorem ipsum dolor sit amet, 228123', '78123-123-21']

const paymentInfo = ['4456 - 2132 -323 -112', '02/24', 'Shipping Adress']

const Payment = () => (
    <div className={styles.paymentWrapper}>
        <div className={styles.itemsBlock}>
            <div className={styles.header}>Items & Payment</div>
            <div className={styles.titleItems}>{itemsPayments.length} ITEMS</div>
            <div className={styles.itemsWrapper}>
                {itemsPayments.map(item =>
                    <div key={item.id} className={styles.card}>
                        <img src={item.image} className={styles.image}/>
                        <div className={styles.cardTitle}>{item.title}</div>
                        <div className={styles.cardPrice}>${item.price}</div>
                    </div>
                )}
            </div>
        </div>
        <hr/>
        <div className={styles.informationBlock}>
            <div className={styles.titleInformation}>Shipping Information</div>
            <ul>
                {shippingInformation.map((item, idx) =>
                    <li key={idx} className={styles.list}>
                        <span className={styles.informationList}>{item}</span>
                    </li>
                )}
            </ul>
            <div className={styles.titleInformation}>Time Delivery</div>
            <div>February 4   12.30 PM</div>
            <div className={styles.titleInformation}>Payment</div>
            <ul>
                {paymentInfo.map((item, idx) =>
                    <li key={idx} className={styles.list}>
                        <span className={styles.informationList}>{item}</span>
                    </li>
                )}
            </ul>
            <div className={styles.priceInfoLocation}>
                <span className={styles.priceInfo}>Subtotal :</span><span className={styles.priceInfo}>$60.00</span>
            </div>
            <div className={styles.priceInfoLocation}>
                <span className={styles.priceInfo}>Shipment :</span><span className={styles.priceInfo}>Free</span>
            </div>
            <div className={styles.priceInfoLocation}>
                <span className={styles.priceTotalInfo}>Total Price</span><span className={styles.priceTotalInfo}>$60.00</span>
            </div>
            <hr/>
            <div className={styles.button}>PROCEED</div>
        </div>
    </div>
)

export default Payment
