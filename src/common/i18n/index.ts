import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform, NativeModules } from 'react-native';

import { en } from './en';
import { fr } from './fr';
import { LANG } from '../../constants';
import { getItem } from 'common';

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

export const configI18n = async () => {
  let lag = 'en';
  const saveLag = await getItem(LANG);
  if (saveLag) {
    lag = JSON.parse(saveLag)?.value || 'en';
  }

  await i18n.use(initReactI18next).init({
    resources: {
      en,
      fr,
    },
    fallbackLng: lag,
    debug: false,
    cache: { enabled: false },
    cleanCode: true,
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
    lng: locale,
  });
};

async () => await configI18n();

export default i18n;
