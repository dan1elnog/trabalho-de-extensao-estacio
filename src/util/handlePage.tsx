import { PagesEnum } from "../enums/PagesEnum";
import AwsPage from "../pages/awsPage";
import CssPage from "../pages/cssPage";
import DatabasePage from "../pages/databasePage";
import HomePage from "../pages/homePage";
import HtmlPage from "../pages/htmlPage";
import JavaPage from "../pages/javaPage";
import JavaScriptPage from "../pages/javascriptPage";
import PhpPage from "../pages/phpPage";
import PythonPage from "../pages/pythonPage";
import ReactNativePage from "../pages/reactNativePage";

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
    case PagesEnum.AWS_PAGE:
      return <AwsPage />
    case PagesEnum.REACT_NATIVE:
      return <ReactNativePage />

    default:
      return <HomePage />;
  }
}

export default handlePage