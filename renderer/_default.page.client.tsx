import { hydrateRoot } from 'react-dom/client';
import { App } from './App';
import type { PageContextClient } from './pageContext';

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined');
  const root = document.getElementById('react-root');
  if (!root) throw new Error('DOM element #react-root not found');
  hydrateRoot(
    root,
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>
  )
}

export { render }
