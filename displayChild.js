function displayChildName() {
    var childNames = JSON.parse(localStorage.getItem('names') || '[]');
    var kidsContainer = document.querySelector('.kidscontainer');
  
    childNames.forEach(function(name) {
      var kidInfoElement = document.createElement('div');
      kidInfoElement.classList.add('kidinfo');
  
      var nameElement = document.createElement('h3');
      nameElement.textContent = name;
  
      kidInfoElement.appendChild(nameElement);
      kidsContainer.appendChild(kidInfoElement);
    });
  }