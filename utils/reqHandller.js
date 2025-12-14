export const requestHandler = (req, handler, destination) => {
  const path = req.url.replace(/\/$/, "").split("/").pop().toLowerCase();
  const filteredDestinations = destination.filter(
    (dest) => dest[handler].toLowerCase() === path
  );
  return filteredDestinations;
};
