const btnAddTaskList = document.getElementById('task-list-add-btn');
const modal = document.getElementById('modal-bg');
const tasklists = document.getElementsByClassName('task-list');
btnAddTaskList.addEventListener('click', () => {
  modal.classList.add('bg-active');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bg-active'))
    modal.classList.remove('bg-active');
});
// tasklist.forEach((element) => {
//   elelemt.addEventListener('click', () => {
//     console.log('yay');
//   });
// });
for (let e of tasklists) {
  e.addEventListener('click', () => {
    location.replace('./single-task.html');
  });
}

console.log(tasklists);
