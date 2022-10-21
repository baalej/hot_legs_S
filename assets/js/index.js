const images = document.querySelectorAll('.gallery-image');
let count = 0;

const slideshow = () => {
  images[count].style.display = 'block';
  let previous = ((count - 1) == -1) ? images.length - 1 : count - 1;
  images[previous].style.display = 'none';
  count === images.length - 1 ? count = 0 : count++;
}

const interval = window.setInterval(() => slideshow(), 3000);