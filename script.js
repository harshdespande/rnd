const select =
document.getElementById(
"testSelect"
);

const table =
document.getElementById(
"testRows"
);

let tests=[];


select.addEventListener(

"change",

function(){

const test=

this.value;


if(

test===""

||

tests.includes(
test
)

){

return;

}


tests.push(
test
);


render();


this.value="";

}

);


function render(){

table.innerHTML="";


tests.forEach(

t=>{

table.innerHTML+=`

<tr>

<td
class="testCell">

${t}

</td>

<td>

<textarea

class="testSpec"

placeholder=

"Write specification"

>

</textarea>

</td>

</tr>

`;

}

);

}
