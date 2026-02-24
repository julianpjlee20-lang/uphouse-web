'use client';

import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  price: number;
  status: string;
}

const CMS_API = '/api';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${CMS_API}/projects`);
        const data = await res.json();
        setProjects(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const formatPrice = (price: number) => new Intl.NumberFormat('zh-TW').format(price);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">建案列表</h1>

        {loading ? (
          <div className="text-center py-12">載入中...</div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 text-white/40">尚無建案資料</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <a key={project.id} href={`/projects/${project.id}`} className="group rounded-2xl border border-white/5 bg-white/5 hover:border-[#316745]/30 overflow-hidden transition-all">
                <div className="h-40 md:h-48 bg-gradient-to-br from-[#316745]/20 to-[#0A0A0A] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl md:text-6xl font-bold text-white/10">🏢</span>
                  </div>
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 px-2 md:px-3 py-1 rounded-lg bg-[#316745]/20 text-[#7DB892] text-xs">
                    {project.status}
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-medium mb-1 group-hover:text-[#7DB892] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-2 text-white/40">{project.location}</p>
                  <p className="text-sm mb-3 line-clamp-2 text-white/60">{project.description}</p>
                  <p className="text-lg font-semibold text-[#7DB892]">{formatPrice(project.price)} 萬起</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
