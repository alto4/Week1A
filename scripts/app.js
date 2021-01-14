// IFFEE - Immediately Invoked Function Expression 
//          -> self-exectures, anonymous function

(function()
{
  // Start function
  function Start()
  {
    console.log('Hello JS! Have a good day');
  
    const clickMeButton = document.getElementById('clickMe');

    clickMeButton.addEventListener('click', () => {
      console.log('Click me button clicked!');
    });
  }

  // Event listener
  window.addEventListener('load', Start);
})();

const button = document.createElement('button');
button.textContent = "Click Me";
const body = document.querySelector('div');
body.appendChild(button);

button.addEventListener('click', function() { alert('Clickity Click')});