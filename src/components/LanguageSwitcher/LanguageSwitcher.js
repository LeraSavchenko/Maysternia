import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocale } from '../../actions/intl';

const position = {
  marginTop: '15px',
};

function LanguageSwitcher({ currentLocale, availableLocales, setLocale }) {
  const isSelected = locale => locale === currentLocale;
  const localeDict = {
    'en-US': 'УКР /',
    'cs-CZ': 'РУС',
  };
  const localeName = locale => localeDict[locale] || locale;
  
  return (
    <div style={position}>
      {availableLocales.map(locale => (
        <span key={locale}>
          {isSelected(locale) ? (
            <span>{localeName(locale)}</span>
          ) 
          : (   
            <a
              href={`?lang=${locale}`} onClick={(e) => {
                setLocale({ locale });
                e.preventDefault();
              }} > {localeName(locale)}</a>
          )}
          {' '}
        </span>
      ))}
    </div>
  );
}

LanguageSwitcher.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLocale: PropTypes.func.isRequired,
};

const mapState = state => ({
  availableLocales: state.runtime.availableLocales,
  currentLocale: state.intl.locale,
});

const mapDispatch = {
  setLocale,
};

export default connect(mapState, mapDispatch)(LanguageSwitcher);