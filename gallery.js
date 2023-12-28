const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const selectedIndex = null;

for (let i = 0; i < imageIndexes.length; i++) {
  const imageIndex = imageIndexes[i];

  // container
  const container = document.createElement('div');
  container.classList.add('imageContainer');

  // image
  const image = document.createElement('img');
  if (imageIndex === 1 || imageIndex === 2 || imageIndex === 4 || imageIndex === 8) {
    image.src = `assets/threedee/${imageIndex}.gif`;
    container.appendChild(image);
  } else if (imageIndex === 5) {
    image.src = `assets/threedee/${imageIndex}.png`;
    const linkElement = document.createElement('a');
    linkElement.target = '_blank';
    linkElement.href = 'https://youtu.be/k207HXfCz2s';
    const imgWrapper = document.createElement('div');
    imgWrapper.appendChild(image);
    linkElement.appendChild(imgWrapper);
    container.appendChild(linkElement);
  } else if (imageIndex === 11) {
    image.src = `assets/threedee/${imageIndex}.png`;
    const linkElement = document.createElement('a');
    linkElement.target = '_blank';
    linkElement.href = 'https://www.altrs.wiki/port/jungle.html';
    const imgWrapper = document.createElement('div');
    imgWrapper.appendChild(image);
    linkElement.appendChild(imgWrapper);
    container.appendChild(linkElement);
  } else {
    image.src = `assets/threedee/${imageIndex}.png`;
    container.appendChild(image);
  }
  image.classList.add('galleryImg');

  // title
  const title = document.createElement('p');
  title.textContent = `${imageIndex}.3DImEN-IMG`;
  title.classList.add('text');

  container.appendChild(title);

  // Use a closure to capture the current imageIndex value
  container.addEventListener('click', (function (currentIndex) {
    return function () {
      popup.style.transform = 'translateY(0)';
      if (currentIndex === 1 || currentIndex === 2 || currentIndex === 4 || currentIndex === 8) {
        selectedImage.src = `assets/threedee/${currentIndex}.gif`;
      }else if(currentIndex === 5){
        popup.style.transform = 'translateY(-100%)';
      } 
      else {
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



