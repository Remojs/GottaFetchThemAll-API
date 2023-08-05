# GottaFetchThemAll API

La **GottaFetchThemAll API** es una API que te permite acceder a información detallada sobre los Pokémon, con los datos basicos necesarios para optimizar la innecesaria carga masiva de datos irrelevantes en las masivas apis de pokemon. Utiliza varias rutas para recuperar datos específicos sobre Pokémon basados en diferentes criterios de búsqueda. Ya sea que estés buscando un Pokémon por su nombre, tipo, estadísticas o habilidades, esta API te brinda acceso a la rica información de la Pokédex.

# Rutas Disponibles

### Obtener todos los Pokémon en la Pokédex

**GET /pokedex**

Esta ruta devuelve todos los Pokémon en la Pokédex, con la capacidad de filtrar según ciertos criterios. Los parámetros de consulta disponibles son: `name`, `first_type`, `second_type` y `ability`.

Ejemplo de uso:
/pokedex?first_type=electric&ability=static

#

### Obtener Pokémon dentro de un rango de números de la Pokédex

**GET /pokedex/between**

Esta ruta permite obtener todos los Pokémon cuyos números de Pokédex están dentro de un rango específico. Debes proporcionar los parámetros de consulta `min` y `max`.

Ejemplo de uso:
/pokedex/between?min=1&max=50

#

### Obtener Pokémon por generación

**GET /pokedex/gen/:gen**

Esta ruta devuelve todos los Pokémon de una generación específica de las 9 existentes. Debes proporcionar el número de generación como un parámetro en la URL. 

Ejemplo de uso:
/pokedex/gen/1

#

### Obtener Pokémon por nombre

**GET /pokedex/name/**

Esta ruta permite obtener un Pokémon específico por su nombre.

Ejemplo de uso:
/pokedex/name/pikachu

#

### Obtener Pokémon por número de la Pokédex

**GET /pokedex/number/**

Esta ruta permite obtener un Pokémon específico por su número en la Pokédex.

Ejemplo de uso:
/pokedex/number/25

#

### Obtener Pokémon por tipo

**GET /pokedex/type/**

Esta ruta devuelve todos los Pokémon de un tipo específico. Debes proporcionar el nombre del tipo como un parámetro en la URL.

Ejemplo de uso:
/pokedex/type/electric

#

### Obtener Pokémon por estadística mínima

**GET /pokedex/stat/min/**

Esta ruta devuelve todos los Pokémon ordenados desde el mas bajo por su valor en la estadistica requerida. Debes proporcionar el nombre de la estadística como un parámetro en la URL.

Ejemplo de uso:
/pokedex/stat/min/hp

#

### Obtener Pokémon por estadística máxima

**GET /pokedex/stat/max/**

Esta ruta devuelve todos los Pokémon ordenados desde el mas alto por su valor en la estadistica requerida. Debes proporcionar el nombre de la estadística como un parámetro en la URL.

Ejemplo de uso:
/pokedex/stat/max/attack

#

### Obtener Pokémon por habilidad

**GET /pokedex/ability/**

Esta ruta devuelve todos los Pokémon que tienen una habilidad específica. Debes proporcionar el nombre de la habilidad como un parámetro en la URL.

Ejemplo de uso:
/pokedex/ability/static

#

## Respuestas de Ejemplo

Las respuestas de estas rutas estarán en formato JSON y proporcionarán información detallada sobre los Pokémon que coinciden con los criterios de búsqueda.

Ejemplo de respuesta:
```json
{
"stats": {
"hp": 35,
"attack": 55,
"defense": 40,
"special_attack": 50,
"special_defense": 50,
"speed": 90
},
"_id": "6394ccde0444413377f32891",
"ID": 25,
"name": "pikachu",
"image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
"first_type": "electric",
"ability": "static",
"height": "0.4m",
"weight": "6kg",
}
```

¡Disfruta explorando la GottaFetchThemAll API para obtener información emocionante sobre tus Pokémon favoritos!