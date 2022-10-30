const images = document.querySelectorAll('.gallery-image');
let count = 0;
let speed = 8000;

const slideshow = async () => {
  let previous = ((count - 1) == -1) ? images.length - 1 : count - 1;
  images[previous].style.display = 'none';
  images[count].style.display = 'block';
  count === images.length - 1 ? count = 0 : count++;
}

const interval = window.setInterval(() => slideshow(), speed);