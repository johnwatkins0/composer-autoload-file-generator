/**
 * Generate new JSON to be put in the composer.json file.
 * @param {object} composerJson The existing data.
 * @param {array} files A list of files to be added.
 * @return {object} The updated data.
 */
export function makeNewComposerJson(composerJson, files) {
  const newComposerJson = Object.assign({}, composerJson);
  newComposerJson.autoload.files = (composerJson.autoload.files || []).concat(
    files.filter(
      file => (composerJson.autoload.files || []).indexOf(file) === -1,
    ),
  );

  return newComposerJson;
}
