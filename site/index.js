window.addEventListener('load', () => {
  const whiskyGlass = document.querySelector('#glass');
  whiskyGlass.addEventListener('click', () => {
    whiskyGlass.src = 'image/empty_whisky.png';
  });
});
