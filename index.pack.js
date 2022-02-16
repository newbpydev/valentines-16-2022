document.getElementById("btn").addEventListener("click", correct);
const paragraphEl = document.getElementById("paragraph");
const inputEl = document.querySelector(".input-text");

function correct() {
  // Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
  // It should read "Valentine's"
  // Render the corrected message to the DOM.
  paragraphEl.textContent = inputEl.value;
  const paragrapthText = paragraphEl.textContent;
  let paragraphFixed = "";

  let isSpace = false;
  for (let i = 0; i < paragrapthText.length; i++) {
    if (i === 0 || isSpace === true) {
      paragraphFixed += paragrapthText[i].toUpperCase();
      isSpace = false;
    } else if (paragrapthText[i] === " ") {
      paragraphFixed += paragrapthText[i].toUpperCase();
      isSpace = true;
    } else {
      paragraphFixed += paragrapthText[i].toLowerCase();
    }
  }

  spanIt(paragrapthText, paragraphFixed);
  animateLetter();
}

//! spans the letters one by one
const spanIt = (paragraphOld, paragraphFixed) => {
  let spanEls = "";
  paragraphEl.textContent = "";

  for (let i = 0; i < paragraphOld.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("letter-box");

    let spanEl = document.createElement("span");
    spanEl.classList.add("letter");
    spanEl.textContent = paragraphOld[i];

    let spanFixed = document.createElement("span");
    spanFixed.classList.add("letter-fixed");
    spanFixed.textContent = paragraphFixed[i];

    newDiv.appendChild(spanEl);
    newDiv.appendChild(spanFixed);
    paragraphEl.appendChild(newDiv);
  }
};

const animateLetter = () => {
  const letterEl = document.querySelectorAll(".letter");
  const letterFixedEl = document.querySelectorAll(".letter-fixed");
  let interId = 0;
  let index = 0;

  interId = setInterval(() => {
    if (letterEl[index].textContent !== letterFixedEl[index].textContent) {
      letterEl[index].classList.add("inactive");
      letterFixedEl[index].classList.add("active");
    }
    index++;

    if (index === letterEl.length) {
      clearInterval(interId);
    }
  }, 200);
};

//! Keeping this code for future reference, you should too...
// function isUppercase(letter) {
//   return !/[a-z]/.test(letter) && /[A-Z]/.test(letter);
// }
