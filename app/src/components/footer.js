import styles from "../styles/Home.module.css";
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div>
                <Link to={'/'}>
                    &copy;{' ' + new Date().getFullYear() + ' '}InfluenceMe
                    <span className={styles.logo}>
                    <img src="https://img.icons8.com/ios-glyphs/480/handshake.png" alt="InfluenceMe Logo" width={24}
                         height={24} />
                </span>
                </Link>
            </div>
        </footer>
    )
}