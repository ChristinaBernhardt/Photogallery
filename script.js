let images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg',
  './img/10.jpg', './img/11.jpg', './img/12.jpg', './img/13.jpg', './img/14.jpg', './img/15.jpg', './img/16.jpg', './img/17.jpg', './img/18.jpg',
  './img/19.jpg', './img/20.jpg', './img/21.jpg', './img/22.jpg', './img/23.jpg', './img/24.jpg', './img/25.jpg', './img/26.jpg', './img/27.jpg',
  './img/28.jpg', './img/29.jpg', './img/30.jpg', './img/31.jpg', './img/32.jpg'];

function renderImages() {
  let imgGallerie = document.querySelector('#imgGallerie');
  imgGallerie.innerHTML = '';
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    imgGallerie.innerHTML += `
       <img src="${image}" id="img" onclick="openPic(${i})">`;
  }
}

function openPic(i) {
  let image = images[i];
  let detailContainer = document.getElementById('onePic');
  detailContainer.innerHTML = generateDetailViewHTML(i, image);
  detailContainer.classList.remove('d-none');
}

function generateDetailViewHTML(i, image) {
  return /* html */ `
    <div class="detailViewWrapper">
    <div><img src="./img/backward_rewind_icon_231292.png" onclick="showPreviousPicture(${i})" id="show-button-prev" class="show-button"></div>
    <div class="image-wrapper"><img src=${image} alt="Bild"></div>
    <div><img src="./img/forward_next_icon_231335.png" onclick="showNextPicture(${i})" id="show-button-next" class="show-button"></div>
    <div><img src="./img/arreter_off_exit_close_14524.png" onclick="closePic()" class="show-button"></div>
    </div>`
}

function showPreviousPicture(i) {
  let previousIndex = (i - 1 + images.length) % images.length;
  openPic(previousIndex);
}

function showNextPicture(i) {
  let nextIndex = (i + 1 + images.length) % images.length;
  openPic(nextIndex);
}

function dimmButtonNext() {
  document.getElementById('show-button-next').classList.add('d-none');
}

function closePic(i) {
  let image = images[i];
  let detailContainer = document.getElementById('onePic');
  detailContainer.innerHTML = generateDetailViewHTML(i, image);
  detailContainer.classList.add('d-none');
}