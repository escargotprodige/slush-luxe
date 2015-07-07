# Slush-Luxe
> The slush generator for the [luxe engine][7d86d792]

  [7d86d792]: http://luxeengine.com "luxe"

## Installation

``` bash
$ npm install -g slush
$ npm install -g slush-luxe
```

## Usage

``` bash
$ mkdir game
$ cd game
$ slush luxe
```

This will generate a new project

## Structure
```
assets/
src/
|  Main.hx
project.flow
.gitignore
```

## Generate a new component

``` bash
$ slush luxe:component <name>
```

This will generate a new component in the `src/components` folder

## Generate a new entity

``` bash
$ slush luxe:entity <name>
```
This will generate a new entity in the `src/entities` folder

## Generate a new game state

``` bash
$ slush luxe:state <name>
```
This will generate a new game state in the `src/states` folder

## Generate a gulpfile

``` bash
$ slush luxe:gulp
```
This will create and install the dependencies of a basic gulpfile that you will be able to use to run a LiveReload server and publish your game on the web (with Github Pages)

To use it, make sure that you have gulp first.

```bash
$ gulp
```

Running this will:
 1. Create a LiveReload server at port 8080
 2. Open the site in your browser
 3. Listen for changes & execute `haxelib run flow build web`

To put your game on the web, just run:

```bash
$ gulp deploy
```

(assuming the source code is hosted on Github)

### Want to contribute?
Anyone can contribute to this project!
