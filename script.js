let images = ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.jpg','./img/6.jpg','./img/7.jpg','./img/8.jpg','./img/9.jpg',
'./img/10.jpg','./img/11.jpg','./img/12.jpg','./img/13.jpg','./img/14.jpg','./img/15.jpg','./img/16.jpg','./img/17.jpg','./img/18.jpg', 
'./img/19.jpg','./img/20.jpg','./img/21.jpg','./img/22.jpg','./img/23.jpg','./img/24.jpg','./img/25.jpg','./img/26.jpg','./img/27.jpg',
'./img/28.jpg','./img/29.jpg', './img/30.jpg','./img/31.jpg','./img/32.jpg'];

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
  let detailContainer =  document.getElementById('onePic');
  detailContainer.innerHTML = generateDetailViewHTML(i, image);
  detailContainer.classList.remove('d-none');

  }
  function generateDetailViewHTML(i, image){
    return /* html */ `
    <div class="detailViewWrapper">

    <div><button onclick="showPreviousPicture(${i})" id="show-button-prev" class="show-button">links</button></div>
    <div class="image-wrapper"><img src=${image} alt="Bild"></div>
    <div><button onclick="showNextPicture(${i})" id="show-button-next" class="show-button">rechts</button></div>
    <div><button onclick="closePic()">Schließen</button></div>
    </div>`
  }

  function showPreviousPicture(i){
    if (i > 0) {
      let prev = i - 1;
      openPic(prev);
    } 
    else {if (i = 0){
           dimmButtonPrev()
      }
    }}

  function showNextPicture(i){
    if (i < images.length) {
    let next = i + 1;
    openPic(next);}
    else {if (i == images.length) {
         dimmButtonNext()
      }
    }}
  
  
function dimmButtonPrev(){
  document.getElementById('show-button-prev').classList.add('d-none');

}

function dimmButtonNext(){
  document.getElementById('show-button-next').classList.add('d-none');

}

  function closePic(i) {
    let image = images[i];
    let detailContainer =  document.getElementById('onePic');
    detailContainer.innerHTML = generateDetailViewHTML(i, image);
    detailContainer.classList.add('d-none');
  
  
    }