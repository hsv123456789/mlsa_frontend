export class Blog {
  imagePath: string;
  title: string;
  author: string;
  content: string;
  _id: string;
  constructor(
    imagePath: string,
    title: string,
    author: string,
    content: string,
    id: string
  ) {
    this.imagePath = imagePath;
    this.title = title;
    this.author = author;
    this.content = content;
    this._id = id;
  }
}
