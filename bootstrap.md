# Bootstrap

I `head` tagget skal `<meta name="viewport" content="width=device-width, initial-scale=1.0">` indsættes for at skaleringen er optimal på mindre enheder.

## Container

Der er to slags `container`.
* `.container`

    Denne container har en `fixed` bredde.

* `.container-fluid`

    Denne container har en `full width`.

Det er anbefalet at have mindst en `.row` i hver `container` for opstillingen er som forventet da `.row` bruger `negativ margin`.

## Grid

Bootstraps `grid system` har 12 kolonner på tværs af siden, det er ikke et krav at bruge alle 12.

Der er fire klasser.
* `xs`

    For små enheder som telefoner.

* `sm`

    For mindre ender som tablets.

* `md`

    For almindelige skærme.

* `lg`

    For store skærme.

De bruges eksempelvis på følgende måde: `.col-sm-4`, dette element vil fylde fire af de i alt 12 kolonner på mindre enheder. De fire klasser kan sagtens kombineres.

Hvis et element skal skubbes frem bruges `.offeset` klassen, eksempelvis vil `.offset4` skubbe elementet fire kolonner frem.

Hvis et element derimod skal hives 

| Definition        | Skærm bredde|
| :----- |:-----|
| Stor skærm      | 1200px og over |
| Standard      | 980px og over |
| Tablet i protræt      | 768px og over |
| Telefoner til tablets      | 767px og mindre |
| Telefoner      | 480px og mindre |

## Tekst manipulering

Bootstrap har nogle indbygget funktioner til manipulering af tekst.

* `.text-left`

    Denne class tilpasser teksten til venstre som er `default`.

* `.text-right`

    Denne class tilpasser teksten til højre.

* `.text-center`

    Denne class tilpasser teksten til midten.

* `.text-lowercase`

    Denne class gør alle tegn små.

* `.text-uppercase`

    Denne class gør alle tegn store.

Der er flere klasser i Bootstrap biblioteket, dette er nogle få af dem.

## Stylesheet

For at sikre at elementerne på siden opfører sig efter hensigten skal der oftest laves lidt modifikationer ved hjælp af styling.

```css
/* Stor skærm */
@media (min-width: 1200px) { ... }
 
/* Portræt tablet til landskab og computer */
@media (min-width: 768px) and (max-width: 979px) { ... }
 
/* Landskab telefon til portræt tablet */
@media (max-width: 767px) { ... }
 
/* Landskab telefon og under */
@media (max-width: 480px) { ... }
```

## Skjul og vis elementer

| Klasse | Telefon | Tablet | Computer | 
| :----- |:-----|:-----|:-----|
|`.visible-phone`|Synlig|Skjult|Skjult|
|`.visible-tablet`|Skjult|Synlig|Skjult|
|`.visible-desktop`|Skjult|Skjult|Synlig|
|`.hidden-phone`|Skjult|Synlig|Synlig|
|`.hidden-tablet`|Synlig|Skjult|Synlig|
|`.hidden-desktop`|Synlig|Synlig|Skjult|

## Knapper

Bootstrap har mange indbygget knapper, her er nogle få af dem.

* `.btn`

    Standard knap.

* `.btn-default`

    Standard knap med mere styling.

* `.btn-primary`

    Blå knap.

* `.btn-success`

    Grøn knap.

* `.btn-info`

    Lyseblå knap.

* `.btn-warning`

    Gul knap.

* `.btn-danger`

    Rød knap.

* `.btn-link`

    Standard link.


Gruppe knapper.

* `.btn-group`

    Har en prædefineret bredde.

* `.btn-group-justified`

    Fylder hele bredden.


![alt text](https://github.com/TobiasBrage/kodebibliotek/blob/master/billeder/knapper.jpg?raw=true)

![alt text](https://github.com/TobiasBrage/kodebibliotek/blob/master/billeder/gruppeknapper.jpg?raw=true)
