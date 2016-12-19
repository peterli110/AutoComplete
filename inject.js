// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setradio(name, answer)
{
    var selects = document.getElementsByName(name);
    console.log(name);
    console.log(selects);
        for (var i=0; i<selects.length; i++){  
            if (selects[i].value==answer) {  
                selects[i].checked= true;  
            break;  
        }  
    } 
}

var x = document.body.innerHTML;
var pattrn = /if\s*\(\s*\w+\s*\(\w+\.(\w+)\s*,\s*(\d+)\)\s*\)/g;
var match = null;
var myquestion=new Array();
var myanswer=new Array();
var ii=0;
var jj=0;
while((match = pattrn.exec(x))) {
    myquestion[ii]=match[1];
    ii++;
    myanswer[jj]=match[2];
    jj++;
}
console.log(myquestion[1]);
console.log(myanswer[1]);
console.log(myquestion[2]);
console.log(myanswer[2]);

for (var k=1; k<myquestion.length;k++){
    setradio(myquestion[k],myanswer[k]);
}


