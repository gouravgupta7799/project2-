
let form = document.getElementById('addForm');
let itemlist = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', additems);
itemlist.addEventListener('click', deleteitem);
filter.addEventListener('keyup', filteritems);

// additems//
function additems(e) {
  e.preventDefault();
  let newitem = document.getElementById('item').value;
  let newdescription = document.getElementById('description').value;
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newitem + ' ' + newdescription));
  itemlist.appendChild(li);

  // deletbutton//
  let deletebtn = document.createElement('button');
  deletebtn.className = 'btn btn-danger btn-sm float-right delete'
  deletebtn.appendChild(document.createTextNode('x'));
  li.appendChild(deletebtn);
  itemlist.appendChild(li);

  // editbutton//
  let editbtn = document.createElement('button');
  editbtn.className = 'btn btn-sm btn-primary float-right';
  editbtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editbtn);
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


// filter//
function filteritems(e) {
  let text = e.target.value.toLowerCase()
  let item = itemlist.getElementsByTagName('li');
  Array.from(item).forEach(function (item) {
    let itemname = item.firstChild.textContent;
    if (itemname.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block'

    } else {
      item.style.display = 'none'
    }
  })
}