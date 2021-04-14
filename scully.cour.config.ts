import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'cour',
  outDir: './dist/static',
  routes: {
    '/course/:id': {
      type: 'json',
      url: 'https://607615ac0baf7c0017fa7854.mockapi.io/api/v1/courses/',
      id: {
        property: 'id'
      }
    }
  }
};