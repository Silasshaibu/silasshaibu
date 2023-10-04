let currentProjectIndex = 0;

const modal = document.getElementById('myModal');
const modalImages = document.getElementById('modalImages');
const leftArrow = modal.querySelector('.leftArrowController');
const rightArrow = modal.querySelector('.rightArrowController');

const softwareLogos = {
    'Blender': './softwareLogos/blenderLogo.jpg',
    'Photoshop': './softwareLogos/PshopLogo.png',
    'Zbrush': './softwareLogos/zbrushLogo.png'
    // Add more software logos as needed
};

// Define your projects here
const project1 = {
    name: 'NightlyTree',
    thumbnailImageUrl: './treeNight.jpg',
    images: [
        { imageUrl: './treeNight.jpg', caption: 'Noon Time Diffuse 1K' },
        { imageUrl: './treeNight.jpg', caption: 'On the Sea Side, Fine-Time Wireframe 4K' }
    ],
    advertImage: './treeNight.jpg',
    id: '1147591657',
    description: `<p> I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Zbrush', 'Photoshop']
};

const project2 = {
    name: 'CharacterGirl',
    thumbnailImageUrl: './characterGirl.jpg',
    images: [
        { imageUrl: './characterGirl.jpg', caption: 'Female Warrior Athena' },
        { imageUrl: './characterGirl.jpg', caption: '30K Polygons Wireframe' },
        { imageUrl: './characterGirl.jpg', caption: 'Sculpt Version Multi Resolution Corona Render' }
    ],
    advertImage: './characterGirl.jpg',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Zbrush', 'Photoshop']
};

const project3 = {
    name: 'Webpage',
    thumbnailImageUrl: './website.jpg',
    images: [
        { imageUrl: './website.jpg', caption: 'Only4uWebSite' },
        { imageUrl: './rotatingGlobe.mp4', caption: 'Rendered with AfterEffects 4K' },
        { imageUrl: './website.jpg', caption: 'Dashboard Page' }
    ],
    advertImage: './website.jpg',
    id: '1147591659',
    description: `<p> I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Zbrush']
};

// Pack all the projects in one array
const allProjects = [project1, project2, project3];

// Function to create a software logo element
function createSoftwareLogo(softwareName) {
    const softwareLogo = document.createElement('img');
    softwareLogo.src = softwareLogos[softwareName];
    softwareLogo.alt = softwareName;
    // You can add additional styling or classes to the software logo here if needed
    return softwareLogo;
}

// Function to update the projectInformation section with software logos
function updateProjectInformation() {
    const projectInformation = modal.querySelector('.projectInformationSoftware');
    const spanTags = projectInformation.querySelectorAll('span');

    spanTags.forEach((span) => {
        const softwareName = span.textContent.trim(); // Get the software name from the span text
        if (softwareLogos.hasOwnProperty(softwareName)) {
            // Check if the software name exists in the mapping
            const softwareLogo = createSoftwareLogo(softwareName);
            span.innerHTML = ''; // Clear the existing content of the span
            span.appendChild(softwareLogo); // Append the software logo
            span.appendChild(document.createTextNode(softwareName)); // Append the software name
        }
    });
}

// Function to load projects into grid items
function loadProjectsIntoGrid() {
    const projectGrid = document.getElementById('projectGrid');

    allProjects.forEach((project, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        project.images.forEach((image) => {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            if (image.imageUrl.endsWith('.jpg')) {
                // Render image with caption
                imageContainer.innerHTML = `
                    <img src="${image.imageUrl}" alt="${project.name}" />
                    <div class="caption"><p>${image.caption}</p></div>
                `;
            } else if (image.imageUrl.endsWith('.mp4')) {
                // Render video with caption
                imageContainer.innerHTML = `
                    <video controls controlslist="nofullscreen nodownload" width="100%">
                        <source src="${image.imageUrl}" type="video/mp4" />
                    </video>
                    <div class="caption"><p>${image.caption}</p></div>
                `;
            }

            gridItem.appendChild(imageContainer);
        });

        projectGrid.appendChild(gridItem);

        // Add a click event listener to open the modal when this project is clicked
        gridItem.addEventListener('click', () => {
            openModal(project, index);
        });
    });
}

// Call the function when the page is loaded
window.addEventListener('load', loadProjectsIntoGrid);

