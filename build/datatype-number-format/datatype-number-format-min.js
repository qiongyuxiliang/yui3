YUI.add("datatype-number-format",function(c,b){var a=c.Lang;c.mix(c.namespace("Number"),{format:function(k,f){if(a.isNumber(k)){f=f||{};var e=(k<0),g=k+"",o=f.decimalPlaces,d=f.decimalSeparator||".",n=f.thousandsSeparator,m,h,l,j;if(a.isNumber(o)&&(o>=0)&&(o<=20)){g=k.toFixed(o);}if(d!=="."){g=g.replace(".",d);}if(n){m=g.lastIndexOf(d);m=(m>-1)?m:g.length;h=g.substring(m);for(l=0,j=m;j>0;j--){if((l%3===0)&&(j!==m)&&(!e||(j>1))){h=n+h;}h=g.charAt(j-1)+h;l++;}g=h;}g=(f.prefix)?f.prefix+g:g;g=(f.suffix)?g+f.suffix:g;return g;}else{return(a.isValue(k)&&k.toString)?k.toString():"";}}});c.namespace("DataType");c.DataType.Number=c.Number;},"@VERSION@");