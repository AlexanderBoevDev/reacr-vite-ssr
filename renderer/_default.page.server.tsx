import ReactDOMServer from 'react-dom/server';
import { App } from './App';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import logoUrl from '../public/logo.svg';
import type { PageContextServer } from './pageContext';

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined');
  const pageHtml = ReactDOMServer.renderToString(
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>
  );

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'React Vite SSR app';
  const desc = (documentProps && documentProps.description) || 'React pattern with vite and ssr page';

  const documentHtml = escapeInject `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection
    }
  }
}

export { render }
export const passToClient = ['pageProps', 'urlPathname'];
