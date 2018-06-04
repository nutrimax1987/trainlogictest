export interface IContact {
    id: number;
    name: string;
    type: string;
    contacts?: IContact[];
    isExpanded?: boolean;
}