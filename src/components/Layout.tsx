import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";

type LayoutProps = {
  children: ReactNode;
  onLanguageChange: (language: string) => void;
};

const Layout = ({ children, onLanguageChange }: LayoutProps) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">{t("brand")}</div>

        <nav className="nav" aria-label="Main navigation">
          <button type="button" className="language-switcher" onClick={() => onLanguageChange("en")} aria-label="English language">
            EN
          </button>
          <button type="button" className="language-switcher" onClick={() => onLanguageChange("fr")} aria-label="French language">
            FR
          </button>
        </nav>
      </header>

      <main>{children}</main>
      <footer className="footer">
        <p>{t("footer.text", { language: i18n.resolvedLanguage })}</p>
      </footer>
    </div>
  );
};

export default Layout;
