import type { NextApiRequest, NextApiResponse } from 'next'

type GitHubRepo = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  language: string | null
  created_at: string
  updated_at: string
  pushed_at: string
}

type ApiResponse = {
  repos?: GitHubRepo[]
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const response = await fetch('https://api.github.com/users/Geann0/repos?sort=updated&per_page=100', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()
    
    // Filter out forks and sort by stars
    const publicRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)

    res.status(200).json({ repos: publicRepos })
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    res.status(500).json({ error: 'Failed to fetch repositories' })
  }
}
