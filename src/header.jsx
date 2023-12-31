function Header() {
  const handleClick = (e) => (e.target.textContent = "OUCH!");
  // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  return <button onDoubleClick={handleClick}>Click Me</button>;
}

export default Header;
