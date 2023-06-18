import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from "react-icons/bi"

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button pos={'fixed'} zIndex={'overlay'} top={4} left={4} colorScheme='whatsapp' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen} >
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader> VIDEO^PLAYER</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
                                <Link to={"/"}>Home</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
                                <Link to={"/videos"}>Premium</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
                                <Link to={"/videos?category=free"}>Free Videos</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
                                <Link to={"/upload"}>Upload Videos</Link>
                            </Button>
                        </VStack>

                        <HStack pos={'absolute'} bottom={'10'} left={'4'} w={'full'}
                            justifyContent={'space-evenly'}
                        >
                            <Button onClick={onClose} colorScheme='whatsapp'>
                                <Link to={"/login"}>Log In</Link>
                            </Button>

                            <Button onClick={onClose} variant={'outline'} colorScheme='whatsapp'>
                                <Link to={"/signup"}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>

            </Drawer>

        </>
    );
}

export default Header