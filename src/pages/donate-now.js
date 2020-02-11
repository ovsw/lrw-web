/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {graphql} from 'gatsby'
import {jsx, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

import PortableText from '../components/portableText'

// import {FaChevronRight} from 'react-icons/fa'
import PageHeaderImage from '../components/page-header-image'

// containers
import SectionWithSidebar from '../containers/section-with-sidebar'
// commponents
import ProgramItem from '../components/hp-sections/programs/program'

const DonateNowPage = ({data, errors}) => {
  return (
    <>
      <PageHeaderImage headerImage={data.page.headerImage} />
      <section sx={{variant: 'sections.hpSectionLight'}}>
        <SectionWithSidebar sidebar={<Sidebar title={data.page.title} text={data.page._rawBody} />} mainContent={<MainContent />} />
      </section>

    </>
  )
}

const Sidebar = ({title, text}) => {
  return (
    <>
      <Styled.h2 sx={{mt: '0'}}>{title}</Styled.h2>
      {text && <PortableText blocks={text} />}
      <div >
        {/* <Link to='/programs/' sx={{variant: 'buttons.3DAccent', display: 'inline-block', mr: 3, mt: 4}}>More on CAPs </Link> */}
        {/* <Link to='/dates-and-rates/' sx={{variant: 'buttons.3D', display: 'inline-block', mt: 4}}>Dates &amp; Rates </Link> */}
      </div>

      {/* <FaChevronRight sx={{position: 'relative', top: '3px'}} /> */}
    </>
  )
}

const programs = [
  {
    name: 'Donate Today',
    icon: 'donate',
    description: 'Donate to Camp Laurelwood Today',
    link: '/donate-today/'
  },
  {
    name: 'Send a Kid to Laurelwood',
    icon: 'dayCamp',
    description: 'Sponsor a child by paying their camp fees.',
    link: '/send-a-kid-to-laurelwood/'
  },
  {
    name: 'Amazon Wishlist',
    icon: 'gift-list',
    description: 'Get something off the list as a donation. We\'ll put it to good use!',
    link: '/amazon-wishlist/'
  },
  {
    name: 'More ways to Support',
    icon: 'leader',
    description: 'Find out how else you can show your support for Laurelwood.',
    link: '/more-ways-to-support-camp/'
  }
]

const MainContent = () => {
  return (
    <Flex sx={{pl: [0, 0, 4], flexWrap: 'wrap'}}>
      {programs.map(program => {
        const width = program.layout ? '100%' : '1/2'
        return (
          <Box key={program.name} sx={{width: ['full', 'full', `${width}`], display: 'flex'}}>
            <ProgramItem {...program} />
          </Box>
        )
      })}
    </Flex>
  )
}

export default DonateNowPage

export const query = graphql`
  fragment SanityImageMeta on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      metadata {
        lqip
      }
    }
  }

  query DonateNowPageQuery {
    page: sanityDonateNowPage(_id: { regex: "/(drafts.|)donateNow/" }) {
      title
      headerImage {
        ...SanityImageMeta
        alt
      }
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`
