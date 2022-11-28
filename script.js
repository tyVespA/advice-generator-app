const btn = document.querySelector(".btn");
let adviceText = document.querySelector("#advice-text");

function generateRandomId() {
  const minId = 1;
  const maxId = 224;
  return Math.floor(Math.random() * (maxId - minId + 1)) + minId;
}

const fetchAdvice = async () => {
  const id = generateRandomId();
  const res = await fetch(`https://api.adviceslip.com/advice/${id}`);
  const data = await res.json();

  document.querySelector("#advice-id").textContent = `advice # ${data.slip.id}`;

  adviceText.textContent = data.slip.advice;

  console.log(data);
};

fetchAdvice();

btn.addEventListener("click", () => {
  fetchAdvice();
});
