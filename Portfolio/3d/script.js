//window listen on scroll 10vh let the header be sticky

// window.addEventListener('scroll', function() {
//     var header = document.getElementById('mainHeader');
//     var scrollPosition = window.scrollY;

//     // Set the header to be sticky after scrolling 10vh
//     if (scrollPosition >= 10 * window.innerHeight / 100) {
//       header.style.top = '0';
//       header.style.backgroundColor ='red';
//     } else {
//       header.style.top = '-60vh';
//       header.style.backgroundColor ='green';
//     }
//   });



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
    name: 'Meta Musa NFT Collection',
    images: [
        { imageUrl: './project1/MetaMusa-NFT__Thumbnail.jpg', caption: 'Thumbnail' },
        { imageUrl: './project1/MetaMusa_ViewPort_Eevee.jpg', caption: 'MetaMusa ViewPort Eevee' },
        { imageUrl: './project1/Goldenball.jpg', caption: 'Goldenball' },
        { imageUrl: './project1/Cobalt.jpg', caption: 'Cobalt' },
        { imageUrl: './project1/Copper.jpg', caption: 'Copper' },
        { imageUrl: './project1/Emerald.jpg', caption: 'Emerald' },
        { imageUrl: './project1/Diamond.jpg', caption: 'Diamond' },
        { videoUrl: './project1/rotatingGlobe.mp4', caption: 'Spining Globe' }
    ],
    advertImage: './project1/treeNight.jpg',
    id: '1147591657',
    description: `<p> I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project2 = {
    name: 'African Lady',
    images: [
        { imageUrl: './project2/FemaleLady_Thumb.jpg', caption: 'Thumbnail' },
        { imageUrl: './project2/FemaleLady.jpg', caption: 'Landscape 2 Perspective African Lady'}
    ],
    advertImage: './project2/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Zbrush', 'Photoshop']
};

const project3 = {
    name: 'Lamborghini Hybrid',
    images: [
        { imageUrl: './project3/Lamborghini_Thumb.jpg', caption: 'Lamborghini Rendered 2K Resolution' },
        { imageUrl: './project3/Lamborghini.jpg', caption: 'Lamborghini Rendered 2K Resolution' }
    ],
    advertImage: './project3/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project4 = {
    name: 'Egg Grading System',
    images: [
        { imageUrl: './project4/Egg_Thumb.jpg', caption: 'Thumbnail' },
        { imageUrl: './project4/Egg_Grading_02.jpg', caption: 'Egg Grading System - Loading Phase' },
        { imageUrl: './project4/Viewport_Wireframe_1.jpg', caption: 'Viewport_Wireframe_1' },
        { videoUrl: 'https://www.youtube.com/embed/_FG21M66wIU', caption: 'Egg Grading/Sorting System Animation' },
        { imageUrl: './project4/Viewport_Render.jpg', caption: 'Viewport_Render' }
    ],
    advertImage: './project4/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project5 = {
    name: 'Fire Place',
    images: [
        { imageUrl: './project5/1.jpg', caption: 'Thumbnail' },
        { imageUrl: './project5/Render--WhiteMarble.png', caption: 'Render_WhiteMarble' },
        { imageUrl: './project5/Render--OldMarble.png', caption: 'Render_OldMarble' },
        { videoUrl: './project5/FirePlace_ViewportRender360TurnTable.mp4', caption: 'Fire Place TurnTable' },
        { imageUrl: './project5/1.jpg', caption: 'Fire Place 45 Deg Perspective' },
        { imageUrl: './project5/2-Wireframe.jpg', caption: 'Fire Place 45 Deg Perspective - Wireframe' }
    ],
    advertImage: './project5/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project6 = {
    name: 'BallonUnderground-Carpe01_Bill',
    images: [
        { imageUrl: './project6/Ballon_Thumbnail.jpg', caption: 'Thumbnail' },
        { imageUrl: './project6/0246.jpg', caption: 'Stage_1' },
        { videoUrl: './project6/4K-UHD.mp4', caption: 'Slab-Exhibition' },
        { imageUrl: './project6/0134.jpg', caption: 'Stage_2' },
        { imageUrl: './project6/0502.jpg', caption: 'Stage_3' }
    ],
    advertImage: './project6/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender']
};

const project7 = {
    name: 'Skandi Ship for 3D Print',
    images: [
        { imageUrl: './project7/SkandiShip_Thumbnail.jpg', caption: 'Thumbnail' }
    ],
    advertImage: './project7/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project8 = {
    name: 'Tessa Thompson',
    images: [
        { imageUrl: './project8/TessaThompson_Thumbnail.jpg', caption: 'Thumbnail' },
        { imageUrl: './project8/TessaThompson_Viewport_Eevee.jpg', caption: 'Thumbnail' }
    ],
    advertImage: './project8/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project9 = {
    name: 'Omniberman Rollercoaster Shelf Drive',
    images: [
        { imageUrl: './project9/Omniberman_Thumbnail.jpg', caption: 'Thumbnail' },
        { videoUrl: './project9/Revision2-Rail-with-floor.mp4', caption: 'Fire Place TurnTable' }
    ],
    advertImage: './project9/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project10 = {
    name: 'Convertible Table',
    images: [
        { imageUrl: './project10/Convertable-Table_Thumbnail.jpg', caption: 'Thumbnail' },
        { videoUrl: './project10/Convertable-Table.mp4', caption: 'Convertable_Table 360 TurnTable' }
    ],
    advertImage: './project10/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project11 = {
    name: 'Potato Smash Machine',
    images: [
        { imageUrl: './project11/PotatoSmashMaster_Thumbnail.png', caption: 'Thumbnail' },
        { videoUrl: './project11/PotatoSmashMaster_Exhibition_30fps.mp4', caption: 'Potato Smash Master Exhibition' }
    ],
    advertImage: './project11/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

const project12 = {
    name: 'Car Shredder Recycling System',
    images: [
        { imageUrl: './project12/CarShredderSystem_Thumbnail.jpg', caption: 'Thumbnail' },
        { videoUrl: './project12/CarShredderRecycle_System_Overview.mp4', caption: 'Car_Shredder_Recycling_System--Overview' }
    ],
    advertImage: './project12/',
    id: '1147591658',
    description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
    softwareUsed: ['Blender', 'Photoshop']
};

// Pack all the projects in one array
const allProjects = [project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, project11, project12];

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

function loadProjectsIntoGrid() {
    const projectGrid = document.getElementById('projectGrid');

    allProjects.forEach((project, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        const gridItemOverlay = document.createElement('div');
        gridItemOverlay.className = 'grid-item-overlay';

        // Check if the project contains a video
        const hasVideo = project.images.some((image) => 'videoUrl' in image);

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

            if ('imageUrl' in image && /\.(jpg|jpeg|png)$/.test(image.imageUrl)) {
                // Render image with caption for .jpg, .jpeg, and .png
                imageContainer.innerHTML = `
                    <img src="${image.imageUrl}" alt="${project.name}" />
                    <div class="caption"><p>${image.caption}</p></div>
                `;
            } else if ('videoUrl' in image) {
                // Render video with caption
                imageContainer.innerHTML = `
                    <iframe width="100%" height="100%" src="${image.videoUrl}" frameborder="0" allowfullscreen></iframe>
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

function openModal(project, index) {
    modalImages.innerHTML = ""; // Clear previous images
    const currentImages = project.images; // Store the current project Image

    const advertImage = document.querySelector('.advert');
    advertImage.innerHTML = `<img src='${project.advertImage}' alt='advert' width="100%">`;

    for (let i = 1; i < project.images.length; i++) {
        const imageContainer = document.createElement('div'); // Create a div container for the image
        imageContainer.className = 'image-container';

        if ('imageUrl' in project.images[i] && /\.(jpg|jpeg|png)$/.test(project.images[i].imageUrl)){
            // Render image with caption
            imageContainer.innerHTML = `
                <img src="${project.images[i].imageUrl}" alt="${project.name}" />
                <div class="caption"><p>${project.images[i].caption}</p></div>
            `;
        } else if ('videoUrl' in project.images[i]) {
            // Render video with caption
            imageContainer.innerHTML = `
                <iframe width="100%" height="100%" src="${project.images[i].videoUrl}" frameborder="0" allowfullscreen></iframe>
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
