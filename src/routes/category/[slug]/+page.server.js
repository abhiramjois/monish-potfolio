import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function load({ params }) {
  const { slug } = params;

  // Define the content directory path for the selected category
  const categoryDir = path.resolve('content', slug);

  try {
    const categoryExists = await fs.stat(categoryDir).then((stats) => stats.isDirectory()).catch(() => false);

    if (!categoryExists) {
      console.error(`Category directory not found: ${categoryDir}`);
      return { slug, methodologyImage: '', methodologyTitle: '', projects: [] };
    }

    const allFiles = await fs.readdir(categoryDir);
    const projectFiles = allFiles.filter((file) => file !== 'methodology.md');

    const methodologyContent = await fs.readFile(path.join(categoryDir, 'methodology.md'), 'utf-8');
    const { data: methodologyData } = matter(methodologyContent);

    const projects = await Promise.all(
      projectFiles.map(async (file) => {
        const projectContent = await fs.readFile(path.join(categoryDir, file), 'utf-8');
        const { data: projectData } = matter(projectContent);

        return {
          title: projectData.title,
          slug: file.replace('.md', ''),
          image: projectData.image,
          description: projectData.description,
        };
      })
    );

    return {
      slug, // Pass the slug to the frontend
      methodologyImage: methodologyData.image || '',
      methodologyTitle: methodologyData.title || '',
      projects,
    };
  } catch (error) {
    console.error(`Error loading category data for slug ${slug}:`, error);
    return { slug, methodologyImage: '', methodologyTitle: '', projects: [] };
  }
}
