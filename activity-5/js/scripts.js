var articleInformation = ["Article Title", "Article Author", "2019/04/05", "/images/Hero Image.png"];
// Order for details: Name, Description, Author, Downloads, Star Rating, Path to Image
var packageInformation = [["Setting Sync", "Syncs VS Code settings between computers", "Shan Khan", "3,180,831", "4.7", "/images/Settings Sync.png"],
                          ["HTML Snippets", "Adds rich language support for HTML Markup", "Mohammed Abusaid", "2,703,013", "4.3", "/images/HTML Snippets.png"],
                          ["Path Intellisense", "Auto-Completes Filenames", "Christian Kohler", "1,922,156", "4.8", "/images/Path Intellisense.png"]];

var articleTitleElement = document.getElementById('title'),
    articleAuthorElement = document.getElementById('author');
    dateElement = document.getElementById('date'),
    heroImageElement = document.getElementById('heroimg');

articleTitleElement.textContent = articleInformation[0];
articleAuthorElement.textContent = articleInformation[1];
dateElement.textContent = articleInformation[2];
heroImageElement.src = articleInformation[3];

for (var ndx = 1; ndx <= packageInformation.length; ndx++) {
    PackageInfo(ndx);

}

function PackageInfo(ndx) {
    var nameElement = document.getElementById('p' + ndx.toString() + 'name'),
    descElement = document.getElementById('p' + ndx.toString() + 'desc'),
    authElement = document.getElementById('p' + ndx.toString() + 'author'),
    downElement = document.getElementById('p' + ndx.toString() + 'downloads'),
    starElement = document.getElementById('p' + ndx.toString() + 'stars'),
    imagElement = document.getElementById('p' + ndx.toString() + 'img');

    nameElement.textContent = packageInformation[ndx - 1][0];
    descElement.textContent = packageInformation[ndx - 1][1];
    authElement.textContent = packageInformation[ndx - 1][2];
    downElement.textContent = packageInformation[ndx - 1][3];
    starElement.textContent = packageInformation[ndx - 1][4];

    imagElement.src = packageInformation[ndx - 1][5];

}