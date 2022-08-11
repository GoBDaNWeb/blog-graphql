// * react/next 
import {useRouter} from 'next/router'

// * styles 
import styles from './Category.module.scss'

// * components 
import PostCard from 'components/common/PostCard'
import Widget from 'components/common/Widget'
import Loader from 'components/common/Loader'

const Category = ({posts}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className={styles.category}>
            <div className={styles.postList}>
                {
                    posts.map(post => (
                        <PostCard 
                            key={post.node.slug} 
                            post={post.node}
                        />
                    ))
                }
            </div>
            <Widget/>
        </div>
    );
}

export default Category;
