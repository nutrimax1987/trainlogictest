import {Injectable} from '@angular/core';
import {contacts} from './mock-contacts';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactsService {

    constructor() {
    }

    getContacts(): Observable<IContact[]> {
        return of(contacts);
    }

    getChildContacts(id: number): Observable<IContact[]> {
        const childs = contacts.filter(c => c.id === id);
        return of(childs);
    }
}

export interface IContact {
    id: number;
    name: string;
    type: string;
    contacts?: IContact[];
}