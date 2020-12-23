import React from 'react'
import { Footer, grommet, Grommet, Text } from 'grommet'

export default function MadeBy() {
  return (
    <div>
      <Grommet theme = {grommet}>
        <Footer background='light-4' justify='center' pad='small'>
          <Text textAlign='center' size='small'>
            © Anuoluwapo Faboro, 2020
          </Text>
        </Footer>
      </Grommet>
    </div>
  )
}
