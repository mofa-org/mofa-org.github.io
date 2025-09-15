// Prize data parser for extracting winners from markdown content
export interface Winner {
  name: string;
  role: { en: string; zh: string };
  avatar: string;
  github: string;
  largeImage: string;
  desc: { en: string; zh: string };
}

export interface PrizeCategory {
  id: string;
  name: { en: string; zh: string };
  contributors: Winner[];
}

export function parsePrizeContent(content: string, frontmatter: any): PrizeCategory {
  const lines = content.split('\n');
  const contributors: Winner[] = [];
  
  let currentWinner: Partial<Winner> | null = null;
  
  for (const line of lines) {
    // Match winner heading (### winner_name)
    const winnerMatch = line.match(/^###\s+(.+)$/);
    if (winnerMatch) {
      // Save previous winner if exists
      if (currentWinner && currentWinner.name) {
        contributors.push(currentWinner as Winner);
      }
      
      // Start new winner
      currentWinner = {
        name: winnerMatch[1].trim(),
        role: { en: 'First Prize', zh: 'First Prize' },
        desc: { en: frontmatter.year + ' contest first prize', zh: frontmatter.year + ' contest first prize' }
      };
    }
    
    // Match metadata fields
    if (currentWinner) {
      const roleMatch = line.match(/^-\s+\*\*Role\*\*:\s+(.+)$/);
      if (roleMatch) {
        currentWinner.role = { en: roleMatch[1], zh: roleMatch[1] };
      }
      
      const githubMatch = line.match(/^-\s+\*\*GitHub\*\*:\s+(.+)$/);
      if (githubMatch) {
        currentWinner.github = githubMatch[1];
      }
      
      const avatarMatch = line.match(/^-\s+\*\*Avatar\*\*:\s+(.+)$/);
      if (avatarMatch) {
        currentWinner.avatar = avatarMatch[1];
      }
      
      const imageMatch = line.match(/^-\s+\*\*Large Image\*\*:\s+(.+)$/);
      if (imageMatch) {
        currentWinner.largeImage = imageMatch[1];
      }
      
      const descMatch = line.match(/^-\s+\*\*Description\*\*:\s+(.+)$/);
      if (descMatch) {
        currentWinner.desc = { en: descMatch[1], zh: descMatch[1] };
      }
    }
  }
  
  // Save last winner
  if (currentWinner && currentWinner.name) {
    contributors.push(currentWinner as Winner);
  }
  
  return {
    id: frontmatter.category,
    name: { en: frontmatter.title, zh: frontmatter.title_zh },
    contributors
  };
}