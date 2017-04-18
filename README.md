# ComposerAutoloadGenerator
## Usage
### Example

```Javascript
import path from 'path';
import ComposerAutoloadGenerator from 'composer-autoload-generator';

const composerAutoloadGenerator = new ComposerAutoloadGenerator({
  pathToFiles: path.resolve(`${__dirname}/../lib`),
  composerRoot: path.resolve(`${__dirname}/../`)
});
```
### Settings

| Key | Type | Description |
| --- | ---- | ----------- |
| pathToFiles | string | The path to the directory containing files to autoload (recursive). |
| composerRoot | string | The path to the directory containing the project's composer.json file. |
