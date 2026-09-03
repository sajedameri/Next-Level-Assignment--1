// Question No. 2
function getDayType(dayName) {
  const normalizedDay = dayName.toLowerCase();
  switch (normalizedDay) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}