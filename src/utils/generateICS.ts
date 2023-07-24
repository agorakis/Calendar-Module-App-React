// This function generates the .ICS file content based on the "Event" data.

import { Event } from "../hooks/useEvents";

const generateICS = (event: Event) => {
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//EN
BEGIN:VEVENT
UID:${event.ID}
DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, "")}
DTSTART:${event.EventStartDate}
DTEND:${event.EventEndDate}
SUMMARY:${event.Title}
DESCRIPTION:${event.Description}
LOCATION:${event.AddressLine1}
END:VEVENT
END:VCALENDAR`;

  return icsContent;
};

export default generateICS;
