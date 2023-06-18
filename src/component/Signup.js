import { Container,VStack,Heading,Input,Button,Text,Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
         <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
               <Heading textAlign={'center'}>VIDEO ~ PLAYER</Heading>
               <Avatar alignSelf={'center'} boxSize={'28'}/>

               <Input placeholder={'Name'} type={'text'} required focusBorderColor={'green.500'}/>


               <Input placeholder={'Email'} type={'email'} required focusBorderColor={'green.500'}/>

               <Input placeholder={'Password'} type={'password'} required focusBorderColor={'green.500'}/>

            
               <Button colorScheme={'whatsapp'} type={'submit'}>Signup</Button>
               <Text textAlign={'right'}>Already Signed Up?{'  '}
               <Button variant={'link'} colorScheme={'whatsapp'}>
                <Link to={'/login'}>Login</Link>
               </Button></Text>
              
            </VStack>
         </form>
    </Container>
  )
}

export default Signup;