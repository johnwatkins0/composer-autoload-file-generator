# composer-autoload-file-generator

## About

Takes an input directory and adds all enclosed files (recursively) to the autoload.files array in a composer.json file. Useful for projects containing many small PHP files that must always be loaded.

## Usage

This library provides a `composer-autoload-file-generator` binary that must be run in the same directory as the composer.json file (or an error will be thrown). Pass the directory (relative to the current location) whose files you want to autoload as the argument, e.g.

```sh
node_modules/.bin/composer-autoload-file-generator src/my-php-files/
```

Alternatively, create a `composerAutoloadFiles.js` config file in the project root with the following contents:

```Javascript
module.exports = {
  pathToFiles: 'wp-autoload',
};
```

Then just run `node_modules/.bin/composer-autoload-file-generator`.

You can also pass in a separate config file with a `--config` flag, e.g.:

```sh
node_modules/.bin/composer-autoload-file-generator --config my-config-file.js
```
