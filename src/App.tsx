import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Docs from "./pages/Docs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen">{children}</div>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/">
          <AppLayout>
            <LandingPage />
          </AppLayout>
        </Route>
        <Route path="/dashboard">
          <AppLayout>
            <Dashboard />
          </AppLayout>
        </Route>
        <Route path="/admin">
          <AppLayout>
            <AdminPanel />
          </AppLayout>
        </Route>
        <Route path="/pricing">
          <AppLayout>
            <Pricing />
          </AppLayout>
        </Route>
        <Route path="/features">
          <AppLayout>
            <Features />
          </AppLayout>
        </Route>
        <Route path="/docs">
          <AppLayout>
            <Docs />
          </AppLayout>
        </Route>
        <Route path="/blog">
          <AppLayout>
            <Blog />
          </AppLayout>
        </Route>
        <Route path="/contact">
          <AppLayout>
            <Contact />
          </AppLayout>
        </Route>
        <Route path="/about">
          <AppLayout>
            <About />
          </AppLayout>
        </Route>
        <Route path="/login">
          <AuthLayout>
            <Login />
          </AuthLayout>
        </Route>
        <Route path="/signup">
          <AuthLayout>
            <Signup />
          </AuthLayout>
        </Route>
        <Route path="/checkout">
          <AppLayout>
            <Checkout />
          </AppLayout>
        </Route>
        <Route>
          <AppLayout>
            <NotFound />
          </AppLayout>
        </Route>
      </Switch>
    </QueryClientProvider>
  );
}
