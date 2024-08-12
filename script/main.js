let circularProgressOne = document.querySelector(".progress-1"),
  progressValueOne = document.querySelector(".value-1"); 

let progressStartValueOne = 0,
  progressEndValueOne = 100,
  speedOne = 10;

let progressOne = setInterval(() => {
  progressStartValueOne ++;
  
  progressValueOne.innerHTML = progressStartValueOne + "%";
  circularProgressOne.style.background = `conic-gradient(#F46258, ${progressStartValueOne * 3.6}deg, #c2c9d6 0deg)`; 
  
  if (progressStartValueOne === progressEndValueOne) {
    clearInterval(progressOne);
  }
}, speedOne);




let circularProgressTwo = document.querySelector(".progress-2"),
  progressValueTwo = document.querySelector(".value-2"); 

let progressStartValueTwo = 0,
  progressEndValueTwo = 90,
  speedTwo = 11.1;

let progressTwo = setInterval(() => {
  progressStartValueTwo ++;
  
  progressValueTwo.innerHTML = progressStartValueTwo + "%";
  circularProgressTwo.style.background = `conic-gradient(#F46258, ${progressStartValueTwo * 3.6}deg, #c2c9d6 0deg)`; 
  
  if (progressStartValueTwo === progressEndValueTwo) {
    clearInterval(progressTwo);
  }
}, speedTwo);



let circularProgressThree = document.querySelector(".progress-3"),
  progressValueThree = document.querySelector(".value-3"); 

let progressStartValueThree = 0,
  progressEndValueThree = 60,
  speedThree = 16 + 2/3;

let progressThree = setInterval(() => {
  progressStartValueThree ++;
  
  progressValueThree.innerHTML = progressStartValueThree + "%";
  circularProgressThree.style.background = `conic-gradient(#F46258, ${progressStartValueThree * 3.6}deg, #c2c9d6 0deg)`; 
  
  if (progressStartValueThree === progressEndValueThree) {
    clearInterval(progressThree);
  }
}, speedThree);


let numberOne = document.querySelector(".number-1"),
  startNumberOne = 0,
  endNumberOne = 100,
  numberOneSpeed = 26;
  if(numberOne) {
    let countOne = setInterval(() => {
      startNumberOne++;
      numberOne.innerHTML = startNumberOne + " +"
      if(startNumberOne === endNumberOne) {
        clearInterval(countOne);
      }
    }, numberOneSpeed);
  }


let numberTwo = document.querySelector(".number-2"),
  startNumberTwo = 0,
  endNumberTwo = 7,
  numberTwoSpeed = 300;

  if(numberTwo) {
    let countTwo = setInterval(() => {
      startNumberTwo++;
      numberTwo.innerHTML = startNumberTwo;
      if(startNumberTwo === endNumberTwo) {
        clearInterval(countTwo);
      }
    }, numberTwoSpeed);
  }


let numberThree = document.querySelector(".number-3"),
  startNumberThree = 0,
  endNumberThree = 2,
  numberThreeSpeed = 1200;

  if(numberThree) {
    let countThree = setInterval(() => {
      startNumberThree++;
      numberThree.innerHTML = startNumberThree
      if(startNumberThree === endNumberThree) {
        clearInterval(countThree);
      }
    }, numberThreeSpeed);
  }


let numberFour = document.querySelector(".number-4"),
  startNumberFour = 0,
  endNumberFour = 150,
  numberFourSpeed = 15;

  if(numberFour) {
    let countFour = setInterval(() => {
      startNumberFour++;
      numberFour.innerHTML = startNumberFour + " +"
      if(startNumberFour === endNumberFour) {
        clearInterval(countFour);
      }
    }, numberFourSpeed);
  }

document.addEventListener('DOMContentLoaded', function () {
  const dotMenu = document.querySelector('.dot-menu');
  const sidebarLeft = document.querySelector('.sidebar-left');

  dotMenu.addEventListener('click', function () {

    const isOpen = sidebarLeft.classList.toggle('open');
    const overlay = document.querySelector(".overlay")

    dotMenu.style.transform = isOpen ? 'translateX(290px)' : 'translateX(0)';
    overlay.classList.toggle('show', isOpen);
  });
});

const contact = document.querySelectorAll('.kontakt');
const arrow = document.querySelectorAll('.arrow');

contact.forEach((contact, index) => {
  contact.addEventListener('mouseover', () => {
    arrow[index].style.marginLeft = "0.8em";
  });
})

contact.forEach((contact, index) => {
  contact.addEventListener('mouseleave', () => {
    arrow[index].style.marginLeft = "0.4em";
  })
})


