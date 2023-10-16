import React, { useContext } from 'react';
import type { PageContext } from './pageContext';

const Context = React.createContext<PageContext>(undefined as unknown as PageContext);

function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}

export { PageContextProvider }
export { usePageContext }
