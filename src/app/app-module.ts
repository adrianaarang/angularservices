import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { ComicsComponent } from './components/comics-component/comics-component';
import { ServiceComics } from './services/service.comics';
import { ComicComponentAsync } from './components/comic-component-async/comic-component-async';

@NgModule({
  declarations: [App, ComicsComponent, ComicComponentAsync],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceComics],
  bootstrap: [App],
})
export class AppModule {}
