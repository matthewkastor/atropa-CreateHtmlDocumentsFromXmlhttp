
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
