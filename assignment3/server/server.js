const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

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

const resolvers = {
    Query: {
        productList,
    },
    Mutation: {
        addProduct,
    },
};

function productList() {
    return productsDB;
}

function addProduct(_, { product }) {
    product.id = productsDB.length + 1;
    productsDB.push(product);
    return product;
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
    resolvers,
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

app.listen(3000, function () {
    console.log('App started on port 3000');
});