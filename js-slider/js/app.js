// NOTE: WHEN YOU USE GET ELEMENT BY CLASSNAME GIVES YOU AN ARRAY SO WHEN YOU REMOVE THE [0]
// YOU ARE ABLE TO GET ALL OF THE CLASS NAMES WITH THE NAME - JUMBO-SLIDER__SLIDE

// IF YOU USE A , IN A VARIABLE YOUR ABLE TO ADD MULTIPLE ELEMENTS or VARIABLES INSIDE A VARIABLE

let init = () => {
  let container = document.getElementsByClassName("jumbo-slider__container")[0],
    slides = document.getElementsByClassName("jumbo-slider__slide"),
    circles = document.getElementsByClassName("jumbo-slider__circle"),
    links = document.getElementsByClassName("jumbo-slider__link"),
    current = 1,
    time = 6000;
  console.log(`current: ${current}`);

  // ADD ANIMATION CLASS TO SLIDE
  slides[0].classList.add("jumbo-slider__slide--active");
  links[current - 1].classList.add("jumbo-slider__link--active");
  circles[current - 1].classList.add("jumbo-slider__circle--active");

  // FUNCTION TO UPDATE ELIPSIS & LINKS (FUNCTION INSIDE A VARIABLE)

  let updateNav = () => {
    // USING CONSOLE LOG FOR DEBUGGING to SEE WHAT CURRENT VARIABLE IS DOING
    console.log(`update current: ${current}`);
    for (let index = 0; index < slides.length; index++) {
      links[index].classList.remove("jumbo-slider__link--active");

      circles[index].classList.remove("jumbo-slider__circle--filled");
    }
    links[current - 1].classList.add("jumbo-slider__link--active");
    circles[current - 1].classList.add("jumbo-slider__circle--filled");
  };
  let startSliding = () => {
    //   SET INTERVAL - FOREVER LOOP - THIS WILL RUN EVERY 6 SECONDS
    setInterval(() => {
      // REMOVE FROM ACTIVE FROM FIRST AND ADD IT TO THE SECOND SLIDE SO IT CAN BERCOME THE FIRST SLIDE WITH THE CLASS ACTIVATED
      //   console.log(`current: ${current}`);
      slides[1].classList.add("jumbo-slider__slide--active");
      slides[0].classList.remove("jumbo-slider__slide--active");

      //   Clone the first slide and place on the last space
      container.appendChild(slides[0].cloneNode([true]));
      //   then remove the first slide after it has been cloned
      container.removeChild(slides[0]);

      //   HOW TO CHECK AND SEE HOW MANY SLIDES ARE IN SLIDE VARIABLE
      //   console.log(`slides: ${slides.length}`);

      if (current < slides.length) {
        current++;
        updateNav(current);
      } else {
        current = 1;
        updateNav(current);
      }
    }, time);
  };
  startSliding();
};

// TRIGGER THE FUNCTION
init();
