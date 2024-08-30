// Add Footer
const footer = document.createElement('footer');

footer.style.backgroundColor = '#d8dbfe';
footer.style.padding = '10px';
footer.style.textAlign = 'center';

document.body.appendChild(footer);

//Copyright Text in Footer
let today = new Date();
let thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML = `Romanna Bidnyk &#169; ${thisYear}`;

footer.appendChild(copyright);