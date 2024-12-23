<script lang="ts">
  import { marked } from 'marked';

  export let data;

  const { title, image, description, content } = data;

  // Convert markdown content to HTML
  const contentHTML = marked(content);
</script>

<section class="mx-auto">
  <!-- Title and Description -->
  <div class="text-center px-4 py-8">
    <h1 class="text-3xl font-bold mb-2">{title}</h1>
    <p class="text-gray-600 text-lg">{description}</p>
  </div>

  <!-- Image -->
  {#if image}
    <div class="relative mb-8">
      <img 
        src={image} 
        alt={title} 
        class="w-full h-auto object-cover"
      />
    </div>
  {/if}

  <!-- Content -->
  <article class="prose lg:prose-xl mx-auto px-4 mb-10">
    <!-- Render markdown as HTML -->
    {@html contentHTML}
  </article>
</section>
