var CreateHtmlDocumentsFromXmlhttp = require('../src/atropa-CreateHtmlDocumentsFromXmlhttp.js');

try {
    Object.keys(CreateHtmlDocumentsFromXmlhttp).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = CreateHtmlDocumentsFromXmlhttp[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-CreateHtmlDocumentsFromXmlhttp.js');
}

Object.keys(CreateHtmlDocumentsFromXmlhttp.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = CreateHtmlDocumentsFromXmlhttp.data[prop];
    }
);
