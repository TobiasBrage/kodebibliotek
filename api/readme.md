# API

## Routes

Routes eksempler.

POST

```javascript
app.post('/edit/user', function (req, res) {
    let userId = req.body.id;
    let userForName = req.body.name;
    let userName = req.body.username;
    let userMail = req.body.mail;
    db.execute(`UPDATE bruger SET navn = '${userForName}', mail = '${userMail}', brugernavn = '${userName}' WHERE id = '${userId}'`, (err, rows) => {
        if (err) {
            res.json({"message": "editedError"})
        }
        else {
            res.json({"message": "editedSuccess"})
        }
    })
});
```

GET

```javascript
app.get('/messages', function (req, res) {
    db.query(`select * from kontakt`, 
    function (err, data) {
        res.send(data);
    })
});
```

GET med værdi fra URL

```javascript
app.get('/add/category/:id', function (req, res) {
    let categoryId = req.params.id.replace("id=", "");
    db.query(`INSERT INTO kategori (id, navn) VALUES (null, '${categoryId}')`, function (err, data) {
        res.send('categoryAdded');
    })
});
```