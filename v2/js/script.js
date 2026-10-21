// Récupère l'élément <img> et les deux boutons
const image = document.getElementById('image');
const boutonA = document.getElementById('boutonA');
const boutonB = document.getElementById('boutonB');

// Le bouton A affiche l'image A
boutonA.addEventListener('click', function () {
  image.src = 'images/image-a.svg';
  image.alt = 'Image A';
});

// Le bouton B remplace l'image par l'image B
boutonB.addEventListener('click', function () {
  image.src = 'images/image-b.svg';
  image.alt = 'Image B';
});
