// *react/next 
import Link from 'next/link'
import moment from 'moment'

// * styles 
import styles from './PostCard.module.scss'

const PostCard = ({post}) => {
    return (
        <div className={styles.postCard}>
            <Link href={`/post/${post.slug}`}>
                <div className={styles.imgWrapper}>
                    <img src={post.image.url} alt="Image" />
                </div>
            </Link>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {post.title}
                </h2>
                <div className={styles.postInfo}>
                    <div className={styles.author}>
                        <img src={post.author.photo.url} alt="Avatar" />
                        <h4>{post.author.name}</h4>
                    </div>
                    <div className={styles.createdAt}>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </div>
                </div>
                <div className={styles.excerpt}>
                    {post.excerpt}
                </div>
            </div>
        </div>
    );
}

export default PostCard;
