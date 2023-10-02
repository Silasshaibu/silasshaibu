// Define project data with images for each device
const projects = {
  project1: {
    name: "Bimto",
    tools: "HTML5 CSS3 JS",
    description:"Ecommerce",
    liveWebsite: "http://www.google.com",
    previewImage:'.1920x1080_Bimteo_01_desktop.jpg'
  },

  project2: {
    name: "AskMeAbroad",
    tools: "HTML5 CSS3 ES6",
    description:"Educational",
    liveWebsite: "http://www.askmeabroad.com",
    previewImage:'.1920x1080_Bimteo_01_desktop.jpg'
  },

  project3: {
    name: "Air BnB",
    tools: "React JS",
    description:"Rental",
    liveWebsite: "http://www.askmeabroad.com",
    previewImage:'.1920x1080_Bimteo_01_desktop.jpg'
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
      projectDetails.innerHTML = `
      <div class='project-details'>
        <span>${project.name}</span>
        <p>Type: ${project.description}</p>
        <span>Tools: ${project.tools} </span>
      </div>
      `;

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


// Function to set the default project, device, and display images

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
