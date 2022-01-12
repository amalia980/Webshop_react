import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Account from "./pages/Account"
import Login from "./pages/Login"
import ShowInDom from "./ShowInDom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <ShowInDom />}>
        <Route path="login" element={ <Login />} />
        <Route path="account" element={ <Account />} />
      </Route>
    </Routes>
    
    </BrowserRouter>
    </>

  );
}

export default App;
