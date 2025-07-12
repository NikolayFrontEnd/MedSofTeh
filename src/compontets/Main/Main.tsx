import styles from "./Main.module.css";
import photo from "../../assets/e7c8a652b4ff26a094731214f377e182c2504450.png";
export function Main() {
    
    return (
        <>   
        <div className = {styles.mainBlockContent}>      
        <div className={styles.mainBlock}>
                    <div className={styles.mainWords}>   
<div>Добро пожаловать на официальный сайт</div>
<div><span className={styles.companyName}>МЕДСОТЕХ</span></div>

         </div>
        <div className = {styles.descriptionWord}>
Наш продукт — цифровое решение для частных клиник.
Разрабатываем веб-приложение, упрощающие работу врачей и взаимодействие с пациентами.        
</div>
<div className = {styles.buttonDetails}>Подробнее</div>
        </div>

        <div >
            <img className={styles.photoSize} src = {photo}/>
        </div>
         </div>

 </>
    )
}
export default Main;