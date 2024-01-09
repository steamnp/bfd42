function App() {
  let email

  return (
    <article>
      <label htmlFor="">Email</label>
      <input onChange={function () {}} type="text" />
      <h3>You typed: </h3>
    </article>
  )
}

export default App

// create function in 3 ways
// Function declaration
function addFnDl(a, b) {
  return a + b
}

addFnDl(10, 20)

// Function expression
const addFnEx = function (a, b) {
  return a + b
}

addFnEx(10, 20)

// Arrow function
const addFnArr = (a, b) => a + b

addFnArr(10, 20)
