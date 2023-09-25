require('dotenv').config();

const {intializeApp, applicationDefault} = require('firebase-admin/index');
const {getFirestore} = require('firebase-admin/firestore');

intializeApp({
    credential: applicationDefault()
});

const db = getFirestore();

module.exports = {
    db,
};
