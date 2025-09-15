// Contributors cache parser for extracting contributor data from markdown
export interface Contributor {
  name: string;
  role: { en: string; zh: string };
  avatar: string;
  github: string;
  largeImage: string;
  desc: { en: string; zh: string };
  contributions?: number;
  repositories?: string[];
}

export function parseContributorsContent(content: string, frontmatter: any): Contributor[] {
  const lines = content.split('\n');
  const contributors: Contributor[] = [];
  
  let currentContributor: Partial<Contributor> | null = null;
  
  for (const line of lines) {
    // Match contributor heading (### contributor_name)
    const contributorMatch = line.match(/^###\s+(.+)$/);
    if (contributorMatch) {
      // Save previous contributor if exists
      if (currentContributor && currentContributor.name) {
        contributors.push(normalizeContributor(currentContributor, frontmatter));
      }
      
      // Start new contributor
      currentContributor = {
        name: contributorMatch[1].trim(),
      };
    }
    
    // Parse contributor metadata
    if (currentContributor) {
      const contributionsMatch = line.match(/^-\s+\*\*Contributions\*\*:\s+(\d+)$/);
      if (contributionsMatch) {
        currentContributor.contributions = parseInt(contributionsMatch[1]);
      }
      
      const avatarMatch = line.match(/^-\s+\*\*Avatar\*\*:\s+(.+)$/);
      if (avatarMatch) {
        currentContributor.avatar = avatarMatch[1];
      }
      
      const githubMatch = line.match(/^-\s+\*\*GitHub\*\*:\s+(.+)$/);
      if (githubMatch) {
        currentContributor.github = githubMatch[1];
      }
      
      const repositoriesMatch = line.match(/^-\s+\*\*Repositories\*\*:\s+(.+)$/);
      if (repositoriesMatch) {
        currentContributor.repositories = repositoriesMatch[1].split(', ');
      }
    }
  }
  
  // Save last contributor
  if (currentContributor && currentContributor.name) {
    contributors.push(normalizeContributor(currentContributor, frontmatter));
  }
  
  return contributors;
}

function normalizeContributor(contributor: Partial<Contributor>, frontmatter: any): Contributor {
  const contributions = contributor.contributions || 0;
  const repositories = contributor.repositories || [];
  
  return {
    name: contributor.name!,
    role: { en: 'Contributor', zh: '贡献者' },
    avatar: contributor.avatar || `https://avatars.githubusercontent.com/${contributor.name}?v=4`,
    github: contributor.github || `https://github.com/${contributor.name}`,
    largeImage: `/images/${contributor.name}.jpg`,
    desc: { 
      en: `${contributions} contributions to ${frontmatter.category} (${repositories.join(', ')})`, 
      zh: `为 ${frontmatter.category} 贡献了 ${contributions} 次提交 (${repositories.join(', ')})` 
    },
    contributions,
    repositories
  };
}