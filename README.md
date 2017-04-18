# ComposerAutoloadGenerator
## Usage
### Example

In a file called `utils/generate-composer-autoload.js` in the Composer project root:

```js
import path from 'path';
import ComposerAutoloadGenerator from 'composer-autoload-generator';

const composerAutoloadGenerator = new ComposerAutoloadGenerator({
  pathToFiles: path.resolve(`${__dirname}/../lib`),
  composerRoot: path.resolve(`${__dirname}/../`)
});
```

On the command line (this example requires the `babel-cli` package with the `babel-preset-node6` preset):

```
./node_modules/babel-cli/bin/babel-node.js --presets node6 utils/generate-composer-autoload
```

### Settings

| Key | Type | Description |
| --- | ---- | ----------- |
| pathToFiles | string | The path to the directory containing files to autoload (recursive). The directory should be in the same location as the composer.json file. |
| composerRoot | string | The path to the directory containing the project's composer.json file. |
