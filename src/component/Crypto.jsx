import "./Crypto.css";

function Crypto(props) {
  let { elem } = props;
  let { name, rank, symbol, supply, vwap24Hr: price } = elem;
  return (
    <>
      <div id="OneCoin">
        <h4>{name}</h4>
        <p>{rank}</p>
        <p>{symbol}</p>
        <p>{supply}</p>
        <p>{price}</p>
      </div>
    </>
  );
}
export default Crypto;
