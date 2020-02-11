// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require(`path`)
const clientConfig = require('./client-config')

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteNav: [
      {
        title: 'Prospective Families',
        slug: '/prospective-families/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Programs',
                slug: '/programs/',
                children: [
                  {
                    title: 'Trial Sessions',
                    slug: '/programs/trial-sessions/',
                    children: []
                  },
                  {
                    title: 'Overnight Camp (2nd-9th)',
                    slug: '/programs/overnight-camp/',
                    children: []
                  },
                  {
                    title: 'Day Camp (K-7th)',
                    slug: '/programs/day-camp/',
                    children: []
                  },
                  {
                    title: 'Bonim Travel (10th)',
                    slug: '/programs/bonim-travel-program/',
                    children: []
                  },
                  {
                    title: 'SIT Program',
                    slug: '/programs/sit-program/',
                    children: []
                  },
                  {
                    title: 'Specialty Camps',
                    slug: '/programs/specialty-camps/',
                    children: []
                  }
                ]
              },
              {
                title: 'Activities',
                slug: '/activities/',
                children: [
                  {
                    title: 'Trips & Special Events',
                    slug: '/activities/trips-and-special-events',
                    children: []
                  },
                  {
                    title: 'Jewish Life',
                    slug: '/activities/jewish-life/',
                    children: []
                  },
                  {
                    title: 'A Typical Day',
                    slug: '/activities/a-typical-day/',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'Food, Health and Safety',
                slug: '/food-health-and-safety/',
                children: []
              },
              {
                title: 'Tours & Events',
                slug: '/prospective-families-tours-and-events/',
                children: []
              },
              {
                title: 'FAQs',
                slug: '/faqs/',
                children: []
              },
              {
                title: 'Dates & Rates - Overnight',
                slug: '/dates-and-rates-overnight-camp/',
                children: []
              },
              {
                title: 'Dates & Rates - Day Camp',
                slug: '/dates-and-rates-day-camp/',
                children: []
              },
              {
                title: 'Tuition Assistance',
                slug: '/tuition-assistance/',
                children: []
              },
              {
                title: 'Schedule a Tour',
                slug: '/schedule-a-tour/',
                children: []
              },
              {
                title: 'Request Info',
                slug: '/request-info/',
                children: []
              },
              {
                title: 'Enroll Now',
                slug: '/enroll-now/',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'About Laurelwood',
        slug: '/about/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'The Laurelwood Experience',
                slug: '/the-laurelwood-experience/',
                children: []
              },
              {
                title: 'Meet our Staff',
                slug: '/our-staff/',
                children: []
              },
              {
                title: 'Letter From the Director',
                slug: 'welcome-letter-from-the-director',
                children: []
              },
              {
                title: 'Board of Directors',
                slug: 'board-of-directors',
                children: []
              },
              {
                title: 'ACA Accreditation',
                slug: '/aca-accreditation/',
                children: []
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'History',
                slug: '/history/',
                children: []
              },
              {
                title: 'Location',
                slug: '/location/',
                children: []
              },
              {
                title: 'Alumni',
                slug: '/alumni/',
                children: []
              },
              {
                title: 'Alumni Events',
                slug: '/alumni-events/',
                children: []
              },
              {
                title: 'Camp Newsletter',
                slug: '/camp-newsletter/',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'Current Families',
        slug: '/current-families/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Upcoming Events',
                slug: '/upcoming-events-current-families/',
                children: []
              },
              {
                title: 'Parent Log-in',
                slug: '/parent-log-in/',
                children: []
              },
              {
                title: 'Donate',
                slug: '/donate/',
                children: []
              },
              {
                title: 'Refer a Friend',
                slug: '/refer-a-friend/',
                children: []
              }

            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'What\'s New',
                slug: '/whats-new-on-campus/',
                children: []
              },
              {
                title: 'Camp Store',
                slug: '/camp-store/',
                children: []
              },
              {
                title: 'Amazon Smile',
                slug: '/amazon-smile/',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'Retreats & Events',
        slug: '/private-events-and-retreats/',
        children: []
      },
      {
        title: 'Donate',
        slug: '/donate/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Donate Today',
                slug: '/donate-today/',
                children: []
              },
              {
                title: 'Send a Kid to Laurelwood',
                slug: '/send-a-kid-to-laurelwood/',
                children: []
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'Amazon Wishlist',
                slug: '/amazon-wishlist/',
                children: []
              },
              {
                title: 'More ways to support Camp',
                slug: '/more-ways-to-support-camp/',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'Staff',
        slug: '/staff/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Welcome',
                slug: '/staff/welcome/',
                children: []
              },
              {
                title: 'Employment',
                slug: '/staff/employment/',
                children: []
              },
              {
                title: 'Current Openings',
                slug: '/staff/current-openings/',
                children: []
              },
              {
                title: 'Summer Dates',
                slug: '/staff/summer-dates/',
                children: []
              },
              {
                title: 'Staff Testimonials',
                slug: '/staff/staff-testimonials/',
                children: []
              },
              {
                title: 'Apply',
                slug: '/staff/staff-application/',
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: false // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-theme-style-guide',
    'gatsby-plugin-emotion',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    }
  ]
}
