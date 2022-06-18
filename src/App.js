
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import Layout from './Views/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CustomerPage from './Views/Pages/Customer/CustomerPage';
import ProductPage from './Views/Pages/Product/ProductPage';
import InvoicePage from './Views/Pages/Invoice/InvoicePage';
import ProductListPage from './Views/Pages/Product/ProductListPage';
import ProductProvider from './Stores/Contexts/ProductContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import mainStore from './Stores/Redux/MainStore';
import CategoryPage from './Views/Pages/Category/CategoryPage';
import CategoryListPage from './Views/Pages/Category/CategoryListPage';
import ProductCards from './Views/Pages/Product/ProductCards';



function App() {
  return (<div>
    <Provider store={mainStore}>
      <ToastContainer />
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/customer" element={<CustomerPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/product/:productid" element={<ProductPage />} />
              <Route path="/productList" element={<ProductListPage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/category/:categoryid" element={<CategoryPage />} />
              <Route path="/categoryList" element={<CategoryListPage />} />
              <Route path="/invoice" element={<InvoicePage />} />
              <Route path="/productCards" element={<ProductCards/>}/>
            </Route>

          </Routes>
        </BrowserRouter>
      
      </ProductProvider>
    </Provider>
 


  </div>)
}


export default App;
