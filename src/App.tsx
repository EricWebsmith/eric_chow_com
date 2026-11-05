import { useTranslation } from 'react-i18next';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import RotatingRoads from './components/RotatingRoads';
import LanguageSwitcher from './components/shared/LanguageSwitcher';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home">
      <h1>{t('home.title')}</h1>
      <p className="home-subtitle">{t('home.subtitle')}</p>
      <div className="game-grid">

        <NavLink to="/rotating-roads" className="game-card arclight-card">
          <svg viewBox="0 0 80 80" width={80} height={80} aria-hidden="true">
            <rect width={80} height={80} fill="#081826" rx={4} />
            <polygon points="18,28 28,34 28,46 18,52 8,46 8,34" fill="#0b2438" stroke="#3a78a1" strokeWidth={2} />
            <polygon points="40,28 50,34 50,46 40,52 30,46 30,34" fill="#0b2438" stroke="#3a78a1" strokeWidth={2} />
            <polygon points="62,28 72,34 72,46 62,52 52,46 52,34" fill="#0b2438" stroke="#3a78a1" strokeWidth={2} />
            <path d="M8,40 Q18,28 28,40 Q40,52 50,40 Q62,28 72,40" fill="none" stroke="#9de7ff" strokeWidth={2.5} strokeLinecap="round" />
          </svg>
          <h2>{t('home.rotatingRoads.title')}</h2>
          <p>{t('home.rotatingRoads.description')}</p>
        </NavLink>
      </div>
    </div>
  );
}

function Nav() {
  const { t } = useTranslation();
  return (
    <nav className="main-nav">
      <NavLink to="/" end className="nav-brand">{t('nav.brand')}</NavLink>
      <ul className="nav-links">
        <li><NavLink to="/rotating-roads">{t('home.rotatingRoads.title')}</NavLink></li>
      </ul>
      <LanguageSwitcher />
    </nav>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="main-footer">
      <p>{t('home.contact')}</p>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rotating-roads" element={<RotatingRoads />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
