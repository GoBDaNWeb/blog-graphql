// * react/next
import React, {useState} from 'react';

// * services 
import {submitComment} from 'services/commentApi'

// * styles 
import styles from './CommentForm.module.scss'

const CommentForm = ({slug}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [isError, setIsError] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    
    const onInputChange = (e) => {
        const {value, name} = e.target
        name === 'comment' && setComment(value)
        name === 'email' && setEmail(value)
        name === 'name' && setName(value)
    }

    const userSubmitComment = () => {
        const commentObj = {
            name,
            email,
            comment,
            slug,
        };
      
        submitComment(commentObj)
            .then((res) => {
                if (res.createComment) {
                    setComment('')
                    setShowSuccessMessage(true);
    
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 3000);
                }
            });
    }

    const handlePostSubmission = () => {
        setIsError(false);

        if (!name || !email || !comment) {
          setIsError(true);
          return;
        }
        userSubmitComment()
      };

    return (
        <div className={styles.commentForm}>
            <h3>
                Leave a Сomment
            </h3>
            <textarea 
                value={comment} 
                onChange={onInputChange} 
                name="comment" 
                placeholder="Comment" 
                className={styles.commentInput}
            />
            <div >
                <input 
                    type="text" 
                    value={name}
                    onChange={onInputChange} 
                    placeholder="Name" 
                    name="name" 
                />
                <input 
                    type="email" 
                    value={email} 
                    onChange={onInputChange}  
                    placeholder="Email" 
                    name="email" 
                />
            </div>
            {  
                isError 
                && (
                    <p className={styles.error}>
                        All fields are mandatory
                    </p>
                )
            }
            <div className={styles.btn}>
                <button 
                    type="button" 
                    onClick={handlePostSubmission} 
                >
                    Post Comment
                </button>
                {
                    showSuccessMessage 
                    && (
                        <span className={styles.success}>
                            Comment submitted for review
                        </span>
                    )
                }
            </div>
        </div>
    )
}

export default CommentForm;
