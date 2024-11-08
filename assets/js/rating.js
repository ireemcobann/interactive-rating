const buttons = document.querySelectorAll(".btn");
let secim;

for (const btn of buttons) {
  btn.addEventListener("click", btnFunction);
}

function btnFunction() {
  secim = Number(this.innerText);
  console.log(this.innerText);

}

const submit = document.querySelector('.submit');
submit.addEventListener('click' , submitle)
function submitle() {
    resultFunction();
}

function resultFunction() {
  const card = document.querySelector(".container");
  card.innerHTML = `
  <div class = "secimDiv">
     <img src="assets/images/card-img.svg" alt="">
     <h3>You selected ${secim} out of 5</h3>
            <h1>Thank You!</h1>
            <p>
             We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
            </div>
    `;
}
