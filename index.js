// const allBoxes = document.querySelectorAll(".skills-box");

// allBoxes.forEach((box) => {

//     box.innerHTML += box.innerHTML + box.innerHTML

//     let scrollPos = 0;

// function moveSkills() {
//     scrollPos += 1;

//     if (scrollPos >= box.scrollWidth / 2) {
//         scrollPos = 0;
//     }

//     box.scrollLeft = scrollPos;

//     requestAnimationFrame(moveSkills);
// }

// moveSkills();
// });



// const certBox = document.querySelector(".certs_box");

// if(certBox) {

//     certBox.innerHTML += certBox.innerHTML + certBox.innerHTML;

//     let scrollPos = 0;

//     function moveCerts(){
//         scrollPos += 1;

//         if(scrollPos >= certBox.scrollWidth / 2) {
//             scrollPos = 0;
//         }

//         certBox.scrollLeft = scrollPos;
//         requestAnimationFrame(moveCerts)
//      }
//      moveCerts();
// }


function enableScrollPause(selector) {
    const boxes = document.querySelectorAll(selector);

  boxes.forEach((box) => {  
    if (!box) return;
    
    let scrollPos = 0;
    let isPaused = false;

    box.innerHTML += box.innerHTML + box.innerHTML;

    function moveScroll() {
       if (!isPaused) {
        scrollPos += 1;
        if (scrollPos >= box.scrollWidth / 2) {
            scrollPos = 0;
        }
        box.scrollLeft = scrollPos;
       }
       requestAnimationFrame(moveScroll);
    }

    box.addEventListener("mouseenter", () => (isPaused = true));
    box.addEventListener("mouseleave", () => (isPaused = false));

    moveScroll();
  });
}

enableScrollPause(".skills-box");
enableScrollPause(".certs_box");

