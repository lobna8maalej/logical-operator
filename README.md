# logical-operator.
# Exercices de Fonctions JavaScript – Conditions et Logique

## Niveau de base

### 1. Écris une fonction appelée `opposite` qui prend un booléen en paramètre et retourne son opposé.

```javascript
function opposite(boolean) {
  // Écris ton code ici
}
```

Exemples :  
opposite(true) -> false  
opposite(false) -> true  

---

### 2. Écris une fonction appelée `greaterThan5` qui prend deux nombres en paramètres et retourne true si **au moins l’un des deux** est supérieur à 5, sinon false.

```javascript
function greaterThan5(num1, num2) {
  // Écris ton code ici
}
```

Exemples :  
greaterThan5(1, 6) -> true  
greaterThan5(5, 5) -> false  
greaterThan5(1, 4) -> false  

---

### 3. Écris une fonction appelée `allGreaterThan5` qui retourne true si **les deux nombres** sont supérieurs à 5, sinon false.

```javascript
function allGreaterThan5(num1, num2) {
  // Écris ton code ici
}
```

Exemples :  
allGreaterThan5(6, 7) -> true  
allGreaterThan5(2, 7) -> false  

---

### 4. Écris une fonction appelée `largerThan5AndLessThan20` qui retourne true si le nombre est **strictement supérieur à 5 et strictement inférieur à 20**, sinon false.

```javascript
function largerThan5AndLessThan20(number) {
  // Écris ton code ici
}
```

Exemples :  
largerThan5AndLessThan20(12) -> true  
largerThan5AndLessThan20(21) -> false  
largerThan5AndLessThan20(5) -> false  

---

### 5. Écris une fonction appelée `not6AndLessThan10` qui retourne true si le nombre **n’est pas égal à 6** ET **est inférieur à 10**, sinon false.

```javascript
function not6AndLessThan10(number) {
  // Écris ton code ici
}
```

Exemples :  
not6AndLessThan10(6) -> false  
not6AndLessThan10(7) -> true  
not6AndLessThan10(10) -> false  

---

### 6. Écris une fonction appelée `largerThan3AndLessThan18` qui prend trois nombres et retourne true si **les trois nombres** sont dans l’intervalle **strictement supérieur à 3 et strictement inférieur à 18**, sinon false.

```javascript
function largerThan3AndLessThan18(num1, num2, num3) {
  // Écris ton code ici
}
```

Exemples :  
largerThan3AndLessThan18(2, 4, 20) -> false  
largerThan3AndLessThan18(5, 6, 7) -> true  
largerThan3AndLessThan18(3, 6, 18) -> false  

---

### 7. Écris une fonction appelée `cloudyAndRainy` qui prend deux chaînes et retourne true si elles sont **"cloudy" et "rainy"**, sinon false.

```javascript
function cloudyAndRainy(string1, string2) {
  // Écris ton code ici
}
```

Exemples :  
cloudyAndRainy("cloudy", "rainy") -> true  
cloudyAndRainy("clear", "rainy") -> false  

---

### 8. Écris une fonction appelée `weatherActivities` qui prend un type de météo et retourne une activité à faire.
(ajoute au moins 3 types de météo)

```javascript
function weatherActivities(weather) {
  // Écris ton code ici
}
```

Exemples :  
weatherActivities("rainy") -> "chocolat chaud"  
weatherActivities("sunny") -> "course à pied"  


---

### 9. Écris une fonction appelée `evenAndGreaterThan7` qui retourne true si le nombre est **pair** et **supérieur à 7**, sinon false.

```javascript
function evenAndGreaterThan7(number) {
  // Écris ton code ici
}
```

Exemples :  
evenAndGreaterThan7(6) -> false  
evenAndGreaterThan7(8) -> true  
evenAndGreaterThan7(9) -> false  

---

## Plus de pratique

### 1. `areValidCredentials`
Nom > 3 caractères  
Mot de passe ≥ 8 caractères

