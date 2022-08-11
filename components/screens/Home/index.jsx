// * react/next 
import {useRouter} from 'next/router'

// * styles 
import styles from './Home.module.scss'

// * components 
import PostCard from 'components/common/PostCard'
import Widget from 'components/common/Widget'
import Loader from 'components/common/Loader'

const Home = ({posts}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className={styles.home}>
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
    )
}

export default Home