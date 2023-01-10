
let form = document.getElementById('addForm');
let itemlist = document.getElementById('items');


form.addEventListener('submit', additems);
itemlist.addEventListener('click', deleteitem);

// additems//

function additems(e) {
  e.preventDefault();
  let newitem = document.getElementById('item').value;

  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newitem));
  itemlist.appendChild(li);

  let deletebtn = document.createElement('button');
  deletebtn.className = 'btn btn-danger btn-sm float-right delete'
  deletebtn.appendChild(document.createTextNode('x'));
  li.appendChild(deletebtn);
  itemlist.appendChild(li);
}

// deleteitem //
function deleteitem(e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    if (confirm('are you sure')) {
      let li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}