/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Container, jsx, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

const Hero = () => {
  return (
    <Box as='section' pt={[1, 2, 3, 5]} pb={[1, 2, 3, 5]} sx={{
      borderBottom: '1px solid lightgrey',
      bg: 'gray.2'
    }}className='Hero'>
      <Container sx={{maxWidth: '5xl'}}>

        <Flex sx={{flexWrap: 'wrap'}}>
          <Box sx={{width: ['full', '2/3']}}>
            <div className='banner-info'>
              <Styled.h2 as='h1' sx={{variant: 'text.caps'}} >A Summer Day Camp <span>Like no Other...</span></Styled.h2>
              <p><span sx={{fontWeight: 'bold'}}>Your kids deserve the best.</span> <br />The best supervision, the best activities, the best friends, the best memories. </p>
              <button href='tel:6096225658' sx={{variant: 'buttons.outline', py: 3}}>call us: (609) 622-5658</button>
            </div>
          </Box>
          <Box sx={{width: ['full', '1/3']}}>
            <div>
              <div>
                <Styled.h2>Contact Us</Styled.h2>
                {/* <p>Please Contact Us Using the Form Below</p> */}
              </div>

              <iframe src='https://services.cognitoforms.com/f/xPoircp7HEGoNo_tpFEirg?id=156' style={{position: 'relative', minWidth: '100%', width: '100%'}} frameBorder='0' scrolling='yes' seamless='seamless' height='319' width='100%' />
              <script src='https://services.cognitoforms.com/scripts/embed.js' />

            </div>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Hero
