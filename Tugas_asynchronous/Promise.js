const newsdetail = document.getElementById("newsdetails");
var dataArr = [];

function getData(){
    var search = document.getElementById('search').value;
    var url = `https://newsapi.org/v2/top-headlines?q=${search}&country=us&apiKey=1cdc9aff451b4733aef1cebbf5fcfc7b`;

    var req = new Request(url);
    fetch(req)
        .then(response => response.json())
        .then(data => {
            if(data.totalResults > 0){
                dataArr = data.articles;
                displayNews();
            }else{
                newsdetail.innerHTML = "<h5>no data found</h5>"
            }
        })
        .catch(err => console.error(err));
}

function displayNews(){
    newsdetail.innerHTML = "";

    dataArr.forEach(news => {
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className="p-2";

        var img = document.createElement('img');
        img.setAttribute("height","matchparent");
        img.setAttribute("width","100%");
        img.src = news.urlToImage;

        var cardBody = document.createElement('div');
        cardBody.className = "card-body";

        var cardTitle = document.createElement('h5');
        cardTitle.className = "card-title";
        cardTitle.innerHTML = news.title;

        var cardText = document.createElement('p');
        cardText.className = "card-text";
        cardText.innerHTML = news.description;

        var link = document.createElement('a');
        link.className = "btn btn-primary";
        link.href = news.url;
        link.innerHTML = "Read More";

        newsdetail.appendChild(col);

        col.appendChild(card);

        card.appendChild(img);
        card.appendChild(cardBody);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(link);

    });
};

getData();