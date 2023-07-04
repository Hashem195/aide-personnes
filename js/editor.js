document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const photoUpload = document.getElementById('photo-upload');
    const saveMemoryBtn = document.getElementById('save-memory-btn');
    const viewMemoriesBtn = document.getElementById('view-memories-btn');
    const memoryList = document.getElementById('memory-list');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupClose = document.getElementById('popup-close');
  
    saveMemoryBtn.addEventListener('click', function() {
      const memoryText = editor.innerHTML;
      const memoryPhoto = photoUpload.files[0];
  
      if (memoryText || memoryPhoto) {
        const memoryItem = document.createElement('li');
        memoryItem.className = 'memory-item';
  
        const memoryContent = document.createElement('div');
        memoryContent.className = 'memory-content';
        memoryContent.innerHTML = `
          <p>${memoryText}</p>
        `;
  
        if (memoryPhoto) {
          const memoryPhotoElement = document.createElement('img');
          memoryPhotoElement.src = URL.createObjectURL(memoryPhoto);
          memoryPhotoElement.alt = 'Memory Photo';
          memoryContent.appendChild(memoryPhotoElement);
        }
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
          memoryItem.remove();
        });
  
        memoryItem.appendChild(memoryContent);
        memoryItem.appendChild(deleteButton);
        memoryList.appendChild(memoryItem);
  
        editor.innerHTML = '';
        photoUpload.value = '';
      }
    });
  
    viewMemoriesBtn.addEventListener('click', function() {
      if (memoryList.children.length > 0) {
        memoryList.style.display = 'flex';
        popup.style.display = 'none';
      } else {
        memoryList.style.display = 'none';
        popup.style.display = 'block';
      }
    });
  
    popupClose.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  });
  