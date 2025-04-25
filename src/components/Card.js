import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightLong,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    // Card component to display project information
    <Box bg="white" borderRadius="md" boxShadow="md" overflow="hidden">
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        height="60%"
        // borderTopRadius="md"
        borderRadius="md"
        width="100%"
      />
      <VStack>
        <VStack padding={4} alignItems="flex-start">
          <Heading as="h3" size="lg" color="gray.800">
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
          <HStack spacing={2} marginTop={2}>
            <Text fontSize="sm" color="green.800">
              <a href="#">Read more</a>
            </Text>
            <FontAwesomeIcon icon={faArrowRightToBracket} color="gray" />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
