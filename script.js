    //If A Skill Box contains an anchor tag then when user clicks on it, user an new window opens that features the link in the Skill Box
    const allDivs = document.querySelectorAll('.portfolio-gigImage');
    allDivs.forEach(specificDiv => {
        specificDiv.addEventListener('click', ()=> {
            const anchorElement = specificDiv.querySelector('a');

            if (anchorElement) {
                const href = anchorElement.getAttribute('href');
                window.open(href, '_blank');
            }
        });
    });




