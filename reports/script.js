var reports = $("#reports");
let url = "https://spaceflightnewsapi.net/api/v1/reports?news_site=nasa";
console.log(url);
$.get(url, function(data) {
    let type = data.docs;
    for (let types of type) {
        reports.append("Title: " + types.title + "<br/>" + types.summary + "<a target='_blank' href='" + types.url + "'>" + " Click here to know more" + "</a>" + "<hr/>");
    };

});