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
  const imageContainer = document.getElementById('image-container');
  imageContainer.style.aspectRatio = aspectRatios[device];
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

// Function to update the active device and adjust aspect ratio
function setActiveDevice(device) {
  activeDevice = device;
  // Update aspect ratio for all images
  images.forEach((img) => {
      img.style.aspectRatio = aspectRatios[activeDevice];
  });
}

// Initialize with the first project and its images for the default device (tablet)
const initialProject = projectListItems[0].dataset.project;
updateImages(projects[initialProject][activeDevice]);
projectListItems[0].classList.add('active');
updateAspectRatio(activeDevice); // Set the initial aspect ratio to the default device (tablet)
setActiveDevice(activeDevice); // Set the initial device option as active


//To avoid stretching of the image, do this
//on windows load, let Tablet be clicked and the first project be selected by default.