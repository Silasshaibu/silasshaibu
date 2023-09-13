//on windows load reset viewer screen to match 'active toggle device'
// Declaring widths of containers and slides and others

const pcButton = document.querySelector('.pc');
const tabletButton = document.querySelector('.tablet');

const viewerFrame = document.getElementById('viewerFrame');
const slideContainer = document.querySelector('.slideContainer');
const indImgWidthAll = document.querySelectorAll(".slide");
let viewerWidth = viewerFrame.offsetWidth;
let viewerHeight = viewerFrame.offsetHeight;

var numOfSlides = slideContainer.childElementCount;
let slideContainerWidth = numOfSlides * viewerFrame.offsetWidth;

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

function rightArrow(){
  console.log('rightArrow has been clicked')
  //get the width of the image attribute
  //get the width of the viewer
  //get the width of the slideContainer
  indImgWidthAll.forEach(element => {
    element.width = viewerWidth;
  });
  console.log(`The width of the image is + ${viewerWidth} + px`);
  console.log(`The width of the viewer is + ${slideContainerWidth}  `);
}

function leftArrow(){
  console.log('leftArrow has been clicked')
  let divWidth = viewerFrame.offsetWidth;
  // slideContainer.style.transform = `translateX(${viewerWidth}px)`;
}

//on click on right arrow, compare if the width of the image matches the
//width of the viewer frame before translating it left or right

//a carousel slider, such that it has an action button where by when user clicks on the left arrow it slides left and when the right arrow is clicked, it slides right.






