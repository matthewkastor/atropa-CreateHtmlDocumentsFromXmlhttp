"use strict";
/*jslint
    indent: 4,
    maxerr: 50,
    white: true
*/
/*globals
    atropa,
    describe,
    it,
    expect,
    beforeEach,
    runs,
    jasmine,
    waitsFor
*/
// end header

describe("atropa.CreateHtmlDocumentsFromXmlhttp", function() {
    
    var docs;
    
    it("must exist", function() {
        expect(atropa.CreateHtmlDocumentsFromXmlhttp).not.toEqual(undefined);
    });
    
    try {
        docs = new atropa.CreateHtmlDocumentsFromXmlhttp();
        
        describe('class is supported in this environment', function () {
            
            describe('newDocument', function () {
                
                it("must exist", function() {
                    docs = new atropa.CreateHtmlDocumentsFromXmlhttp();
                    expect(docs.newDocument).not.toEqual(undefined);
                });
                
                describe('with valid url', function () {
                    var method, url, docs, callback;
                    
                    beforeEach(function (){
                        method = 'get';
                        url = './index.html';
                        docs = new atropa.CreateHtmlDocumentsFromXmlhttp();
                        
                        runs(function () {
                            callback = jasmine.createSpy();
                            docs.newDocument(method, url, null, callback);
                        });
                        
                        waitsFor(function () {
                            return callback.mostRecentCall.args !== undefined;
                        }, 'the document queue length to increase', 10000);
                    });
                    
                    it('must call the callback with a valid document',  function() {
                        expect(callback).toHaveBeenCalled();
                        expect(callback.mostRecentCall.args[0].nodeType).toEqual(9);
                    });
                    
                    it('must put the document into the document queue', function () {
                        expect(docs.documentQueue.length).toEqual(1);
                        expect(
                            callback.mostRecentCall.args[0]
                        ).toEqual(
                            docs.documentQueue[0]
                        );
                    });
                    
                    it('must produce a document which may be manipulated', function () {
                        var doc, p;
                        doc = docs.documentQueue[0];
                        p = doc.createElement('p');
                        p.textContent = 'test';
                        p.setAttribute('id', 'testPara');
                        doc.body.appendChild(p);
                        
                        expect(
                            doc.getElementById('testPara').textContent
                        ).toEqual(
                            'test'
                        );
                    });
                });
                
                describe('with invalid url', function () {
                    var method, url, docs, callback;
                    
                    beforeEach(function (){
                        method = 'get';
                        url = '/PageDoesNotExist';
                        docs = new atropa.CreateHtmlDocumentsFromXmlhttp();
                        
                        runs(function () {
                            callback = jasmine.createSpy();
                            docs.newDocument(method, url, null, callback);
                        });
                        
                        waitsFor(function () {
                            return callback.mostRecentCall.args !== undefined;
                        }, 'the document queue length to increase', 1000);
                    });
                    
                    it('must call the callback with false', function() {
                        expect(callback).toHaveBeenCalled();
                        expect(callback.mostRecentCall.args[0]).toEqual(false);
                    });
                    
                    it('must not put anything in the document queue', function () {
                        expect(docs.documentQueue.length).toEqual(0);
                    });
                });
            });
        });
    } catch (e) {
        describe('class is not supported in this environment', function () {
            function x () {
                return new atropa.CreateHtmlDocumentsFromXmlhttp();
            }
            it('it must throw an error',
                function () {
                    expect(x).toThrow('The atropa.CreateHtmlDocumentsFromXmlhttp class is unsupported in this environment.');
                }
            );
            it('must set atropa.data.CreateHtmlDocumentsFromXmlhttp.support to "unsupported"',
                function () {
                    expect(
                        atropa.data.CreateHtmlDocumentsFromXmlhttp.support
                    ).toEqual(
                        'unsupported'
                    );
                }
            );
        });
    }
});
