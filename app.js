//1
document.getElementById('container');
//2
document.querySelector('#container');
//3
document.getElementsByClassName('second');
//4
document.querySelector('ol > .third');
//5
document.querySelector('#container').innerText = 'Hello!';
//OR
const changeContent = document.querySelector('#container');
changeContent.innerText = 'Hello!';
//6
const footer = document.querySelector('.footer');
footer.classList.add('main');
//OR
footer.className += "main";
//7
const footer = document.querySelector('.footer');
footer.classList.remove('main');
//8
document.createElement('li');
//9
const li = document.createElement('li');
li.innerText = 'four';
 //10
 const ul = document.querySelector('ul');
 ul.appendChild(li)
 //11
 let lis = document.querySelectorAll('ol li');

 for (let li of lis){
  li.style.backgroundColor = "green";
 }
//OR
for(let i = 0; i < lis.length; i++){
  lis[i].style.backgroundColor = "green";
}
//12
let footer = document.querySelector('.footer');
footer.remove();


