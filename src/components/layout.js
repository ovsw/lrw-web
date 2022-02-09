/** @jsx jsx */
import React, { useContext } from "react"; // eslint-disable-line

import { Global } from "@emotion/core";
import { jsx, Layout as ThemeLayout } from "theme-ui";
import Header from "./header2";
import Footer from "./footer";

// context
import { appContext } from "../context";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  const { isMobileNavOpen } = useContext(appContext);
  return (
    <ThemeLayout>
      <Global
        styles={theme => ({
          "*": { boxSizing: "border-box" },
          body: {
            margin: 0,
            overflow: isMobileNavOpen ? "hidden" : "auto"
          },
          img: {
            maxWidth: "100%"
          },
          "a.externalLink::after": {
            content:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)",
            margin: "0 3px 0 3px",
            color: "red"
          },
          ".slick-track": {
            display: "flex",
            ".slick-slide": {
              display: "flex",
              height: "auto"
            }
          },
          ".map": {
            height: "900px",
            zIndex: "1",
            background: "white !important"
          }
        })}
      />
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />

      {/* set the top margin to account for the fixed header */}
      <div sx={{ mt: ["5.5rem", null, null, "6.5rem"] }}>{children}</div>

      <Footer />
    </ThemeLayout>
  );
};

export default Layout;
