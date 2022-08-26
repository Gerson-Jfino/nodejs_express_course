const path = require('path')

// return the os separetor
console.log(path.sep);

//join strings to a path directory
const filePath = path.join('/contents', 'folder', 'subfolder/', 'file.txt')
console.log(filePath)

//get the filename on a path
const baseFile = path.basename(filePath)
console.log(baseFile);

//get the absolute path 
const absolute = path.resolve(__dirname, 'content', 'folder', 'file.txt')
console.log(absolute)