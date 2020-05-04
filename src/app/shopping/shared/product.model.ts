export class Product {
  constructor(public id: string,
              public name: string,
              public imgUrl: string,
              public description: string,
              public price = Math.floor(Math.random() * 100),
              public quantity = 1) {
  }
}
