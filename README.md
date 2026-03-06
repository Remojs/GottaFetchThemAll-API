# GottaFetchThemAll API

La **GottaFetchThemAll API** es una REST API que provee datos esenciales de los 1025 Pokémon de las 9 generaciones, optimizada para no cargar información irrelevante. 

## Modelo de datos — Pokemon

Cada documento en la colección tiene la siguiente estructura:

```json
{
  "_id": "6394ccde0444413377f32891",
  "ID": 25,
  "name": "pikachu",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  "first_type": "electric",
  "second_type": null,
  "ability": "static",
  "height": "0.4m",
  "weight": "6kg",
  "stats": {
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "special_attack": 50,
    "special_defense": 50,
    "speed": 90
  }
}
```

---

## Valores válidos

### Tipos (`first_type` / `second_type`)
`normal` `fire` `water` `grass` `flying` `fighting` `poison` `electric` `ground` `rock` `psychic` `ice` `bug` `ghost` `steel` `dragon` `dark` `fairy`

### Stats
`hp` `attack` `defense` `special_attack` `special_defense` `speed`

### Generaciones
`1` (1–151) · `2` (152–251) · `3` (252–386) · `4` (387–494) · `5` (495–649) · `6` (650–721) · `7` (722–809) · `8` (810–905) · `9` (906–1010)

---

## Endpoints

### `GET /pokedex`

Devuelve todos los Pokémon de la base de datos con **paginación**.

**Query params**

| Param | Tipo | Requerido | Descripción |
|---|---|---|---|
| `page` | number | No | Página (default: `1`) |
| `limit` | number | No | Resultados por página, máx `200` (default: `100`) |
| `first_type` | string | No | Filtra por tipo primario |
| `second_type` | string | No | Filtra por tipo secundario |
| `ability` | string | No | Filtra por habilidad exacta |

**Respuesta `200`**
```json
{
  "data": [ ...pokémon ],
  "total": 1010,
  "page": 1,
  "limit": 100,
  "pages": 11
}
```

**Ejemplo**
```
GET /pokedex?page=2&limit=50&first_type=fire
```

---

### `GET /pokedex/between`

Devuelve todos los Pokémon cuyo número de Pokédex está dentro de un rango.

**Query params**

| Param | Tipo | Requerido | Descripción |
|---|---|---|---|
| `min` | number | Sí | ID mínimo |
| `max` | number | Sí | ID máximo |

**Respuesta `200`** — Array de Pokémon

**Ejemplo**
```
GET /pokedex/between?min=1&max=50
```

---

### `GET /pokedex/random`

Devuelve uno o más Pokémon aleatorios.

**Query params**

| Param | Tipo | Requerido | Descripción |
|---|---|---|---|
| `count` | number | No | Cantidad, máx `10` (default: `1`) |

**Respuesta `200`** — Array de Pokémon

**Ejemplo**
```
GET /pokedex/random?count=3
```

---

### `GET /pokedex/types`

Devuelve la lista de todos los tipos únicos presentes en la base de datos, ordenados alfabéticamente.

**Respuesta `200`**
```json
["bug", "dark", "dragon", "electric", "fairy", "fighting", ...]
```

---

### `GET /pokedex/abilities`

Devuelve la lista de todas las habilidades únicas presentes en la base de datos, ordenadas alfabéticamente.

**Respuesta `200`**
```json
["blaze", "chlorophyll", "compound-eyes", "overgrow", "static", ...]
```

---

### `GET /pokedex/gen/:gen`

Devuelve todos los Pokémon de una generación específica.

**Path params**

| Param | Tipo | Valores válidos |
|---|---|---|
| `gen` | string | `1` a `9` |

**Respuesta `200`** — Array de Pokémon · **`500`** si la generación no es válida

**Ejemplo**
```
GET /pokedex/gen/1
```

---

### `GET /pokedex/name/:name`

Busca Pokémon por nombre. La búsqueda es **parcial y case-insensitive** (buscar `char` devuelve Charmander, Charmeleon y Charizard).

**Path params**

| Param | Tipo | Descripción |
|---|---|---|
| `name` | string | Nombre o fragmento del nombre |

**Respuesta `200`** — Array de Pokémon

**Ejemplo**
```
GET /pokedex/name/char
```

---

### `GET /pokedex/number/:id`

Devuelve el Pokémon con ese número de Pokédex.

**Path params**

| Param | Tipo | Descripción |
|---|---|---|
| `id` | number | Número de Pokédex |

**Respuesta `200`** — Array con un Pokémon · **`500`** si el ID no es un número

**Ejemplo**
```
GET /pokedex/number/25
```

---

### `GET /pokedex/type/:type`

Devuelve todos los Pokémon que tienen ese tipo como `first_type` **o** `second_type`.

**Path params**

| Param | Tipo | Descripción |
|---|---|---|
| `type` | string | Nombre del tipo (ver valores válidos) |

**Respuesta `200`** — Array de Pokémon · **`500`** si el tipo no es válido

**Ejemplo**
```
GET /pokedex/type/flying
```

---

### `GET /pokedex/dual-type/:first/:second`

Devuelve todos los Pokémon que tienen exactamente esos dos tipos (en cualquier orden).

**Path params**

| Param | Tipo | Descripción |
|---|---|---|
| `first` | string | Primer tipo |
| `second` | string | Segundo tipo |

**Respuesta `200`** — Array de Pokémon

**Ejemplo**
```
GET /pokedex/dual-type/fire/flying
```

---

### `GET /pokedex/ability/:ability`

