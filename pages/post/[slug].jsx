// * services 
import {getPost, getPosts} from 'services/postApi'

// * components 
import Post from 'components/screens/Post'

const PostPage = ({post}) => {
    return <Post post={post}/>
}


export async function getStaticProps({ params }) {
    const data = await getPost(params.slug);
    return {
        props: {
            post: data,
        },
    };
  }
  
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}

export default PostPage