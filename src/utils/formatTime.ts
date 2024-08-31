export const formatTime = (time: Date) => {
  return time.toLocaleString("sv-SE", {
    timeZone: "Europe/Stockholm",
    hour12: false,
  });
};
