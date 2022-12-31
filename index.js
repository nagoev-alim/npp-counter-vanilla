// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='counter'>
    <h1>Counter</h1>
    <p class='h1' data-value>0</p>
    <div>
      <button class='button' data-type='decrease'>Decrease</button>
      <button class='button' data-type='reset'>Reset</button>
      <button class='button' data-type='increase'>Increase</button>
    </div>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// Query Selector
const DOM = {
  value: document.querySelector('[data-value]'),
  buttons: document.querySelectorAll('[data-type]'),
};

const PROPS = {
  counter: 0,
  colorRed: getComputedStyle(document.documentElement).getPropertyValue('--bct-red'),
  colorGreen: getComputedStyle(document.documentElement).getPropertyValue('--bct-green'),
};

/**
 * @function onClick - Button click event handler
 * @param type
 */
const onClick = ({ target: { dataset: { type } } }) => {
  switch (type) {
    case 'decrease':
      PROPS.counter--;
      break;
    case 'increase':
      PROPS.counter++;
      break;
    case 'reset':
      PROPS.counter = 0;
      break;
    default:
      break;
  }
  DOM.value.style.color = PROPS.counter < 0 ? PROPS.colorRed : PROPS.counter === 0 ? '#1b1d20' : PROPS.colorGreen;
  DOM.value.textContent = PROPS.counter;
};

// Events
DOM.buttons.forEach(button => button.addEventListener('click', onClick));


/* Simple Counter Example:
const counter = () => {
  let number = 0;
  return () => number++;
};

const n = counter()
console.log(n());
console.log(n());
console.log(n());
*/
