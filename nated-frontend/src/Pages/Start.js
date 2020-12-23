import React, { Component } from 'react'
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import { Button } from '@anyvision/anv-ui-components';
import { Container } from 'semantic-ui-react';
import MadeBy from '../Components/MadeBy';

class Start extends Component {
  
  // Use if statements to differentiate between the three buttons
  // If unable to, then create three handleClick functions
  handleDebateClick() {
    window.location.href = '/debate'
  }

  handleAddClick() {
    window.location.href = '/add-topics'
  }

  render() {  
    return (
      <div>
        <Container id='centered'>
          <Grommet theme={grommet}>
            <Box align='center'>
              
              <h1>WELCOME TO OPINIONATED</h1>

              <Box id='horizontal-box' flex>
                <Button variant='outline' onClick={() => this.handleDebateClick()}>
                  Start Debating
                </Button>

                <Button variant='outline' onClick={() => this.handleAddClick()}>
                  Add Your Own Topics
                </Button>
              </Box>

            </Box>
          </Grommet>
        </Container>
        <MadeBy />
      </div>
    )
  }
}

export default Start