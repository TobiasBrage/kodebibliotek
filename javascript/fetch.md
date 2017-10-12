# Fetch

Et eksempel på `fetch`.

```javascript
fetch('http://address')
.then((response) => {
    return response.json(); //returnerer response JSON
})
.then((data) => {
    data.forEach(function(arrayData) {
        console.log(arrayData);
    });
});
```