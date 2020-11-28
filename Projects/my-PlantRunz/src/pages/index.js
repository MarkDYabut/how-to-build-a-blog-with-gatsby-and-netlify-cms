import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

// index page arrow function
// with data prop (object)
// 2 objects within data prop (object)
// side and allMarkdownRemark
const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  // iterating through edges which is allMarkdownRemake
  // filter based on some critera
  // then map into <PostLink /> components which take a key prop and post prop
  // key prop is just the id because we need unique key identifiers -> edge.node.id
  // post prop contains the all the content -> edge.node
  // edge.node contains {id, exerpt(pruneLength: 250), frontmatter { datte, path, title, thumbnail} }
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  // return the html
  // Helmet is for SEO
  // title -> is from our site query
  // meta contant -> is from our site query as well
  // {Posts} is where all the meat comes through and is defined above
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <h2>Information &darr;</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;

// graphQL query
// passed into index as a prop
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
