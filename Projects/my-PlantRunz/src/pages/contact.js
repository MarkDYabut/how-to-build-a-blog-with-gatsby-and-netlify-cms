import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";

// contact page arrow function
// single prop of data - > which is a GraphQL query containing siteMetadata
// we plug those into Helmet
// and then we have some form -> we gna remove that
// we just want instagram here
// https://medium.com/@marvinng_55348/how-to-scrape-public-instagram-pictures-and-posts-by-using-only-instagram-domain-in-reactjs-f7041c33926f
const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/-bcg-1.jpeg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Contact Us</h1>
          <p>Let us help you kick start your next plant project &rarr;</p>
        </div>
        <div>
          <h2>To place an order please use our order form</h2>
          <p>
            <Link to="/order-form">Order Form</Link>
          </p>

          <h2>For other inquiries please contact us through</h2>
          <p>
            Instagram <br />
            <a target="_blank" href="https://www.instagram.com/plantrunz/">
              Instagram Page
            </a>
          </p>
          <p>
            Facebook <br />
            <a target="_blank" href="https://www.facebook.com/plantrunz">
              Facebook Page
            </a>
          </p>
          <p>
            Email <br />
            <a href="mailto:plantrunz@gmail.com">plantrunz@gmail.com</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
