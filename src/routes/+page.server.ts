import path from 'path';
import fs from 'fs';
import frontMatter from 'front-matter';

export async function load() {
    const examplesDir = './src/routes/examples';
    const dirNames = fs.readdirSync(examplesDir);
    const linkBase = './examples/';
    const result = [];
    dirNames.forEach(name => {
        const mdFile = path.join(path.join(examplesDir, name), '+page.md');
        const mdContent = fs.readFileSync(mdFile, 'utf8');
        const content = frontMatter(mdContent);
        const link = linkBase + name;
        result.push({link: link, title: content?.attributes?.title ?? ''});
    });
   return {
    records: result
   };
}
