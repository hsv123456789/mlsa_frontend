export class Picture {
  name: string;
  _id: string;
  imagePath: string;
  constructor(id: string, ImagePath: string, name) {
    this._id = id;
    this.imagePath = ImagePath;
    this.name = name;
  }
}
