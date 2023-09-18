// JavaScript for image navigation and aspect ratio adjustment
// Function to set the initial state on page load
function setInitialState() {
  // Set "Project 1" as the active project
  const initialProject = 'project1';
  const project1Item = document.querySelector(`#project-list li[data-project="${initialProject}"]`);
  projectListItems.forEach((item) => {
      item.classList.remove('active');
  });
  project1Item.classList.add('active');

  // Set "Tablet" as the active device
  const initialDevice = 'tablet';
  const tabletItem = document.querySelector(`nav li[data-device="${initialDevice}"]`);
  deviceOptions.forEach((option) => {
      option.classList.remove('active');
  });
  tabletItem.classList.add('active');

  // Update images and aspect ratio
  updateImages(projects[initialProject][initialDevice]);
  updateAspectRatio(initialDevice);
  setActiveDevice(initialDevice);
}

// Call the setInitialState function on window load
window.addEventListener('load', () => {
  setInitialState();
});

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const images = document.querySelectorAll('#image-container img');
const projectListItems = document.querySelectorAll('#project-list li');
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
          'tablet-image1.jpg',
          'tablet-image2.jpg',
          'tablet-image3.jpg'
      ],
      mobile: [
          'mobile-image1.jpg',
          'mobile-image2.jpg',
          'mobile-image3.jpg'
      ],
      pc: [
          'pc-image1.jpg',
          'pc-image2.jpg',
          'pc-image3.jpg'
      ]
  },
  project2: {
      tablet: [
          'tablet-image4.jpg',
          'tablet-image5.jpg',
          'tablet-image6.jpg'
      ],
      mobile: [
          'mobile-image4.jpg',
          'mobile-image5.jpg',
          'mobile-image6.jpg'
      ],
      pc: [
          'pc-image4.jpg',
          'pc-image5.jpg',
          'pc-image6.jpg'
      ]
  }
};

// Function to update the aspect ratio of the image container
function updateAspectRatio(device) {
  const imageContainer = document.getElementById('image-container');
  imageContainer.style.paddingBottom = `calc(${aspectRatios[device]} * 100%)`;
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
const deviceOptions = document.querySelectorAll('nav li');
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
      img.style.paddingBottom = `calc(${aspectRatios[activeDevice]} * 100%)`;
  });
}

// Initialize with the first project and its images for the default device (tablet)
const initialProject = projectListItems[0].dataset.project;
updateImages(projects[initialProject][activeDevice]);
projectListItems[0].classList.add('active');
updateAspectRatio(activeDevice); // Set the initial aspect ratio to the default device (tablet)
setActiveDevice(activeDevice); // Set the initial device option as active



