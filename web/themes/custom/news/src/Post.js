export default class Post {
  constructor(title, img) {
    this.title = title
    this.img = img
    this.dare = new Date()
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      img: this.img
      })
  }

  get uppercaseTitle() {
    return this.title.toUpperCase()
  }
}
