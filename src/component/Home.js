import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions ={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"
}
function Home() {
  return (
   <Box>
    <MyCarousel/>
    <Container minH={'100vh'} maxW={'container.xl'} padding={'16'} >
      <Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
      <Stack h={'full'} p={'4'}
      alignItems={'center'} direction={['column','row']}>
         <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>

         <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at molestiae delectus, voluptatum sapiente quas cum illo dolorum facere iste molestias officiis omnis! Ratione voluptatum, magnam voluptatem vitae perferendis eligendi dolore. Odit delectus mollitia natus et dicta! Ad nisi, cumque consequuntur saepe dicta atque alias sequi iste hic facilis dolorum rem necessitatibus aspernatur illum eveniet quam architecto obcaecati eligendi veritatis commodi, vel tempore eos explicabo?
         </Text>
      </Stack>

    </Container>
   </Box>
  )
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}>

    <Box w="full" h={'100vh'}>
      <Image src={img1} h={'full'} width={'full'} objectFit={'cover'}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2}h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Gaming is Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming On Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Living NightLife
      </Heading>
    </Box>
    
  </Carousel>
);

export default Home;