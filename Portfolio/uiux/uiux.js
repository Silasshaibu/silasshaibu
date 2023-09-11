
// console.log(45);


//if the users is on tablet
//only tablet and mobile options should be allowed to be toggled. pc option should be greyed out or disabled for click, there should be a tip that says to view the ui ux of a higher screen please view on a higher screen. or click to download the ui ux in pdf format. //provide the user a pdf that contains the uiux but not all of the pages jus the preview pages


//if the users is on mobile
//only mobile options should be allowed to be toggled,
//others should be greyed out and also provide a tip that notifies the user that uiux of other devices can be viewed with devices on higher width. and also user cand download the pdf format of the uiux instead.

//if the users is on mobile
//only mobile options should be allowed to be toggled,
//others should be greyed out and also provide a tip that notifies the user that uiux of other devices can be viewed with devices on higher width. and also user cand download the pdf format of the uiux instead.


/**
 * Toggles the device options in a UI based on the user's device type (tablet or mobile).
 * Only the relevant options are active. Provides tips and allows the user to download a PDF version of the UI/UX.
 */

function toggleDeviceOptions() {
  const switchNav = document.querySelector('.switchNav');
  const allBtns = switchNav.querySelectorAll('li');
  const activeElement = switchNav.querySelector('.active');
    if (activeElement) {
    activeElement.classList.remove('active');
    }

    const viewer =  document.querySelector('.Frame');

  switchNav.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.matches('li')) {
      clickedElement.classList.add('active');
      const viewerName = clickedElement.innerHTML.toLowerCase();
      const viewerFrame = document.querySelector('.ViewerFrame')

      //Resize Viewer Devices upon tweaking Viewer Option for PC
        if (viewerName.includes('pc')) {
            console.log('This is a PC Viewer');
            viewerFrame.classList.remove('tablet', 'mobile');
            viewerFrame.classList.add('pc');
        }

        //Resize Viewer Devices upon tweaking Viewer Option for Tablet
        if (viewerName.includes('tablet')) {
            console.log('It is a Tablet Viewer');
            viewerFrame.classList.remove('pc', 'mobile');
            viewerFrame.classList.add('tablet');
        }

        //Resize Viewer Devices upon tweaking Viewer Option for Mobile
        if (viewerName.includes('mobile')) {
            console.log('It is a mobile');
            viewerFrame.classList.remove('pc', 'tablet');
            viewerFrame.classList.add('mobile');
        }
    }
  });
}