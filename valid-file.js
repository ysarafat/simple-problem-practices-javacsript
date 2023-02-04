function isJavaScriptFile(filename) {
  const validation = filename.endsWith(".js");
  console.log(validation);
}
const filename = "index.js";
const validation = isJavaScriptFile(filename);
