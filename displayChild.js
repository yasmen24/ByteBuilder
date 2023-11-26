function displayChildName() {
  if (JSON.parse(localStorage.getItem('names')==null)){
    var kidsContainer = document.querySelector('.kidscontainer');
    var randName=["Taleen Fahad", "Rayan Fahad"];
    const imgsrc=["images/daughter.png", "images/son.png" ];
    for (let i=0; i<2; i++){
    var kidInfoElement = document.createElement('div');
    kidInfoElement.classList.add('kidinfo');

    var picElement = document.createElement('img');
    picElement.src = imgsrc[i];
    picElement.alt = "kid image" ;

    var nameElement = document.createElement('h3');
    nameElement.textContent = randName[i];

    kidInfoElement.appendChild(picElement);
    kidInfoElement.appendChild(nameElement);
    kidsContainer.appendChild(kidInfoElement); 
}

  }
  else{  
  var childNames = JSON.parse(localStorage.getItem('names') || '[]');
  var kidsContainer = document.querySelector('.kidscontainer');
  childNames.forEach(function(name, index) {
    var kidInfoElement = document.createElement('div');
    kidInfoElement.classList.add('kidinfo');


    var imgs = JSON.parse(localStorage.getItem('images') || '[]');
    var picElement = document.createElement('img');
    picElement.src =imgs[index];

    var nameElement = document.createElement('h3');
    nameElement.textContent = name;

    kidInfoElement.appendChild(picElement);
    kidInfoElement.appendChild(nameElement);
    kidsContainer.appendChild(kidInfoElement);
  });
}
}