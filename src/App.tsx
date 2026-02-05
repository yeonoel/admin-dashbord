import { Overview } from "./pages/overview/Overview"
import { MainLayout } from "./components/layout/MainLayout/MainLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Orders } from "./pages/orders/Orders"
import { Products } from "./pages/products/Products"
import { Customers } from "./pages/customers/Customers"
import Settings from "./pages/settings/settings"
import { Analytics } from "./pages/analytics/Analytics"
import { ThemeProvider } from "./context/ThemeContext"
import { AuthProvider } from "./context/AuthContext"
import { PrivateRoute } from "./components/common/PrivateRoutes/PrivateRoute"
import Login from "./pages/Login/Login"
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Overview />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>

  )
}

export default App
