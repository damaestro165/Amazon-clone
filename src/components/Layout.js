import { BottomBar } from './BottomBar';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <BottomBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
