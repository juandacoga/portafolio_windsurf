// Importar los posts del blog existentes
import { blogPosts } from './src/data/blogPosts';

// Crear el servidor con Bun
const server = Bun.serve({
  port: 3001, // Puerto diferente al del frontend (Next.js usa 3000)
  routes: {
    // Endpoint GET para listar todos los posts
    "/api/posts": {
      GET: () => {
        return Response.json({
          success: true,
          data: blogPosts,
          count: blogPosts.length
        });
      }
    },
    
    // Endpoint opcional para obtener un post por ID
    "/api/posts/:id": (req: any) => {
      const postId = req.params.id;
      const post = blogPosts.find(p => p.id === postId);
      
      if (!post) {
        return Response.json({
          success: false,
          error: "Post no encontrado"
        }, { status: 404 });
      }
      
      return Response.json({
        success: true,
        data: post
      });
    },
    
    // Endpoint de health check
    "/api/health": {
      GET: () => {
        return Response.json({
          success: true,
          message: "API funcionando correctamente",
          timestamp: new Date().toISOString()
        });
      }
    }
  },
  
  // Fallback para rutas no encontradas
  fetch(req: any) {
    return new Response("Not Found", { status: 404 });
  }
});

console.log(`🚀 Servidor de posts corriendo en ${server.url}`);
console.log(`📝 Endpoint de posts: ${server.url}api/posts`);
console.log(`❤️  Health check: ${server.url}api/health`);
