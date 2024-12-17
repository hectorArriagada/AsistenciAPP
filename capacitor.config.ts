import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'AsistenciAPP',
  webDir: 'www',
  plugins: {
    Camera: {
      androidPermissions: ['camera']
  }
}
};

export default config;
