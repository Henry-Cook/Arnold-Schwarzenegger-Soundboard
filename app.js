//Grabbing HTML elements:
const sounds = document.querySelectorAll('.clip');
const btns = document.querySelectorAll( '.sounds div');
const visuals = document.querySelector('.visual');

//Array for animation colors:
const colors = [
    "#3ec1d3",
    "#ff9a00",
    "#ff165d",
    "#844685",
    "#21bf73",
    "#e8f044",
    "#f688bb"
];

//Array for animated text:
const text = [
  "Come with me if you want to live..",
  "Hasta la vista baby..",
  "I'm a cop you idiot!!",
  "I'm the party pooper..",
  "Get to the choppper!!",
  "There is no bathroom!",
  "You're one ugly motherfucker.."
]

//Adding Sound to each div:
btns.forEach((btns, index) => {
  btns.addEventListener('click', function(){
    sounds[index].currentTime = 0;
    sounds[index].play();
    sounds[index].currentTime = 0;
    createBubble(index);
  });
});

  //Function that adds animation:
  const createBubble = (index) => {
    const bubble = document.createElement('div');
    visuals.appendChild(bubble);
    bubble.style.color = colors[index];
    bubble.textContent = text[index];
  //Changing the animation time based on how long the text is:
    if(index === 6){
      bubble.style.animation = 'jump 3.5s linear';
    }else if (index === 1){
      bubble.style.animation = 'jump 2s linear';
    }else{
    bubble.style.animation = 'jump 1.5s linear';
      };
    //Removing the child that was appended for preformance:
    bubble.addEventListener('animationend', function(){
      visuals.removeChild(this);
    });
  };
