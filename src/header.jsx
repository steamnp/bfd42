function Header({ subTitle, children }) {
  return (
    <div>
      {children}
      <div>{subTitle}</div>
    </div>
  )
}

export default Header
