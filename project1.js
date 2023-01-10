
// let itemlist = document.querySelector('#items');

//parent node//

// console.log(itemlist.parentNode);
// itemlist.parentNode.style.background = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode);


//parent element//

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.background = '#f4f4f4';
// console.log(itemlist.parentElement.parentElement);

// childnode//

// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1])
// itemlist.children[1].style.background = 'yellow'

// firstchild//
// console.log(itemlist.firstChild);

// firstelementchild//
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 1'

// lastchild//
// console.log(itemlist.lastChild);

// lastelementchild//
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello 4'

// nextsibling//
// console.log(itemlist.nextSibling);

// nextElementSibling//
// console.log(itemlist.nextElementSibling);

// previousSibling//
// console.log(itemlist.previousSibling);

// previousElementsibling//
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'green'

// createEmement//
// let newdiv = document.createElement('div');

// addclass//
// newdiv.className = 'hello';

// addId//
// newdiv.id = 'hello1';

// addatribute//
// newdiv.setAttribute('title', 'hellodiv');

// create a text node//
// let newtxt = document.createTextNode('hello world');

// add txt to newdiv//
// newdiv.appendChild(newtxt);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// container.insertBefore(newdiv, h1);
// newdiv.style.fontSize = '30px';
// console.log(newdiv);

let container = document.querySelector('header .container');
let h1 = document.querySelector("h1");
let newdiv = document.createElement('div');
newdiv.className = 'hellotitle';
let newtxt = document.createTextNode('Hello');
newdiv.append(newtxt);
container.insertBefore(newdiv, h1);
newdiv.style.background = 'darkgreen';
newdiv.style.fontSize = '30px';


let itemlist = document.querySelector('div .list-group');
let li = document.querySelector('li');
newli = document.createElement('li');
newli.className = 'list-group-item';
let txt1 = document.createTextNode('Hello');
newli.append(txt1);
itemlist.insertBefore(newli, li);