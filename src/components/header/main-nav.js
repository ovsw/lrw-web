/** @jsx jsx */
import React from "react"; // eslint-disable-line
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// components
import MobileMenu from "./mobile-menu";
import MegaMenu from "./mega-menu";

const MainNav = ({ navStructure, showNav, onHideNav }) => {
  const { logoImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "camp-laurelwood-logo.png" }) {
        childImageSharp {
          fixed(width: 114) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);
  const navMobile = {
    bg: "primary",
    maxHeight: showNav ? "1000px" : "0",
    transition: "all 400ms ease-out",
    position: ["absolute", "absolute"],
    width: "auto",
    height: ["88vh", "90vh"],
    overflow: "scroll",
    top: ["5.15rem", "5.15rem"],
    left: 0,
    right: 0,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)"
  };
  return (
    <>
      {/* mobile */}
      <nav sx={navMobile}>
        <Flex as="ul" sx={navMobileUl}>
          {navStructure.map((mainMenuItem, i) => {
            return (
              <MobileMenu
                key={mainMenuItem.slug}
                menuTitle={mainMenuItem.title}
                mainLink={mainMenuItem.slug}
                menuColumns={mainMenuItem.children}
                onHideNav={onHideNav}
              />
            );
          })}
        </Flex>
      </nav>

      {/* desktop */}
      <nav
        sx={{
          display: ["none", "none", "block"],
          width: "full"
        }}
      >
        <Flex as="ul" sx={navUlDesk}>
          <li sx={{ ...navUlDesk.navLiItem, order: "2", flex: "0 1 120px" }}>
            <Link to="/" sx={logoLink}>
              <Img
                sx={logoLink.Img}
                fixed={logoImage.childImageSharp.fixed}
                fadeIn={false}
                loading="eager"
                alt="Camp Laurelwood Logo"
              />
            </Link>
          </li>
          {navStructure.map((mainMenuItem, i) => {
            if (i > 3) {
              return;
            } // only show the first 4 items in the desktop menu
            return (
              <li key={mainMenuItem.slug} sx={{ px: [0, 0, 1, 3], order: i }}>
                <MegaMenu
                  menuTitle={mainMenuItem.title}
                  mainLink={mainMenuItem.slug}
                  menuColumns={mainMenuItem.children}
                />
              </li>
            );
          })}
        </Flex>
      </nav>
    </>
  );
};

// mobile styles
const navMobileUl = {
  variant: "lists.reset",
  m: 0,
  pt: [0, 0],
  pb: [0, 4],
  px: 0,
  display: ["block", "block", "flex"],
  justifyContent: "flex-end"
};

//  desktop styles
const navUlDesk = {
  variant: "lists.reset",
  m: 0,
  pt: [3, 3, 0],
  pb: [4, 4, 0],
  display: ["block", "block", "flex"],
  justifyContent: "center",

  navLiItem: {
    flexGrow: "1",
    position: "relative",
    display: ["none", "none", "block"]
  }
};

const logoLink = {
  display: "block",
  position: "absolute",
  width: "100%",
  top: [null, null, "-42px", "-47px"],
  textAlign: "center",
  Img: {
    position: "relative"
  }
};

export default MainNav;
