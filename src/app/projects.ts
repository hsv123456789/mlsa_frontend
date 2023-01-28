export class Projects {
  projectName: string;
  projectDescription: string;
  projectDomain: string;
  projectLink: string;
  _id: string;

  constructor(
    init?: Partial<Projects>,
    pName?: string,
    pDescription?: string,
    dom?: string,
    plink?: string,
    id?: string
  ) {
    Object.assign(this, init);
    this.projectName = pName;
    this.projectDescription = pDescription;
    this.projectDomain = dom;
    this.projectLink = plink;
    this._id = id;
  }
}
