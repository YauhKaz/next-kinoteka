import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

const HomepageBurger = () => {


  return (
    <Menu onClose={ handleOnClose } isOpen = {false}>
      <Link id="home" href="/">Home</Link>
      <Link id="catalog" href="/">Catalog</Link>
      <Link id="pricing" href="/">Pricing plan</Link>
      <Link id="live" href="/">LIVE</Link>
    </Menu>
  )
}

export default HomepageBurger;