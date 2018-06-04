import {Injectable} from '@angular/core';
//
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
//
import {IContact} from './contact.interface';
import {contacts} from './mock';

@Injectable()
export class ContactsService {
    getContacts(): Observable<IContact[]> {
        return of(contacts);
    }
}