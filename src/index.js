import Person from "./person"
import "./styles/style.css"
import "./styles/style.less" 
import "./styles/style.scss"
import icon from "./images/webpack_logo.png"

const alex = new Person('Alex', '28', 'Belarus')
console.log(alex)
document.querySelector('.img img').src = icon

console.log('webpack is working')