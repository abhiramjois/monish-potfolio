import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function load({ params }) {
  const { slug, project } = params;

  console.log(`Loading project: ${project} from category: ${slug}`);

  // Define the project's Markdown file path
  const projectFilePath = path.resolve('content', slug, `${project}.md`);

  try {
    // Check if the file exists
    const fileExists = await fs.stat(projectFilePath).then(stats => stats.isFile()).catch(() => false);

    if (!fileExists) {
      console.error(`Project file not found: ${projectFilePath}`);
      return { title: 'Not Found', image: '', description: '', content: '' };
    }

    // Read and parse the project's Markdown file
    const projectContent = await fs.readFile(projectFilePath, 'utf-8');
    const { data: projectData, content: projectText } = matter(projectContent);

    return {
      title: projectData.title,
      image: projectData.image,
      description: projectData.description,
      content: projectText, // Return the full content
    };
  } catch (error) {
    console.error(`Error loading project data for ${project}:`, error);
    return { title: 'Error', image: '', description: '', content: '' };
  }
}
