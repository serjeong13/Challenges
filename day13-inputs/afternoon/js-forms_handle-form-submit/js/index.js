console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const AgeBadnessSum = Number(data.age) + Number(data.badness);

  console.log(`The age of badness of ${data.firstName} is ${AgeBadnessSum}`);
});
