const backgrounds = [
  'https://cdn.donmai.us/sample/ca/5a/__gawr_gura_hololive_and_1_more_drawn_by_crmanzana__sample-ca5a4d59db920155393092d245befa69.jpg',
  'https://i.kym-cdn.com/photos/images/original/002/358/966/4eb.jpg',
  'https://img2.reactor.cc/pics/post/full/watashishi-Gawr-Gura-Hololive-Virtual-YouTuber-7258834.jpeg',
];

const randomNum = Math.floor(Math.random() * backgrounds.length);

document.getElementsByTagName(
  'body'
)[0].style.backgroundImage = `url(${backgrounds[randomNum]})`;
