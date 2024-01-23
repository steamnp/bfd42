function home() {
  // typeof myName -> string
  const myName = "Rajip";

  // typeof myFavNum -> number
  const myFavNum = 7.01;
  let age = 26;

  //Array
  // typeof myFavNumbers -> object (Array)
  const myFavNumbers = [10, 20, 30];
  const anotherArray = [10, 20, 30];

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

  const numberOne = 10;
  const numberTwo = 20;

  // Truthy Values

  // Falsy Values
  // false, undefined, 0, '', null, NaN

  // conditional statement
  if (numberOne > numberTwo) {
    console.log("I am truthy value");
  } else {
    console.log("I am a falsy value");
  }

  return <div>{typeof isProductAvailable}</div>;
}

export default home;
