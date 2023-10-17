import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./_default.page.route";
import { Provider } from 'react-redux';
import { getStore } from './store';

async function render(pageContext) {
  const { Page } = pageContext;
  const store = getStore(pageContext.PRELOADED_STATE);
  hydrateRoot(
    document.getElementById('react-root'),
    <BrowserRouter>
      <Provider store={store}>
        <Router>
          <Page {...pageContext.pageProps} />
        </Router>
      </Provider>
    </BrowserRouter>
  );
}

export { render }
