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
| pathToFiles | string | The path to the directory containing files to autoload (recursive). The directory should be in the same location as the composer.json file. |
| composerRoot | string | The path to the directory containing the project's composer.json file. |
