import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CoreRoutingModule,
    HttpClientModule
  ]

})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

}
