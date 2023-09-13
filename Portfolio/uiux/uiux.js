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
  indImgWidthAll.forEach(element => {
    element.width = viewerWidth;
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

    const viewer =  document.querySelector('.Frame');

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

  let divWidth = viewerFrame.offsetWidth;
  slideContainer.style.transform = `translateX(-${viewerFrame.offsetWidth}px)`;
  console.log(viewerFrame.offsetWidth);

}

function leftArrow(){
  console.log('leftArrow has been clicked')
  let divWidth = viewerFrame.offsetWidth;
  slideContainer.style.transform = `translateX(${viewerFrame.offsetWidth}px)`;
}








