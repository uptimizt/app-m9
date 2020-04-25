import _ from 'lodash';
 
function component() {
    const element = document.createElement('div');

   // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = '<p>sdfsdf12332dddd</p>';


    return element;
  }

  document.body.appendChild(component());