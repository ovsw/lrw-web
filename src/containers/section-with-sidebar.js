/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

const SectionWithLeftSidebar = ({sidebar = <p>no sidebar</p>, mainContent = <p>no content</p>, leftSidebar = false}) => {
  return (
    <Container sx={{maxWidth: '7xl'}}>
      <Flex
        sx={{
          flexWrap: 'wrap',
          flexDirection: leftSidebar ? 'row-reverse' : 'row'
        }}
      >
        <Box sx={{
          width: ['full', 'full', '2/3'],
          order: leftSidebar ? '1' : '2',
          mt: [4, 4, 0],
          px: 2
        }}>
          {mainContent}
        </Box>
        <Box sx={{
          width: ['full', 'full', '1/3']
        }}>
          {sidebar}
        </Box>
      </Flex>
    </Container>
  )
}

export default SectionWithLeftSidebar
