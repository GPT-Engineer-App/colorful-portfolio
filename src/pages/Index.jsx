import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MTc2MTg5OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mx="auto" />
          <Heading as="h1" size="2xl" mt={4}>
            John Doe
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>

        {/* About Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="lg">Hi, I'm John Doe, a passionate Full Stack Developer with experience in building web applications using modern technologies. I love to create efficient and scalable solutions that make a difference.</Text>
        </Box>

        {/* Skills Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Skills
          </Heading>
          <HStack spacing={4} wrap="wrap">
            <Button colorScheme="teal" variant="outline">
              JavaScript
            </Button>
            <Button colorScheme="teal" variant="outline">
              React
            </Button>
            <Button colorScheme="teal" variant="outline">
              Node.js
            </Button>
            <Button colorScheme="teal" variant="outline">
              Python
            </Button>
            <Button colorScheme="teal" variant="outline">
              Django
            </Button>
            <Button colorScheme="teal" variant="outline">
              SQL
            </Button>
          </HStack>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project One
              </Heading>
              <Text mt={2}>Description of the first project. This project is about...</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project Two
              </Heading>
              <Text mt={2}>Description of the second project. This project is about...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Text fontSize="lg" mb={4}>
            Feel free to reach out to me via email at{" "}
            <Link href="mailto:john.doe@example.com" color="teal.500">
              john.doe@example.com
            </Link>
          </Text>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as={Link} href="https://github.com/johndoe" isExternal />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as={Link} href="https://linkedin.com/in/johndoe" isExternal />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" as={Link} href="https://twitter.com/johndoe" isExternal />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
