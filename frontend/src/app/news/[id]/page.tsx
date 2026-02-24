'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface Article {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
}

const CMS_API = '/api';

export default function NewsDetail() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`${CMS_API}/articles/${params.id}`);
        const data = await res.json();
        setArticle(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    if (params?.id) fetchArticle();
  }, [params]);

  if (loading) {
    return <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">載入中...</div>;
  }

  if (!article) {
    return <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">找不到消息</div>;
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <button onClick={() => router.back()} className="text-[#7DB892] text-sm mb-6">← 返回</button>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
          <div className="text-xs text-white/40 mb-2">
            {new Date(article.publishedAt).toLocaleDateString('zh-TW')}
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">{article.title}</h1>
          <div className="text-white/80 leading-relaxed whitespace-pre-line">
            {article.content.replace(/[#*]/g, '')}
          </div>
        </div>
      </div>
    </div>
  );
}
