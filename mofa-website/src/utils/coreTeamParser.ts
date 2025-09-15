// Core team parser for extracting team member data from markdown
export interface CoreMember {
  name: string;
  role: { en: string; zh: string };
  avatar: string;
  github: string;
  largeImage: string;
  desc: { en: string; zh: string };
}

export interface CoreTeamCategory {
  id: string;
  name: { en: string; zh: string };
  contributors: CoreMember[];
}

export function parseCoreTeamContent(content: string, frontmatter: any): CoreTeamCategory {
  const lines = content.split('\n');
  const contributors: CoreMember[] = [];
  
  let currentMember: Partial<CoreMember> | null = null;
  
  for (const line of lines) {
    // Match member heading (### member_name)
    const memberMatch = line.match(/^###\s+(.+)$/);
    if (memberMatch) {
      // Save previous member if exists
      if (currentMember && currentMember.name) {
        contributors.push(normalizeCoreTeamMember(currentMember, frontmatter));
      }
      
      // Start new member
      currentMember = {
        name: memberMatch[1].trim(),
      };
    }
    
    // Parse member metadata
    if (currentMember) {
      const roleMatch = line.match(/^-\s+\*\*Role\*\*:\s+(.+)$/);
      if (roleMatch) {
        currentMember.role = { en: roleMatch[1], zh: roleMatch[1] };
      }
      
      const roleZhMatch = line.match(/^-\s+\*\*Role_zh\*\*:\s+(.+)$/);
      if (roleZhMatch && currentMember.role) {
        currentMember.role.zh = roleZhMatch[1];
      }
      
      const avatarMatch = line.match(/^-\s+\*\*Avatar\*\*:\s+(.+)$/);
      if (avatarMatch) {
        currentMember.avatar = avatarMatch[1];
      }
      
      const githubMatch = line.match(/^-\s+\*\*GitHub\*\*:\s+(.+)$/);
      if (githubMatch) {
        currentMember.github = githubMatch[1];
      }
      
      const imageMatch = line.match(/^-\s+\*\*Large Image\*\*:\s+(.+)$/);
      if (imageMatch) {
        currentMember.largeImage = imageMatch[1];
      }
      
      const descMatch = line.match(/^-\s+\*\*Description\*\*:\s+(.+)$/);
      if (descMatch) {
        currentMember.desc = { en: descMatch[1], zh: descMatch[1] };
      }
      
      const descZhMatch = line.match(/^-\s+\*\*Description_zh\*\*:\s+(.+)$/);
      if (descZhMatch && currentMember.desc) {
        currentMember.desc.zh = descZhMatch[1];
      }
    }
  }
  
  // Save last member
  if (currentMember && currentMember.name) {
    contributors.push(normalizeCoreTeamMember(currentMember, frontmatter));
  }
  
  return {
    id: frontmatter.category,
    name: { en: frontmatter.title, zh: frontmatter.title_zh },
    contributors
  };
}

function normalizeCoreTeamMember(member: Partial<CoreMember>, frontmatter: any): CoreMember {
  return {
    name: member.name!,
    role: member.role || { en: 'Core Member', zh: '核心成员' },
    avatar: member.avatar || `https://avatars.githubusercontent.com/${member.name}?v=4`,
    github: member.github || `https://github.com/${member.name}`,
    largeImage: member.largeImage || `/images/${member.name}.jpg`,
    desc: member.desc || { en: 'MoFA Core Team Member', zh: 'MoFA Core Team Member' }
  };
}