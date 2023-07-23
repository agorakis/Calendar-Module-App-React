// This function takes as an arguments the "EventDate" (type string) and "Type" (type  "header" | "body" | "footer" | "onlyHour" )
// and returns a formatted date string due to the given "Type"

const dateFormatter = (
  date: string,
  type: "header" | "body" | "footer" | "onlyHour"
) => {
  const eventDate = new Date(date); // Convert string of EventDate to date object

  if (type === "header") {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    const day = eventDate.getDate();
    const month = months[eventDate.getMonth()];

    return `${day} ${month}`;
  }

  if (type === "body") {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const weekDay = days[eventDate.getDay()];
    const day = eventDate.getDate();
    const month = months[eventDate.getMonth()];
    const year = eventDate.getFullYear();

    return `${weekDay}, ${day} ${month} ${year}`;
  }

  if (type === "footer") {
    const day = eventDate.getDate();
    const month = eventDate.getMonth() + 1; // Month is zero-based
    const year = eventDate.getFullYear();
    const hour = eventDate.getHours();
    const minute = eventDate.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} at ${hour}:${minute}`;
  }

  if (type === "onlyHour") {
    const hour = eventDate.getHours();
    const minute = eventDate.getMinutes().toString().padStart(2, "0");

    return `${hour}:${minute}`;
  }

  return;
};

export default dateFormatter;
