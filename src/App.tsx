
import { DndProvider } from "react-dnd";
import Router from "./routes";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AnimatePresence } from "framer-motion";
import { CookiesProvider } from "react-cookie";

import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <AnimatePresence>
          <DndProvider backend={HTML5Backend}>
            <Router />
          </DndProvider>
        </AnimatePresence>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
