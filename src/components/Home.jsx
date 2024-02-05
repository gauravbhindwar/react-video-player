import { Box, Image, Heading, Container,Stack,Text} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={16}>
        <Heading
          textTransform={'upppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid black'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack 
        h={'full'}
        p={4}
        alignitems={'center'}
        direction={['column','row']}
        >

          <Image src={img5}  h={['40','400']} filter={'hue-rotate-130deg'} alt="img5" />

          <Text letterSpacing={'widest'} lineHeight={'190%'} p={["4","16"]} textAlign={'center'}> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ab animi sint quisquam reprehenderit soluta modi laudantium incidunt quasi facilis commodi dolorum quo quibusdam libero est labore? Alias officia laboriosam iste? Necessitatibus inventore quos libero soluta esse numquam, magni voluptate sed exercitationem, consequatur eaque pariatur architecto error. Cum dolore possimus impedit, perferendis libero ullam quis provident culpa accusantium doloremque quibusdam nemo quia labore odit, deserunt blanditiis numquam hic optio! Aliquid corrupti facere recusandae nesciunt ullam mollitia, repudiandae, maxime expedita tempora omnis deserunt illum blanditiis, cupiditate et magnam id sit culpa.
          </Text>

        </Stack>


      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} alt="img1" />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img2} alt="img2" />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img3} alt="img3" />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming On Console
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img4} alt="img4" />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night Life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
