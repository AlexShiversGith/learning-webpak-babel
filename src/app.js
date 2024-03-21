import React, {Fragment} from "react";
import icon from "./images/webpack_logo.png"
import styles from "./styles/style.module.scss"

export const App = () => {
    return (
        <Fragment>
            <div className={styles.header}>Header component</div>
            <div className={styles.body}>
                <img src={icon}/>
            </div>
            <div className={styles.footer}>Footer component</div>
        </Fragment>
    )
}