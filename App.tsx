import React, { useEffect } from 'react';
import { ApplicationNavigator } from 'navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { configI18n } from 'common/i18n';
import { showErrorAlert } from 'common';

const App = () => {
  useEffect(() => {
    configI18n()
      .then()
      .catch(e => {
        showErrorAlert('Config I18n errors');
      });
  }, []);
  return (
    <SafeAreaProvider>
      <ApplicationNavigator />
    </SafeAreaProvider>
  );
};

export default App;
