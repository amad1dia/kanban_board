import { Fiche } from "./fiche";

export class Tableau {
    id: any;
    nom: string;
    dateCreation: string;
    description: string;
    sections: Section[];
}

export class Section {
    id: any;
    tableau: Tableau;
    status: string;
    fiches: Fiche[];
}

