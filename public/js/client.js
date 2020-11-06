import {animals} from './animals.js';
// import the animals.js array into client.js; 

let outputHTML = '';
let gallery = document.querySelector(".gallery");

animals.forEach(function(item){
  outputHTML += 
    `<figure class="card">
      <img src="image/${item.path}.jpg" alt="${item.title}" width="${item.width}" height="${item.height}">
      <figcaption>
      <h3>Hi! I'm ${item.title}</h3><br>
      <p>By <a href = "${item.url}">${item.credit}</a>
      </figcaption>
    </figure>`;
});
// For each image ID, 
  // 1. create an image card for each image that includes:
  //      - a `<figure class="card">` container
  //      - an `<img>` element including `src`, `alt`, `width` and `height` attributes
  //      - a `<figcaption>` element containing photo credit and link to Unsplash source
  // 2. append the `<figure>` card to the `outputHTML` variable you created earlier

gallery.innerHTML = outputHTML;
// append the `<figure>` card to the `outputHTML` variable