import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <main className="not-found">
      <h1>404</h1>
      <p>{t("notFound.message")}</p>
      <Link to="/" className="button primary">
        {t("notFound.backHome")}
      </Link>
    </main>
  );
};

export default NotFoundPage;
