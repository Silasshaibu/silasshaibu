// Define your projects and allProjects array here (if not already defined)
const project1 = {
    name: 'NightlyTree',
    thumbnailImageUrl: './treeNight.jpg',
    images: ['treeNight.jpg', 'treeNightly.jpg', 'image3.jpg']
};

const project2 = {
    name: 'characterGirl',
    thumbnailImageUrl: './characterGirl.jpg',
    images: ['characterGirl.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']
};

const project3 = {
    name: 'webpage',
    thumbnailImageUrl: './website.jpg',
    images: ['image.1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']
};

const allProjects = [project1, project2, project3];

// Function to load projects into grid items
function loadProjectsIntoGrid() {
    const projectGrid = document.getElementById('projectGrid');

    allProjects.forEach(project => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        const thumbnailImage = document.createElement('img');
        thumbnailImage.src = project.thumbnailImageUrl;
        thumbnailImage.alt = project.name;

        gridItem.appendChild(thumbnailImage);
        projectGrid.appendChild(gridItem);
    });
}

// Call the function when the page is loaded
window.addEventListener('load', loadProjectsIntoGrid);
