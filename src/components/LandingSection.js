import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar
        size="48"
        src="https://i.pravatar.cc/150?img=7"
        alt="Pete the developer"
        mb={4}
        position="static"
      />
      <Heading as="h1" size="2xl">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" color="gray.400">
        {bio1}
      </Heading>
      <Heading as="h2" size="md" color="gray.400">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
