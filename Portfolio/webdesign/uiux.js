// JavaScript code for your UI/UX Portfolio

// Define aspect ratios for different devices
const aspectRatios = {
  tablet: '4/3',
  mobile: '9/16',
  pc: '16/9'
};

// Define project data with images for each device
const projects = {
  project1: {
    name: "Bimto",
    tools: "Adobe XD",
    description:"Ecommerce",
    liveWebsite: "http://www.google.com",
    fileDownloadLink: "bimto-uiux.pdf",
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
    name: "AskMeAbroad",
    tools: "Adobe XD",
    description:"Educational",
    liveWebsite: "http://www.askmeabroad.com",
    fileDownloadLink: "",
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
  },
  project3: {
    name: "Optimum-Payments",
    tools: "Adobe XD",
    description:"Affiliate",
    liveWebsite: "",
    fileDownloadLink: "Anytechsolutions.pdf",
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



// Function to populate the project list dynamically
function populateProjectList() {
  const projectList = document.querySelector('#project-list ul');

  // Loop through each project in the 'projects' object
  for (const projectKey in projects) {
    if (projects.hasOwnProperty(projectKey)) {
      const project = projects[projectKey];



      // Create a new list item element
      const listItem = document.createElement('li');
      listItem.dataset.project = projectKey;

      // Create a div for the project details
      const projectDetails = document.createElement('div');
      projectDetails.classList.add('project-details');

      // Create spans for the project name, description, and tools
      const projectName = document.createElement('span');
      projectName.textContent = `${project.name}`;

      const projectDescription = document.createElement('p');
      projectDescription.textContent = `Type: ${project.description}`;

      const projectTools = document.createElement('span');
      projectTools.textContent = `Tools: ${project.tools}`;

      // Append the spans to the project details div
      projectDetails.appendChild(projectName);
      projectDetails.appendChild(projectDescription);
      projectDetails.appendChild(projectTools);

      // Create a div for the action icons
      const actionIcons = document.createElement('div');
      actionIcons.classList.add('action-icons');




      // Create an SVG icon for the live website link
      if (project.liveWebsite) {
        const webIcon = document.createElement('img');
        webIcon.classList.add('svgListStyle', 'web');
        webIcon.src = 'web.svg'; // Replace with the URL of your SVG icon
        webIcon.alt = 'Live Site';
        webIcon.addEventListener('click', () => {
          window.open(project.liveWebsite, '_blank');
        });
        actionIcons.appendChild(webIcon);
      }

      // Create an SVG icon for the download action
      if (project.fileDownloadLink) {
        const downloadIcon = document.createElement('img');
        downloadIcon.classList.add('svgListStyle', 'download');
        downloadIcon.src = 'downloadIcon.svg'; // Replace with the URL of your download SVG icon
        downloadIcon.alt = 'Download Icon';

        // Add an event listener for the download action
        downloadIcon.addEventListener('click', () => {
          // Handle the download logic here
          // For example, open the file download link in a new tab
          if (project.fileDownloadLink) {
            window.open(project.fileDownloadLink, '_blank');
          }
        });

        actionIcons.appendChild(downloadIcon);
      }

      // Append the project details and action icons to the list item
      listItem.appendChild(projectDetails);
      listItem.appendChild(actionIcons);

      // Append the list item to the project list
      projectList.appendChild(listItem);

      // Add a click event listener to each list item
      listItem.addEventListener('click', () => {
        // Remove the 'active' class from all list items
        projectList.querySelectorAll('li').forEach((item) => {
          item.classList.remove('active');
        });

        // Add the 'active' class to the clicked list item
        listItem.classList.add('active');

        // Get the active device option
        const activeDevice = document.querySelector('nav li.active').dataset.device;

        // Update the image list based on the selected project and device
        updateImages(projects[projectKey][activeDevice]);
      });
    }
  }

  // Set the first list item as active
  const firstListItem = projectList.querySelector('li');
  if (firstListItem) {
    firstListItem.classList.add('active');
  }
}

// Call the function to populate the project list after the DOM has loaded
document.addEventListener('DOMContentLoaded', populateProjectList);

// Function to update images based on selected project and device
function updateImages(imageList) {
  const imageContainer = document.querySelector('.deviceViewer--imageCustomize');
  const images = imageContainer.querySelectorAll('img');

  // Hide all images
  images.forEach((img) => {
    img.classList.remove('active');
  });

  // Display images for the selected project and device
  imageList.forEach((imageName, index) => {
    images[index].src = imageName;

    // Update alt attribute following the specified format
    const activeProject = document.querySelector('#project-list li.active').dataset.project;
    const activeDevice = document.querySelector('nav li.active').dataset.device;
    images[index].alt = `${activeProject}_${activeDevice}_image${index + 1}`;
  });

  // Start with the first image displayed
  currentIndex = 0;
  images[currentIndex].classList.add('active');
}

// Function to set the default project, device, and display images
function setDefaultProjectAndDevice() {
  // Select the first project in the list and mark it as active
  const firstProjectItem = document.querySelector('#project-list li');
  if (firstProjectItem) {
    firstProjectItem.classList.add('active');
  }

  // Set the default device to "Tablet" and mark it as active
  const defaultDeviceOption = document.querySelector('nav li[data-device="tablet"]');
  if (defaultDeviceOption) {
    defaultDeviceOption.classList.add('active');
  }

  // Get the selected project and device
  const selectedProject = firstProjectItem ? firstProjectItem.dataset.project : null;
  const selectedDevice = defaultDeviceOption ? defaultDeviceOption.dataset.device : null;

  // Update the image list based on the selected project and device
  if (selectedProject && selectedDevice) {
    updateImages(projects[selectedProject][selectedDevice]);
  }
}

// Call the function to set the default project and device after the DOM has loaded
document.addEventListener('DOMContentLoaded', setDefaultProjectAndDevice);

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

    // Get the active project
    const activeProject = document.querySelector('#project-list li.active').dataset.project;

    // Update the image list based on the selected project and device
    updateImages(projects[activeProject][device]);
  });
});

