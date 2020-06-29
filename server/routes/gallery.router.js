const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    //console.log(req.params);
    const itemId = req.params.id;
    
    sqlText = `UPDATE "gallery" SET likes=likes+1 WHERE id=$1`

    pool.query(sqlText, [itemId])
        .then((result) => {
            console.log('PUT Success', result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    //res.send(galleryItems);
    const sqlText = `SELECT * FROM gallery ORDER BY "id";`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Returned from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    //console.log(req.body);
    const newPath = req.body.path;
    const newDescription = req.body.description;
    console.log("data received" , newPath , newDescription )

    sqlText = `INSERT INTO "gallery" ("path", "description", "likes") 
    VALUES('${newPath}', '${newDescription}', '0' );`

    pool.query(sqlText)
        .then((result) => {
            console.log('POST Success', result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })

}); // END POST Route

// DELETE Route
router.delete('/delete/:id', (req, res) => {
    let id = req.params.id; // id of the thing to delete
    console.log('Delete route called with id of', id);
    let queryText = `
    DELETE FROM "gallery"
    WHERE id = ${id}
    `;

    pool.query(queryText)
        .then((result) => {
            console.log('Delete has worked!', result);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Delete has failed.', err);
            res.sendStatus(500);
        });

}); // END DELETE Route

module.exports = router;