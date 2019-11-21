var launchStations = $("#launch-stations");
var input = $("#name");

$("form button").click(function(e) {
    e.preventDefault();
    input = input.val();
    if (input === "") {
        alert("Please fill the field");
        return;
    }
    let url = "https://launchlibrary.net/1.3/agency?name=" + input;
    console.log(url);
    $.get(url, function(data) {
        let type = data.agencies;

        if (type.length === 0) {
            alert("No data available for this keyword");
            return;
        }

        console.log(type);
        for (let types of type) {
            launchStations.append("<div class='row'><div class='col-md-2'> ID:" + types.id + "</div><div class='col-md-6'>" + types.name + "(" + types.abbrev + ")" + "</div>");

        };
    });

});