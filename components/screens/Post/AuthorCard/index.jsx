// * styles
import styles from './AuthorCard.module.scss'

const Author = ({author}) => {
    return (
        <div className={styles.authorCard}>
            <>
                <img 
                    src={author.photo.url} 
                    alt="Avatar" 
                    className={styles.avatar}
                />
                <h1>{author.name}</h1>
            </>
            <p className={styles.bio}>
                {author.bio}
            </p>
        </div>
    );
}

export default Author;
