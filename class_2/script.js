function add () {
    res.value = parseInt(v1.value) + parseInt(v2.value)
}
function multi() {
    resMulti.value = parseInt(v3.value) * parseInt(v4.value)
}
function minus() {
    resMinus.value = parseInt(v5.value) - parseInt(v6.value)
}
function divider(){
    if (parseFloat(v7.value===0))
    resDivider.value = "Error!";
    else
    resDivider.value = parseInt(v7.value) / parseInt(v8.value)
}
