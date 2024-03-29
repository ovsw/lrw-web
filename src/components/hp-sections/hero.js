/** @jsx jsx */
import React, { useState } from "react"; // eslint-disable-line
import { Container, jsx, Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import HeroVideoBg from "./hero-video-bg";
import ModalVideo from "react-modal-video";
import { Link } from "gatsby";
// import ScrollDownIcon from '../../elements/scroll-down-icon'

import { FaPlay } from "react-icons/fa";

import VideoPoster from "../../images/hero-video-bg.jpg";
import BigLogo from "../../images/lrw-temp-simplified-logo-vector-bw.png";

import "../../../node_modules/react-modal-video/css/modal-video.min.css";

const Hero = () => {
  const [playFullVideo, setPlayFullVideo] = useState(false);

  return (
    <Box
      as="section"
      pt={[4, 4, 5, 5, 6]}
      pb={[2, 3, 4, 6]}
      sx={{
        textAlign: "center",
        borderBottom: "1px solid lightgrey",
        position: "relative",
        // zIndex: '1',
        // bg: 'gray.2',
        backgroundImage: `url('${VideoPoster}')`,
        backgroundSize: "cover",
        backgroundPosition: "top right"
      }}
      className="Hero"
    >
      <div
        className="darkoverlay"
        sx={{
          bg: "rgba(0,0,0,.3)",
          display: ["none", "none", "block"],
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
          // zIndex: 1
        }}
      />
      <div
        sx={{
          display: ["none", "none", "block"],
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
          // zIndex: -1
        }}
      >
        <HeroVideoBg playFullVideo={playFullVideo} poster={VideoPoster} />
      </div>

      {/* ////////////////////// */}

      <Container
        className="container"
        sx={{
          maxWidth: "5xl",
          position: "relative",
          py: "5rem"
          // zIndex: 10
          // my: [3, 4, 4, 3, 5]
          // bg: 'rgba(0,0,0,.32)'
        }}
      >
        {/* <img
          src={BigLogo}
          alt="Camp Laurelwood Big Logo"
          sx={{ maxWidth: ["10rem", null, "15rem", null, "20rem"] }}
        /> */}

        <Styled.h1
          sx={{
            color: "white",
            fontWeight: "normal",
            textShadow: "2px 2px 2px rgba(0,0,0,.5)",
            fontSize: [6, 7],
            fontFamily: "heading2",
            mb: 0
          }}
          onClick={() => console.log("click")}
        >
          <span sx={{ display: "block", fontFamily: "body", fontSize: [3, 4], mb: 3 }}>
            Camp Laurelwood
          </span>
          {/* 85th Year Celebration */}
          Fun. Friends. Forever.
        </Styled.h1>

        {/* <p
          sx={{
            textShadow: "1px 1px 2px rgba(0,0,0,.5)",
            fontSize: [1, 2],
            color: "light",
            fontWeight: "light",
            mt: 2,
            mb: 5,
            maxWidth: "2xl",
            mx: "auto"
          }}
        >
          <Link to="/alumni-events/" sx={{ color: "white", fontSize: [2, 3] }}>
            Learn More
          </Link>
        </p> */}
        <p
          sx={{
            textShadow: "1px 1px 2px rgba(0,0,0,.5)",
            fontSize: [1, 2],
            color: "light",
            fontWeight: "light",
            mt: 3,
            maxWidth: "2xl",
            mx: "auto"
          }}
        >
          Wonderful experiences await your child at Camp Laurelwood, Connecticut's Premier Jewish
          Co-ed Overnight Camp.{" "}
        </p>
        <button
          onClick={() => setPlayFullVideo(true)}
          sx={{
            variant: "buttons.3DAccent",
            display: "inline-block",
            py: 3,
            mt: 4
          }}
        >
          <FaPlay sx={{ position: "relative", top: "2px" }} /> &nbsp; Watch our Full Video
        </button>
        <ModalVideo
          channel="youtube"
          isOpen={playFullVideo}
          autoplay="1"
          videoId="8V1YjlxosGE"
          onClose={() => setPlayFullVideo(!setPlayFullVideo)}
        />
        {/* old video id: gcJfsUztrGE */}
        {/* <div sx={{
    position: 'absolute',
    bottom: '-140px',
    left: '50%',
    marginLeft: '-1.5rem'
  }}>
    <ScrollDownIcon />
  </div> */}

        {/* //////////////////////////// */}
      </Container>
    </Box>
  );
};

export default Hero;
