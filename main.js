import { taskStatuses, projectsData } from './mockData';
import TodoItem from './components/todoItem';

const $ = (selector) => document.querySelector(selector);

const $id = (selector) => {
  let cleanedSelector = selector;
  if(selector[0] === '#') {
    cleanedSelector = selector.split('').splice(1).join('');
  }
  return document.getElementById(cleanedSelector);
}

const searchField = $id('#search-input');
const todoList = $('.list');
const projectOverviewEl = $('.projects-overview');
const currentProjectTitleEl = $('.current-project-title');
const addButton = $('.add-button');
const addField = $id('#add-note-field');
let projectSelected = projectsData['CP'];

const handleNewTodo = () => {
  const tasks = [...projectSelected.tasks, { id: projectSelected.tasks.length + 1, title: addField.value, status: taskStatuses.BLOCKED }];
  projectSelected.tasks = tasks;
  loadTasks();
  addField.value = '';
}

addButton.addEventListener('click', handleNewTodo);

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
    ${projectSelected.subTitle && '<div class="sub header">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda !</div>' }
  `
  
  loadTasks();
}

searchField.addEventListener('input', (e) => {
  filterTodos(e.target.value);
})

const loadProjects = () => {
  projectOverviewEl.innerHTML = 
    Object.keys.length ?
    Object.keys(projectsData).map(project => (`
      <div class="project-item">${project}</div>
    `)).join('') :
    `<p>Loading...</p>`;
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
