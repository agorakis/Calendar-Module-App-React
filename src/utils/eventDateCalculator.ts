// This function takes as an argument the "EventStartDate" (type string) and calculates how much time
// left from today until the event - If the event take place less than a week.

const eventDateCalculator = (date: string) => {
  const eventDate = new Date(date); // Convert string of EventDate to date object
  const currentDate = new Date();
  const timeDifference = eventDate.getTime() - currentDate.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;

  // Calculatation of how much time left from today until the event for different cases.
  if (timeDifference < oneWeek) {
    const daysDifference = Math.floor(timeDifference / oneDay);
    if (daysDifference === 0) {
      const hoursDifference = Math.floor(timeDifference / (60 * 60 * 1000));
      if (hoursDifference === 0) {
        const minutesDifference = Math.floor(timeDifference / (60 * 1000));
        return `In ${minutesDifference} minute(s)`;
      } else {
        return `In ${hoursDifference} hour(s)`;
      }
    } else if (daysDifference < 0) {
      return "Event passed";
    } else {
      return `In ${daysDifference} day(s)`;
    }
  } else {
    const day = eventDate.getDate();
    const month = eventDate.getMonth() + 1; // Month is zero-based
    const year = eventDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
};

export default eventDateCalculator;
