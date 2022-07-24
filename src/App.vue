<template>
  <div class="bg-slate-300 dark:bg-black">
		<h1 class="text-center py-5 text-4xl mb-3 dark:text-white font-lobster">{{ title }}</h1>
		<catalog-wrapper />
	</div>
</template>

<script>

import CatalogWrapper from '@/components/CatalogWrapper'

export default {
  name: 'App',
  components: {
		CatalogWrapper
  },
	data() {
		return {
			title: 'Catalog Shop'
		}
	}
}
</script>

<style>

</style>
