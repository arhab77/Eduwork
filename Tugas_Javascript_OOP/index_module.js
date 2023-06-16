import Siswa from "./module";

const siswa = new Siswa({
    columns: ["Name", "Email"],
    data: [
    ["Fadhil arhab", "ceritabote@gmail.com"],
    ["Ahmad Senju", "ahmad@upscale.id"]
    ]
});

const app = document.getElementById("app");
siswa.render(app);