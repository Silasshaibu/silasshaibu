// Declarations
const projectListItems = document.querySelectorAll('#project-list li');
const deviceOptions = document.querySelectorAll('nav li');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const images = document.querySelectorAll('#image-container img');
let currentIndex = 0;
let activeDevice = 'tablet'; // Default active device

// Define aspect ratios for different devices
const aspectRatios = {
  tablet: '4/3',
  mobile: '9/16',
  pc: '16/9'
};

// Define project data with images for each device
const projects = {
  project1: {
    name:"Bimto",
    liveWebsite:"http://www.google.com",
    fileDownloadLink:"bimto-uiux.pdf",
    tablet: [
      '1024x768_Bimteo_01_Tablet.jpg',
      '1024x768_Bimteo_02_Tablet.jpg'
    ],
    mobile: [
      '768x384_Bimteo_01_Mobile.jpg',
      '768x384_Bimteo_01_Mobile.jpg'
    ],
    pc: [
      '1920x1080_Bimteo_01_desktop.jpg',
      '1920x1080_Bimteo_02_desktop.jpg'
    ]
  },
  project2: {
    name:"AskMeAbroad",
    liveWebsite:"http://www.askmeabroad.com",
    fileDownloadLink:"",
    tablet: [
      '1024x768_Bimto_01_Tablet.jpg',
      '1024x768_Bimto_02_Tablet.jpg'
    ],
    mobile: [
      '768x384_Bimto_01_Mobile.jpg',
      '768x384_Bimto_01_Mobile.jpg'
    ],
    pc: [
      '1920x1080_Bimto_01_desktop.jpg',
      '1920x1080_Bimto_02_desktop.jpg'
    ]
  }
};

// Function to update the aspect ratio of the image container

function updateAspectRatio(device) {
  const imageCustomize = document.querySelector('.deviceViewer--imageCustomize');
  imageCustomize.style.aspectRatio = aspectRatios[device];
}


// Function to navigate images
function navigateImage(direction) {
  images[currentIndex].classList.remove('active'); // Remove the 'active' class from the current image
  currentIndex += direction;

  // Ensure the index stays within bounds
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  images[currentIndex].classList.add('active'); // Add the 'active' class to the new current image
}

// Event listener for left arrow button
leftArrow.addEventListener('click', () => {
  navigateImage(-1); // Move to the previous image
});

// Event listener for right arrow button
rightArrow.addEventListener('click', () => {
  navigateImage(1); // Move to the next image
});

// Event listeners for project list items
// Event listeners for project list items
projectListItems.forEach((item) => {
  item.addEventListener('click', () => {
    const project = item.dataset.project;
    // Highlight the selected project
    projectListItems.forEach((li) => {
      li.classList.remove('active');
    });
    item.classList.add('active');
    // Update the image list based on the selected project and device
    updateImages(projects[project][activeDevice]);
  });

  // Add an event listener to the download SVG icon within each project list item
  const downloadIcon = item.querySelector('.svgListStyle.download');
  if (downloadIcon) {
    const project = item.dataset.project;
    const fileDownloadLink = projects[project].fileDownloadLink;
    if (fileDownloadLink) {
      downloadIcon.style.display = 'inline-block'; // Show the SVG icon
      downloadIcon.addEventListener('click', () => {
        // Create an anchor element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = fileDownloadLink;
        downloadLink.download = `${projects[project].name}_download.pdf`; // Customize the file name if needed
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
    } else {
      downloadIcon.style.display = 'none'; // Hide the SVG icon
    }
  }

  // Add an event listener to the web SVG icon within each project list item
  const webIcon = item.querySelector('.svgListStyle.web');
  if (webIcon) {
    const project = item.dataset.project;
    const liveWebsite = projects[project].liveWebsite;
    if (liveWebsite) {
      webIcon.style.display = 'inline-block'; // Show the SVG icon
      webIcon.addEventListener('click', () => {
        // Open a new window or tab with the fixed URL
        window.open(liveWebsite, '_blank');
      });
    } else {
      webIcon.style.display = 'none'; // Hide the SVG icon
    }
  }
});



// Event listeners for device options (tablet, mobile, pc)
deviceOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const device = option.dataset.device;
    // Highlight the selected device option
    deviceOptions.forEach((li) => {
      li.classList.remove('active');
    });
    option.classList.add('active');
    // Update the active device and adjust aspect ratio
    setActiveDevice(device);
    // Update the image list based on the selected project and device
    const activeProject = document.querySelector('#project-list li.active').dataset.project;
    updateImages(projects[activeProject][device]);
  });
});

// Function to update images based on selected project and device
function updateImages(imageList) {
  // Hide all images
  images.forEach((img) => {
    img.classList.remove('active');
  });

  // Display images for the selected project and device
  imageList.forEach((imageName, index) => {
    images[index].src = imageName;

    // Update alt attribute following the specified format
    const activeProject = document.querySelector('#project-list li.active').dataset.project;
    images[index].alt = `${activeProject}_${activeDevice}_image${index + 1}`;
  });

  // Start with the first image displayed
  currentIndex = 0;
  images[currentIndex].classList.add('active');
}

// Function to update the active device
function setActiveDevice(device) {
  activeDevice = device;
}

// Function to set the default project, device, and display images
function setDefaultProjectAndDevice() {
  // Select the first project in the list and mark it as active
  const firstProjectItem = projectListItems[0];
  firstProjectItem.classList.add('active');

  // Set the default device to "Tablet" and mark it as active
  const defaultDeviceOption = document.querySelector('nav li[data-device="tablet"]');
  defaultDeviceOption.classList.add('active');

  // Get the selected project and device
  const selectedProject = firstProjectItem.dataset.project;
  const selectedDevice = defaultDeviceOption.dataset.device;

  // Update the image list based on the selected project and device
  updateImages(projects[selectedProject][selectedDevice]);
}

// Call the function to set the default project and device after the DOM has loaded
document.addEventListener('DOMContentLoaded', setDefaultProjectAndDevice);

// Call the function initially to set device options based on the initial screen width
updateDeviceOptions();
