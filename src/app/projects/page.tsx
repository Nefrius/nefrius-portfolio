'use client';

import { getGitHubRepos } from '@/lib/github';
import { motion } from 'framer-motion';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import HoverCard from '@/components/ui/HoverCard';
import { useEffect, useState } from 'react';
import type { GitHubRepo } from '@/lib/github';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGitHubRepos('nefrius')
      .then(setRepos)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Projelerim</h1>
            <p className="text-gray-400 text-lg">Yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projelerim</h1>
          <p className="text-gray-400 text-lg">
            GitHub üzerindeki açık kaynak projelerim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <HoverCard key={repo.id}>
              <div className="bg-white/5 backdrop-blur-sm p-6 h-full">
                <h2 className="text-xl font-semibold mb-2">{repo.name}</h2>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {repo.description || 'Açıklama bulunmuyor.'}
                </p>

                {repo.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center mt-auto">
                  <div className="text-sm text-gray-400">
                    Son güncelleme: {formatDate(repo.updated_at)}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BsGithub className="w-5 h-5" />
                    </motion.a>
                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <BsLink45Deg className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
} 