```javascript
function areValidCredentials(name, password) {
  // Écris ton code ici
}
```

---



### 2. `guessMyNumber`
Compare ton nombre avec un nombre aléatoire entre 0 et 5  
Retourne une phrase selon le résultat

```javascript
function guessMyNumber(number) {
  // Écris ton code ici
}
```

---


#  Logique et Conditions (Avancé)

## 1. `or`
Écris une fonction appelée **or** qui prend deux expressions booléennes et qui fonctionne comme l’opérateur **OR**, mais écris-la en utilisant seulement **AND** et **NOT**.

```javascript
function or(statement1, statement2) {
   // Écris ton code ici
}
```

Exemples :

- or(true, true) -> true  
- or(true, false) -> true  
- or(false, true) -> true  

---

## 2. `and`
Écris une fonction appelée **and** qui prend deux expressions booléennes et qui fonctionne comme l’opérateur **AND**, mais écris-la en utilisant seulement **OR** et **NOT**.

```javascript
function and(statement1, statement2) { 
   // Écris ton code ici
}
```

Exemples :

- and(true, true) -> true  
- and(true, false) -> false  
- and(false, false) -> false  
- and(1 < 3, 5 > 7) -> true  

---

## 3. `shirtWidth`
Écris une fonction appelée **shirtWidth** qui prend un nombre comme paramètre et retourne une chaîne spécifique selon quatre cas :

- entre 20 et 30 → `"You should select a size S"`
- entre 30 et 40 → `"You should select a size M"`
- entre 40 et 50 → `"You should select a size L"`
- sinon → `"You should select a different shirt"`

```javascript
function shirtWidth(width) {
   // Écris ton code ici
}
```

Exemples :

- shirtWidth(25) -> "You should select a size S"  
- shirtWidth(35) -> "You should select a size M"  
- shirtWidth(45) -> "You should select a size L"  
- shirtWidth(100) -> "You should select a different shirt"  

---

## 4. `playerOneChoice`
Écris une fonction appelée **playerOneChoice** qui prend une chaîne représentant le choix du Joueur 1 dans le jeu pierre/papier/ciseaux, et retourne une phrase correspondante.

```javascript
function player1Choice(choice) {
   // Écris ton code ici
}
```

Elle retourne :

- "Player 1 chose rock"
- "Player 1 chose paper"
- "Player 1 chose scissors"
- "Player 1 has chosen poorly!"

Exemples :

- playerOneChoice("rock") -> "Player 1 chose rock"  
- playerOneChoice("paper") -> "Player 1 chose paper"  
- playerOneChoice("scissors") -> "Player 1 chose scissors"  
- playerOneChoice("gun") -> "Player 1 has chosen poorly!"  

---

## 5. `isItTruthy`
Écris une fonction appelée **isItTruthy** qui prend n’importe quelle valeur et retourne :

- `"Input is truthy"` si la valeur est truthy  
- `"Input is falsy"` sinon  

```javascript
function isItTruthy(value) {
   // Écris ton code ici
}
```

Exemples :

- isItTruthy("anything") -> "Input is truthy"  
- isItTruthy() -> "Input is falsy"  
- isItTruthy(0) -> "Input is falsy"  
- isItTruthy("") -> "Input is falsy"  
- isItTruthy(false) -> "Input is falsy"  

---

## 8. `checkArea`
Écris une fonction appelée **checkArea** qui prend une aire comme paramètre et retourne :

- true si elle est **> 48 ET < 100**
- false sinon

```javascript
function checkArea(area) {
   // Écris ton code ici
}
```

Exemples :

- checkArea(50) -> true  
- checkArea(100) -> false  

---

## 6. `checkMultiply`
Écris une fonction appelée **checkMultiply** qui prend deux nombres et retourne :

- true si leur produit est **> 50 ET < 150**
- false sinon

```javascript
function checkMultiply(num1, num2) {
   // Écris ton code ici
}
```

Exemples :

- checkMultiply(10, 6) -> true  
- checkMultiply(7, 7) -> false  
