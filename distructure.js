const dreamHoliday = {
  destination: "Bali",
  duration: "2 weeks",
  activities: ["snorkeling", "hiking", "relaxing on the beach"],
  budget: 3000,
};
const { destination, duration, activities, budget } = dreamHoliday;

const message = `My dream holiday is to ${destination} for ${duration}. I plan to spend my time ${activities.join(
  ", "
)} with a budget of $${budget}.`;
console.log(message);
