import { Fiche } from "./fiche";

export class Tableau {
    id: any;
    nom: string;
    dateCreation: string;
    description: string;
    sections: Section[];
}

export interface Section {
    id: any;
    status: string;
    fiches: Fiche[];
}

