import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
            postsConnection {
                edges {
                    cursor
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        image {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.postsConnection.edges;
};

export const getPost = async (slug) => {
    const query = gql`
        query GetPost($slug : String!) {
            post(where: {slug: $slug}) {
                title
                excerpt
                image {
                    url
                }
                author{
                    name
                    bio
                    photo {
                        url
                    }
                }
                createdAt
                slug
                content {
                    raw
                }
                categories {
                    name
                    slug
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};

export const getCategoryPosts = async (slug) => {
    console.log(slug)
    const query = gql`
        query GetCategoryPosts($slug: String!) {
            postsConnection(where: {categories_some: {slug: $slug}}) {
                edges {
                    cursor
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        image {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.postsConnection.edges;
};