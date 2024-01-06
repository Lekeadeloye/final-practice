

import './navbar.css'

function NavBar() {

  const item = ['Home', 'About', 'Contact'];

  const listItem = item.map((i, index) => <li key={index}><a href="#">{i}</a></li>);

  return (
    <>
      <ul>{listItem}</ul>
    </>
  )
}

export default NavBar;