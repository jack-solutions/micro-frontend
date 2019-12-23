import { registerApplication, start } from 'single-spa'

registerApplication(
  'child1',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/child2"  ? false : true
);

registerApplication(
  'child2',
  () => import('./src/react1/main.app.js'),
  () => location.pathname === "/child1"  ? false : true
);


start();