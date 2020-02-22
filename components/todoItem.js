const TodoItem = (item) => (`
  <div class="item">
    <div class="item-inner">
      <div class="ui checkbox">
        <input type="checkbox"><label for="" class="todo-text">${item.title}</label>
        <div class="status-tag status-tag--approved">${item.status}</div>
      </div>
    </div>
  </div>
`);


export default TodoItem;