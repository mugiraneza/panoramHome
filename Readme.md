# **Panorama House**

## Objectifs du projet:
l'objectif du projet visé a créé une plateforme de vente et de location immobilière permettant à de potentiels acheteurs de faire la visite immersive d'un bien sans avoir à bouger de chez eux.

## Pour ce faire:

Nous devons récupérer et traiter des données comme les plans et les images panoramiques de chaque pièce afin de les agencer les projeter dans notre moteur d'imagerie virtuelle.

## Comment commencer ?:
Cloner le repository git sur votre machine
## _Django_ :
- Installer un environement de développement Pipenv en utilisant la commande pip suivant !

```
    pip install pipenv
```

- Installer les requirements et les dépendances

```
    pip install requirements.txt
```

- Lancer la migration de votre base de donnée

```
    python manage.py migrate
```

- Lancer Le serveur django 

```
    python manage.py runserver
```
    
###### _React Js_ :
- Commencez par installer [**node.js**](https://nodejs.org/)

- Positionez vous dans le répèrtoir frontend
```
   cd frontend
```

Installez le package React JS
```
   npm install
   npm audit fix
```

Demarrez React JS
```
   npm start
```
   

## API References

#### Get all Country

```http
  GET /api_ahome_service/country
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `null` | `null` | `null` |

#### Get all State

```http
  GET /api_ahome_service/state
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `null` | `null` | `null` |

#### Get all State

```http
  GET /api_ahome_service/city
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `null` | `null` | `null` |

#### Get all Properties

```http
  GET /api_ahome_service/property
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `null` | `null` | `null` |

#### Get Country


```http
  GET /api_ahome_service/country/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Id of country to fetch |


#### Get  State

```http
  GET /api_ahome_service/state/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Id of state to fetch |

#### Get  Property

```http
  GET /api_ahome_service/property?id=${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `int` | **Required**. Id of property to fetch |


  
## Auteur

- [@mugiranezaoscar](https://github.com/mugiraneza/)

  