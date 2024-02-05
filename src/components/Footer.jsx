import React from 'react'
import { Box, Stack,VStack,Heading,HStack, Button, Input,Text} from '@chakra-ui/react';
import { AiOutlineSend ,AiOutlineFacebook,AiOutlineInstagram,AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai';

const Footer = () => {
  return <Box 
  bgColor={'blackAlpha.900'} 
  minH={40}
  p={16}
  color={'white'}
  >
    
  <Stack direction={['column','row']}>
  <VStack alignItems={"stretch"} w={'full'} px={'4'} >
    <Heading size='md' textTransform={"uppercase"} textAlign={["center","left"]}>
      Subscribe to our newsletter
    </Heading>

      <HStack
      borderBottom={'2px solid white'}
      p={4}      
      >
      <Input 
      placeholder='Enter email here....' 
      border={'none'}
      borderRadius={'none'}
      outline={"none"}
      // focusBorderColor='none'
      />

        <Button
        colorScheme={'purple'}
        p={4}
        variant={'ghost'}
        borderRadius={'0 20px 20px 0'}>
          <AiOutlineSend/>
          </Button>
       
      </HStack> 
  </VStack>

  <VStack 
  w={'full'} 
  px={'4'} 
  borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>

    <Heading size='md' textTransform={"uppercase"}>
      VIDEO HUB
    </Heading>
    <Text>All Rights Reserved</Text>

  </VStack>
  <VStack w={"full"}>
  <Heading size={'md'} textTransform={"uppercase"}>
    Social Media
  </Heading>
  
  <Heading>
    <Button colorScheme={'whiteAlpha'} variant={'ghost'}><AiOutlineFacebook/></Button>
    <Button colorScheme={'whiteAlpha'} variant={'ghost'}><AiOutlineInstagram/></Button>
    <Button colorScheme={'whiteAlpha'} variant={'ghost'}><AiOutlineLinkedin/></Button>
    <Button colorScheme={'whiteAlpha'} variant={'ghost'}><AiOutlineGithub/></Button>


  </Heading>
  </VStack>
  </Stack>
    </Box>
}

export default Footer