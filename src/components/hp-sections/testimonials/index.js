/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {useStaticQuery, graphql} from 'gatsby'
import Slider from 'react-slick'
import BackgroundImage from 'gatsby-background-image'

import TestimonialItem from './testimonial-item'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function NextArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      // style={{...style}}
      onClick={onClick}
      sx={{
        left: '-2rem',
        '&::before': {
          color: 'primary',
          fontSize: '2rem'
        }
      }}
    />
  )
}

function PrevArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      // style={{...style}}
      className={className}
      sx={{
        right: '-1rem',
        '&::before': {
          fontSize: '2rem',
          color: 'primaryDark'
        }
      }}
      onClick={onClick}
    />
  )
}

const TestimonialsSection = () => {
  const {testimonialsBgImage} = useStaticQuery(
    graphql`
    query {
      testimonialsBgImage: file(relativePath: { eq: "img-bg-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    `
  )

  const slickSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    // fade: true,
    // adaptiveHeight: true
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: dots => (
      <div>
        <ul style={{
          position: 'relative', top: '50px', padding: '0'
        }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        sx={{
          width: '1.5rem',
          height: '1.5rem',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          bg: 'primary',
          color: 'light',
          borderRadius: '100%',
          '.slick-active & ': {
            bg: 'accent',
            color: 'light',
            boxShadow: '0 0 6px #008080'
          }
        }}
      >
        {i + 1}
      </div>
    )
  }
  return (
    <BackgroundImage tag='section' quality='90' fluid={testimonialsBgImage.childImageSharp.fluid}
      sx={{
        variant: 'sections.hpSection',
        py: [5, 5, 5, 6],
        pb: [6, 5, 5, 6],
        // background: `url(${SectionBg}) repeat-x bottom left`,
        backgroundColor: 'transparent',
        backgroundPosition: 'bottom center',
        marginBottom: '-3rem',
        position: 'relative',
        zIndex: '2'
      }}>
      <Styled.h1 as='h2' sx={{textAlign: 'center', color: 'accent'}}>What Campers Say</Styled.h1>
      <Container sx={{maxWidth: '6xl', px: ['2.8rem', 5, 0]}}>
        <Slider {...slickSettings}>
          {testimonialsContentTemp.map(testimonial => <TestimonialItem {...testimonial} key={testimonial.name} />)}
        </Slider>
      </Container>
    </BackgroundImage>
  )
}

const testimonialsContentTemp = [
  {
    name: 'Emily Cooper',
    text: 'Truly a magical place that fills me with more happiness than anywhere else in the world!'
  },
  {
    name: 'Henry Brown',
    text: 'After 9 summers at laurelwood I can say with confidence that it gets better every year. It\'s always such a wonderful mix of new and old faces and bonds that form and grow each summer. Laurelwood has shaped me into who I am today and I\'m forever grateful for the experiences and environment it provided me growing up.'
  },
  {
    name: 'Isabel Braverman',
    text: 'Not a day goes by when I don’t think of camp; I am reminded of my home away from home when I hear “Unwritten” on the radio, whenever I wear a white blouse, and whenever I eat a blondie. It is the small traditions that make camp unique. Laurelwood has provided a safe haven for me to pursue my passions with the most supportive staff and campers, and I consider myself incredibly lucky to have not only a summer family, but a forever family, in the 06443.'
  },
  {
    name: 'Breezie Miller',
    text: 'Camp Laurelwood has been my home away from home for 13 years, truly as long as I can remember. It has given me my best friends, my happiest memories, and shaped me into the person I am today. Being Junior Girls’ Division Head is an amazing experience unlike anything else, and I feel so lucky to have had the opportunity to connect with so many incredible campers and staff this summer.'
  },
  {
    name: 'Hilary Rappaport ',
    text: 'Camp Laurelwood was life changing for me this past summer because I was able to watch my campers grow. I was also able to watch them find their love for camp the way I did when I was their age which is always heartwarming.'
  },
  {
    name: 'Aaron Cohen',
    text: 'For almost ten years now, Laurelwood has been my summer home and I don’t doubt for a second it’ll be my summer home for many years to come. Camp is where my strongest friendships were born and where I have grown to be an independent and outgoing leader. I can’t imagine spending my summers anywhere else. Live, love, camp.'
  },
  {
    name: 'Jess Tyler',
    text: 'Camp Laurelwood. A place where experiences become memories and friends become family. A place where bunks hold the most important secrets and matching bracelets mean everything. A place where you sing your heart out, where you dance like nobody is watching, where you share stories round campfires and laugh until you cry. Camp is a home away from home. Laurelwood is family.'
  },
  {
    name: 'Erin Bellucci',
    text: 'When I’m at camp I’m so busy making friends, doing activities, singing on benches at shabbat, roasting marshmallows, and being a part of the countless other special things we do. When the 7 weeks are over and I have my first moment to reflect on the summer, I realize that all throughout each of those special days I was actually growing as a person and becoming a more genuine, thoughtful version of myself.'
  }
]

export default TestimonialsSection
