// const apiUrl = 'http://localhost:4000/data';

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // The fetched data as a JavaScript object or array
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
// document.addEventListener('DOMContentLoaded', () => {
//     const dataElement = document.getElementById('data');
  
//     fetch('http://localhost:4000/data')
//       .then(response => response.text())
//       .then(data => {
//         dataElement.textContent = data;
//       })
//       .catch(error => {
//         dataElement.textContent = 'Error fetching data.';
//         console.error('Error:', error);
//       });
//   });
  

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:4000/data', true);
var data1 = [];


xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    data1.push(JSON.parse(xhr.responseText));
    console.log((typeof JSON.parse(xhr.responseText))); // Response data
  } else {
    console.error('Error:', xhr.statusText);
  }
};


xhr.onerror = function () {
  console.error('Request failed');
};
xhr.onloadend = function  () {
    //console.log(data1);
    
const show = document.getElementById('data');

//  for (const data of data1[0]) {
//   show.innerHTML += '<li>'+data+'</li>';

// }

  
  for (let index = 0; index < data1[0].length; index++) {
    show.innerHTML += '<li>'+data1[0][index]+'</li>'
};
}
xhr.send();


const show = document.getElementById('data');

