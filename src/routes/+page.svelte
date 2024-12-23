<script>
    export let data;
    let { categories } = data;
    console.log(categories)
</script>

<section class="bg-theme flex flex-col items-center text-center min-h-screen py-10">
  <!-- Artist Image -->
  <img src="/monish.png" alt="Monish Suresh" class="w-72 object-cover mb-6" />
  
  <!-- Heading -->
  <h1 class="text-outline text-4xl text-accent mb-4">Monish Suresh</h1>
  
  <!-- Subheading -->
  <p class="text-xl mb-10">A Concept Designer and Illustrator</p>
  
  <!-- Category Buttons -->
  <div class="flex flex-wrap gap-2 justify-center">
    {#each categories as category}
      <a href={`/category/${category.slug}`} class="btn bg-pink-600 text-white py-3 px-3 tex-sm rounded">
        {category.name}
      </a>
    {/each}      
  </div>
</section>
