import { Fiche } from "./fiche";

export class Tableau {
    id: any;
    nom: string;
    dateCreation: string;
    description: string;
    sections: Section[];
}

export interface Section {
    status: string;
    fiches: Fiche[];
}