Devuelve todos los Pokémon con una habilidad específica. La búsqueda es **parcial y case-insensitive**.

**Path params**

| Param | Tipo | Descripción |
|---|---|---|
| `ability` | string | Nombre o fragmento de la habilidad |

**Respuesta `200`** — Array de Pokémon

**Ejemplo**
```
GET /pokedex/ability/static
```

---

### `GET /pokedex/stat/min/:stat`

Devuelve todos los Pokémon ordenados **de menor a mayor** por el stat indicado.

**Path params**

| Param | Tipo | Valores válidos |
|---|---|---|
| `stat` | string | `hp` `attack` `defense` `special_attack` `special_defense` `speed` |

**Respuesta `200`** — Array de Pokémon ordenado · **`500`** si el stat no es válido

**Ejemplo**
```
GET /pokedex/stat/min/speed
```

---

### `GET /pokedex/stat/max/:stat`

Devuelve todos los Pokémon ordenados **de mayor a menor** por el stat indicado.

**Path params**

| Param | Tipo | Valores válidos |
|---|---|---|
| `stat` | string | `hp` `attack` `defense` `special_attack` `special_defense` `speed` |

**Respuesta `200`** — Array de Pokémon ordenado · **`500`** si el stat no es válido

**Ejemplo**
```
GET /pokedex/stat/max/attack
```

---

### `GET /pokedex/stat/range/:stat`

Devuelve todos los Pokémon cuyo valor en el stat indicado está dentro del rango especificado, ordenados de menor a mayor.

**Path params**

| Param | Tipo | Descripción |
|---|---|---|
| `stat` | string | Nombre del stat (ver valores válidos) |

**Query params**

| Param | Tipo | Requerido | Descripción |
|---|---|---|---|
| `min` | number | No* | Valor mínimo del stat |
| `max` | number | No* | Valor máximo del stat |

*Al menos uno de los dos es requerido.

**Respuesta `200`** — Array de Pokémon · **`400`** si no se pasa ni `min` ni `max` · **`500`** si el stat no es válido

**Ejemplo**
```
GET /pokedex/stat/range/attack?min=100&max=150
```

---

## Resumen de endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/pokedex` | Todos los Pokémon (paginado, filtrable) |
| GET | `/pokedex/between?min=&max=` | Por rango de ID |
| GET | `/pokedex/random?count=` | Aleatorio/s |
| GET | `/pokedex/types` | Lista de tipos únicos |
| GET | `/pokedex/abilities` | Lista de habilidades únicas |
| GET | `/pokedex/gen/:gen` | Por generación (1–9) |
| GET | `/pokedex/name/:name` | Por nombre (parcial, case-insensitive) |
| GET | `/pokedex/number/:id` | Por número de Pokédex |
| GET | `/pokedex/type/:type` | Por tipo (first o second) |
| GET | `/pokedex/dual-type/:first/:second` | Por doble tipo exacto |
| GET | `/pokedex/ability/:ability` | Por habilidad (parcial, case-insensitive) |
| GET | `/pokedex/stat/min/:stat` | Ordenado por stat ascendente |
| GET | `/pokedex/stat/max/:stat` | Ordenado por stat descendente |
| GET | `/pokedex/stat/range/:stat?min=&max=` | Por rango de valor de stat |

---

## Changelog

### v2.0.0 — 2026-03-05

#### Nuevos endpoints
- `GET /pokedex/types` — lista todos los tipos únicos de la DB
- `GET /pokedex/abilities` — lista todas las habilidades únicas de la DB
- `GET /pokedex/random?count=N` — devuelve N Pokémon aleatorios (máx 10)
- `GET /pokedex/dual-type/:first/:second` — filtra por doble tipo exacto en cualquier orden
- `GET /pokedex/stat/range/:stat?min=&max=` — filtra por rango de valor de un stat

#### Correcciones de bugs
- Middleware (`cors`, `morgan`, `express.json`) se registraba **después** del router, por lo que nunca se aplicaba a ninguna request
- `throw new error` (minúscula) en gen y type controllers causaba un `ReferenceError` silencioso en runtime
- `/pokedex/type/:type` solo filtraba `first_type`, ignorando el `second_type` — Pokémon como Charizard no aparecían en `/type/flying`
- `min` y `max` en `/pokedex/between` se pasaban como strings a una query numérica de MongoDB, produciendo resultados incorrectos
- Stat inválido en min/max fallaba silenciosamente sin devolver error
- Variables `pokes` declaradas sin `const`/`let` en todos los controllers (variables globales accidentales)
- Eliminadas opciones deprecadas `useNewUrlParser` y `useUnifiedTopology` de la conexión a Mongoose

#### Mejoras de rendimiento
- Paginación en `GET /pokedex`: ya no devuelve todos los documentos de una vez; ahora acepta `page` y `limit` (máx 200) y devuelve metadata `{ data, total, page, limit, pages }`
- `.lean()` agregado a todas las queries — retorna objetos JS planos en vez de documentos Mongoose completos
- Índices de MongoDB agregados al modelo: `ID` (unique), `name`, `first_type`, `second_type`, `ability`

#### Mejoras de usabilidad
- Búsqueda por nombre (`/name/:name`) ahora es parcial y case-insensitive
- Búsqueda por habilidad (`/ability/:ability`) ahora es parcial y case-insensitive
- Validación de parámetros con mensajes de error descriptivos en todos los endpoints

### v1.0.0 — 2024

- Release inicial con 9 endpoints básicos de la Pokédex