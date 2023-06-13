const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [0, 1, 2, 3];
const selectedIndex = null;

for (let i = 0; i < imageIndexes.length; i++) {
  const imageIndex = imageIndexes[i];

  // container
  const container = document.createElement('div');
  container.classList.add('imageContainer');

  // image
  const image = document.createElement('img');
  if (imageIndex === 1 || imageIndex === 2) {
    image.src = `assets/threedee/${imageIndex}.gif`;
  } else {
    image.src = `assets/threedee/${imageIndex}.png`;
  }
  image.classList.add('galleryImg');

  // title
  const title = document.createElement('p');
  title.textContent = `${imageIndex}.3DImEN-IMG`;
  title.classList.add('text');

  container.appendChild(image);
  container.appendChild(title);

  // Use a closure to capture the current imageIndex value
  container.addEventListener('click', (function (currentIndex) {
    return function () {
      popup.style.transform = 'translateY(0)';
      if (currentIndex === 1 || currentIndex === 2) {
        selectedImage.src = `assets/threedee/${currentIndex}.gif`;
      } else {
        selectedImage.src = `assets/threedee/${currentIndex}.png`;
      }
    };
  })(imageIndex));

  gallery.appendChild(container);
}

popup.addEventListener('click', () => {
  popup.style.transform = 'translateY(-100%)';
  selectedImage.src = '';
});

