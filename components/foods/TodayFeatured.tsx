import {useState} from "react";
import React from 'react';
import Modal from "../Modal";

import styles from '../../styles/TodayFeatured.module.css'

const mockFoodsMenu = {
    titles: [
            {id: 1, title: 'Main Course', selected: true},
            {id: 2, title: 'Dizzerts', selected: false},
            {id: 3, title: 'Appetizers', selected: false}
        ],
    mainCourse: {
        meatDishes: [
            {
                id: 1,
                image: ['/images/FoodMainPic.png', '/images/FoodPic2.png', '/images/FoodPic3.png'],
                name: 'Chicken Parmesan',
                calories: '70gr - Chicken',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .'
            },
            {
                id: 2,
                image: ['/images/Rectangle37.png'],
                name: 'Smoked Beef Bulgogi',
                calories: '70gr - Chicken',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .'
            },
            {
                id: 3,
                image: ['/images/Rectangle38.png'],
                name: 'Chicken Fried Rice',
                calories: '70gr - Chicken',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .'
            },
            {
                id: 4,
                image: ['/images/Rectangle39.png'],
                name: 'Barbeque Steak',
                calories: '70gr - Chicken',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .'
            }
        ]
    },
    Dizzerts: {},
    Appetizers: {}
}

const TodayFeatured = () => {

    const {titles, mainCourse} = mockFoodsMenu
    const [selectedIndexMainMenu, setSelectedIndexMainMenu] = useState(1)
    const [selectedIndexMenu, setSelectedIndexMenu] = useState(1)

    const handleSetMenuItem = id => setSelectedIndexMainMenu(id)
    const handleSetItem = id => setSelectedIndexMenu(id)

    return (
        <div className={styles.rootWrapper}>
            <div className={styles.firstTitle}>
                Today’s featured
            </div>
            <div className={styles.secondTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </div>
            <div className={styles.menusWrapper}>
                <div>
                    {titles.map(item =>
                        <div
                            key={item.id}
                            className={selectedIndexMainMenu === item.id ? styles.selectedMainMenu : styles.rootMenu}
                            onClick={() => handleSetMenuItem(item.id)}
                        >
                            {item.title}
                        </div>
                    )}
                </div>
                <div className={styles.informationWrapper}>
                    <div>
                        <select>
                            <option>Meat Dishes</option>
                            <option>Vegetables Dishes</option>
                        </select>
                        {mainCourse.meatDishes.map(cat =>
                            <div key={cat.id} className={styles.menuItems} onClick={() => handleSetItem(cat.id)}>
                                <img className={styles.menuItemsImage} src={cat.image[0]}/>
                                <div className={selectedIndexMenu === cat.id ? styles.menuItemsSelectedText : styles.menuItemsText}>
                                    {cat.name}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.selectedItemWrapper}>
                        <div>
                            {mainCourse.meatDishes[0].image.map((imgSrc, idx) =>
                                <img key={idx} src={imgSrc}/>
                            )}
                        </div>
                        <div className={styles.itemDetail}>
                            <div className={styles.selectedItemName}>
                                {mainCourse.meatDishes[0].name}
                            </div>
                            <div className={styles.selectedItemCalories}>
                                Calories: {mainCourse.meatDishes[0].calories}
                            </div>
                            <div className={styles.description}>
                                {mainCourse.meatDishes[0].description}
                            </div>
                            <div>
                                <button>See More</button>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TodayFeatured
