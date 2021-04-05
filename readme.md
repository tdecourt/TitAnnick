Membres de l'équipe :
* Le Guennec Alexis
* Mousset Gael
* Chambon Matthieu
* Decourty Thomas

## Configuration Docker nécessaire

- Vérifier que vous avez bien la configuration du registry de l'IUT suivante. Merci de faire attention au **port 80** !!!! 
 
- Aussi, vous pouvez avoir d'autres registries dans cette config. 

```docker 
{
  "insecure-registries": [
    "registry.univ-lr.fr:80"
  ]
}
```

## Récupération des sources du projet
- Cloner le *repository*
```
git clone https://forge.iut-larochelle.fr/aleguenn/2020-2021-INFO2-DW-DevMob-TitAnnick.git
```
- Télécharger les dépendances [node_modules](https://filesender.renater.fr/?s=download&token=a18ae71b-12ce-4896-8f27-8083f61b2b8c)

- Remplacez `2020-2021-INFO2-DW-DevMob-TitAnnick/app/node_modules` par le répertoire `node_modules` se trouvant dans le dossier que vous avez téléchargé précédement.

## Construction et lancement des containers Docker
- Créer les images Docker du projet
```
docker-compose build
```
- Lancer les containers Docker du projet
```
docker-compose up
```
(on peut faire les 2 étapes précédentes avec la commande `docker-compose up --build` )
## Accéder aux services
- bd MySQL : 
  - en ligne de commande : 
  ```
  docker-compose exec bd bash
  mysql -u dbuser -p
  password: dbpassword
  ```

- api Symfony : 
  - via `HTTP` : http://localhost:9999
  - en ligne de commande : 
  ```
  docker-compose exec api bash
  ```

- app Angular : 
  - via `HTTP` : http://localhost:4200
  - en ligne de commande : 
  ```
  docker-compose exec app bash
  cd api/
  ```

## Fermeture de la session de travail
- Arrêter et supprimer les containers
```
docker-compose down
```
- Sauvegarder son travail sur la forge (pensez à faire des `git commit` réguliers, et à respecter les [conventions de commits](https://forge.iut-larochelle.fr/aleguenn/2020-2021-INFO2-DW-DevMob-TitAnnick/-/wikis/Les-commits))
```
git push
```