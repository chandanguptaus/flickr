#Downloading the project from github.
1. It will be downloaded in a directory flickr-master
2. As angular npm modules are not in Github rep. 
3. Run NPM update command by pointing to flickr-angular-frontend project in terminal.
4. It will install the missing NPM packages under npm_modules folder

#Start Flicker Node Js Server. Open Terminal and navigate to path below
1. G:\Projects\flickr\api> node server.js
2. Message should be Server started on Port 4000
3. Node Js feeds API endpoints location
http://localhost:4000/
http://localhost:4000/getfeeds



#Start Angular Front end
1. Open a new terminal window.Go to Terminal tab and New Terminal or split terminal
2. PS G:\Projects\flickr-master\flickr-master\flickr-angular-frontend>
3. Type ng serve command

#How to open the local website
1. Navigate to Angular website URL below. 
http://localhost:4200/
2. It fetches a live feed from Flickr API. Refresh the page and images will change. 
3.  Search a string to filter the entries with a matching substring

#Framework/Technologies/Languages used as a reference.
1. Angular 7
2. Typescript
3. Javascript
4. Services
5. Dependency Injection
6. Node.js for backend API
5. HttpForms Module
6. Http Client, HttpGet
7. Observables
8. Two way data binding and interpolation
9. Built in structural directives for angular ngif,ngfor
10. Javascript array and Typescript interface for Types
11. NPM cors library
12. NPM express module and fs module for writing and reading the Flickr JSON file
13. NPM XML2JS module to parse the XML to JSON

# Contact Any questions or queries please drop an email at chandanguptaus@gmail.com