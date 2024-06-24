import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomerModule } from './CustomerApp/CustomerApp.module';

platformBrowserDynamic().bootstrapModule(CustomerModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
