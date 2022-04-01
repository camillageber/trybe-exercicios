const fetchCryptoCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toSring());

  return coins;
 
};
console.log(fetchCryptoCoins());

const setCoins = async () => {
  const coins = await fetchCryptoCoins();

  const cryptoList = document.getElementById('cryptoList');

  coins
  .filter((coin) => Number(coin.rank) <= 10)
  .forEach((coin) => {
    const newLi = document.createElement('li');

    newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

    cryptoList.appendChild(newLi);
  });
}

window.onload = () => setCoins();