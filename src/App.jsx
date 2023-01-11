// import components
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { ViewSection } from './components/ViewSection';

// import context

import { JsonProvider } from './context/JsonContext';

// UI

function App() {
  return (
    <div className="App">
      <Header />
      <JsonProvider>
        <InputSection />
        {/* <ViewSection /> */}
      </JsonProvider>
    </div>
  );
}

export default App;
