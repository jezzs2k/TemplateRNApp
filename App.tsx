import React, { useEffect } from 'react';
import { ApplicationNavigator } from 'navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import codePush from 'react-native-code-push';

import { configI18n } from 'common/i18n';
import { showErrorAlert, showSuccessAlert } from 'common';

interface DownloadProgress {
  totalBytes: number;
  receivedBytes: number;
}

const App = () => {
  function syncStatusChangedCallback(status: codePush.SyncStatus) {
    //Status
  }

  function downloadProgressCallback(progress: DownloadProgress) {
    //Progress
  }

  useEffect(() => {
    configI18n()
      .then()
      .catch(e => {
        showErrorAlert('Config I18n errors');
      });
  }, []);

  useEffect(() => {
    codePush
      .sync(
        {
          installMode: codePush.InstallMode.IMMEDIATE,
        },
        syncStatusChangedCallback,
        downloadProgressCallback,
      )
      .then((status: codePush.SyncStatus) => {
        showSuccessAlert('Sync CodePush', `${status}`);
      })
      .catch(e => {
        console.log(e);

        showErrorAlert('Sync codepush errors');
      });
  }, []);
  return (
    <SafeAreaProvider>
      <ApplicationNavigator />
    </SafeAreaProvider>
  );
};

export default App;
