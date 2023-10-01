let currentProjectIndex = 0;

        const modal = document.getElementById('myModal');
        const modalImages = document.getElementById('modalImages');
        const leftArrow = modal.querySelector('.leftArrowController');
        const rightArrow = modal.querySelector('.rightArrowController');

        // Define your projects here
        const project1 = {
            name: 'NightlyTree',
            thumbnailImageUrl: './treeNight.jpg',
            images: ['./treeNight.jpg', './characterGirl.jpg', './treeNight.jpg'],
            advertImage: './treeNight.jpg',
            id: '1147591657',
            description: `<p> I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
            softwareUsed: ['Blender', 'Zbrush', 'Photoshop']
        };

        const project2 = {
            name: 'CharacterGirl',
            thumbnailImageUrl: './characterGirl.jpg',
            images: ['./characterGirl.jpg', './characterGirl.jpg', './characterGirl.jpg'],
            advertImage: './characterGirl.jpg',
            id: '1147591658',
            description: `<p>Project that I made during the Leticia Gillett´s course. I learned a lot developing this piece with something that I love (Glam rock). Hope you guys like it! ♥</p>`,
            softwareUsed: ['Blender', 'Zbrush', 'Photoshop']
        };

        const project3 = {
            name: 'Webpage',
            thumbnailImageUrl: './website.jpg',
            images: ['./website.jpg', './rotatingGlobe.mp4', './website.jpg'],
            advertImage: './website.jpg',
            id: '1147591659',
            description: `<p> I love (Glam rock). Hope you guys like it! ♥</p>`,
            softwareUsed: ['Zbrush']
        };

        // Pack all the projects in one array
        const allProjects = [project1, project2, project3];

        // Function to load projects into grid items
        function loadProjectsIntoGrid() {
            const projectGrid = document.getElementById('projectGrid');

            allProjects.forEach((project, index) => {
                const gridItem = document.createElement('div');
                gridItem.className = 'grid-item';
                gridItem.innerHTML = `<img src="${project.thumbnailImageUrl}" alt="${project.name}" />`;
                projectGrid.appendChild(gridItem);

                const gridItemOverlay = document.createElement('div');
                gridItemOverlay.className = 'grid-item-overlay';

                //If project has a video extension of .mp4 display the span tag
                //CHECKING VIDEO FILE IN PROJECT
                //declaring that by default there is no video extenstion
                let hasVideo = 'none';
                for (j=0; j  < project.images.length; j++){
                    //Video files should be in .mp4 format
                    if (project.images[j].includes('.mp4')){
                    hasVideo = 'block';
                    }
                }

                gridItemOverlay.innerHTML=`
                <div class="overlay">
                    <span style="display:block;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">   <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </span>

                    <span style="display:${hasVideo}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">   <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    </span>

                    <div style="bottom:1rem; padding:.5rem; position:absolute; color:white;"><strong>${project.name}</strong><br>
                        <h3 style="font-weight:300; font-size:.9em;">Silas S.</h3>
                    </div>
                </div>
                `;
                gridItem.appendChild(gridItemOverlay);

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

                if (project.images[i].includes('.jpg')){
                        imageContainer.innerHTML = `<img src="${project.images[i]}" alt="${project.name}" />`;

                        const actionSection = document.createElement('div');
                        actionSection.className = 'inner-div';
                        actionSection.innerHTML = `
                        <button class="DownloadButton">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                            </svg>
                        </button>
                        <button class="ViewFullScreen">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
                            </svg>
                        </button>
                        `;
                        imageContainer.appendChild(actionSection);
                }

                if(project.images[i].includes('.mp4')){
                        imageContainer.innerHTML = `<video controls controlslist="nofullscreen nodownload" width="100%">
                        <source src="${project.images[i]}"  type="video/mp4" /> </video>`;
                        // let removal = imageContainer.querySeclector('.inner-div');
                        // removal.style.display='none';
                }

            const advertImage = document.querySelector('.advert');
            advertImage.innerHTML=`<img src='${project.advertImage}' alt='advert' width="100%">`;

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
            const projectInformation = modal.querySelector('.projectInformation');
            for(w in project.softwareUsed){
                const softwares = document.createElement('span');
                softwares.textContent = project.softwareUsed[w];
                projectInformation.appendChild(softwares);
            }

            //Set ProjectAboutTitle
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