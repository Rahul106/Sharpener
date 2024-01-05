const italic = document.createElement('italic');
const header = document.createElement('h3');
const text = document.createTextNode('Buy high quality organic fruits online');

italic.append(text);
header.append(italic);

const totalDiv = document.getElementsByTagName('div');
const firstDiv = totalDiv[0];
firstDiv.append(header);

const pText = document.createTextNode('Total fruits: 4');
const pTag = document.createElement('p');
pTag.append(pText);

const secondDiv = totalDiv[1];
secondDiv.append(pTag);

pTag.id = 'fruits-total';