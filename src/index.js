import React from "react"
import ReactDOM from "react-dom"
import { App } from "./app"
import styles from "./styles/style.module.scss"

const app = <h1 className={styles.app}>Shivers Webpack + React App <App /></h1>

ReactDOM.render(app, document.getElementById('root'))