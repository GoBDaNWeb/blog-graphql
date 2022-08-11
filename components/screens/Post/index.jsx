// *react/next
import React from 'react';
import { useRouter } from 'next/router';

// * styles
import styles from './Post.module.scss'

// * components
import PostDetail from './PostDetail';
import AuthorCard from './AuthorCard';
import CommentForm from './CommentForm';
import Comments from './Comments';
import Loader from 'components/common/Loader';

const Post = ({ post }) => {
    const router = useRouter();
	
	if (router.isFallback) {
	  return <Loader />;
	}

    return (
		<div className={styles.post}>
			<PostDetail post={post} />
			<AuthorCard author={post.author}/>
			<CommentForm slug={post.slug} />
			<Comments slug={post.slug} /> 
		</div>
    );
};

export default Post;