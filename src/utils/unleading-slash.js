export default function unleadingSlash(file) {
  return file.indexOf('/') === 0 ? file.substring(1) : file;
}
