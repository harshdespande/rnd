const select =
document.getElementById(
"testSelect"
);

const rows =
document.getElementById(
"testRows"
);

const selected=[];


select.addEventListener(

"change",

function(){

const test=

this.value;


if(

!test ||

selected.includes(
test
)

){

return;

}


selected.push(
test
);


if(

selected.length===1

){

rows.innerHTML="";

}


const tr=

document.createElement(
"tr"
);


tr.innerHTML=`

<td
class="testCell">

${test}

</td>

<td>

<textarea

class="testSpec"

placeholder=

"Write specification for ${test}"

>

</textarea>

</td>

`;


rows.appendChild(
tr
);


this.value="";

}

);
