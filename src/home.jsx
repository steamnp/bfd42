import Header from './header'

function Home() {
  const subtitleValue = 'I am subtitle!'
  return (
    <div>
      {/* headerText -> prop */}
      {/* subTitle -> prop */}
      <Header subTitle={subtitleValue}>
        <h1>Hello React</h1>
        <h2>React Component</h2>
      </Header>

      <Header>
        <h1>Hello JS</h1>
      </Header>
    </div>
  )
}

export default Home
