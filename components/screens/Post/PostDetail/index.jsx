// * react/next
import React from 'react'
import moment from 'moment';

// * styles 
import styles from './PostDetail.module.scss'


const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                        className={styles.contentImage}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <div className={styles.postDetail}>
            <img 
                src={post.image.url} 
                alt="Image"
            />
            <div className={styles.content}>
                <div className={styles.postInfo}>
                    <div className={styles.author}>
                        <img src={post.author.photo.url} alt="Avatar" />
                        <h4>{post.author.name}</h4>
                    </div>
                    <div className={styles.createdAt}>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </div>
                </div>
                <h2 className={styles.title}>
                    {post.title}
                </h2>
                <div className={styles.text}>
                {
                    post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default PostDetail;