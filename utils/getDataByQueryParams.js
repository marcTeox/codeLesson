export const getDataByQueryParams = (data, queryParams) => {
  const { country, continent, is_to_open_to_public } = queryParams;
  return data.filter((item) => {
    let isMatch = true;
    if (country) {
      isMatch = isMatch && item.country.toLowerCase() === country.toLowerCase();
    }
    if (continent) {
      isMatch =
        isMatch && item.continent.toLowerCase() === continent.toLowerCase();
    }
    if (is_to_open_to_public !== undefined) {
      const isOpen = is_to_open_to_public.toLowerCase() === "true";
      console.log(typeof isOpen);
      isMatch = isMatch && item.is_open_to_public === isOpen;
    }
    return isMatch;
  });
};
