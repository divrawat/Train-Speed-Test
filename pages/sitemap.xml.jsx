const DOMAIN = "https://trainspeedtest.in.net"

const staticUrls = [
  { slug: "privacy-policy", date: "2024-01-01" },
  { slug: "contact", date: "2024-01-02" },
  { slug: "disclaimer", date: "2024-01-02" },
  { slug: "about", date: "2024-01-02" },
  { slug: "blog", date: "2024-01-02" },
  { slug: "facts-about-indian-trains", date: "2024-03-02" },
  { slug: "maharaja-express", date: "2024-03-02" },
];

const generateXmlSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${DOMAIN}</loc>
      <priority>1.0</priority>
      <changefreq>daily</changefreq>
    </url>`;

  staticUrls.forEach((url) => {
    xml += `
    <url>
      <loc>${`${DOMAIN}/${url.slug}`}</loc>
      <lastmod>${url.date}</lastmod>
      <priority>0.8</priority>
      <changefreq>monthly</changefreq>
    </url>`;
  });

  xml += '</urlset>';
  return xml;
};

const Sitemap = () => null;

export async function getServerSideProps({ res }) {
  const xml = generateXmlSitemap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return { props: {} };
}

export default Sitemap;
