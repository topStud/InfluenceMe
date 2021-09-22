import styles from "../styles/Home.module.css";
import {Link, useLocation} from 'react-router-dom'

export default function Footer() {
    // get user type by url - influencers/companies
    const { pathname } = useLocation();
    const urlArray = pathname.split('/')
    const userType = urlArray[1]

    return(
        <footer className={styles.footer}>
            <div>
                <Link to={userType === 'companies' || userType === 'influencers' ? `/${userType}/${urlArray[2]}` : '/'}>
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