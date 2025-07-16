import styles from './Footer.module.css';
import phot from "../../assets/element2.png";
const Footer = () => {
    
    return (
        <>
        <div className={styles.blockMainFooter}>

                  <div className={styles.logoContainer2}>
            <div className={styles.logoIcon2}>
                <span>М</span>
            </div>
            <span className={styles.logoText2}>МЕДСОФТЕХ</span>
        </div>

<div className={styles.desc}>Компания разрабатывает веб-приложение, упрощающие работу врачей и взаимодействие с пациентами.</div>
<div className = {styles.desc}>Связаться с нами: sseed932@gmail.com</div>
<div className = {styles.ourComp}>©Медсофтех 2025. Все права защищены</div>
<img className = {styles.phot} src = {phot}/>
        </div>
        </>
    )
}

export default Footer;