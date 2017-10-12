# Addeventlistener

Funktionen `addeventlistener` tilføjer et hændelseshåndterings element til dokumentet for at "lytte" efter eventuelle ændringer på et specifikt element.

For at programmere en `addeventlistener` bruges følgende kode.

```javascript
document.querySelector('#element').addEventListener('click', () => {
    //kode
});
```

I stedet for at udføre koden i `addeventlistener` kan man i stedet udføre en funktion.

```javascript
document.querySelector('#element').addEventListener('click', myFunction);

function myFunction() {
    //kode
}
```

`addeventlistener` kan reagere på flere slags henvendelser, her er nogle stykker.

* `click`

    Når der klikkes på elementet.

* `mouseover`

    Når musemarkøren er over elementet.

* `mouseout`

    Når musemarkøren forlader elementet.

* `change`

    Når elementet bliver ændret, eksempelvis i et `text input` eller i et `select` element.