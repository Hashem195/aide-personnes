document.addEventListener('DOMContentLoaded', function() {
    var memoryInput = document.getElementById('memory-text');
    var memoryFile = document.getElementById('memory-file');
    var addMemoryButton = document.getElementById('add-memory-btn');
    var memoryList = document.getElementById('memory-list');
  
    addMemoryButton.addEventListener('click', function() {
      var memoryText = memoryInput.value.trim();
      var memoryFileData = memoryFile.files[0];
  
      if (memoryText === '' && !memoryFileData) {
        return;
      }
  
      var memoryItem = document.createElement('li');
      memoryItem.className = 'memory-item';
  
      var memoryContent = document.createElement('div');
      memoryContent.className = 'memory-content';
  
      if (memoryText) {
        var textContent = document.createElement('p');
        textContent.textContent = memoryText;
        memoryContent.appendChild(textContent);
      }
  
      if (memoryFileData) {
        var fileReader = new FileReader();
        fileReader.onload = function(event) {
          var fileType = memoryFileData.type;
          if (fileType.startsWith('image/')) {
            var imageContent = document.createElement('img');
            imageContent.src = event.target.result;
            imageContent.className = 'memory-image';
            memoryContent.appendChild(imageContent);
          } else if (fileType.startsWith('video/')) {
            var videoContent = document.createElement('video');
            videoContent.src = event.target.result;
            videoContent.controls = true;
            videoContent.className = 'memory-video';
            memoryContent.appendChild(videoContent);
          }
        };
        fileReader.readAsDataURL(memoryFileData);
      }
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
  
      deleteButton.addEventListener('click', function() {
        memoryList.removeChild(memoryItem);
      });
  
      memoryItem.appendChild(memoryContent);
      memoryItem.appendChild(deleteButton);
      memoryList.appendChild(memoryItem);
  
      memoryInput.value = '';
      memoryFile.value = '';
    });
  });
  