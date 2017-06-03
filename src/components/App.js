import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Provider as ReduxProvider } from 'react-redux';

const ContextType = {
  insertCss: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  ...ReduxProvider.childContextTypes,
  client: PropTypes.object.isRequired,
};

class App extends React.PureComponent {

  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }

  componentDidMount() {
    const store = this.props.context && this.props.context.store;
    if (store) {
      this.lastLocale = store.getState().intl.locale;
      this.unsubscribe = store.subscribe(() => {
        const state = store.getState();
        const { newLocale, locale } = state.intl;
        if (!newLocale && this.lastLocale !== locale) {
          this.lastLocale = locale;
          this.forceUpdate();
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  render() {
    const store = this.props.context && this.props.context.store;
    const state = store && store.getState();
    this.intl = (state && state.intl) || {};
    const { initialNow, locale, messages } = this.intl;
    const localeMessages = (messages && messages[locale]) || {};
    return (
      <IntlProvider
        initialNow={initialNow}
        locale={locale}
        messages={localeMessages}
        defaultLocale="en-US"
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

export default App;
