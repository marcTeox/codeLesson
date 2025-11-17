function getLabelsHtml(message, sender, ...recipients) {
  let labelsHtml = "";
  recipients.forEach((recipient) => {
    let template = `<div class="label-card">
      <p>Dear ${recipient.name},</p>
      <p>${message}</p>
      <p>Best Wishes,</p>
      <p>${sender}</p>
    </div>`;
    labelsHtml += template;
  });
  return labelsHtml;
}

const text = "Thank you for all your hard work throughout the year!";
const sender = "Tom";

document.getElementById("labels-container").innerHTML = getLabelsHtml(
  text,
  sender,
  { name: "Sally" },
  { name: "Mike" },
  { name: "Rob" },
  { name: "Harriet" }
);
