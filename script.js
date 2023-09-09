
    const anchorTags = document.querySelectorAll('.portfolio-gigImage a');

    // Attach click event listener to each anchor tag
    anchorTags.forEach((anchorTag) => {
    anchorTag.addEventListener('click', (event) => {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the href attribute value of the clicked anchor tag
        const link = anchorTag.href;

        // Redirect to the link
        window.location.href = link;
    });
    });
}




