const testSelect = document.getElementById(
"testSelect"
);

const testRows =
document.getElementById(
"testRows"
);

render();


testSelect.addEventListener(
"change",
render
);


function render(){

testRows.innerHTML="";


const selected =

Array

.from(
testSelect.selectedOptions
);


if(

selected.length===0

){

testRows.innerHTML=`

<tr>

<td
colspan="2"

class="emptyRow">

Select tests above

</td>

</tr>

`;

return;

}


selected.forEach(

t=>{

const row=

document.createElement(
"tr"
);


row.innerHTML=

`

<td
class="testCell">

${t.value}

</td>

<td>

<textarea

class="testSpec"

placeholder=

"Write test specification for ${t.value}"

>

</textarea>

</td>

`;

testRows.appendChild(
row
);

}

);

}
