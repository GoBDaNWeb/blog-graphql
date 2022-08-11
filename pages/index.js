// * services 
import {getPosts} from 'services/postApi'

// * components 
import Home from 'components/screens/Home'

const HomePage = ({posts}) => {
	return <Home posts={posts}/>
}

export async function getStaticProps() {
	const posts = (await getPosts()) || [];
	return {
	  props: { posts },
	};
  }

export default HomePage