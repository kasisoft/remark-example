import path from 'path';
import fs from 'fs';
import frontMatter from 'front-matter';

interface Example {
    link: string,
    title: string
};

function listExamples(linkBase: string): Example[] {
    const dir = './src/routes/' + linkBase;
    const dirNames = fs.readdirSync(dir);
    const result: Example[] = [];
    dirNames.forEach(name => {
        const mdFile = path.join(path.join(dir, name), '+page.md');
        const mdContent = fs.readFileSync(mdFile, 'utf8');
        const content = frontMatter(mdContent);
        const link = linkBase + name;
        result.push({link: link, title: content?.attributes?.title ?? ''});
    });
    return result;
}

export async function load() {
    return {
        records: {
            imagetools: listExamples('./examples/imagetools/'),
            autolinker: listExamples('./examples/autolinker/')
        }
    };
}
