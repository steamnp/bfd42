function Header({ headerText, subText, children }) {
  return (
    <div className="header">
      <h1>{headerText}</h1>
      <h2>{subText}</h2>
      {children}
    </div>
  );
}

export default Header;
