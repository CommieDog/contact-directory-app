import { Workbox } from 'workbox-window';
import '../css/styles.css';

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register workbox service worker
  const workboxSW = new Workbox('/service-worker.js');
  workboxSW.register();
  console.log("Service Worker registered!");
} else {
  console.error('Service workers are not supported in this browser.');
}
