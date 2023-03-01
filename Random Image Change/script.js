const images = document.querySelectorAll("img");

let i = 0;

setInterval(function(){
   
 images.forEach( (img, i) => {
    img.style.display = 'none';
  })

  images[i].style.display = 'block';
  i++;

}, 2000);
  