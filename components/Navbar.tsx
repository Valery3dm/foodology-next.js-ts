import React from "react";
import Link from "next/link";

import styles from '../styles/Navbar.module.css'

const menuItems = [
    {text: 'About', href: '/about'},
    {text: 'Foods', href: '/foods'},
    {text: 'Pricing', href: '/pricing'},
    {text: 'Sign In', href: '/sign'},
    {text: 'Shop', href: '/payment'}
]

const Navbar: React.FC = () => (
    <div className={styles.header}>
        <Link href={'/'}>
            <a className={styles.link}>
                Foodology
            </a>
        </Link>
        <div className={styles.navbarWrapper}>
            <div></div>
            <ul className={styles.navbar}>
                {menuItems.map((item, idx) =>
                    <li
                        key={idx}
                        className={item.text !== 'Sign In' ? styles.navbarItem : styles.navbarSign}
                    >
                        <Link href={item.href}>
                            <a>
                                {item.text}
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
            <div></div>
        </div>
    </div>
)

export default Navbar
