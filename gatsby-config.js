// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require(`path`)
const clientConfig = require('./client-config')

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.camplaurelwood.org',
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
                    title: 'SIT Program (11th)',
                    slug: '/programs/sit-program/',
                    children: []
                  },
                  {
                    title: 'Specialty Camps',
                    slug: '/programs/specialty-camps/',
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
                title: 'Activities',
                slug: '/activities/',
                children: [
                  {
                    title: 'A Typical Day',
                    slug: '/activities/a-typical-day/',
                    children: []
                  },
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
                    title: 'Activity Plans',
                    slug: '/activities/activity-plans/',
                    children: []
                  }

                ]
              }
            ]
          },
          {
            title: 'column 3',
            children: [
              {
                title: 'Dates & Rates',
                slug: '/dates-and-rates/',
                children: [
                  {
                    title: 'Overnight',
                    slug: '/dates-and-rates-overnight-camp/',
                    children: []
                  },
                  {
                    title: 'Day Camp',
                    slug: '/dates-and-rates-day-camp/',
                    children: []
                  },
                  {
                    title: 'Bonim',
                    slug: '/dates-and-rates-bonim-travel-program/',
                    children: []
                  },
                  {
                    title: 'SIT',
                    slug: '/dates-and-rates-sit-program/',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            title: 'column 4',
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
                slug: 'https://laurelwood.campintouch.com/ui/forms/application/camper/App',
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
                title: 'Letter From the Director',
                slug: '/welcome-letter-from-the-director/',
                children: []
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'Meet our Team',
                slug: '/our-team/',
                children: []
              },
              {
                title: 'Board of Directors',
                slug: '/board-of-directors/',
                children: []
              },
              {
                title: 'ACA Accreditation',
                slug: '/aca-accreditation/',
                children: []
              }

              // {
              //   title: 'Camp Newsletter',
              //   slug: '/camp-newsletter/',
              //   children: []
              // }
            ]
          },
          {
            title: 'Column 3',
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
                title: 'Videos',
                slug: '/videos/',
                children: []
              }

            ]
          },
          {
            title: 'Column 4',
            children: [
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
                title: 'Work at Laurelwood',
                slug: '/staff/',
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
                title: 'What\'s New',
                slug: '/whats-new-on-campus/',
                children: []
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'Donate',
                slug: '/donate-now/',
                children: []
              },
              {
                title: 'Refer a Friend',
                slug: 'https://laurelwood.campintouch.com/ui/forms/client/referral/Form',
                children: []
              }
            ]
          },
          {
            title: 'column 3',
            children: [
              {
                title: 'Parent Log-in',
                slug: '/parent-log-in/',
                children: []
              },
              {
                title: 'Camp Store',
                slug: '/camp-store/',
                children: []
              }
            ]
          },
          {
            title: 'column 4',
            children: [
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
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Facilities',
                slug: '/private-events-and-retreats/facilities/',
                children: []
              },
              {
                title: 'Photos',
                slug: '/private-events-and-retreats/photos/',
                children: []
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'Recommended Vendors',
                slug: '/private-events-and-retreats/recommended-vendors/',
                children: []
              },
              {
                title: 'Contact us',
                slug: '/private-events-and-retreats/contact-us/',
                children: []
              }
            ]
          }
        ]
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
                slug: 'https://camplaurelwood.networkforgood.com/projects/65520-general-donation-page',
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
              // {
              //   title: 'Amazon Wishlist',
              //   slug: '/amazon-wishlist/',
              //   children: []
              // },
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
                title: 'Current Openings',
                slug: '/staff/current-openings/',
                children: []
              },
              {
                title: 'Staff Testimonials',
                slug: '/staff/staff-testimonials/',
                children: []
              },
              {
                title: 'Apply Now',
                slug: 'https://laurelwood.campintouch.com/ui/forms/application/staff/App#Positions',
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
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Amatic SC`,
          `Skranji`,
          `Open Sans:400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-netlify-headers`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Camp Laurelwood - Connecticut's Premier Jewish Summer Camp`,
        short_name: `Camp Laurelwood`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3e9b00`,
        display: `standalone`,
        icon: `src/images/icon.png`
        // icons: [
        //   {
        //     src: '/favicons/android-chrome-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png'
        //   },
        //   {
        //     src: '/favicons/android-chrome-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png'
        //   }
        // ]
      }
    },
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: '5a9d5e5cd7591465c708437c'
        // get this from the tawk script widget
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5V584J8',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: {platform: 'gatsby'}

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME'
      }
    }
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: config.googleAnalyticsID,
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true
    //     // sampleRate: 5,
    //     // siteSpeedSampleRate: 10
    //   }
    // }
  ]
}
