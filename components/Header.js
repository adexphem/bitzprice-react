import Link from 'next/link';
import NavStyles from './styles/NavStyles';

import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <NavStyles>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
  </NavStyles>
);

export default Header;