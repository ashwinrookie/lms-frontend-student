import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
	AppInitializerService,
	AuthService,
	HttpInterceptorService
} from './core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState, StudentEffects, studentReducer } from './states';
import { environment } from 'src/environments/environment';


export function appInitializerFactory(appInitializerService: AppInitializerService) {
	return () => appInitializerService.initializeApp();
}


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		HttpClientModule,
		StoreModule.forRoot<AppState>({ student: studentReducer }),
		EffectsModule.forRoot([StudentEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production
		})
	],
	providers: [
		AuthService,
		AppInitializerService,
		{
			provide: APP_INITIALIZER,
			useFactory: appInitializerFactory,
			deps: [AppInitializerService],
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
