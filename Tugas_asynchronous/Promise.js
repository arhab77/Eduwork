function getData(){
    var search = document.getElementById('search').value;
    var dataArr = [];
    var url = `https://newsapi.org/v2/top-headlines?q=${search}&country=in&apiKey=1cdc9aff451b4733aef1cebbf5fcfc7b`;

    var req = new Request(url);
    fetch(req)
        .then(response => response.json())
        .then(data => {
            dataArr = data.articles; // Assuming the API response contains an "articles" array
            // Iterate over the dataArr and populate the HTML cards
            if(data.articles.length > 0){
                var totalArticle = data.articles.length > 3 ? 3 : data.articles.length;
                var cardContainers = document.querySelectorAll(".card");
                for (var i = 0; i < totalArticle; i++) {
                    var card = cardContainers[i];
                    var article = dataArr[i];

                    displayNews();
                }
            }else{
                console.log("data kosong");
            }
        })
        .catch(err => console.error(err));
}

const newsdetail = document.getElementById("newsdetails");

function displayNews(){
    newsdetail.innerHTML = "";

    dataArr.forEach(news => {
        var col = document.createElement('div');
        col.className="col";

        var card = document.createElement('div');
        card.className="card";

        var img = document.createElement('img');
        img.className = "card-img-top";
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
}


getData();