import { NextResponse } from 'next/server';
import { DATA_BERITA_DESA } from '@/data/berita'; // Impor data lokal sebagai fallback

export async function GET() {
  try {
    const query = encodeURIComponent('Desa Lanjan OR Sumowono OR "Kabupaten Semarang"');
    const googleNewsUrl = `https://news.google.com/rss/search?q=${query}&hl=id&gl=ID&ceid=ID:id`;

    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(googleNewsUrl)}`,
      { next: { revalidate: 1800 } }
    );

    const json = await res.json();

    if (json.status === 'ok' && json.items && json.items.length > 0) {
      const articles = json.items.slice(0, 6).map((item: any, index: number) => {
        const titleParts = item.title.split(' - ');
        const publisher = titleParts.length > 1 ? titleParts.pop() : 'Berita Wilayah';
        const cleanTitle = titleParts.join(' - ');

        return {
          id: index + 1,
          title: cleanTitle,
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
          category: publisher,
          snippet: item.description
            ? item.description.replace(/<[^>]*>?/gm, '').slice(0, 110) + '...'
            : 'Klik untuk membaca selengkapnya.',
          image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
        };
      });

      return NextResponse.json({ success: true, data: articles });
    }

    // Jika Google News tidak mengembalikan data, pakai data lokal
    return NextResponse.json({ success: true, data: DATA_BERITA_DESA });
  } catch (error) {
    console.error('Error fetching news:', error);
    // Jika fetch error/crash, tetap kembalikan data lokal agar UI tidak kosong
    return NextResponse.json({ success: true, data: DATA_BERITA_DESA });
  }
}