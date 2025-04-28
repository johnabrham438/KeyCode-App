const toggleBtn = document.querySelector('.toggle-button');
const reloadBtn = document.querySelector('.reload-button');
const container = document.querySelector('.container');

//save the initial content of the container
const originalContent = container.innerHTML;

//appear keyCode in the DOM
window.addEventListener('keydown', (e) => {
  const result =  `
        <div class="result">
          <span>${e.keyCode}</span>
        </div>
  
  `;
  container.innerHTML = result;

    
})


//toggle theme function
function toggleTheme(){
    document.body.classList.toggle('light-mode');
    document.querySelectorAll('svg').forEach(svg => svg.classList.toggle('light-mode'));
}
//restore Content function
function RestoreContent(){
    return  document.querySelector('.container').innerHTML =  originalContent;

}
// add eventListener
reloadBtn.addEventListener('click', RestoreContent);
toggleBtn.addEventListener('click', toggleTheme);

