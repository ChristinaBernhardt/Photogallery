let image = ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.jpg','./img/6.jpg','./img/7.jpg','./img/8.jpg','./img/9.jpg',
'./img/10.jpg','./img/11.jpg','./img/12.jpg','./img/13.jpg','./img/14.jpg','./img/15.jpg','./img/16.jpg','./img/17.jpg','./img/18.jpg', 
'./img/19.jpg','./img/20.jpg','./img/21.jpg','./img/22.jpg','./img/23.jpg','./img/24.jpg','./img/25.jpg','./img/26.jpg','./img/27.jpg',
'./img/28.jpg','./img/29.jpg', './img/30.jpg','./img/31.jpg','./img/32.jpg'];


let images = document.querySelector('#imgGallerie');
let wrapper = document.getElementById('wrapper');
let imgWrapper = document.getElementById('fullImg');
let close = document.getElementById('close');
let img = document.querySelectorAll('img');

function load() {
  let imgGallerie = document.querySelector('#imgGallerie');
  imgGallerie.innerHTML = '';
  for (let i = 0; i < image.length; i++) {
    imgGallerie.innerHTML += `
   <img src="${image[i]}" id="img" onclick="openPic(${i})">`;
  }
}

function openPic(i) {
  wrapper.innerHTML += `
  <img src="${image[i]}"><span onclick="closePic()" id="close">X</span>
`;
  openModal();
  load();
}
function closePic() {
  wrapper.style.display = 'none';
  wrapper.innerHTML = '';
  load();
}
function openModal() {
  wrapper.style.display = 'flex';
}