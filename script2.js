const btnAddTask = document.getElementById('task-add-btn');

const modal = document.getElementById('modal-bg');
btnAddTask.addEventListener('click', () => {
  modal.classList.add('bg-active');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bg-active'))
    modal.classList.remove('bg-active');
});
