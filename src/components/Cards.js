import { Heading, HStack, Image, Text, Stack, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Cards = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <Card cursor="pointer">
        <CardBody >
          <Image src={imageSrc} borderRadius='lg' alt={title}/>
          <Stack mt='6' spacing='3'>
            <Heading  as='h3' size='md'>{title}</Heading>
            <Text color="#64748b" fontSize="lg">{description}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <HStack spacing={2} alignItems="center">
            <p>See more</p> 
            <FontAwesomeIcon icon={faArrowRight} size="1x"/>
          </HStack>
        </CardFooter>
      </Card>
  )
};

export default Cards;
