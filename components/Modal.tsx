import React from "react";
import styles from '../styles/Modal.module.css'

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? styles.modalActive : styles.modal} onClick={() => setActive(false)}>
            <div className={active ? styles.modalContentActive : styles.modalContent}  onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default Modal;
