function getData(url, cb) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            cb(JSON.parse(xhr.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}
  
function createTable(data) {
    const listData = data.map((user) => [
        user.id,
        user.name,
        user.username,
        user.email,
        user.address ? `${user.address.street}, ${user.address.suite}, ${user.address.city}` : '',
        user.company.name
    ]);
  
    class Siswa {
        constructor(init) {
            this.init = init;
        }
  
        createHeader(data) {
            let open = "<thead><tr>";
            let close = "</tr></thead>";

            data.forEach((d) => {
                open += `<th>${d}</th>`;
            });
    
            return open + close;
        }
  
        createBody(data) {
            let open = "<tbody>";
            let close = "</tbody>";
    
            data.forEach((d) => {
            open += `
                <tr>
                <td>${d[0]}</td>
                <td>${d[1]}</td>
                <td>${d[2]}</td>
                <td>${d[3]}</td>
                <td>${d[4]}</td>
                <td>${d[5]}</td>
                </tr>
            `;
            });
    
            return open + close;
        }
  
        render(element) {
            let table =
            "<table class='table table-hover'>" +
            this.createHeader(this.init.columns) +
            this.createBody(this.init.data) +
            "</table>";
            element.innerHTML = table;
        }
    }
  
    const siswa = new Siswa({
        columns: ["ID", "Name", "Username", "Email", "Address", "Company"],
        data: listData,
    });
  
    const app = document.getElementById("users");
    siswa.render(app);
}
  
const url = "https://jsonplaceholder.typicode.com/users";
getData(url, createTable);
  