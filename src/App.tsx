import { useIntl } from "react-intl";

import languages from './lang/languages';

function App() {
  const { formatMessage, locale } = useIntl();

  const indexTranslations = {
    "index.h1": formatMessage({ id: "index.h1" }),
    "index.lang.label": formatMessage({ id: "index.lang.label" }),
    "index.lang.info": formatMessage({ id: "index.lang.info" }, { lang: locale }),
  }
  console.log(`locale`, locale)
  return (
    <div>
      <h1>{indexTranslations["index.h1"]}</h1>
      <label>{indexTranslations["index.lang.label"]}</label>
      <select name='language'>
        {languages.map((language, index) => {
          return <option key={`language-${index}`} value={language.value}>{language.name}</option>
        })}
      </select>
      <p>{indexTranslations["index.lang.info"]}</p>
    </div>
  );

}

export default App;
