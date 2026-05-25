const select =
document.getElementById(
"testSelect"
);

const rows =
document.getElementById(
"testRows"
);

let selectedTests=[];


select.addEventListener(

"change",

function(){

const selected =

this.value;


if(

selected===""

||

selectedTests.includes(
selected
)

){

return;

}


selectedTests.push(
selected
);


updateTable();


this.selectedIndex=0;

}

);


function updateTable(){

rows.innerHTML="";


if(

selectedTests.length===0

){

rows.innerHTML=

`

<tr>

<td
colspan="2"

class="emptyRow">

Select test above

</td>

</tr>

`;

return;

}


selectedTests.forEach(

test=>{

const row=

document.createElement(
"tr"
);


row.innerHTML=

`

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
row
);

}

);

}
