const container = document.getElementById('cardContent');
let htmlCard = '';
let pastHtmlCard = '';

const cards = [
  {
<<<<<<< HEAD
    img: `/images/fitness/one.jpg`,
=======
    img: `./images/fitness/one.jpg`,
>>>>>>> ca1499a5191291ffb343f700b3701e9da36536a8
    title: 'Work',
    description:'Work hard in silence. Let success be your noise -Frank Ocean'
  },
  {
<<<<<<< HEAD
    img: `/images/fitness/two.jpg`,
=======
    img: `./images/fitness/two.jpg`,
>>>>>>> ca1499a5191291ffb343f700b3701e9da36536a8
    title: 'Fitness or Dance',
    description:'I try and groom myself, be it through fitness or dance. -Yami Gautam'
  },
  {
    img: `./images/fitness/three.jpg`,
    title: 'Age',
    description:'Fitness has nothing to do with age. -Virender Sehwag',
  },
  {
    img: `./images/fitness/four.jpg`,
    title: 'Discipline',
    description:'In fitness, there are no short cuts. It involves immense discipline and hard work. -Mahesh Babu',
  },
  {
    img: `./images/fitness/five.jpg`,
    title: 'Training',
    description:'You can always improve your fitness if you keep training. -Pastor Maldonad',
  },
  {
    img: `./images/fitness/seven.jpg`,
    title: 'Three Things',
    description:'I understand only three things – films, fitness, and food. -Rakul Preet Singh',
  },
];

cards.forEach((card) => {
  htmlCard
  += `
  <div class="card mb-3" style="max-width: 540px; border: none;">
  <div class="row g-0 activities-box">
    <div class="col-md-4">
      <img src="${card.img}" class="img-fluid rounded-start" alt="activities images">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title activities-title"> ${card.title}</h5>
        <p class="card-text activities-description"> ${card.description}</p>
      </div>
    </div>
  </div>
</div>
`;
});

container.innerHTML = htmlCard;



