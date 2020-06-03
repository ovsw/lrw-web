/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {graphql} from 'gatsby'
import {jsx, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

import PortableText from '../components/portableText'

// import {FaChevronRight} from 'react-icons/fa'
import PageHeaderImage from '../components/page-header-image'

// containers
import Layout from '../containers/layout'
import SectionWithSidebar from '../containers/section-with-sidebar'
// commponents
import ProgramItem from '../components/hp-sections/programs/program'

const DonateNowPage = ({data, errors}) => {
  return (
    <Layout>
      <PageHeaderImage headerImage={data.page.headerImage} />
      <section sx={{variant: 'sections.hpSectionLight'}}>
        <SectionWithSidebar sidebar={<Sidebar title={data.page.title} text={data.page._rawBody} />} mainContent={<MainContent />} />
      </section>

    </Layout>
  )
}

const Sidebar = ({title, text}) => {
  return (
    <>
      <Styled.h2 sx={{mt: '0'}}>{title}</Styled.h2>
      {text && <PortableText blocks={text} />}
    </>
  )
}

const programs = [
  {
    name: 'Donate Today',
    icon: 'donate',
    description: 'Donate to Camp Laurelwood Today',
    link: 'https://camplaurelwood.networkforgood.com/projects/101373-all-together-now-laurelwood',
    external: true
  },
  {
    name: 'Send a Kid to Laurelwood',
    icon: 'dayCamp',
    description: 'Sponsor a child by paying their camp fees.',
    link: '/send-a-kid-to-laurelwood/',
    external: false
  },
  // {
  //   name: 'Amazon Wishlist',
  //   icon: 'gift-list',
  //   description: 'Get something off the list as a donation. We\'ll put it to good use!',
  //   link: '/amazon-wishlist/'
  // },
  {
    name: 'More ways to Support',
    icon: 'leader',
    description: 'Find out how else you can show your support for Laurelwood.',
    link: '/more-ways-to-support-camp/',
    external: false
  }
]

const MainContent = () => {
  return (
    <Flex sx={{pl: [0, 0, 4], flexWrap: 'wrap', justifyContent: 'center'}}>
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
