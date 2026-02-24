'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  price: number;
  status: string;
}

const CMS_API = '/api';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`${CMS_API}/projects/${params.id}`);
        const data = await res.json();
        setProject(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    if (params?.id) fetchProject();
  }, [params]);

  if (loading) {
    return <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">載入中...</div>;
  }

  if (!project) {
    return <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">找不到建案</div>;
  }

  const formatPrice = (price: number) => new Intl.NumberFormat('zh-TW').format(price);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <button onClick={() => router.back()} className="text-[#7DB892] text-sm mb-6">← 返回</button>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
          <div className="text-xs text-[#7DB892] mb-2">{project.status}</div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h1>
          <p className="text-white/60 mb-4">{project.location}</p>
          <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
          <div className="text-[#7DB892] text-xl font-semibold">{formatPrice(project.price)} 萬起</div>
        </div>
      </div>
    </div>
  );
}
