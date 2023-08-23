import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Wizard = ({
  pages,
  wizardState,
  wizardStateSetters,
  closeWizard,
  mutations,
  wizardGlobalProps,
  wizardPageOverride = '',
  setWizardPageOverride,
}) => {
  const startingPage = Object.keys(pages).find((name) => {
    const page = pages[name];
    return page.start;
  });

  const [currentPage, setWizardPage] = useState(startingPage);

  const Content = pages[currentPage].component;

  useEffect(() => {
    if (wizardPageOverride.length) {
      setWizardPage(wizardPageOverride);
      setWizardPageOverride('');
    }
  }, [wizardPageOverride]);

  return (
    <Content
      wizardState={wizardState}
      wizardStateSetters={wizardStateSetters}
      setWizardPage={setWizardPage}
      mutations={mutations}
      wizardGlobalProps={wizardGlobalProps}
      closeWizard={closeWizard}
    />
  );
};

Wizard.propTypes = {
  pages: PropTypes.object.isRequired,
  wizardState: PropTypes.object,
  wizardStateSetters: PropTypes.object,
  closeWizard: PropTypes.func,
  wizardGlobalProps: PropTypes.object,
  mutations: PropTypes.object,
  wizardPageOverride: PropTypes.string,
  setWizardPageOverride: PropTypes.func,
};

Wizard.defaultProps = {
  wizardState: {},
  wizardStateSetters: {},
  wizardGlobalProps: {},
  mutations: {},
  wizardPageOverride: '',
  setWizardPageOverride: () => {},
  closeWizard: () => {},
};

export default Wizard;
