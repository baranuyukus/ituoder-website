import fs from 'fs';
import path from 'path';

const urlPathsFile = '/Users/baranuyukus/Desktop/ituoder/output/url_paths.txt';
const pagesDir = '/Users/baranuyukus/Desktop/ituoder/website/src/pages';

const urls = fs.readFileSync(urlPathsFile, 'utf-8').split('\n').map(line => line.trim()).filter(line => line !== '' && line !== '/');

urls.forEach(urlName => {
    // Remove leading slash
    let cleanUrl = urlName;
    if (cleanUrl.startsWith('/')) {
        cleanUrl = cleanUrl.substring(1);
    }

    // Decode URL encoded characters like %C3%BC
    try {
        cleanUrl = decodeURIComponent(cleanUrl);
    } catch (e) {
        console.error("Could not decode: ", cleanUrl);
    }

    const filePath = path.join(pagesDir, `${cleanUrl}.astro`);
    const dirName = path.dirname(filePath);

    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName, { recursive: true });
    }

    // Calculate how many layers deep we are to properly resolve Layout.astro 
    // E.g. 'detaylar/archive-cafe' -> length is 2, need '../../layouts/Layout.astro'
    const parts = cleanUrl.split('/');
    const layoutPath = parts.map(() => '../').join('') + 'layouts/Layout.astro';

    // Simple title formatting
    const pageTitle = cleanUrl.replace(/[-/]/g, ' ').toUpperCase();

    const content = `---
import Layout from '${layoutPath}';
---

<Layout title="itüöder - ${pageTitle}">
	<main class="flex items-center justify-center min-h-screen">
		<div class="text-center space-y-4">
			<h1 class="text-4xl font-bold text-primary">/${cleanUrl}</h1>
			<p class="text-lg">Bu sayfa altyapıya uygun olarak oluşturuldu. İçerikler yakında eklenecek.</p>
		</div>
	</main>
</Layout>
`;

    fs.writeFileSync(filePath, content);
    console.log(`Created: src/pages/${cleanUrl}.astro`);
});
console.log('Tüm sayfalar başarıyla oluşturuldu.');
