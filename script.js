// Function to change the content dynamically based on the sidebar selection
function showContent(contentId) {
    const contentDisplay = document.getElementById('content-display');
    
    // Clear current content
    contentDisplay.innerHTML = '';

    // Determine which content to show based on the clicked sidebar item
    if (contentId === 'content1') {
        contentDisplay.innerHTML = '<img src="path_to_image1.jpg" alt="Content 1" />';
    } else if (contentId === 'content2') {
        contentDisplay.innerHTML = '<img src="path_to_image2.jpg" alt="Content 2" />';
    } else if (contentId === 'content3') {
        contentDisplay.innerHTML = '<iframe src="path_to_pdf1.pdf" title="Content 3"></iframe>';
    } else if (contentId === 'content4') {
        contentDisplay.innerHTML = '<img src="path_to_image3.jpg" alt="Content 4" />';
    } else if (contentId === 'content5') {
        contentDisplay.innerHTML = '<iframe src="path_to_pdf2.pdf" title="Content 5"></iframe>';
    }
}
