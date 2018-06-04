import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactsService} from './contacts/contacts.service';
import {Subscription} from 'rxjs/Rx';
import {IContact} from './contacts/contact.interface';

@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {

    contactsSub: Subscription;
    contacts: IContact[];

    constructor(private contactService: ContactsService) {
    }

    ngOnInit() {
        this.contactsSub = this.contactService.getContacts()
            .subscribe(data => this.contacts = data);
    }

    ngOnDestroy() {
        this.contactsSub.unsubscribe();
    }
}
