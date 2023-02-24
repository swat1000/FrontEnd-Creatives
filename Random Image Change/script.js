function displayRandomImage() {
    const images = [
      'Image1.jpg',
      'Image2.jpg',
      'Image3.jpg',
      'Image4.jpg'
    ];
  
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
  
    const imgElement = document.getElementById('random-image');
    imgElement.src = randomImage;
  }
  
  window.onload = function() {
    displayRandomImage();
  };
  