/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import {jsx, Container, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

// import {FaChevronRight} from 'react-icons/fa'

import TrialSessions from './trial-sessions'
import SpecialtyCamps from './specialty-camps'

// containers
import SectionWithSidebar from '../../../containers/section-with-sidebar'
// commponents
import ProgramItem from './program'

const Programs = () => {
  return (
    <>
      <TrialSessions />

      <section sx={{variant: 'sections.hpSectionLight'}}>
        <Container sx={{maxWidth: '7xl'}}><Styled.h2 sx={{mt: '0'}}>Laurelwood Main Programs:</Styled.h2></Container>
        <SectionWithSidebar sidebar={<Sidebar />} mainContent={<MainContent />} />
      </section>

      <SpecialtyCamps />
    </>
  )
}

const Sidebar = () => {
  return (
    <>
      <p>Camp Laurelwood is proud to offer a variety of session options to meet the needs of each Laurelwood family.</p>
      <p><strong>What makes our Programs so special?</strong></p>
      <p>At Laurelwood we believe that our <strong>program structure</strong> is as important as the relationships the campers make.</p>
      <p>To ensure our campers are receiving high quality programming, we have developed <strong>Camp Activity Plans (CAPs)</strong>, which:</p>
      <ul>
        <li>Provide Age-appropriate activities</li>
        <li>Provide campers the opportunity to learn or a grow a new skill</li>
        <li>Ensure the activities are Fun</li>
      </ul>
      <div >
        <Link to='/programs/' sx={{variant: 'buttons.3DAccent', display: 'inline-block', mr: 3, mt: 4}}>More on CAPs </Link>
        <Link to='/dates-and-rates/' sx={{variant: 'buttons.3D', display: 'inline-block', mt: 4}}>Dates &amp; Rates </Link>
      </div>

      {/* <FaChevronRight sx={{position: 'relative', top: '3px'}} /> */}
    </>
  )
}

const programs = [
  {
    name: 'Overnight Camp',
    age: '2nd-9th graders',
    icon: 'moon',
    description: 'We need a description here for the Overnight Camp for 2nd to 9th graders, couldn\'t find anything on the old website',
    link: '/programs/pine-cone-camp/'
  },
  {
    name: 'Day Camp',
    age: 'K-7th graders',
    icon: 'dayCamp',
    description: 'Laurelwood Day Camp is run by Camp Laurelwood and is a great way for campers (K to 7th grade) to start their camping experience.',
    link: '/programs/day-camp/'
  },
  {
    name: 'Bonim Travel',
    age: '10th graders',
    icon: 'teenagers',
    description: 'A recreational, educational and cultural experience for 10th graders, building character and social skills along with a strong Jewish identity.',
    link: '/programs/teen-camp/'
  },
  {
    name: 'SIT Program',
    age: '11th graders',
    icon: 'leader',
    description: 'Provides rising 11th graders the tools and experience they need to become future leaders, strong role models  Camp Laurelwood staff.',
    link: '/programs/leader-in-training/'
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

export default Programs
