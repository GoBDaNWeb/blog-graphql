// * react/next 
import Link from 'next/link'

// * styles 
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <Link href='/'>
                <h1 className={styles.logo}>
                    Graph Blog
                </h1>
            </Link>
        </div>
    )
}

export default Header