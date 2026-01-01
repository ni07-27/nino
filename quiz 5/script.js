


const modal = document.getElementById('modalOverlay');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


const dropdown = document.getElementById('todo-filter');
const header = dropdown.querySelector('.dropdown-header');
const listItems = dropdown.querySelectorAll('.dropdown-list li');
const selectedValue = dropdown.querySelector('.selected-value');

header.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

listItems.forEach(item => {
  item.addEventListener('click', () => {
    selectedValue.innerText = item.innerText.toUpperCase();
    dropdown.classList.remove('open');
    
    console.log("Filtering by:", item.getAttribute('data-value'));
  });
});

window.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}