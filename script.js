const btn = document.querySelector(".btn");
let adviceText = document.querySelector("#advice-text"); 

const fetchAdvice = async () => {

   const res = await fetch("https://api.adviceslip.com/advice")
   const data = await res.json()

   document.querySelector("#advice-id").innerHTML = `advice # ${data.slip.id}` ;
   
   adviceText.innerHTML = `"${data.slip.advice}"`;

   console.log(data)
}

fetchAdvice()

btn.addEventListener("click", () => {
   fetchAdvice()
})