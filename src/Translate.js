import * as React from 'react';
import { withTranslation } from 'react-i18next';

const Translate = (props) => {
  return (
    <>
      <button onClick={() => props.i18n.changeLanguage('es')}>ESPAÑOL</button>
      <button onClick={() => props.i18n.changeLanguage('en')}>ENGLISH</button>
      <p>{props.t('title')}</p>
    </>
  );
}

export default withTranslation() (Translate);
