// Tipos para la API
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  featured: boolean;
  thumbnail?: string;
  author: string;
  date: string;
}

export interface BlogApiResponse {
  success: boolean;
  data: BlogPost[];
  count: number;
}

export interface BlogPostApiResponse {
  success: boolean;
  data: BlogPost;
}

// Función para obtener todos los posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Usar ruta relativa para que Next.js proxy funcione
    const response = await fetch('/api/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Evitar cache en desarrollo
    });
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const result: BlogApiResponse = await response.json();
    
    if (!result.success) {
      throw new Error('Error en la respuesta de la API');
    }
    
    return result.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Fallback a datos mock si hay error
    return [];
  }
}

// Función para obtener un post por ID
export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    // Usar ruta relativa para que Next.js proxy funcione
    const response = await fetch(`/api/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const result: BlogPostApiResponse = await response.json();
    
    if (!result.success) {
      throw new Error('Error en la respuesta de la API');
    }
    
    return result.data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
