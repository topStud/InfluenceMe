import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <Link href={'/'}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    &copy;{' ' + new Date().getFullYear() + ' '}InfluenceMe
                    <span className={styles.logo}>
            <img src="https://img.icons8.com/ios-glyphs/480/handshake.png" alt="InfluenceMe Logo" width={24} height={24} />
          </span>
                </a>
            </Link>
        </footer>
    )
}