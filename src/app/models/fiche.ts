export class Fiche {
    id: string;
    libelle: string;
    lieu: string;
    url: string;
    note: null;
    date: string;
    collaborateurFullName: string;
    dureeTache: number;
    commit: string;
    collaborateurRole: string;
    sectionStatus: string;
    collaborateur: Collaborateur;
    section: Section;
}
export class Collaborateur {
    id: any;
}

export class Section {
    id: any;
}
