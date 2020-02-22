import { projectsData } from './mockData';
import TodoItem from './components/todoItem';

const searchField = document.getElementById('search-input');
const todoTextElements = document.querySelectorAll('.todo-text');
const todoList = document.querySelector('.list');
const projectOverviewEl = document.querySelector('.projects-overview');
const currentProjectTitleEl = document.querySelector('.current-project-title');

let projectSelected = projectsData['CP'];

const filterTodos = (value) => {
  const todoItems = projectSelected.tasks;

  if(todoItems.length) {
    const filteredItems = todoItems.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    todoList.innerHTML = filteredItems.length ? 
      filteredItems.map(item => (TodoItem(item))).join('') :
      `<p>No such tasks found</p>`
  } 
}

projectOverviewEl.addEventListener('click', (e) => {
  const { target } = e;
  if (!Array.from(target.classList).includes('project-item')) return;
  document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
  target.classList.add('selected');
  handleProjectSelection(target.innerText);
});

const handleProjectSelection = (projectName) => {
  projectSelected = projectsData[projectName];
  
  currentProjectTitleEl.innerHTML = `
    ${projectSelected.title}
    <div class="sub header">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda !</div>
  `
  
  loadTasks();
}

searchField.addEventListener('input', (e) => {
  filterTodos(e.target.value);
})

const loadProjects = () => {
  const projectsList = Object.keys(projectsData).map(project => (`
    <div class="project-item">${project}</div>
  `));

  if (projectsList.length) {
    projectOverviewEl.innerHTML = projectsList.join('');
  } else {
    projectOverviewEl.innerHTML = `<p>Loading...</p>`;
  }
}


const loadTasks = () => {
  const selectedProjectTasks = projectSelected.tasks;

  todoList.innerHTML = selectedProjectTasks.length ?
    selectedProjectTasks.map(task => (TodoItem(task))).join('') :
    `<p>No tasks added for this project</p>`;
}

(function() {
  loadProjects();
  loadTasks();
})();
