function extractFile(text) {
    let index = text.lastIndexOf('\\');
    let tokens = text.substring(index + 1, text.length);
    let lastIndex = tokens.lastIndexOf('.');
    let extension = tokens.substring(lastIndex + 1, tokens.length);
    let name = tokens.substring(0, lastIndex);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('---');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.bek.cs');