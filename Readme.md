# atropa-CreateHtmlDocumentsFromXmlhttp

Creates HTML DOM Documents from an XMLHttpRequest objects response text.

## Installation

The current published version:

```
npm install atropa-CreateHtmlDocumentsFromXmlhttp
```

The bleeding edge development version:

```
npm install git+https://github.com/matthewkastor/atropa-CreateHtmlDocumentsFromXmlhttp.git#master
```

For some packages I simply publish to the `gh-pages` branch since it's easier to
 generate web docs in the repo and push the whole thing. Check the repo
 if you try installing the `master` branch and don't get what you expect.

This package lives at: [https://npmjs.org/package/atropa-CreateHtmlDocumentsFromXmlhttp](https://npmjs.org/package/atropa-CreateHtmlDocumentsFromXmlhttp)

Source code available at: [https://github.com/matthewkastor/atropa-CreateHtmlDocumentsFromXmlhttp/](https://github.com/matthewkastor/atropa-CreateHtmlDocumentsFromXmlhttp/)

## Usage

In node:

```
var CreateHtmlDocumentsFromXmlhttp = require('atropa-CreateHtmlDocumentsFromXmlhttp').CreateHtmlDocumentsFromXmlhttp;
console.log(CreateHtmlDocumentsFromXmlhttp);
```

In the browser this module is attached to the global namespace `atropa`, which
 will be created if it does not exist.
 Include `./browser/atropa-CreateHtmlDocumentsFromXmlhttp_web.js` in your page and
 `atropa.CreateHtmlDocumentsFromXmlhttp` will be available in your page.

For full documentation see `docs/jsdoc`. For Visual Studio intellisense files
 see `docs/vsdoc`.

## Tests

Tests can be run from the root of this package with `npm test`. They require
 jasmine-node to be installed on the system. If they're not
 already on your system, navigate to the root of this package and run
 `npm install` to get the `devDependencies`.

To run the browser tests open `browser/atropa-CreateHtmlDocumentsFromXmlhttp_tests.html` in your
 favorite web browser.

To edit the tests for both the browser and Node, edit the jasmine test files in
 `browser/tests`. For tests specific to Node edit the files in the `specs`
 directory.

## Hacking

There are several scripts listed in package.json for development and
 hacking on this module. They can be run with `npm run-script` followed by the
 scripts property corresponding to the script you want to run. For example,
 given a script called `buildDocs`, it could be run from the package root by:

```
npm run-script buildDocs
```

Of course you need to have the `devDependencies` installed. If they're not
 already on your system, navigate to the root of this package and run
 `npm install`.

If you would like to reconfigure the browser module, edit `dev/browserMain.js`
 and then run `npm run-script buildBrowserModule` from the root of this package.

If you alter the source in `src/atropa-CreateHtmlDocumentsFromXmlhttp.js` please run the
 `srcFormat`, `lint`, and `buildDocs` scripts on it before submitting a pull
 request.

## Author

Matthew Kastor

[matthewkastor@gmail.com](mailto:matthewkastor@gmail.com)

[https://plus.google.com/100898583798552211130](https://plus.google.com/100898583798552211130)

## License

The license, [gpl-3.0](http://www.gnu.org/licenses/gpl-3.0-standalone.html), can be found in the
 `License` folder or online at [http://www.gnu.org/licenses/gpl-3.0-standalone.html](http://www.gnu.org/licenses/gpl-3.0-standalone.html)
