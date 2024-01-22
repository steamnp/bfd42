function home() {
  // typeof myName -> string
  const myName = "Rajip";

  // typeof myFavNum -> number
  const myFavNum = 7;
  let age = 26;

  //Array
  // typeof myFavNumbers -> object (Array)
  const myFavNumbers = [10, 20, 30];

  // typeof myFavNumbers -> object
  const participant = {
    name: "Gorakh",
    favNumber: 10,
  };

  // typeof randomValue -> undefined
  let randomValue;

  // valueof anotherValue -> object
  const anotherValue = null;

  // typeof isProductAvailable -> boolen
  const isProductAvailable = false;

  return <div>{typeof isProductAvailable}</div>;
}

export default home;
