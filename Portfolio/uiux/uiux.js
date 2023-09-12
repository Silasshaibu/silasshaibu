//on windows load reset viewer screen to match 'active toggle device'


// Check if the window width is less than certain width, the upper devices toggle button should be disabled
window.addEventListener('resize', () => {
  const pcButton = document.querySelector('.pc');
  pcButton.style.display = (window.innerWidth < 1024) ? "none" : "block";

  const tabletButton = document.querySelector('.tablet');
  tabletButton.style.display = (window.innerWidth < 768) ? "none" : "block";
});


window.addEventListener('load', () => {
  const myDiv = document.getElementById('myDiv');
  const divWidth = myDiv.offsetWidth;
  const indImgWidthAll = document.querySelectorAll(".slide");

  indImgWidthAll.forEach(element => {
    element.width = divWidth;
  });

  console.log("Width of ScreenViewer: " + divWidth + " pixels");
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
            console.log('This is a PC Viewer');
            viewerFrame.classList.remove('tablet', 'mobile');
            viewerFrame.classList.add('pc');
        }

        //Resize Viewer Devices upon tweaking Viewer Option for Tablet
        if (viewerName.includes('tablet')) {
            console.log('It is a Tablet Viewer');
            viewerFrame.classList.remove('pc', 'mobile');
            viewerFrame.classList.add('tablet');
        }

        //Resize Viewer Devices upon tweaking Viewer Option for Mobile
        if (viewerName.includes('mobile')) {
            console.log('It is a mobile');
            viewerFrame.classList.remove('pc', 'tablet');
            viewerFrame.classList.add('mobile');
        }

        // Get the width of the div screen viewer
        let divWidth = myDiv.offsetWidth;
        let divHeight = myDiv.offsetHeight;
        console.log(`The Height is ${divHeight}`)
        var indImgWidthAll = document.querySelectorAll(".slide");

        indImgWidthAll.forEach(element => {
          element.width = divWidth;
        });

        // Output the width to the console
        console.log("Width of ScreenViewer: " + divWidth + " pixels");
    }
  });
}



// Declaring widths of containers and slides and others
const myDiv = document.getElementById('myDiv');
const slideContainer = document.querySelector('.slideContainer');
let divWidth = myDiv.offsetWidth;
let divHeight = myDiv.offsetHeight;

var numOfSlides = slideContainer.childElementCount;
let slideContainerWidth = numOfSlides * myDiv.offsetWidth;


function rightArrow(){
  console.log('rightArrow has been clicked')

  let divWidth = myDiv.offsetWidth;
  slideContainer.style.transform = `translateX(-${myDiv.offsetWidth}px)`;
  console.log(myDiv.offsetWidth);

}

function leftArrow(){
  console.log('leftArrow has been clicked')
  let divWidth = myDiv.offsetWidth;
  slideContainer.style.transform = `translateX(${myDiv.offsetWidth}px)`;
}








