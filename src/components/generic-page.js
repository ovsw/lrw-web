/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

// import {buildImageObj} from '../lib/helpers'
// import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import PageSideNav from './generic-page-side-nav'
import PageHeaderImage from './page-header-image'

function GenericPage ({_rawBody, title, section, headerImage = null}) {
  return (
    <div sx={{marginTop: '5.35rem'}}>

      <PageHeaderImage headerImage={headerImage} />

      <section sx={{variant: 'sections.hpSectionLight'}}>
        <Container sx={{maxWidth: '6xl', p: 2, py: [4, 5]}} s>
          <Flex sx={{flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
            <Box sx={{width: ['full', 'full', '3/4'], pl: [0, 0, 4]}}>
              <div sx={{display: ['block', 'block', 'none'], mb: 4}}>
                <PageSideNav section={section} />
              </div>
              <div sx={{variant: 'styles', mb: 5}} role='main'>
                <div sx={{marginBottom: 4}} >
                  <Styled.h1 sx={{variant: 'text.caps'}}>{title}</Styled.h1>
                </div>
                {_rawBody && <PortableText blocks={_rawBody} />}
              </div>
            </Box>
            <Box sx={{width: ['full', 'full', '1/4']}}>
              <aside sx={{
                pr: [0, 0, 4],
                pb: 4
              }}>
                <PageSideNav section={section} />
              </aside>
            </Box>
          </Flex>
        </Container>
      </section>
    </div>
  )
}

export default GenericPage
