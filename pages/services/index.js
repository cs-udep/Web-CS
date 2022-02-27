import { request, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async ()=> {
    const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC){
        edges {
          cursor
          node {
            author {
              bio
              id
              name
              profilePhoto {
                url
              }
            }
            description
            createdAt
            like
            title
            slug
            featureImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }    
  `
  const results = await request(graphqlAPI, query)

  return results.postsConnection.edges;
}

export const getPostDetails = async (slug)=> {
  const query = gql`
  query GetPostDetails ($slug: String!){
    post(where : {slug : $slug}){
      author {
        bio
        id
        name
        profilePhoto {
          url
        }
      }
      description
      createdAt
      like
      title
      slug
      featureImage {
        url
      }
      category {
        name
        slug
      }
      content{
        raw
      }
      languageP
    }
  }    
`
  const results = await request(graphqlAPI, query, { slug })
  return results.post;
}

export const getRecentPost = async () =>{
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy : createdAt_ASC
        last : 1
      ) {
          author {
            bio
            id
            name
            profilePhoto {
              url
            }
          }
          createdAt
          like
          title
          description
          slug
          featureImage {
            url
          }
          category {
            name
            slug
          }
          content{
            raw
          }
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.posts;
}

export const getSimilarPosts = async () =>{
  const query = gql`
    query GetPostDetails($slug : String!, $categories: [String!]) {
      posts(
        where : { slug_not : $slug, AND : {categories_come: {slug_in: $categories}}}
        last : 3
      ) {
        title 
        description
        featureImage{
          url
        }
        createdAt
        slug
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.posts;
}

export const updateLike = async () =>{
  const query = gql`
    mutation MyMutation ($like : Int! ,$slug : String!) {
      updatePost(
        data: {like: }, 
        where: {slug: $slug}
      ) {
        like
      }
    }
  `
}