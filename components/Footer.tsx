import React from "react";


import styles from '../styles/Footer.module.css'

const Footer: React.FC = () => (
    <div className={styles.rootWrapper}>
        <div>
            <div>twitter, facebook, google, instagram</div>
            <div>© 2020 Foodology. All rights reserved</div>
        </div>
        <div className={styles.footerMenuWrapper}>
            <div>
                <div>Foods</div>
                <div>Pricing</div>
                <div>Menus</div>
                <div>Privacy Policy</div>
            </div>
            <div>
                <div>Help</div>
                <div>About</div>
                <div>Terms & Conditions</div>
            </div>
        </div>
    </div>
)

export default Footer
