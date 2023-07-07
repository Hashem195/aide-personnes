// Attente de chargement complet du DOM
document.addEventListener('DOMContentLoaded', function() {
  // Récupération des éléments du DOM pour le côté éditeur
  var editor = document.getElementById('editor'); // Éditeur de texte du souvenir
  var saveMemoryBtn = document.getElementById('save-memory-btn'); // Bouton pour sauvegarder le souvenir
  
  // Récupération des éléments du DOM pour le côté souvenir
  var memoryInput = document.getElementById('memory-text'); // Input pour le texte du souvenir
  var memoryFile = document.getElementById('memory-file'); // Input pour le fichier du souvenir
  var addMemoryButton = document.getElementById('add-memory-btn'); // Bouton pour ajouter le souvenir
  var memoryList = document.getElementById('memory-list'); // Liste des souvenirs
 
  // Ajout d'un événement lors du clic sur le bouton "Sauvegarder le souvenir" (côté éditeur)
  saveMemoryBtn.addEventListener('click', function() {
    var memoryText = editor.innerHTML; // Texte du souvenir
  
    if (memoryText) {
      // Si le texte du souvenir existe, création de l'élément li pour le souvenir
      var memoryItem = document.createElement('li');
      memoryItem.className = 'memory-item';
  
      // Création du conteneur pour le contenu du souvenir
      var memoryContent = document.createElement('div');
      memoryContent.className = 'memory-content';
      memoryContent.innerHTML = '<p>' + memoryText + '</p>';
  
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
  
      // Réinitialisation de l'éditeur de texte
      editor.innerHTML = '';
    }
  });

  // Ajout d'un événement lors du clic sur le bouton "Ajouter le souvenir" (côté souvenir)
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

//Ajout des évènements concernant le formulaire du bénévolat
Inscription.addEventListener('click',function(){form.style.display='block';});//Faire apparaitre le formulaire


inscrit.addEventListener('submit',function(){form.style.display='none';});// Faire disparaitre le formulaire

