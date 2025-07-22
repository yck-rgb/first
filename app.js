const fs = require("fs-extra")

function init() {
    let num = 0
    const res1 = fs.readdirSync("./")
    res1.forEach((file,) => {
        if (file.endsWith(".html")) {
            const htmlContent = fs.readFileSync(file, "utf-8")
            console.log(htmlContent);
            const regex = /<a href="https:\/\/doc\.firstui\.cn\/docs\/[^/]+\/([^"]+\.html)" class="sidebar-link">/g;
            const updatedHtml = htmlContent.replace(regex, (match, fileName) => {
                return `<a href="/${fileName}" class="sidebar-link">`;
            });
            fs.writeFileSync(file, updatedHtml, "utf-8");
        }
    })

}
init()