# WorshopAWS
Le but de ce workshop est de vous initier aux services proposés pas AWS.
Au cours de ce workshop nous allons en utiliser 2 :
- Lambdas (qui va nous servir de back-end)
- APi-Gateway (qui va nous servir d'API)

Prérequis

Pour commencer notre Workshop vous devez installer NodeJs afin de créer une application Web et utiliser les services d'amazon.

https://nodejs.org/en/

SetUp

Utiliser la commande suivante sur votre bureau : « npx create-react-app leNomQueVousVoulez »
Une fois à la racine de votre projet effectuez la commande suivante :

npm i axios et npm i antd

Pour lancer l'application web la commande est la suivante : npm start,
si des problemes apparraissent faites un npm i, puis de nouveau npm start.

Une fois cette action effectuée, rendez vous sur https://aws.amazon.com/fr/ et créez votre compte.

TP

Ce projet comporte 3 parties :
- Creation d'une api (avec et sans clé api)
- Creation d'un backend, répondant aux demandes du frontend
- Creation d'un frontend, effectuant des demandes au backend

Pour la creation de la lambda allez sur le lien suivant : 
https://eu-central-1.console.aws.amazon.com/lambda/home?region=eu-central-1#/functions
Il faut cliquer sur créer la fonction, lui choisir un nom, et pour l'execution on utilisera python 3.7
Normalement la fonction sera crée.

Pour la création de l'api allez sur le lien suivant : 
https://eu-central-1.console.aws.amazon.com/apigateway/main/apis?region=eu-central-1
Il faut cliquer sur créer une API et choisir APi REST
