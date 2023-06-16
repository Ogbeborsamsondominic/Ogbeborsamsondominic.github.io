// const switchInput = document.querySelector('.switch input')
// const annually = document.querySelectorAll('.annually')
// const monthly = document.querySelectorAll('.monthly')

// function handleChange() {
//   if (switchInput.checked) {
//     annually.forEach(item => item.classList.add('hidden'))
//     monthly.forEach(item => item.classList.remove('hidden'))
//   } else {
//     annually.forEach(item => item.classList.remove('hidden'))
//     monthly.forEach(item => item.classList.add('hidden'))
//   }
// }

// switchInput.addEventListener('change', handleChange)
// handleChange()


const switchInput = document.querySelector('.switch input');
const annually = document.querySelectorAll('.annually');
const monthly = document.querySelectorAll('.monthly');

function handleChange() {
  annually.forEach(item => item.classList.toggle('hidden', switchInput.checked));
  monthly.forEach(item => item.classList.toggle('hidden', !switchInput.checked));
}

switchInput.addEventListener('change', handleChange);
handleChange();
