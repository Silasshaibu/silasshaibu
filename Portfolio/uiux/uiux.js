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
//Any empty array created to house every project added
const uiuxProjects = [];

//Create an object named "BIMTO"
let bimtoUIUX = {
  name:"BIMTO",
  liveUrl:"https://bimto.co.uk",
  shortDescription:"BIMTO is an ecommerce website aimed at etc",
  views:{
    tablet:{
      images: ["tablet-image1.jpg", "tablet-image2.jpg", "tablet-image3.jpg"],
    },
    desktop:{
      images: ["desktop-image1.jpg", "desktop-image2.jpg", "desktop-image3.jpg"],
    },
    mobile:{
      images: ["mobile-image1.jpg", "mobile-image2.jpg", "mobile-image3.jpg"],
    }
  }
}

// Add the "BIMTO" object to the array
uiuxProjects.push(bimtoUIUX);
console.log(uiuxProjects[0]);




//on click on bimto li what should happen
function displayBIMTO(){
  //Extracting the tablet image sets for BIMTO
  for (let i = 0; i < bimtoUIUX.views.tablet.images.length; i++) {
    const imageSrc = bimtoUIUX.views.tablet.images[i];
    const imageWdh = viewerWidth;
    // Create an img element with class tablet--version"
    const tabletImg = document.createElement("img");
    tabletImg.className = "slide tablet--version";

    tabletImg.src = imageSrc;
    tabletImg.style.minWidth = `${imageWdh}px`;
    tabletImg.style.minHeight = '200px';
    // Append the tablet imgs to the slideContainer
    slideContainer.appendChild(tabletImg);
    console.log(tabletImg);
  }

  for (let j = 0; j < bimtoUIUX.views.mobile.images.length; j++) {
    const imageSrc = bimtoUIUX.views.mobile.images[j];
    const imageWdh = viewerWidth;

    // Create an img element with class mobile--version"
    const mobileImg = document.createElement("img");
    mobileImg.className = "slide mobile--version";

    mobileImg.src = imageSrc;
    mobileImg.style.minWidth = `${imageWdh}px`;
    mobileImg.style.minHeight = '200px';
    // Append the mobile imgs to the slideContainer
    slideContainer.appendChild(mobileImg);
    console.log(mobileImg);
  }

  for (let k = 0; k < bimtoUIUX.views.desktop.images.length; k++) {
    const imageSrc = bimtoUIUX.views.desktop.images[k];
    const imageWdh = viewerWidth;

    // Create an img element with class desktop--version"
    const desktopImg = document.createElement("img");
    desktopImg.className = "slide desktop--version";

    desktopImg.src = imageSrc;
    desktopImg.style.minWidth = `${imageWdh}px`;
    desktopImg.style.minHeight = '200px';
    // Append the desktop imgs to the slideContainer
    slideContainer.appendChild(desktopImg);
    console.log(desktopImg);
  }


  // Iterate through the categories and count the images
  let totalImages = 0;
  for (let view in bimtoUIUX.views) {
    if (bimtoUIUX.views.hasOwnProperty(view)) {
      totalImages += bimtoUIUX.views[view].images.length;
    }
  }
  console.log(`"Total number of images for ${bimtoUIUX.name} is ${totalImages} `);
}

//we want that on click on BIMTO Button,
//it should remove any image tag found in the slideContainer,
//then it should create image tags where the number of tags is the sum of all the images in all the views(categories) put together
//then it should check add the tablet class to the images from the tablet images array list
//it should also add the mobile class to the images from the tablet images array list
//it should also add the desktop class to the images from the tablet image array li





