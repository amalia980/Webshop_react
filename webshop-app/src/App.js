import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Account from "./pages/Account"
import Login from "./pages/Login"
import Shop from './pages/Shop';
import ShowInDom from "./ShowInDom"
import Checkout from './pages/Checkout';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <ShowInDom />}>
        <Route path="shop" element={<Shop />}/>
        <Route path="login" element={ <Login />} />
        <Route path="account" element={ <Account />} />
        <Route path="account/:firstname/:lastname/" element={ <Account />} />
        <Route path="checkout" element={ <Checkout />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
