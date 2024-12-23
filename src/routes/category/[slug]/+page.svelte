<script lang="ts">
  export let data;

  // Destructure data
  let { slug, methodologyImage, methodologyTitle, projects } = data;
</script>

<section class="max-w-5xl mx-auto px-4 py-8">
  <!-- Title -->
  <h1 class="text-lg md:text-2xl text-outline text-center mb-8">{methodologyTitle}</h1>

  <!-- Projects -->
  <div class="space-y-3">
    {#each projects as project}
      <div class="bg-gray-800 text-gray-100 flex flex-col md:flex-row overflow-hidden shadow-lg">
        <!-- Image -->
        {#if project.image}
          <div class="md:w-3/4">
            <img 
              src={project.image} 
              alt={project.title} 
              class="w-full h-48 md:h-full object-cover"
            />
          </div>
        {/if}

        <!-- Content -->
        <div class="md:w-1/4 p-4 md:p-6 flex flex-col justify-between">
          <h2 class="text-lg md:text-xl font-bold mb-2">{project.title}</h2>
          <p class="text-sm md:text-base text-gray-300 flex-grow mb-4">{project.description}</p>
          <a 
            href={`/category/${slug}/projects/${project.slug}`} 
            class="w-full bg-pink-600 text-white py-2 px-4 text-sm rounded hover:bg-pink-700 transition text-center"
          >
            View More
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>
