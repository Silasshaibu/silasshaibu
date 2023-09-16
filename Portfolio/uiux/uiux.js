//DEFAULTS PRESET
const pcButton = document.querySelector('.pc');
const tabletButton = document.querySelector('.tablet');

const viewerFrame = document.getElementById('viewerFrame');
const slideContainer = document.querySelector('.slideContainer');
const indImgWidthAll = document.querySelectorAll(".slide");
let viewerWidth = viewerFrame.offsetWidth;
let viewerHeight = viewerFrame.offsetHeight;

// RESIZE WINDOW - Check if the window width is less than certain width, the upper devices toggle button should be disabled
window.addEventListener('resize', () => {
  pcButton.style.display = (window.innerWidth < 1024) ? "none" : "inline-block";
  tabletButton.style.display = (window.innerWidth < 768) ? "none" : "inline-block";
});

//WINDOW ON LOAD
window.addEventListener('load', () => {
  indImgWidthAll.forEach(imgAttribute => {
    imgAttribute.width = viewerWidth;
  });

  slideContainer.style.width = `${viewerWidth * slideContainer.childElementCount }px`;

  Slides.forEach(slide => {
    slide.classList.contains('desktop--version') || slide.classList.contains('mobile--version') ? slide.style.display = 'none' : slide.style.display = 'inline-block';

    // //identifying the active slide or current slide
    // slide.classList.contains('active')?console.log(slide): console.log('do nothing') ;
  });
  console.log("Width of ScreenViewer: " + viewerWidth + " pixels");

});

let defTanslateInterfval = 0;
let numOfSlides = slideContainer.childElementCount;
Slides = document.querySelectorAll('.slide');

//RIGHT ARROW
function rightArrow(){
  let slideWidth = viewerFrame.offsetWidth;
  let numOfSlidesCompatibleWithCurrentDevice = 0;

  Slides.forEach(slide => {
    slide.width = slideWidth;


    //if this current slide does not have a previousElementSibling with a class that matches the current div then it is the first slide.

     // console.log(slide.nextElementSibling);
      // console.log(slide);
      // console.log(slide.parentElement);


    if (slide.classList.contains('active') && (slide.previousElementSibling)){
        console.log(slide);
        console.log('this was the first element')
      }
      ///CONTINUE FROM HERE 🏆

    //Below is to get the number of availabe slides for the current viewer}
    if (slide.style.display === 'inline-block'){
      numOfSlidesCompatibleWithCurrentDevice++;
    }
    //get the lastElementsSibling that has a class of  that matches the current device e.g tablet
    //
  });

  //if slide do not have a previous element or previous slibling,
  //then create one for it at its previous position

  //if current slide has active class, get the slide position
  //translate the slideContainer by a decrement of a slide width
  defTanslateInterfval -= slideWidth;
  slideContainer.style.transform =`translateX(${defTanslateInterfval}px)`;
}


//LEFT ARROW
function leftArrow(){
  let slideWidth = viewerFrame.offsetWidth;
  Slides.forEach(slide => {
    slide.width = slideWidth;
  });
  defTanslateInterfval += slideWidth;
  slideContainer.style.transform =`translateX(${defTanslateInterfval}px)`;
  console.log(defTanslateInterfval);
}


//TOGGLE BUTTONS FOR DIFFERENT DEVICES (TABLET, PC, MOBILE)
function toggleDeviceOptions() {
  const switchNav = document.querySelector('.switchNav');
  const allBtns = switchNav.querySelectorAll('li');
  const activeElement = switchNav.querySelector('.active');

    if (activeElement) {
      activeElement.classList.remove('active');
    }

  switchNav.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.matches('li')) {
      clickedElement.classList.add('active');
      const viewerName = clickedElement.innerHTML.toLowerCase();
      const viewerFrame = document.querySelector('.ViewerFrame')

      //resetting the translate state back to 0
      let defTanslateInterfval = 0;

      //Resize Viewer Devices upon tweaking Viewer Option for PC
        if (viewerName.includes('pc')) {
            viewerFrame.classList.remove('tablet', 'mobile');
            viewerFrame.classList.add('pc');

            Slides.forEach(slide => {
              slide.classList.contains('mobile--version') || slide.classList.contains('tablet--version') ? slide.style.display = 'none': slide.style.display = 'inline-block'
            });
        }

        //Resize Viewer Devices upon tweaking Viewer Option for Tablet
        if (viewerName.includes('tablet')) {
            viewerFrame.classList.remove('pc', 'mobile');
            viewerFrame.classList.add('tablet');

            Slides.forEach(slide => {
              slide.classList.contains('desktop--version') || slide.classList.contains('mobile--version') ? slide.style.display = 'none': slide.style.display = 'inline-block';
            });
        }

        //Resize Viewer Devices upon tweaking Viewer Option for Mobile
        if (viewerName.includes('mobile')) {
            viewerFrame.classList.remove('pc', 'tablet');
            viewerFrame.classList.add('mobile');

            Slides.forEach(slide => {
              slide.classList.contains('desktop--version') || slide.classList.contains('tablet--version') ? slide.style.display = 'none' : slide.style.display = 'inline-block';
            });
        }

        // Get the width of the div screen viewer
        let viewerWidth = viewerFrame.offsetWidth;
        let viewerHeight = viewerFrame.offsetHeight;
        var indImgWidthAll = document.querySelectorAll(".slide");

        indImgWidthAll.forEach(element => {
          element.width = viewerWidth;
        });

        // Output the width to the console
        console.log("Width of ScreenViewer: " + viewerWidth + " pixels");
    }
  });
}


//localStorage 







