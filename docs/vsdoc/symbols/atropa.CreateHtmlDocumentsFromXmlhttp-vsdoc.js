
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
