# FullStack2021

Repository for Fullstack Open (2021 version)

## Notes

### Yleista

- React komponenttien nimien tulee alkaa isolla alkukirjaimella
- React-komponenteissa, kaari palaute aina `<div>` tagien sisaan, tai kayttamalla
  _fragmenteja_, eli tyhjia elementteja: `<> </>`
- Reactissa sovelletaan funktionaalisen ohjelmoinnin tekniikoita
  + Tyypillista on kayttaa _immutable_ tietorakenteita
    * Esim. taulukoissa kayta mieluummin `concat` kuin `push` lisatessa alkioita
- Tapahtumankasittelijan pitaa useimmiten olla _viite_ funktioon, ei funktiokutsu
- `useState` _ei saa kutsua_ loopissa, ehtolauseeessa, tai muista kuin komponentin
  maaritelevissa funktioissa
- Ala koskaan maarittele komponenttia toisen komponentin sisalla!

#### Debugging

Kayttaessa `console.log`ia debauksessa, ala yhdista asioita plussalla, vaan erottele
tulostettavat asiat pilkulla:

```javascript
const obj = {nimi: "Olio", ika: 23}
console.log("Olion arvot " + olio)  // Olion arvot [Object object]
console.log("Olion arvot ", olio)  // Olion arvot {nimi: 'Olio', ika: 23}
```

Kirjoita `debugger` mihin tahansa kohtaa koodia, ja selain pysayttaa suorittamisen
esiintyman kohdalle (ikaan kuin inline breakpoint):

```javascript
const arg1 = "1234"
debugger  // Pysahtyy tahan
console.log(4 + 5)
```

#### Dynaaminen sisalto

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

### Objects

Olioden kanssa kaytetaan usein olioliteraaleja:

```javascript
const obj1 = {
    name: "jyrki",
    age: "28",
    education: "Luonnontieteiden kandinaatti"
}
```

Oloiden kenttiin voidaan viitata joko pistenotaatiolla tai hakasulkeilla:

```javascript
console.log(obj1.name)  // jyrki
console.log(obj1['age'])  // 28
```

Olioille voidaan lisata kenttia "lennosta" samoin tavoin:

```javascript
obj1.hometown = 'Jyvaskyla'
obj1['numero'] = 123456
```

Object spread syntaksi mahdollistaa uusien objektion luomisen kopiomalla vanhan
objektin kentat, ja sen jalkeen arvoja voidaan muuttaa aaltosulkeiden sisalla

```javascript
const clicks = {
    left: 0,
    right: 0
}

const clicks2 = {
    ...clicks,
    left: clicks.left + 1
}
```

### Destrukturointi

Taulukkoja on helppo purkaa muuttujiin dekonstruktiovien sijoituslauseiden avulla.

```javascript
const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t
console.log(first, second)  // 1, 2
console.log(rest)  // [3, 4, 5]
```

Oliot voidaan purkaa komponentille myos helposti, vapauttaen koodia clutterista.

```javascript
const hello = (props) => {
    const { name, age } = props
    return `Hello ${name}, you are ${age} years old!`
}

// Propsit voidaan destrukturoida viela yhden askeleen edemmalle:
const hello2 = ({ name, age }) => {
    return `Hello ${name}, you are ${age} years old!`
}
```

### Arrays

#### forEach

`forEach` voi ottaa kolme eri parametria: `element`, `index` ja `array`:

```javascript
const arr = [-1, 3, 4]
arr.forEach((element, index, array) => {
    console.log(`Element ${element} at index ${index}`)
    console.log(array)
})
```

#### map

`map` muodostaa taulukon perusteella uuden taulukon, jonka jokainen alkio luodaan
`mapin` parametrina olevan funktion avulla.

```javascript
const arr = [1, 2, 3]
const arr2 = arr2.map(value => value * 2)
console.log(arr2)  // [2, 4, 6]
```

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

Jos parametreja on vain yksi, voidaan sulut jattaa maarittelysta pois:

```javascript
const square = n => {n * n}
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
