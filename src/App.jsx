import * as React from 'react'
import { Box, Heading, Button, Flex, Stack } from '@chakra-ui/react'
import bgImage from './assets/banner.jpg'

function App() {
  return (
    <Box
      h='40vh'
      bg='yellow'
      bgImage={`url(${bgImage})`}
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Flex direction='column' alignItems='center' justify='center' h='100%' bg='rgb (0 0 0 / 50%)' p={['0 10%', null, '0 20%']}>
        <Heading color='black' textTransform='uppercase' textAlign='center' fontWeight='ligth' letterSpacing='5px'>
          Te mereses unas vacaciones
        </Heading>
        <Stack 
          spacing='40px' mt='30px'
          direction={{base: 'column', md:'row'}}
          w={['100%', null, 'auto']}
        >
          <Button variant='outline' size='lg' textTransform='uppercase' fontWeight='light' borderRadius='0' color='grey' letterSpacing='1px'>Ver detalles</Button>
          <Button variant='outline' size='lg' textTransform='uppercase' fontWeight='light' borderRadius='0' color='grey' letterSpacing='1px'>Ver Lugares</Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
