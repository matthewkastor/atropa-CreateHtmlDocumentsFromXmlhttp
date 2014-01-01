
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary></summary>
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        /// <field name="ArgsInfo" type="">Required module, the docs for it are in the &lt;code&gt;
        ///  atropa-ArgsInfo/docs&lt;/code&gt; directory where this module 
        ///  is located.</field>
        /// <returns type="atropa"/>
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
  
/* vsdoc for atropa.CreateHtmlDocumentsFromXmlhttp */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.CreateHtmlDocumentsFromXmlhttp = function(){
        /// <summary></summary>
        /// <field name="documentQueue" type="Array">Queue of documents created by this instance.</field>
        /// <returns type="atropa.CreateHtmlDocumentsFromXmlhttp"/>
    };

    var $x = window.atropa.CreateHtmlDocumentsFromXmlhttp;
    $x.prototype = {
                
        newDocument: function(method, url, messageBody, callback) {
            /// <summary>Creates an HTML DOM Document and puts it in the document
            ///  queue, then executes the callback given. Note, this does
            ///  not work on google chrome.</summary>
            /// <param name="method" type="String">Any valid method to be used in
            /// an XMLHttpRequest.</param>
            /// <param name="url" type="String">The location of the document&apos;s source.</param>
            /// <param name="messageBody" type="String">null, or a message body.</param>
            /// <param name="callback" type="Function">The function to execute upon
            /// request completion. This function will be given either
            /// an HTML DOM Document or false.</param>
            /// <returns type="HTML DOM Document|false">The return value is
            /// given to the callback function.</returns>
        }
        
    };

    $x.__class = "true";
    $x.__typeName = "atropa.CreateHtmlDocumentsFromXmlhttp";
})(this);


  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary></summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

  
  
/* vsdoc for atropa.HTMLParser */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.HTMLParser = function(){
        /// <summary></summary>
        /// <field name="doc" type="HTML DOM Document">Holds the created HTML DOM Document.</field>
        /// <returns type="atropa.HTMLParser"/>
    };

    var $x = window.atropa.HTMLParser;
    $x.prototype = {
                
        newDocument: function() {
            /// <summary>Creates a blank HTML DOM Document.</summary>
            /// <returns type="HTML DOM Document">Resets the doc property of this instance
            ///  and, returns a blank HTML Document for you to load data into.</returns>
        }, 
        
        loadString: function(htmlstring) {
            /// <summary>Creates a new HTML DOM Document and loads the given string into it.</summary>
            /// <param name="htmlstring" type="String">a string of HTML data</param>
            /// <returns type="HTML DOM Document">Resets the doc property of this instance,
            /// loading a new document with the string given.</returns>
        }
        
    };

    $x.__class = "true";
    $x.__typeName = "atropa.HTMLParser";
})(this);


  
  
/* vsdoc for atropa.Requester */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.Requester = function(){
        /// <summary></summary>
        /// <field name="requestHeaders" type="Request Headers Object">Object whose properties and values are header names and values
        ///  respectively.</field>
        /// <field name="timeout" type="Number">Set the timeout value for the request in milliseconds. The request will
        ///  abort after this amount of time has passed.</field>
        /// <returns type="atropa.Requester"/>
    };

    var $x = window.atropa.Requester;
    $x.prototype = {
                
        makeRequest: function(method, url, messageBody, callback) {
            /// <summary>Makes an AJAX request.</summary>
            /// <param name="method" type="String">The HTTP method to be used for this request.</param>
            /// <param name="url" type="String">The URL to send the request to.</param>
            /// <param name="messageBody" type="String">The body of the request.</param>
            /// <param name="callback" type="Object">The callback function to execute
            ///  when readyState is 4. The callback is supplied with two arguments. The
            ///  first argument is a boolean indicating whether or not the http status
            ///  was 200. The second argument is the request object.</param>
        }
        
    };

    $x.__class = "true";
    $x.__typeName = "atropa.Requester";
})(this);


