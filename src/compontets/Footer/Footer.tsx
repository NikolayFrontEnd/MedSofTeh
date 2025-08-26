import styles from './Footer.module.css';
import phot from "../../assets/element2.png";
import flag from "../../assets/fr2.png"
const Footer = () => {
    
    return (
        <>
        <div className={styles.blockMainFooter}>

                  <div className={styles.logoContainer2}>
            <div className={styles.logoIcon2}>
                <span>М</span>
            </div>
            <span className={styles.logoText2}>МЕДСОФТЕХ</span>
            <img className = {styles.photoRusFlag}src = {flag}/>
        </div>

<div className={styles.desc}>Проект создан при поддержке Федерального государственного бюджетного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства".</div>
<div className = {styles.desc}>Связаться с нами: sseed932@gmail.com</div>
<div className = {styles.ourComp}>©Медсофтех 2025. Все права защищены</div>
<img className = {styles.phot} src = {phot}/>
        </div>
        </>
    )
}

export default Footer;