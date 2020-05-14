# Cloud Computing

### Introducere
Aflandu-ne intr-o perioada dificila, o perioada ce, printer altele poate fi caracterizata de cuvantul nesiguranta, pastrarea unui job a devenit o adevarata provocare pentru un numar semnificativ de persoane. Astfel, aplicatia mea, are scopul de a ajuta persoanele ce sunt in cautarea unui job, printr-un mod extrem de rapid si efficient, realizand cautari dupa functia dorita, iar pe langa asta ofera si o gama larga de carti despre functia respectiva.

### Descriere problema
![prima](https://user-images.githubusercontent.com/64580803/81983385-fb34cd80-963b-11ea-900f-4ba57f860eaf.png)
Multi tineri proaspat absolventi sau care inca urmeaza o facultate, isi doresc intr-un anumit moment al vietii sa isi gaseasca un loc de munca, dar sunt nesiguri pe propriile lor aptitudini si cunostinte. 
Din propria experienta, am observat cum in momentul gasirii unui job, se pune deseori problema “ imi place acest job, dar oare sunt destul de bun ca sa il obtin? “. 
Astfel, aplicatia mea are scopul ca in momentul cautarii unui job, sa afiseze in paralel, folosind Google Books, o lista vasta de carti ce fac referinta la functia respectiva. 
In acest mod, cel ce este interesat de o anumita pozitie, poate avea la dispozitie in acelasi timp si ce skilluri sunt necesare (multe anunturi nefiind foarte clare in ceea ce priveste acest lucru) , de ce nivel de pregatire este nevoie, dar mai ales, pe la ce nivel al cunostintelor si aptitudinilor se situeaza. 
Astfel, persoana interesata de pozitia respectiva poate prinde incredere in propriile puteri, fie poate acumula diferite informatii, pe care la nivelul respectiv nu le avea, pentru a putea aplica la jobul respectiv.

Aplicatia se deschide cu pagina de home ce contine o bara de cautare.
![doi](https://user-images.githubusercontent.com/64580803/81983440-143d7e80-963c-11ea-8734-6f9cf0038d52.png)
 
In momentul in care cautam un job in bara de search apar mai multe rezultate in functie de  numarul de locuri diponibile, cum se vede in imaginea de mai jos:
![3](https://user-images.githubusercontent.com/64580803/81983500-2c150280-963c-11ea-8a12-5b8b50551dc1.png)
 
In cazul, in care sunt multe rezultate, putem trece de la o pagina la alta si putem modifica numarul de rezulate afisate pe pagina, avand variantele de 25,50 sau 75 de rezultate per pagina.
In momentul in care cautam un nou job, este important sa fim pregatiti si sa ne documentam pentru a avea rezultate dorite.
Astfel aplicatia ofera acces la o gama larga de carti, care apar in functie de pozitia cautata. Dupa cum se poate vedea in imaginea de mai jos, rezultatele apar dispuse 5 coloane: numarul curent , coperta, titlu, autorul si categoria.

![4](https://user-images.githubusercontent.com/64580803/81983557-4353f000-963c-11ea-8164-2593b3d564c8.png)
 

### Descriere API uri
	Primul API folosit este Open Skills API
Primul API pe care l-am folosit ne da informatii despre diferite joburi, si despre skillurile necesare de care am avea nevoie pentru a putea ocupa cu succes aceste posturi. 
Chiar daca acesta nu returneaza job-uri reale, consider ca este un mod bun de pregatire pentru un job real.
https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview
	Al doilea API folosit este Google Books.

Google Books are scopul de a face accesarea cartilor in mediul online cat mai usoara. Folosind API-ul Google Books, aplicațiile proiectate de noi  poat efectua căutări cu text complet și pot prelua informații despre cărți, vizualizare și disponibilitate în eBook. De asemenea, ne putem realiza propriul management al cartiilor.
API-urile din Familia API Google Books permit să aducerea funcțiilor Google Books pe site-ul sau aplicațiile noastre. Noul API Google Books ne permite să efectuam programatic majoritatea operațiunilor pe care le putem efectua în mod interactiv pe site-ul web Google Books. API-ul Viewer Embedded ne permite să incorporam conținutul direct pe site-ul nostru.
https://developers.google.com/books

### Fluxul de date
Exemlu de request / response:
http://api.dataatwork.org/v1/jobs/autocomplete?contains="Software"
Prin intermediul acestui end-point, aplicatia realizeaza un apel catre API si face un request catre toate joburile ce contin cuvantul “software” in titlul acestora.
![5](https://user-images.githubusercontent.com/64580803/81983607-5797ed00-963c-11ea-9c10-f4c7ff8896ad.png)

 
Dupa cum se poate observa in screenshot ul de mai sus, acesta este response-ul ce vine din partea API-ului, iar acest raspuns a fost mapat in cadrul aplicatiei web intr-un model.
Metoda http utilizata in cadrul acestui apel este cea de get.

https://www.googleapis.com/books/v1/volumes?q=java
Prin intermediul acestui end-point voi realiza comunciarea cu API-ul de la Google Books.
De asemenea, metoda http utilizata este metoda get.

API urile pe care le-am utilizat, nu au avut nevoie de autorizare sau autentificare.

## Referinte
* https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview
* https://developers.google.com/books

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
