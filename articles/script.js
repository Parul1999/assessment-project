var nasaImages = $("#articles");
let url1 = "https://spaceflightnewsapi.net/api/v1/blogs?news_site=planetarysociety";
let url2 = "https://spaceflightnewsapi.net/api/v1/articles";
let url3 = "https://core.ac.uk:443/api-v2/articles/search/nasa?page=1&pageSize=10&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=1VPmjJyewC4RXKUaNTqH5o7v9gfdzkQI";
$.get(url3, function(data) {
    let type = data.data;
    nasaImages.append("<h3>Research Papers</h3>");
    for (let types of type) {
        if (types.description != null) {
            nasaImages.append(types.title + "<br>" + types.description + "<br/>");
            nasaImages.append("<a href='" + types.downloadUrl + "'>Download url</a><hr/>")
        };
    };
$.get(url2, function(data) {
    let type = data.docs;
    nasaImages.append("<h3>Articles</h3>");
    for (let types of type) {
        nasaImages.append(types.news_site_long + "name: " + types.title + "<br>" + "<img height ='30%' width='30%' src='" + types.featured_image + "'>" + "<br>" + "<a href='" + types.url + "'>" + " Click to read the full article" + "</a>" + "<hr/>");
    };

});

$.get(url1, function(data) {
    let type = data.docs;
    nasaImages.append("<h3>Blogs</h3>");
    for (let types of type) {
        nasaImages.append(types.news_site_long + "name: " + types.title + "<br>" + types.published_date + "<br>" + "<a href='" + types.url + "'>" + " Click to read the full blog" + "</a>" + "<hr/>");
    };

});


});


// });