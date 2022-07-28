function stop() {
    document.getElementById('red').style.backgroundColor = "red";
    document.getElementById('red').style.borderColor = "black";
    document.getElementById('status_head_2').innerHTML = '<i class="fa fa-hand-paper-o" aria-hidden="true"></i>' + "<br>" + "Stop";
}
function stoprev() {
    document.getElementById('red').style.backgroundColor = "white";
    document.getElementById('red').style.borderColor = "black";
    document.getElementById('status_head_2').innerHTML = "--";
}
function start() {
    document.getElementById('yellow').style.backgroundColor = "yellow";
    document.getElementById('yellow').style.borderColor = "black";
    document.getElementById('status_head_2').innerHTML = '<i class="fa fa-hourglass-start" aria-hidden="true" ></i>' + "<br>" + "Wait";
}
function startrev() {
    document.getElementById('yellow').style.backgroundColor = "white";
    document.getElementById('yellow').style.borderColor = "black";
    document.getElementById('status_head_2').innerHTML = "--";
}
function go() {
    document.getElementById('green').style.backgroundColor = "green";
    document.getElementById('green').style.borderColor = "black";
    document.getElementById('status_head_2').innerHTML = '<i class="fa fa-arrow-right" aria-hidden="true"></i>' + "<br>" + "Go";
}
function gorev() {
    document.getElementById('green').style.backgroundColor = "white";
    document.getElementById('green').style.borderColor = "black";
    document.getElementById('status_head_2').innerHTML = "--";

}

