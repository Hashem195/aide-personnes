// Attente de chargement complet du DOM
document.addEventListener('DOMContentLoaded', function() {
  // Récupération des éléments du DOM
  var memoryInput = document.getElementById('memory-text'); // Input pour le texte du souvenir
  var memoryFile = document.getElementById('memory-file'); // Input pour le fichier du souvenir
  var addMemoryButton = document.getElementById('add-memory-btn'); // Bouton pour ajouter le souvenir
  var memoryList = document.getElementById('memory-list'); // Liste des souvenirs
  
  // Ajout d'un événement lors du clic sur le bouton "Ajouter le souvenir"
  addMemoryButton.addEventListener('click', function() {
    var memoryText = memoryInput.value.trim(); // Texte du souvenir
    var memoryFileData = memoryFile.files[0]; // Fichier du souvenir
  
    if (memoryText === '' && !memoryFileData) {
      return; // Si le texte et le fichier sont vides, arrêter l'exécution
    }
  
    // Création de l'élément li pour le souvenir
    var memoryItem = document.createElement('li');
    memoryItem.className = 'memory-item';
  
    // Création du conteneur pour le contenu du souvenir
    var memoryContent = document.createElement('div');
    memoryContent.className = 'memory-content';
  
    if (memoryText) {
      // Si le texte du souvenir existe, création de l'élément p pour le texte
      var textContent = document.createElement('p');
      textContent.textContent = memoryText;
      memoryContent.appendChild(textContent);
    }
  
    if (memoryFileData) {
      // Si le fichier du souvenir existe, création de l'élément image ou vidéo en fonction du type de fichier
      var fileReader = new FileReader();
      fileReader.onload = function(event) {
        var fileType = memoryFileData.type;
        if (fileType.startsWith('image/')) {
          // Si c'est une image, création de l'élément img
          var imageContent = document.createElement('img');
          imageContent.src = event.target.result;
          imageContent.className = 'memory-image';
          memoryContent.appendChild(imageContent);
        } else if (fileType.startsWith('video/')) {
          // Si c'est une vidéo, création de l'élément video
          var videoContent = document.createElement('video');
          videoContent.src = event.target.result;
          videoContent.controls = true;
          videoContent.className = 'memory-video';
          memoryContent.appendChild(videoContent);
        }
      };
      fileReader.readAsDataURL(memoryFileData);
    }
  
    // Création du bouton de suppression du souvenir
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
  
    // Ajout d'un événement lors du clic sur le bouton de suppression
    deleteButton.addEventListener('click', function() {
      memoryList.removeChild(memoryItem);
    });
  
    // Ajout du contenu du souvenir à l'élément li
    memoryItem.appendChild(memoryContent);
    memoryItem.appendChild(deleteButton);
  
    // Ajout de l'élément li à la liste des souvenirs
    memoryList.appendChild(memoryItem);
  
    // Réinitialisation des valeurs du texte et du fichier
    memoryInput.value = '';
    memoryFile.value = '';
  });
});

// Attente de chargement complet du DOM
document.addEventListener('DOMContentLoaded', function() {
  // Récupération des éléments du DOM
  const editor = document.getElementById('editor'); // Éditeur de texte du souvenir
  const photoUpload = document.getElementById('photo-upload'); // Input pour le téléchargement de photo
  const saveMemoryBtn = document.getElementById('save-memory-btn'); // Bouton pour sauvegarder le souvenir
  const viewMemoriesBtn = document.getElementById('view-memories-btn'); // Bouton pour afficher les souvenirs
  const memoryList = document.getElementById('memory-list'); // Liste des souvenirs
  const popup = document.getElementById('popup'); // Popup pour afficher un message
  const popupMessage = document.getElementById('popup-message'); // Message du popup
  const popupClose = document.getElementById('popup-close'); // Bouton de fermeture du popup
  
  // Ajout d'un événement lors du clic sur le bouton "Sauvegarder le souvenir"
  saveMemoryBtn.addEventListener('click', function() {
    const memoryText = editor.innerHTML; // Texte du souvenir
    const memoryPhoto = photoUpload.files[0]; // Photo du souvenir
  
    if (memoryText || memoryPhoto) {
      // Si le texte ou la photo du souvenir existe, création de l'élément li pour le souvenir
      const memoryItem = document.createElement('li');
      memoryItem.className = 'memory-item';
  
      // Création du conteneur pour le contenu du souvenir
      const memoryContent = document.createElement('div');
      memoryContent.className = 'memory-content';
      memoryContent.innerHTML = `
        <p>${memoryText}</p>
      `;
  
      if (memoryPhoto) {
        // Si la photo du souvenir existe, création de l'élément img
        const memoryPhotoElement = document.createElement('img');
        memoryPhotoElement.src = URL.createObjectURL(memoryPhoto);
        memoryPhotoElement.alt = 'Photo du souvenir';
        memoryContent.appendChild(memoryPhotoElement);
      }
  
      // Création du bouton de suppression du souvenir
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Supprimer';
  
      // Ajout d'un événement lors du clic sur le bouton de suppression
      deleteButton.addEventListener('click', function() {
        memoryItem.remove();
      });
  
      // Ajout du contenu du souvenir à l'élément li
      memoryItem.appendChild(memoryContent);
      memoryItem.appendChild(deleteButton);
  
      // Ajout de l'élément li à la liste des souvenirs
      memoryList.appendChild(memoryItem);
  
      // Réinitialisation de l'éditeur de texte et du téléchargement de photo
      editor.innerHTML = '';
      photoUpload.value = '';
    }
  });
  
  // Ajout d'un événement lors du clic sur le bouton "Afficher les souvenirs"
  viewMemoriesBtn.addEventListener('click', function() {
    if (memoryList.children.length > 0) {
      memoryList.style.display = 'flex'; // Afficher la liste des souvenirs
      popup.style.display = 'none'; // Masquer le popup
    } else {
      memoryList.style.display = 'none'; // Masquer la liste des souvenirs
      popup.style.display = 'block'; // Afficher le popup
    }
  });
  
  // Ajout d'un événement lors du clic sur le bouton de fermeture du popup
  popupClose.addEventListener('click', function() {
    popup.style.display = 'none'; // Masquer le popup
  });
});
