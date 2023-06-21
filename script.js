const reviewButtonElement = document.querySelector("#review-button");
const rateCardElement = document.querySelector("#rate-card");
const thankYouCardElement = document.querySelector("#thank-you-card");
const userRatingElement = document.querySelector("#user-rating");
reviewButtonElement.addEventListener("mousedown", (e) => {
  e.preventDefault();
});
reviewButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  const activeButton = document.activeElement;
  rateCardElement.classList.remove("show_content");
  rateCardElement.classList.add("hide_content");
  thankYouCardElement.classList.remove("hide_content");
  thankYouCardElement.classList.add("show_content");
  userRatingElement.innerHTML = activeButton.value;
});
