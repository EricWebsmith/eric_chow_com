import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">{t("hero.eyebrow")}</p>
        <h1>{t("hero.title")}</h1>
        <p className="subtitle">{t("hero.subtitle")}</p>
        <div className="cta-row">
          <Link to="/" className="button primary">
            {t("hero.primaryCta")}
          </Link>
          <Link to="/missing" className="button secondary">
            {t("hero.secondaryCta")}
          </Link>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>{t("features.react.title")}</h2>
          <p>{t("features.react.description")}</p>
        </article>
        <article className="card">
          <h2>{t("features.typescript.title")}</h2>
          <p>{t("features.typescript.description")}</p>
        </article>
        <article className="card">
          <h2>{t("features.vite.title")}</h2>
          <p>{t("features.vite.description")}</p>
        </article>
      </section>
    </main>
  );
};

export default HomePage;
