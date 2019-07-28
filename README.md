# Mind Jar #
## Memory That Hurts ##


[Link to a demo of the game](https://ryanccrawford.github.io/mind-jar-bootstrap/)

![alt text](http://ryancrawford.me/assets/img/mind-jar.jpg "Screen Shot")

### What is Mind Jar ###
Mind Jar is a fun, mind bending memory game.

### How do you play ###
Game play is simple. You start by clicking one of the 15 animated illusions. Every time you click on an image, the same images will be shuffled and then displayed again for you to pick another. The object is to not click the same image twice, until all images have been clicked. Every time you click on an image you already have click on the game will end and you score will reset to 0. If you manage to click all 15 images without re clicking, you will score one win and the board will continue until you fail.

## About the technologies ##
This game was created to represent my knowledge of using components in ReactJS. React was used in the creation of this game and can be cloned and modified to your liking.

## How do I fork and develop my own copy? ##

Simply fork or clone the 'dev' branch (The 'master' is a built version of the app which minifies and compiles the components into a static website that shouldn't be used for development)

Git clone the dev branch
```
$ git clone https://github.com/ryanccrawford/mind-jar-bootstrap.git --branch dev --single-branch <folder_name>
```

Then run npm 
bash
```
$ cd <folder_name>
$ npm install
```

To run on localhost:3000
bash
```
$ npm start
```

To compile into a build directory for use as a static application on a webserver
bash
```
$ npm build
```


