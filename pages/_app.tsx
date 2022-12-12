import type { AppProps } from 'next/app';
import '../styles/App.scss';
import { ThemeProvider, ProjectsProvider, SelectedProjectProvider } from '~/context';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProjectsProvider>
      <SelectedProjectProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </SelectedProjectProvider>
    </ProjectsProvider>
  );
}
