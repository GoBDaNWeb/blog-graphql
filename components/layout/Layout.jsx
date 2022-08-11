// * styles 
import styles from './Layout.module.scss'

// * components
import Header from './Header'

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            {children}
        </div>
    )
}

export default Layout