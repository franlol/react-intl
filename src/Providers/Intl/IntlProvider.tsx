import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

import en from '../../lang/en.json';
import es from '../../lang/es.json';
import { TStore } from '../../store/reducers/store.types';
import { TIntlProviderProps } from './IntlProvider.types';

const ProviderIntl = (props: TIntlProviderProps) => {
  const { locale } = useSelector((state: TStore) => state.app)

  const translations = (() => {
    switch (locale) {
      case 'es': return es;
      case 'en':
      default: return en;
    }
  })();

  return (
    <IntlProvider locale={locale} messages={translations}>
      {props.children}
    </IntlProvider>

  )
}

export default ProviderIntl;
