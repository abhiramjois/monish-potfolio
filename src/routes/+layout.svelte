<script>
	import '../app.css';
	import { onMount } from "svelte";
	import { goto } from '$app/navigation';
	let showMobileMenu = false;
	export let data;
	let { categories } = data;
	console.log(categories);
</script>

<div class="flex flex-col min-h-screen">
	<!-- Navbar -->
	<header class="bg-white shadow-sm">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center py-4">
				<!-- Logo -->
				<a href="/" class="text-lg text-monicolour font-pixel hover:text-pink-500 transition">
					Monish Suresh
				</a>

				<!-- Desktop Navigation Links -->
				<div class="hidden md:flex space-x-5 text-md font-bold text-monicolour">
					<a href="/about" class="transition">about</a>
					{#each categories as category}
					<a href={`/category/${category.slug}`} 
					   on:click={(e) => { e.preventDefault(); window.location.href = `/category/${category.slug}`; }} 
					   class="transition">
						{category.name}
					</a>
					{/each}
				</div>

				<!-- Mobile Menu Button -->
				<button
					class="md:hidden text-gray-300 hover:text-white focus:outline-none"
					aria-label="Toggle navigation"
					on:click={() => (showMobileMenu = !showMobileMenu)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>
			</div>

			<!-- Mobile Navigation Menu -->
			<div
				class={`md:hidden flex flex-col space-y-4 mt-2 text-monicolour font-bold px-4 py-2 ${
					showMobileMenu ? "block" : "hidden"
				}`}
			>
				<a href="/about" class="transition">about</a>
				{#each categories as category}
				<a href={`/category/${category.slug}`} class="transition">
					{category.name}
				</a>
				{/each}
			</div>
		</nav>
	</header>

	<!-- Main Content -->
	<main class="flex-grow h-full min-h-screen">
		<slot /> <!-- Slot to render children content -->
	</main>

	<!-- Footer -->
	<footer class="bg-monicolour text-white py-8">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<!-- Footer Main Content -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- About Section -->
				<div>
					<h2 class="text-lg font-bold mb-4">About</h2>
					<p>
						&copy; {new Date().getFullYear()} Monish Suresh | Portfolio 25.
					</p>
				</div>

				<!-- Social Links Section -->
				<div>
					<h2 class="text-lg font-bold mb-4">Follow Me</h2>
					<ul class="space-y-2">
						<li>
							<a
								href="https://www.instagram.com/artterritory"
								class="hover:text-pink-500 transition"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://www.behance.net/monishsuresh1#"
								class="hover:text-pink-500 transition"
								target="_blank"
								rel="noopener noreferrer"
							>
								Behance
							</a>
						</li>
						<li>
							<a
								href="https://in.linkedin.com/in/monish-suresh-077b541b4"
								class="hover:text-pink-500 transition"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</div>

				<!-- Contact Section -->
				<div>
					<h2 class="text-lg font-bold mb-4">Contact</h2>
					<form class="space-y-4">
						<div>
							<label for="email" class="block text-sm font-medium">Email</label>
							<p>
								monishsureshblr@gmail.com
							</p>
						</div>
					</form>
				</div>
			</div>

			<!-- Footer Bottom -->
			<div class="mt-8 border-t border-gray-700 pt-4 text-center">
				<p class="text-sm">
					A Secret Santa'24 gift ❤️ by Abhiram Jois.
				</p>
			</div>
		</div>
	</footer>
</div>
