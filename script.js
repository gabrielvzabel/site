document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Obrigado por entrar em contato! Nós responderemos em breve.');
      form.reset();
    });
  }

  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('mouseover', function() {
      button.style.backgroundColor = '#ccc';
      button.style.color = '#fff';
    });

    button.addEventListener('mouseout', function() {
      button.style.backgroundColor = '';
      button.style.color = '';
    });
  }

  let slideshowImages = document.querySelectorAll('.slideshow-image');
  let currentImageIndex = 0;

  function nextImage() {
    if (slideshowImages[currentImageIndex]) {
      slideshowImages[currentImageIndex].classList.remove('active');
    }
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    if (slideshowImages[currentImageIndex]) {
      slideshowImages[currentImageIndex].classList.add('active');
    }
  }

  setInterval(nextImage, 2000);
});