import React from "react";
import { Link } from "gatsby";

function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Layout;
