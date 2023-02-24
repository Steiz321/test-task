import fs from "fs";
import path from "path";

const createHTMLTemplate = (title: string, description: string, content: string) => {

   return ( `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="${description}">
            <title>${title}</title>
        </head>
        <body>
            <a href="/">Home</a>
            <div class="main">${content}</div>
        </body>
        </html>`)
}

export async function createPageFile(title: string, description: string, content: string, urlSlug: string) {
   return fs.writeFile(path.resolve('src/page/', `${urlSlug}.html` ), createHTMLTemplate(title, description, content), (err) => {
      if (err) throw err;
      console.log('file created!');
   });
}

export async function removePageFile(urlSlug: string) {
   return fs.unlink(path.resolve('src/page/', `${urlSlug}.html` ), (err) => {
      if(err) throw err;
      console.log('file deleted!');
   })
}


