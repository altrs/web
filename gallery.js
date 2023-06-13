const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3];
const selectedIndex = null;

imageIndexes.forEach(i => {
  //container
  const container = document.createElement('div');
  container.classList.add('imageContainer');

  //image
  const image = document.createElement('img');
  image.src = '/assets/threedee/' + i + '.png';

  image.classList.add('galleryImg');

  //title
  const title = document.createElement('p');
  title.textContent = `${i}.3DImEN-IMG`;
  title.classList.add('text');

  container.appendChild(image);
  container.appendChild(title);


  container.addEventListener('click', () => {
    popup.style.transform = `translateY(0)`;
    selectedImage.src = '/assets/threedee/' + i + '.png';
  });
  
  gallery.appendChild(container);
});

popup.addEventListener('click', () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = '';
});
