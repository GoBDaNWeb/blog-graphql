// * services 
import {getCategoryPosts} from 'services/postApi'
import {getCategories} from 'services/categoryApi'

// * components
import Category from 'components/screens/Category'

const CategoryPage = ({posts}) => {
    return <Category posts={posts}/>
}

export async function getStaticProps({ params }) {
    const posts = await getCategoryPosts(params.slug);
  
    return {
        props: { posts },
    };
}
  
export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}

export default CategoryPage