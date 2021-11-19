import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

const HomepageBurger = () => {

  return (
    <Menu isOpen = {false}>
      <Link id="home" className="menu-item" href="/">Home</Link>
      <Link id="about" className="menu-item" href="/">Catalog</Link>
      <Link id="contact" className="menu-item" href="/">Pricing plan</Link>
      <Link className="menu-item--small" href="/">LIVE</Link>
    </Menu>
  )
}

export default HomepageBurger;