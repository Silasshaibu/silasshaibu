//on windows load reset viewer screen to match 'active toggle device'
// Declaring widths of containers and slides and others

const pcButton = document.querySelector('.pc');
const tabletButton = document.querySelector('.tablet');

const viewerFrame = document.getElementById('viewerFrame');
const slideContainer = document.querySelector('.slideContainer');
const indImgWidthAll = document.querySelectorAll(".slide");
let viewerWidth = viewerFrame.offsetWidth;
let viewerHeight = viewerFrame.offsetHeight;




// Check if the window width is less than certain width, the upper devices toggle button should be disabled
window.addEventListener('resize', () => {
  pcButton.style.display = (window.innerWidth < 1024) ? "none" : "block";
  tabletButton.style.display = (window.innerWidth < 768) ? "none" : "block";
});

window.addEventListener('load', () => {
  indImgWidthAll.forEach(imgAttribute => {
    imgAttribute.width = viewerWidth;
  });
  console.log("Width of ScreenViewer: " + viewerWidth + " pixels");
});


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

      //Resize Viewer Devices upon tweaking Viewer Option for PC
        if (viewerName.includes('pc')) {
            viewerFrame.classList.remove('tablet', 'mobile');
            viewerFrame.classList.add('pc');

        }

        //Resize Viewer Devices upon tweaking Viewer Option for Tablet
        if (viewerName.includes('tablet')) {
            viewerFrame.classList.remove('pc', 'mobile');
            viewerFrame.classList.add('tablet');
        }

        //Resize Viewer Devices upon tweaking Viewer Option for Mobile
        if (viewerName.includes('mobile')) {
            viewerFrame.classList.remove('pc', 'tablet');
            viewerFrame.classList.add('mobile');
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

let defTanslateInterfval = 0;
let numOfSlides = slideContainer.childElementCount;
Slides = document.querySelectorAll('.slide');

function rightArrow(){
  let slideWidth = viewerFrame.offsetWidth;

  Slides.forEach(slide => {
    slide.width = slideWidth;
  });
  console.log(`Slide width is ${slideWidth}px`);


  //translate the slideContainer by a decrement of a slide width
  defTanslateInterfval -= slideWidth;

  slideContainer.style.transform =`translateX(${defTanslateInterfval}px)`;
  console.log(defTanslateInterfval);
}

function leftArrow(){
  let slideWidth = viewerFrame.offsetWidth;
  Slides.forEach(slide => {
    slide.width = slideWidth;
  });
  defTanslateInterfval += slideWidth;
  slideContainer.style.transform =`translateX(${defTanslateInterfval}px)`;
  console.log(defTanslateInterfval);
}






