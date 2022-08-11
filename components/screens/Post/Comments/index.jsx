// * react/next 
import {useState, useEffect} from 'react'
import moment from 'moment'

// * services
import {getComments} from 'services/commentApi'

// * styles 
import styles from './Comments.module.scss'

const Comments = ({slug}) => {
    const [comments, setComments] = useState(null);

    const fetchComments = async () => {
        const response = await getComments(slug)
        setComments(response)
    }

    useEffect(() => {
        fetchComments()
    }, []);

    return (
        <div className={styles.comments}>
            <h3>Comments</h3>
            <div>
                {
                    comments 
                    ? comments.map((comment, index) => (
                        <div key={index} className={styles.comment}>
                            <p>
                                <span className={styles.authorName}>
                                    {comment.name}
                                </span>
                                {' '}
                                on
                                {' '}
                                {moment(comment.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <p>
                                {comment.comment}
                            </p>
                        </div>
                    )) : (
                        <div>
                            There are no comments
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Comments;
