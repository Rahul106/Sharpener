const topHeading = document.querySelector('#main-heading');
topHeading.style.textAlign = 'center';

const bHeading = document.querySelector('#basket-heading');
bHeading.style.color = 'brown';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const oddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0; i<oddFruitItems.length; i++) {
  oddFruitItems[i].style.backgroundColor = 'lightgray';
}

const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0; i<evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = 'brown';
  evenFruitItems[i].style.color = 'white';
}