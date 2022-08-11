// * styles 
import styles from './Widget.module.scss'

// * components 
import CategoryList from './CategoryList'

const Widget = () => {
    return (
        <div className={styles.widget}>
            <CategoryList/>
        </div>
    );
}

export default Widget;
