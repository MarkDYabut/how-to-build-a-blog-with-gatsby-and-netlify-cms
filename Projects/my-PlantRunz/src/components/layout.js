import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Plant Runz &bull; Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>
        </p>
        <p>Version 0.1</p>
        <p>
          This website has been configured as a Progressive Web Application, to
          install it: add it to your home screen.
        </p>
      </footer>
    </div>
  );
};
