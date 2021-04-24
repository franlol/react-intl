import { ChangeEvent } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import languages from '../../lang/languages';
import { appSetLocale } from '../../store/reducers/app/app.actions';

export default function Home() {
  const { formatMessage, locale } = useIntl();
  const dispatch = useDispatch();

  const indexTranslations = {
    "index.h1": formatMessage({ id: "index.h1" }),
    "index.lang.label": formatMessage({ id: "index.lang.label" }),
    "index.lang.info": formatMessage({ id: "index.lang.info" }, { lang: locale }),
  }

  const selectOnChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    const isValid = languages.some(language => language.value === value);

    dispatch(appSetLocale(isValid
      ? value
      : navigator.language.split('-')[0] || 'en'
    ));
  }

  return (
    <div>
      <h1>{indexTranslations["index.h1"]}</h1>
      <label>{indexTranslations["index.lang.label"]}</label>
      <select name='language' onChange={selectOnChangeHandler}>
        {languages.map((language, index) => {
          return <option key={`language-${index}`} value={language.value}>
            {language.name}
          </option>
        })}
      </select>
      <p>{indexTranslations["index.lang.info"]}</p>
    </div>
  );
}
