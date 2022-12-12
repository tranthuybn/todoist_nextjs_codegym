import Header from './Header';
import Sidebar from './Sidebar';
import { useThemeValue } from '~/context';
function DefaultLayout({ children }: any) {
  const { theme } = useThemeValue();
  return (
    <div className={`theme ${theme}`}>
      <Header />
      <div className="content">
        <Sidebar />
        <div className="tasks">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
