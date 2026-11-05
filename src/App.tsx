import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    void i18n.changeLanguage(language);
  };

  return (
    <Suspense fallback={<div>{t("loading")}</div>}>
      <Layout onLanguageChange={handleLanguageChange}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
