import fs from 'fs';
import path from 'path';

export async function load() {
  try {
    const contentDir = path.resolve('content');

    // Check if the content directory exists
    if (!fs.existsSync(contentDir)) {
      console.error('Content directory not found!');
      return {  categories: []  }; // Return empty categories if directory doesn't exist
    }

    // Read categories (directories inside content folder)
    const categories = fs.readdirSync(contentDir)
      .filter(file => fs.statSync(path.join(contentDir, file)).isDirectory())
      .map(category => ({
        name: category.replace(/-/g, ' '), // Convert slug to human-readable name
        slug: category
      }));

    // Log the categories to check if they're populated
    console.log('Categories:', categories);

    return {
       categories 
    };
  } catch (error) {
    console.error('Error loading categories:', error);
    return {  categories: []  }; // Return empty categories in case of an error
  }
}
