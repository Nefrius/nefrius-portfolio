export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // Her saat başı yenile
    }
  );

  if (!response.ok) {
    throw new Error('GitHub API çağrısı başarısız oldu');
  }

  const repos = await response.json();
  return repos;
} 