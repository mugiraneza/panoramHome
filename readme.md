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
    >> pip install pipenv
    
    OU
    
    >> py -m venv venv
    >> venv\Scripts\activate
    
    OU en cas d erreur
    >> set-executionpolicy unrestricted
    (env)>> ..................
```

- Installer les requirements et les dépendances

```
    >> pip install -r requirements.txt
```

- Obtenir la liste des packages à mettre à jour

```
    >> pip list --outdated
```
- Mettre à jour un package

```
    >> pip install --upgrade PackageName
    OU
    >> pip install pip-review
    >> pip-review --local --auto
```
- Lancer la migration de votre base de donnée

```
    >> python manage.py migrate
```

- Lancer Le serveur django 

```
    >> python manage.py runserver
```
    
###### _React Js_ :
- Commencez par installer [**node.js**](https://nodejs.org/)

- Positionez vous dans le répèrtoir frontend
```
    >> cd frontend
```

Installez le package React JS
```
   >> npm install
   >> npm audit fix
```

Demarrez React JS
```
   >> npm start
```
**En cas de besoin**

###### Supprimer les data de l'application ahome ...

```
    >> py manage.py flunsh
```
###### Maintenant, rechargez les données fixtures ...

```
    >> py manage.py loaddata ahome > ahome/fixtures/file_name.json
```
###### INFO: Pour cree des fixtures
```
    >> py manage.py dumpdata ahome --indent 4 > ahome/fixtures/file_name.json
```
###### Optionnel ...

```
    >> py manage.py createsuperuser
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

#### Get  Plans

```http
  GET /api_ahome_service/plan?propertie_id=${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `propertie_id`      | `int` | **Required**. Id of property to fetch |

#### POST  Plans

```http
  POST /api_ahome_service/plan
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `property`      | `int` | **Required**. Id of property to fetch |
| `floorNum`      | `int` | **Required**. N° of current floor |
| `plan`      | `file` | **Required**. only one image field |

## Tests
* Premièrement 
```
    >> coverage run --omit=*/venv/*,*/migrations/*,*/__init__.py manage.py test
```
* Referez-vous à la documentation de [coverage](https://coverage.readthedocs.io/en/6.2/)
* de facon generale
```    
    >> coverage report -m
```
* pour avoir un rapport de test en html
```    
    >> coverage run --omit='*/venv/*,*/frontend/*,*/*/migrations/*,*apps.py' manage.py test
    >> coverage html
    >> coverage report -m
```

## Auteur

- [@mugiranezaoscar](https://github.com/mugiraneza/)
- [Mon site Web](https://mugiraneza.com)

  
