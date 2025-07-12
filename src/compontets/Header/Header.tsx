import styles from './Header.module.css';
import logo from '../../assets/element.png'
const Header = () => {
    return ( 
        <>         
        <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>
                <span>М</span>
            </div>
            <span className={styles.logoText}>МЕДСОФТЕХ</span>
        </div>
        
          <div>
          <img src={logo} alt="logo" />
         </div>
         </>
    );
};

export default Header;