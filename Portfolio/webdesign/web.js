// Define project data with HTML file paths
const projects = {
  project1: {
    name: "Bimto",
    description: "Ecommerce",
    htmlFilePath: "./project1/project1.html" // Update with the path to the HTML file for this project
  },
  project2: {
    name: "AskMeAbroad",
    description: "Educational",
    htmlFilePath: "./project2/project2.html" // Update with the path to the HTML file for this project
  },
  project3: {
    name: "Air BnB",
    description: "Rental",
    htmlFilePath: "./project3/project3.html" // Update with the path to the HTML file for this project
  }
};

// Function to populate the project list dynamically
async function populateProjectList() {
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
      </div>
      `;

      // Append the project details to the list item
      listItem.appendChild(projectDetails);

      // Append the list item to the project list
      projectList.appendChild(listItem);

      // Add a click event listener to each list item
      listItem.addEventListener('click', async () => {
        // Remove the 'active' class from all list items
        projectList.querySelectorAll('li').forEach((item) => {
          item.classList.remove('active');
        });

        // Add the 'active' class to the clicked list item
        listItem.classList.add('active');

        // Get the HTML file path for the selected project
        const project = projects[projectKey];
        const htmlFilePath = project.htmlFilePath;

        try {
          // Fetch the content from the HTML file
          const response = await fetch(htmlFilePath);
          if (response.ok) {
            const htmlContent = await response.text();

            // Display the HTML content in the viewer section
            const viewerSection = document.querySelector('#viewer');
            viewerSection.innerHTML = htmlContent;
          } else {
            console.error('Failed to fetch HTML content.');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      });
    }
  }

  // Set the first list item as active
  const firstListItem = projectList.querySelector('li');
  if (firstListItem) {
    firstListItem.classList.add('active');
    // Fetch and display the content of the first project on page load
    firstListItem.click();
  }
}

// Call the function to populate the project list after the DOM has loaded
document.addEventListener('DOMContentLoaded', populateProjectList);
