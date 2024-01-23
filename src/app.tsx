import { useEffect } from 'react'

function App() {
  console.log('1')
  // There are 2 inputs that we can pass in useEffect hook
  // 1st input is compulsory -> callback function
  // callback function -> input/output
  // 2nd input is optional -> [] -> Dependency Array

  // [1,2,3].map(() =>  {})

  // useEffect hook will always be callled/invoked at the end of component rendering

  const callbackFn = () => {
    console.log('2')
  }

  console.log('3')

  useEffect(callbackFn)

  console.log('4')

  return <div>App</div>
}

export default App
