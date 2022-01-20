import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route index element={<Shop />}/>
        <Route path="login" element={ <Login />} />
        <Route path="shop" element={ <Shop />} />
        <Route path="shop/:firstname/:lastname/" element={ <Shop />} />
        <Route path="checkout" element={<Checkout/>}></Route>
        <Route path="checkout/:firstname/:lastname/" element={ <Checkout />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
