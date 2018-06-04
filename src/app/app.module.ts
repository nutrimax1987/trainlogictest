import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ContactsService} from './contacts/contacts.service';
import {TreeViewComponent} from './tree-view/tree-view.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, TreeViewComponent],
    imports: [BrowserModule, FormsModule],
    providers: [ContactsService]
})
export class AppModule {
}
