const checks=document.querySelectorAll(".tests input")

const table=document.getElementById("testRows")

checks.forEach(

c=>{

c.addEventListener(

"change",

build

)

}

)

function build(){

table.innerHTML=""

checks.forEach(

c=>{

if(c.checked){

table.innerHTML+=`

<tr>

<td>

${c.value}

</td>

<td>

<textarea
placeholder="Enter specification">
</textarea>

</td>

</tr>

`

}

}

)

}
