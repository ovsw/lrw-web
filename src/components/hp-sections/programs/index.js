/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import {jsx, Container} from 'theme-ui'
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

      <section sx={{variant: 'sections.hpSection'}}>
        <Container sx={{maxWidth: '7xl', p: 0}}>
          <h2 sx={{variant: 'headings.mainSectionHeading'}}>Laurelwood Main Programs:</h2></Container>
        <SectionWithSidebar sidebar={<Sidebar />} mainContent={<MainContent />} />
      </section>

      <SpecialtyCamps />
    </>
  )
}

const Sidebar = () => {
  return (
    <div sx={{textAlign: [null, null, 'center', 'left'], maxWidth: [null, null, '2xl', 'none'], mx: [null, null, 'auto', 0]}}>
      <p>Campers can begin their Laurelwood journey as they enter Kindergarten by trying out our amazing day camp. </p>
      <p>From there, each summer they will grow, make new friends, and experience new adventures.</p>
      <p>At Camp Laurelwood, our campers grow into Staff-in-Training, then eventually can apply to be on staff.</p>
      <p>Growing up at camp can mean making camp your summer home for many years!</p>

      <div sx={{mt: 5}}>
        <Link to='/dates-and-rates/' sx={{variant: 'buttons.3DAccent', display: 'inline-block', mr: 3}}>Dates &amp; Rates </Link>
        <Link to='/programs/' sx={{variant: 'buttons.outline', display: 'inline-block'}}>More on Programs </Link>
      </div>

      {/* <FaChevronRight sx={{position: 'relative', top: '3px'}} /> */}
    </div>
  )
}

const programs = [
  {
    name: 'Overnight Camp',
    age: '2nd-9th graders',
    icon: 'moon',
    description: 'Campers entering second through 10th grades live in newly updated bunks with their friends and counselors, and enjoy all of the programs and activities camp has to offer!',
    link: '/programs/overnight-camp/'
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
    age: '11th graders',
    icon: 'teenagers',
    description: 'A recreational, educational and cultural experience for 11th graders, building character and social skills along with a strong Jewish identity.',
    link: '/programs/bonim-travel-program/'
  }
  // {
  //   name: 'Staff-In-Training Program',
  //   age: '11th graders',
  //   icon: 'leader',
  //   description: 'Provides rising 11th graders the tools and experience they need to become future leaders, strong role models  Camp Laurelwood staff.',
  //   link: '/programs/sit-program/'
  // }
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

export default Programs
