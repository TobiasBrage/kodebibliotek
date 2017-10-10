# API

## Routes

Routes eksempler.

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

```javascript
app.get('/messages', function (req, res) {
    db.query(`select * from kontakt`, 
    function (err, data) {
        res.send(data);
    })
});
```

```javascript
app.get('/user', function (req, res) {
    db.query(`select 
    bruger.id as 'id',
    bruger.navn as 'navn',
    bruger.mail as 'mail',
    bruger.brugernavn 'brugernavn',
    bruger.kodeord as 'kodeord',
    tilladelse.navn as 'tilladelse'
    from bruger
    inner join tilladelse on bruger.fk_tilladelse = tilladelse.id`, function (err, data) {
        res.send(data);
    })
});
```