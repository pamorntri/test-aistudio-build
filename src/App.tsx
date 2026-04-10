import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight,
} from 'lucide-react';
import LandingPage from './pages/LandingPage';
import ArchitecturePage from './pages/ArchitecturePage';
import { cn } from './lib/utils';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tight text-primary font-headline">BeLinked</Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Features', path: '/#features' },
            { name: 'Architecture', path: '/architecture' },
            { name: 'Docs', path: '/#docs' }
          ].map((item) => (
            <Link 
              key={item.name} 
              className={cn(
                "text-on-surface-variant hover:text-primary transition-colors font-mono text-sm",
                location.pathname === item.path && "text-primary"
              )} 
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-on-surface-variant hover:text-primary transition-all duration-300 font-mono text-sm">Login</button>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2 rounded-lg font-semibold transition-transform active:scale-95 text-sm">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="w-full border-t border-outline-variant/15 bg-surface">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto">
      <div className="col-span-2">
        <div className="text-lg font-bold text-primary mb-4 font-headline">BeLinked</div>
        <p className="text-xs text-on-surface-variant max-w-xs leading-relaxed mb-6">
          BeLinked is the world's first AI-native booking infrastructure, designed for the kinetic exchange of services between humans and agents.
        </p>
        <p className="text-[10px] text-slate-500">
          © 2024 BeLinked AI Infrastructure. Built for the Kinetic Engine.
        </p>
      </div>
      <div>
        <h5 className="text-xs font-bold text-on-surface mb-4 font-headline">Product</h5>
        <ul className="space-y-3">
          {['Resources', 'Status', 'Changelog'].map((item) => (
            <li key={item}><a className="text-slate-500 hover:text-primary transition-colors text-xs" href="#">{item}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="text-xs font-bold text-on-surface mb-4 font-headline">Legal & Dev</h5>
        <ul className="space-y-3">
          {['Privacy', 'API Reference', 'Support'].map((item) => (
            <li key={item}><a className="text-slate-500 hover:text-primary transition-colors text-xs" href="#">{item}</a></li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
