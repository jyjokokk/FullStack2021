# Notes

## JavaScript / React

### Yleista

- React komponenttien nimien tulee alkaa isolla alkukirjaimella
- React-komponenteissa, kaari palaute aina `<div>` tagien sisaan, tai kayttamalla
  fragmenteja_, eli tyhjia elementteja: `<> </>`

### Functions

ES6 toi mukanaan mahdollisuuden kayttaa ns. nuolifunktioita perinteisen tavan lisaksi.

Jos funktio sisaltaa vain yhden lausekkeen, voi shorthandina kayttaa:

```javascript
const App = () => (  // Huomaa tavalliset sulkeet aaltosulkeiden sijasta!
    <div>
        <p>Hello world</p>
    </div>
)
```

Palauttaessa monimutkaisempaa sisaltoa, voidaan se kaaria sulkeiden sisaan.

```javascript
const App = () => {
    return (
        <div>
            <p>Esimerkkina nain</p>
        </div>
    )
}
```

### Dynaaminen sisalto

JSX mahdollistaa dynaamisen sisallon kayton.
Komponentin `return` osiossa voidaan suorittaa dynaamista sisaltoa maarittelemalla
se aaltosulkeiden sisalla.

```javascript
const App = () => {
    const now = new Date()
    return (
        <div>
            <p>Today is {now.toString()}</p>
        </div>
    )
}
```