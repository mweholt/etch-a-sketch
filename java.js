const container = document.querySelector('#container');


// Set size of box
let size = 500; //px
let squares = 16;
container.setAttribute('style', 'height:'+size+'px; width:'+size+'px; border: 5px solid black;');

// Create squares
let s = 0;
let l = 0;

for (s = 0; s < squares*squares; s++) {
  const tempDiv = document.createElement('div');
  tempDiv.setAttribute('style', 'height:'+size/squares+'px; width:'+size/squares+'px;');
  tempDiv.classList.add('square'+s);
  if(l!=16) {
    tempDiv.setAttribute('style', 'Display: inline-block;');
  }
  else {tempDiv.setAttribute('style', 'Display: block;');}
  container.appendChild(tempDiv);
}
