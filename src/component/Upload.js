import { Container,VStack,HStack, Input,Button } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';

function Upload() {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} padding={'16'}>
      <VStack color={'whatsapp.500'} h={'full'} justifyContent={'center'}>
      <AiOutlineCloudUpload size={'10vmax'}/>

      <form>
        <HStack>
           <Input required type={'file'}/>
           <Button colorScheme={'whatsapp'} type={'submit'}>Upload</Button>
        </HStack>
      </form>
      </VStack>
    </Container>
  )
}

export default Upload;