const imageCount = 1;

function getRandomImage() {
  const index = Math.ceil(Math.random() * imageCount);
  return `/img/${index}.gif`;
}
