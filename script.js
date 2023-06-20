const reviewButtonElement = document.querySelector("#review-button");
const reviewFormElement = document.querySelector("#review-form");
const rateCardElement = document.querySelector("#rate-card");
const thankYouCardElement = document.querySelector("#thank-you-card");
const userRatingElement = document.querySelector("#user-rating");
reviewButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedRatingElement = document.querySelector(
    'input[name="rate"]:checked'
  );
  console.log(selectedRatingElement);
  rateCardElement.classList.remove("show_content");
  rateCardElement.classList.add("hide_content");
  thankYouCardElement.classList.remove("hide_content");
  thankYouCardElement.classList.add("show_content");
  userRatingElement.innerHTML = selectedRatingElement.value;
});
