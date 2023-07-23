import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Container,
  Divider,
  Image,
  Grid,
  GridItem,
  Center,
  Box,
} from "@chakra-ui/react";
import { Event } from "../hooks/useEvents";
import dateFormatter from "../services/dateFormatter";

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xxl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Grid templateColumns="repeat(6, 1fr)" pt={6} pr={6} gap={6}>
            <GridItem colSpan={4} bg="gray.50">
              <Center h="100%">
                <Image
                  src={event.BannerUrl}
                  objectFit="fill"
                  fallbackSrc="https://via.placeholder.com/600x300"
                />
              </Center>
            </GridItem>

            <GridItem
              p={3}
              colSpan={2}
              bg="gray.50"
              display="flex"
              rowGap={4}
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box fontSize="md">
                {dateFormatter(event.EventStartDate, "header")}
              </Box>

              <Box fontSize="xl">{event.Title}</Box>

              <Box fontSize="sm">{event.Category}</Box>
            </GridItem>
          </Grid>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Grid templateColumns="repeat(6, 1fr)" pr={6} gap={6}>
            <GridItem
              colSpan={4}
              display="flex"
              rowGap={4}
              flexDirection="column"
            >
              <Box fontSize="md" fontWeight="bold">
                DESCRIPTION
              </Box>

              <Box
                fontSize="sm"
                dangerouslySetInnerHTML={{ __html: event.Description }}
              />
            </GridItem>

            <GridItem
              colSpan={2}
              display="flex"
              rowGap={3}
              flexDirection="column"
            >
              <Box fontSize="md" fontWeight="bold">
                DATE AND TIME
              </Box>

              <Box fontSize="sm">
                {dateFormatter(event.EventStartDate, "body")}{" "}
                {event.FullDayEvent === "TRUE"
                  ? "- Full Day Event"
                  : `- Starts: ${dateFormatter(
                      event.EventStartDate,
                      "onlyHour"
                    )} and Ends: ${dateFormatter(
                      event.EventEndDate,
                      "onlyHour"
                    )} `}
              </Box>

              <Box fontSize="sm">
                <a>Add to Calendar</a>
              </Box>

              <Box fontSize="md" fontWeight="bold" mt={5}>
                LOCATION
              </Box>

              <GridItem display="flex" flexDirection="column">
                <Box fontSize="sm">{event.AddressLine1}</Box>
                <Box fontSize="sm">{event.City}</Box>
                <Box fontSize="sm">{event.PostCode}</Box>
                <Box fontSize="sm">{event.Country}</Box>
              </GridItem>

              <Box fontSize="sm">
                <a>View Map</a>
              </Box>
            </GridItem>
          </Grid>
        </ModalBody>

        <Divider mt={20} />
        <VStack px={2} py={3} gap={2} alignSelf={"flex-start"}>
          <Container>
            Created by: {event.Author} on{" "}
            {dateFormatter(event.Created, "footer")}
          </Container>
          <Container>
            Modified by: {event.Editor} on{" "}
            {dateFormatter(event.Modified, "footer")}
          </Container>
        </VStack>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
