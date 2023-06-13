const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3];
const selectedIndex = null;

for (let i = 0; i < imageIndexes.length; i++) {
  const index = imageIndexes[i];

  // container
  const container = document.createElement('div');
  container.classList.add('imageContainer');

  // image
  const image = document.createElement('img');
  if(i == 2 || i == 3){
    image.src = `assets/threedee/${index}.gif`;
  }else{
    image.src = `assets/threedee/${index}.png`;
  }
  image.classList.add('galleryImg');

  // title
  const title = document.createElement('p');
  title.textContent = `${index}.3DImEN-IMG`;
  title.classList.add('text');

  container.appendChild(image);
  container.appendChild(title);

  container.addEventListener('click', () => {
    popup.style.transform = `translateY(0)`;
    if(i == 2 || i == 3){
      selectedImage.src = `assets/threedee/${index}.gif`;
    }else{
      selectedImage.src = `assets/threedee/${index}.png`;
    }
  });

  gallery.appendChild(container);
}

popup.addEventListener('click', () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = '';
});