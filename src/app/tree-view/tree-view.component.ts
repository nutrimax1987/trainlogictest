import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IContact} from '../contacts/contact.interface';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent {

    @Input() nodes: IContact[];
    @Output() onRequestNodes: EventEmitter<IContact> = new EventEmitter<IContact>();

    onExpand($event, node: IContact) {
        $event.stopPropagation();
        node.isExpanded = !node.isExpanded;
        if (node.isExpanded && node.type === 'Group') {
            this.onRequestNodes.emit(node);
        }
    }
}