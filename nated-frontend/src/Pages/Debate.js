import React, { Component } from 'react'
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import { Container } from 'semantic-ui-react'
import MadeBy from '../Components/MadeBy';

class Debate extends Component {
  render() {
    return (
      <div>
        <Container id='centered'>
          <Grommet theme={grommet}>
            <Box>
              
            </Box>
          </Grommet>
        </Container>
        <MadeBy />      
      </div>
    )
  }
}

export default Debate
