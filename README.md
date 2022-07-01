
1. Zainstaluj node_modules 

```bash
  npm i
```

uruchom środowisko deweloperskie
```
  npm run develop
```

2. Poukładaj obrazki (div.wrap>img) w stylu Masonry Layout jak na zdjęciu assets/img/pixel-perfect.jpg
  - nie używaj żadnych bibliotek i wtyczek (stwórz grid przy pomocy Flex Box)
  - swój kod dodaj w pliku assets/styles/_main.scss
  - dodaj do przeglądarki wtyczkę "Pixel Perfect" dla sprawdzenia wyniku


3. W pliku index.js napisz animację ładowania obrazków (div.wrap>img) w przeglądarce (po kolei  od pierwszego do ostatniego) 
  - funkcja musi schować wszystkie obrazki (przy pomocy opacity), a potem po kolei  dla każdego obrazka podmieniać opacity z 0 na 1 
  - nie używaj żadnych bibliotek i wtyczek (dla animacji możesz używać setTimeout)
  - po zakończeniu animacji ostatniego obrazka, przy pomocy JS dodaj do 
  
  ```html
    <div class="wrap">
  ```
   dodatkową klasę "wrap--loaded"


4. W pliku index.js dodaj funkcję, która po kliknięciu w obrazek dodaje do niego "opacity: .5"
  - dla dodania tej funkcji do każdego obrazka skorzystaj z pętli forEach


5. Przy pomocy "CSS @keyframes" utwórz cykliczną animację i dodaj ją tylko do trzeciego obrazku
  - nie dodawaj żadnych dodatkowych atrybutów "id/class" do html struktury
  - dla animacji używaj np. transform: scale(n)

```html
  <div class="wrap">
    <img src="../assets/img/1.jpg">
    <img src="../assets/img/2.jpg">
    <img src="../assets/img/3.jpg">
    <img src="../assets/img/3.jpg">
    <img src="../assets/img/2.jpg">
    <img src="../assets/img/1.jpg">
    <img src="../assets/img/1.jpg">
    <img src="../assets/img/2.jpg">
    <img src="../assets/img/3.jpg">
  </div>
```


6. Stwórz HTML strukturę dla grafiki assets/img/product-card.png  
  - napisz sam HTML bez css  
  - do każdego znacznika dodaj atrybut "class" ( dla nazw klas użyj metody BEM https://en.bem.info/methodology/quick-start/)

```html
<a class="product" href="#">
  ...twój kod...
</a>
```
