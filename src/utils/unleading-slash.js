export default function unleadingSlash(file) {
  if (typeof file !== 'string') {
    return '';
  }

  while (file.indexOf('/') === 0) {
    file = file.substring(1);
  }

  return file;
}
