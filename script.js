document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.video-title').forEach(function(title) {
      title.addEventListener('click', function() {
        const videoInfo = this.nextElementSibling;
        videoInfo.style.display = videoInfo.style.display === 'none' ? 'block' : 'none';
      });
    });
    document.querySelectorAll('.video-preview').forEach(function(videoPreview) {
      videoPreview.addEventListener('mouseover', function() {
        this.querySelector('.thumbnail').style.opacity = '0.7';
      });
      videoPreview.addEventListener('mouseout', function() {
        this.querySelector('.thumbnail').style.opacity = '1';
      });
    });
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');

    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        document.body.classList.toggle('collapsed-sidebar');
        console.log("Sidebar toggled"); 
    });
    const uploadButton = document.querySelector('.upload-icon-container');
    uploadButton.addEventListener('click', () => {
        alert('Upload functionality not implemented yet');
    });
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        const searchBar = document.querySelector('.search-bar');
        alert(`Search for: ${searchBar.value} (Functionality not implemented yet)`);
    });
});