// Function to navigate images
function navigateImage(direction) {
  const imageContainer = document.querySelector('.deviceViewer--imageCustomize');
  const images = imageContainer.querySelectorAll('img');
  let currentIndex = -1;

  // Find the index of the currently active image
  images.forEach((img, index) => {
    if (img.classList.contains('active')) {
      currentIndex = index;
    }
  });

  if (currentIndex === -1) {
    // No active image found, start with the first one
    currentIndex = 0;
  } else {
    // Remove the 'active' class from the current image
    images[currentIndex].classList.remove('active');
  }

  // Calculate the new index based on direction
  currentIndex += direction;

  // Ensure the index stays within bounds
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Add the 'active' class to the new current image
  images[currentIndex].classList.add('active');
}

// Event listener for left arrow button
const leftArrow = document.getElementById('left-arrow');
leftArrow.addEventListener('click', () => {
  navigateImage(-1); // Move to the previous image
});

// Event listener for right arrow button
const rightArrow = document.getElementById('right-arrow');
rightArrow.addEventListener('click', () => {
  navigateImage(1); // Move to the next image
});

const activeProjectListItem = document.querySelector('ul.projectList li'); // Make sure this selector matches your HTML structure

if (activeProjectListItem && activeProjectListItem.querySelector('.active')) {
  console.log('Yes, it has a child element with the class "active"');
} else {
  console.log('No child element with the class "active" found or activeProjectListItem not found');
}
// // Check if the second child has the class 'active'
// if (activeProjectListItem && activeProjectListItem.children[1].classList.contains('active')) {
//   console.log('The second child has the class "active"');
// } else {
//   console.log('The second child does not have the class "active" or activeProjectListItem not found');
// }

// ... (The rest of your code remains unchanged) ...


      //check for each list item ready in the dom if the list element has active class then
      //check if there exist an img in the list item, it there exist then add an class filtered to the img element.
