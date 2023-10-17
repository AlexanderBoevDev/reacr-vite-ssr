import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from "./routers";
import { Provider } from 'react-redux';
import { getStore } from './store';

async function render(pageContext) {
  const { Page } = pageContext;
  const store = getStore(pageContext.PRELOADED_STATE);
  hydrateRoot(
    document.getElementById('react-root'),
    <BrowserRouter>
      <Provider store={store}>
        <Routers>
          <Page {...pageContext.pageProps} />
        </Routers>
      </Provider>
    </BrowserRouter>
  );
}

export { render }
