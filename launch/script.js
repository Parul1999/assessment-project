var nasaImages = $("#nasa-images");
var input1 = $("#date1")
var input2 = $("#date2")

$("form button").click(function(e) {
    e.preventDefault();
    var date1 = input1.val();
    var date2 = input2.val();
    if (input1 === "" || input2 === "") {
        alert("Please fill the field");
        return;
    }
    let url = "https://launchlibrary.net/1.3/launch?startdate=" + date1 + "&enddate=" + date2;
    console.log(url);
    $.get(url, function(data) {
        let type = data.launches;
        if (type.length === 0) {
            alert("No launches available for this date");
            return;
        }
        var count = 0;
        console.log(type);
        for (let types of type) {
            nasaImages.append("id : " + types.id + " " + "name: " + types.name + " " + types.net + "<br/>");
            count++;
        };
        nasaImages.append("Total Launches=" + count)
    });

});