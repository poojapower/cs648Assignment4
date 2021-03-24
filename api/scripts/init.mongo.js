/* eslint-disable linebreak-style */
/* eslint linebreak-style: ["error","windows"] */
/* global db print */
/* eslint no-restricted-globals: "off" */
db.products.remove({});
const count = db.products.count();
print('Inserted', count, 'products');
db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });
db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ product_name: 1 });
db.products.createIndex({ product_price: 1 });
db.products.createIndex({ product_image: 1 });
