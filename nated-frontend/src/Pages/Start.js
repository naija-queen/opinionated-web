import React, { Component } from 'react'
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import { Button } from '@anyvision/anv-ui-components';
import { Container } from 'semantic-ui-react';
import MadeBy from '../Components/MadeBy';

class Start extends Component {
  render() {  
    return (
      <div className>
        <Container id='centered'>
          <Grommet theme={grommet}>
            <Box align='center'>
              
              <h1>WELCOME TO OPINIONATED</h1>

              <Box id='horizontal-box'>
                <Button variant='outline' onClick={function noRefCheck(){}}>
                  Start Debating
                </Button>

                <Button variant='outline' onClick={function noRefCheck(){}}>
                  Enter Your Own Topics
                </Button>

                <Button variant='outline'>
                  Rules
                </Button>
              </Box>
            </Box>
          </Grommet>
        </Container>
        <MadeBy></MadeBy>
      </div>
    )
  }
}

export default Start