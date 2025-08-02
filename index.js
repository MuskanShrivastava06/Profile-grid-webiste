const projects = [
  { title: 'News Integration', desc: 'News Integration by using React', img: 'images/news.jpg',link:'https://news-app-lime-kappa.vercel.app/' },
  { title: 'E-Commerce Site', desc: 'Full stack shopping cart with React.', img: 'images/E-commerce-website.png' },
  { title: 'Weather App', desc: 'Live weather updates using API.', img: 'images/weather.png',link:''},
  { title: 'Font Style Randomizer', desc: 'Font Style Randomizer by using React', img: 'images/Font style randomizer.jpeg',link:'https://font-style-randomizer.vercel.app/' }
];

const grid = document.getElementById('project-grid');

projects.forEach(project => {
  const item = document.createElement('a');
  item.classList.add('portfolio-item');
  item.href = project.link;
  item.target = '_blank';

  item.innerHTML = `
        <img src="${project.img}" alt="${project.title}">
        <div class="portfolio-content">
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
        </div>
      `;

  grid.appendChild(item);

});
const text = ["Web Developer", "Creative Coder"];
let count = 0, i = 0, currentText = "", letter = "";
(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++i);
  document.querySelector(".typed-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    i = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
})();


