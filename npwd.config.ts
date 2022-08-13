import App from './src/App';
import { AppIcon } from './icon';
import { theme } from './src/app.theme';

const defaultLanguage = 'en';
const localizedAppName = {
  en: 'GARAGE',
};

interface Settings {
  language: 'en';
}

export default (settings: Settings) => ({
  id: 'GARAGE',
  nameLocale: localizedAppName[settings?.language ?? defaultLanguage],
  color: '#fff',
  backgroundColor: '#333',
  path: '/weather',
  icon: AppIcon,
  app: App,
  theme,
});