function closeModal() {
    modal.style.display = "none";
}

function HireMe() {
    // Redirect to google.com
    window.open('https://www.fiverr.com/silasshaibu', "_blank");
}

// Function to open the modal and populate it with project data
function openModal(project, index) {
    modalImages.innerHTML = ""; // Clear previous images
    const currentImages = project.images; //Store the current project Image

    for (let i = 0; i < project.images.length; i++) {
        const imageContainer = document.createElement('div'); // Create a div container for the image
        imageContainer.className = 'image-container';

        if (project.images[i].imageUrl.endsWith('.jpg')) {
            imageContainer.innerHTML = `
                <img src="${project.images[i].imageUrl}" alt="${project.name}" />
                <div class="caption"><p>${project.images[i].caption}</p></div>
            `;

            const actionSection = document.createElement('div');
            actionSection.className = 'inner-div';
            actionSection.innerHTML = `
                <button class="DownloadButton">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                    </svg>
                </button>
                <button class="ViewFullScreen">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
                    </svg>
                </button>
            `;
            imageContainer.appendChild(actionSection);
        }

        if (project.images[i].imageUrl.endsWith('.mp4')) {
            imageContainer.innerHTML = `
                <video controls controlslist="nofullscreen nodownload" width="100%">
                    <source src="${project.images[i].imageUrl}"  type="video/mp4" />
                </video>
                <div class="caption"><p>${project.images[i].caption}</p></div>
            `;
        }

        const advertImage = document.querySelector('.advert');
        advertImage.innerHTML = `<img src='${project.advertImage}' alt='advert' width="100%">`;

        // Add image, and image container to modalImages div
        modalImages.appendChild(imageContainer);
    }

    // Set the project name
    const projectID = modal.querySelector('.projectNumber');
    projectID.textContent = project.id;

    // Set the project description
    const projectDescription = modal.querySelector('.authorInfo.aboutProject');
    projectDescription.innerHTML = project.description;

    // Set Software Used InfoSection
    const projectInformation = modal.querySelector('.projectInformationSoftware');

    // Clearing the project information before adding software tags
    projectInformation.innerHTML = '';
    for (w in project.softwareUsed) {
        const softwares = document.createElement('span');
        softwares.textContent = project.softwareUsed[w];
        projectInformation.appendChild(softwares);
    }

    // Set ProjectAboutTitle
    const projectAbout = modal.querySelector('.projectInformation.Description');
    projectAbout.innerHTML = `<h4>${project.name}</h4>`;

    // Display the modal
    modal.style.display = 'flex';
    currentProjectIndex = index;

    // Get the Download and View Full Screen buttons
    const downloadButton = modal.querySelector('.DownloadButton');
    const viewFullScreenButton = modal.querySelector('.ViewFullScreen');

    // Add click event listener for Download button
    downloadButton.addEventListener('click', () => {
        const currentImage = modalImages.querySelector('img');
        if (currentImage) {
            const imageSrc = currentImage.getAttribute('src');
            // Create an anchor element to trigger the download
            const downloadLink = document.createElement('a');
            downloadLink.href = imageSrc;
            downloadLink.download = `${project.name}_SilasShaibu_Portfolio.jpg`; // Set the desired download filename
            downloadLink.click();
        }
    });

    // Add click event listener for View Full Screen button
    viewFullScreenButton.addEventListener('click', () => {
        const currentImage = modalImages.querySelector('img');
        if (currentImage) {
            const imageSrc = currentImage.getAttribute('src');
            // Open a new window/tab with the image
            const newWindow = window.open(imageSrc, '_blank', 'fullscreen=yes');
            if (newWindow) {
                newWindow.document.body.style.margin = '0';
                newWindow.document.body.style.overflow = 'hidden';
            }
        }
    });

    updateProjectInformation();
}

// Function to navigate to the next project
function goToNextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % allProjects.length;
    openModal(allProjects[currentProjectIndex], currentProjectIndex);
}

// Function to navigate to the previous project
function goToPreviousProject() {
    currentProjectIndex = (currentProjectIndex - 1 + allProjects.length) % allProjects.length;
    openModal(allProjects[currentProjectIndex], currentProjectIndex);
}

leftArrow.addEventListener('click', goToPreviousProject);
rightArrow.addEventListener('click', goToNextProject);

