import {
  Heading,
  HStack,
  Image,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc, link, noOfLines }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card variant="elevated">
        <CardBody>
          <Box width="100%" height="300px" overflow="hidden">
            <Image
              src={imageSrc}
              borderRadius="lg"
              alt={title}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <Stack mt="6" spacing="3">
            <Heading as="h3" size="md">
              {title}
            </Heading>
            <Text color="#64748b" fontSize="lg" noOfLines={noOfLines}>
              {description}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <HStack spacing={2} alignItems="center">
            <p>See more</p>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </CardFooter>
      </Card>
    </a>
  );
};

export default Cards;
