YUI.add("datatype-xml-format",function(c,b){var a=c.Lang;c.mix(c.namespace("XML"),{format:function(d){try{if(!a.isUndefined(XMLSerializer)){return(new XMLSerializer()).serializeToString(d);}}catch(f){if(d&&d.xml){return d.xml;}else{return(a.isValue(d)&&d.toString)?d.toString():"";}}}});c.namespace("DataType");c.DataType.XML=c.XML;},"@VERSION@");