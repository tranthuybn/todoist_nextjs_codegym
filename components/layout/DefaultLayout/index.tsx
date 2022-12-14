import Header from './Header';
import Sidebar from './Sidebar';
import { useThemeValue } from '~/context';
import { AppProps } from '~/interface';

function DefaultLayout({ children }: AppProps): JSX.Element {
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
