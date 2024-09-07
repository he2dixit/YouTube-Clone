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
});