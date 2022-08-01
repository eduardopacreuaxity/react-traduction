import * as React from 'react';
import { withTranslation } from 'react-i18next';

const Translate = (props) => {
  const handleClick = (language) => {
    props.i18n.changeLanguage(language);
    props.setLocale(language);
  }
  return (
    <>
      <button onClick={() => handleClick('esES')}>ESPAÑOL</button>
      <button onClick={() => handleClick('enUS')}>ENGLISH</button>
      <p>{props.t('title')}</p>
    </>
  );
}

export default withTranslation() (Translate);
