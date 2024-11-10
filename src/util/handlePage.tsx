import { PagesEnum } from "../enums/PagesEnum";
import CssPage from "../pages/cssPage";
import DatabasePage from "../pages/databasePage";
import HomePage from "../pages/homePage";
import HtmlPage from "../pages/htmlPage";
import JavaPage from "../pages/javaPage";
import JavaScriptPage from "../pages/javascriptPage";
import PhpPage from "../pages/phpPage";
import PythonPage from "../pages/pythonPage";

const handlePage = (page: PagesEnum) => {

  switch (page) {
    case PagesEnum.HOME_PAGE:
      return <HomePage />
    case PagesEnum.HTML_PAGE:
      return <HtmlPage />
    case PagesEnum.CSS_PAGE:
      return <CssPage />
    case PagesEnum.JAVA_PAGE:
      return <JavaPage />
    case PagesEnum.PHP_PAGE:
      return <PhpPage />
    case PagesEnum.PYTHON_PAGE:
      return <PythonPage />
    case PagesEnum.JAVASCRIPT_PAGE:
      return <JavaScriptPage />
    case PagesEnum.DATABASE:
      return <DatabasePage />

    default:
      return <HomePage />;
  }
}

export default handlePage