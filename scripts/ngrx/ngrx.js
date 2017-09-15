var fs = require('fs');
var path = require('path');

const src = `./scripts/ngrx/{{variable}}`;
const dist = `./src/app/core/modules`;

var args = process.argv.slice(2);
const oddVariable = args[0];
const pluralVariable = args[1];

function replaceStringToModuleName(inputString) {
    return inputString.replace(/{{variable}}/g, oddVariable)
        .replace(/{{variables}}/g, pluralVariable)
        .replace(/{{Variable}}/g, capitalizeFirstLetter(oddVariable))
        .replace(/{{Variables}}/g, capitalizeFirstLetter(pluralVariable))
        .replace(/{{VARIABLE}}/g, oddVariable.toUpperCase())
        .replace(/{{VARIABLES}}/g, pluralVariable.toUpperCase());
}

//uppercase first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function copyFileSync(source, target) {

    var targetFile = target;

    //if target is a directory a new file with the same name will be created
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    data = fs.readFileSync(source).toString();
    data = replaceStringToModuleName(data);

    fs.writeFileSync(replaceStringToModuleName(targetFile), data);
}

function copyFolderRecursiveSync(source, target) {
    target = replaceStringToModuleName(target);
    var files = [];

    //check if folder needs to be created or integrated
    var targetFolder = replaceStringToModuleName(path.join(target, path.basename(source)));
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    //copy
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            var curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}

copyFolderRecursiveSync(src, dist);