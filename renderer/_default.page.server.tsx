import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { getStore } from './store';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import { Routers } from "./routers";

const passToClient = ['PRELOADED_STATE','pageProps'];

async function render(pageContext) {
  const { pageHtml } = pageContext
  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

async function onBeforeRender(pageContext) {
  const store = getStore();
  const { Page, pageProps, urlPathname } = pageContext
  const pageHtml = renderToString(
    <StaticRouter location={urlPathname}>
      <Provider store={store}>
        <Routers>
          <Page {...pageProps}/>
        </Routers>
      </Provider>
    </StaticRouter>
  )
  
  // Grab the initial state from our Redux store
  const PRELOADED_STATE = store.getState();
  
  return {
    pageContext: {
      PRELOADED_STATE,
      pageHtml
    }
  }
}

export { render }
export { onBeforeRender }
export { passToClient }
