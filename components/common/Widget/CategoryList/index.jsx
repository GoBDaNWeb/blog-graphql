// * react 
import {useEffect, useState} from 'react'
import Link from 'next/link'

// * services 
import {getCategories} from 'services/categoryApi'

// * styles 
import styles from './CategoryList.module.scss'

const CategoryList = () => {
    const [categories, setCategories] = useState(null)

    const fetchCategory = async () => {
        const response = await getCategories()
        setCategories(response)
    }

    useEffect(() => {
        fetchCategory()
    }, [])
    
    return (
        <div className={styles.categoryList}>
            <h2>
                Category
            </h2>
            <ul>
                {
                    categories?.map(category => (
                        <Link 
                            key={category.slug}
                            href={`/category/${category.slug}`}
                        >
                            <li>
                                {category.name}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
}

export default CategoryList;
