import React from 'react'
import { Button, Container, VStack,HStack,Input } from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai'



const Upload = () => {
  return (
    <Container 
    maxW={"container.xl"} h={'100v'} p={"16"}
    >

    <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
      <AiOutlineCloudUpload size={"10vmax"} />

    <form>
      <HStack>
        <Input 
        required 
        type={"file"} 
        css={{
          '&::file-selector-button':{
            border: 'none',
            width:'calc(100% + 36px)',
            height:'-18px',
            color:'purple',
            backgroundColor:'white',
            cursor:'pointer',
          }
        }}/>
        <Button type={"submit"}>Upload</Button>
      </HStack>
    </form>


    </VStack>
    
    </Container>
  )
}

export default Upload