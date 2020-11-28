import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

// quick export default, this is what you do what you have no props!!!!!!
// quick arrow function!!!
// usees  a <StaticQuery /> -> gatsby -> we need to figure this out
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
        <Link to="/map" className="button -primary">
          View Nursery Map&rarr;
        </Link>
      </div>
    )}
  />
);
