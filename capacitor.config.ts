import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.glimmer.app',
  appName: 'glimmerapp',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    //url: 'http://192.168.182.1:3000',
		//cleartext: true
  }
};

export default config;
