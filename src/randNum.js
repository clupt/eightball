function getRandomItem (arr){
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export default getRandomItem;
