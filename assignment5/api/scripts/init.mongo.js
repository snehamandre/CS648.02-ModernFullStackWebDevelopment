/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://ashish:hakuna@nodeproject-6ejkm.mongodb.net/productsDB?retryWrites=true&w=majority scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker
     scripts/init.mongo.js
 */
db.products.remove({});
db.counters.remove({});

const productsDB = [
  {
    id: 1,
    productName: 'Paris Carrot Fit Jeans',
    pricePerUnit: 15,
    category: 'Jeans',
    imageUrl: 'https://cdn-images.farfetch-contents.com/ami-paris-carrot-fit-jeans_14240703_20959980_1000.jpg?c=2',
  },
  {
    id: 2,
    productName: 'Fission SV Jacket',
    pricePerUnit: 50,
    category: 'Jackets',
    imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566742875-arcteryx-1566742871.jpg',
  },
  {
    id: 3,
    productName: "Men's Cotton Cashmere",
    pricePerUnit: 30,
    category: 'Sweaters',
    imageUrl: 'https://cdni.llbean.net/is/image/wim/274603_28634_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2',
  },
];

db.products.insertMany(productsDB);
const count = db.products.count();
print('Inserted', count, 'products');
db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });
db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ status: 1 });
db.products.createIndex({ owner: 1 });
db.products.createIndex({ created: 1 });
