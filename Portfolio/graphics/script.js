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
    name: 'Meta Musa',
    images: [
        { imageUrl: './project1/MetaMusa_ViewPort_Eevee.jpg', caption: 'MetaMusa ViewPort Eevee' },
        { imageUrl: './treeNight.jpg', caption: 'On the Sea Side, Fine-Time Wireframe 4K' }
    ],
    advertImage: './project1/treeNight.jpg',
    id: '1147591657',
    description: `<p> I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project2 = {
    name: 'CharacterGirl',
    images: [
        { imageUrl: './project2/characterGirl.jpg', caption: 'Female Warrior Athena' },
        { imageUrl: './project2/characterGirl.jpg', caption: '30K Polygons Wireframe' },
        { imageUrl: './project2/characterGirl.jpg', caption: 'Sculpt Version Multi Resolution Corona Render' }
    ],
    advertImage: './project2/characterGirl.jpg',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Zbrush', 'Photoshop']
};

// Pack all the projects in one array
const allProjects = [project1, project2];

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

        const gridItemOverlay = document.createElement('div');
        gridItemOverlay.className = 'grid-item-overlay';

        // Check if the project contains a video
        let hasVideo = false;
        for (let j = 0; j < project.images.length; j++) {
            if (typeof project.images[j].imageUrl === 'string' && project.images[j].imageUrl.endsWith('.mp4')) {
                hasVideo = true;
                break; // Exit the loop as soon as a video is found
            }
        }

        gridItemOverlay.innerHTML = `
            <div class="overlay">
                <div class="overlaySpanFlex">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svgMediaIcons">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </span>
                    <span style='display:${hasVideo ? 'block' : 'none'}'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svgMediaIcons">
                        <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </span>
                </div>
                <div style="bottom:1rem; padding:.5rem; position:absolute; color:white;">
                    <strong>${project.name}</strong><br>
                    <h3 style="font-weight:300; font-size:.9em;">Silas S.</h3>
                </div>
            </div>
        `;

        // Creating GridItemOverlay and putting contents inside to be rendered dynamically
        gridItem.appendChild(gridItemOverlay);

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
    const currentImages = project.images; // Store the current project Image

    const advertImage = document.querySelector('.advert');
    advertImage.innerHTML = `<img src='${project.advertImage}' alt='advert' width="100%">`;

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
                <span class="DownloadButton">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                    </svg>
                </span>
                <span class="ViewFullScreen">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
                </svg>
                </span>
            `;
            imageContainer.appendChild(actionSection);

            // Get the Download and View Full Screen buttons for this image
            const downloadButton = imageContainer.querySelector('.DownloadButton');
            const viewFullScreenButton = imageContainer.querySelector('.ViewFullScreen');

            // Add event listeners for Download button
            downloadButton.addEventListener('click', () => {
                const imageSrc = project.images[i].imageUrl;
                // Create an anchor element to trigger the download
                const downloadLink = document.createElement('a');
                downloadLink.href = imageSrc;
                downloadLink.download = `${project.name}_${i}_SilasShaibu_Portfolio.jpg`; // Set a unique download filename
                downloadLink.click();
            });

            // Add event listeners for View Full Screen button
            viewFullScreenButton.addEventListener('click', () => {
                const imageSrc = project.images[i].imageUrl;
                // Open a new window/tab with the image
                const newWindow = window.open(imageSrc, '_blank', 'fullscreen=yes');
                if (newWindow) {
                    newWindow.document.body.style.margin = '0';
                    newWindow.document.body.style.overflow = 'hidden';
                }
            });
        }

        if (project.images[i].imageUrl.endsWith('.mp4')) {
            imageContainer.innerHTML = `
                <video controls controlslist="nofullscreen nodownload" width="100%">
                    <source src="${project.images[i].imageUrl}" type="video/mp4" />
                </video>
                <div class="caption"><p>${project.images[i].caption}</p></div>
            `;
        }

        // Add the image container to modalImages div
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
    for (let w = 0; w < project.softwareUsed.length; w++) {
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

// Function to close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Function to close the modal when pressing the Escape key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Call the function when the page is loaded
window.addEventListener('load', loadProjectsIntoGrid);
