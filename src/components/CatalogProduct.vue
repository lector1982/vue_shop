<template>
	<div class="basis-1/5 p-4 shadow-2xl m-3">
		<img
		class="w-full mx-auto h-48 object-cover object-top rounded"
		:src="require('@/assets/img/' + product.image)"
		:alt="product.name">
		<h4 class="mt-2 font-bold text-lg">{{ product.name }}</h4>
		<div class="my-2 font-semibold">{{ product.price }} $</div>
		<button class="text-white py-2 px-3 rounded bg-sky-600 hover:bg-sky-700"
		@click="addToCart">Add to cart</button>
	</div>
</template>

<script>
export default {
	name: 'CatalogProduct',
	props: {
		product: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		addToCart() {
			this.$emit('addToCart', this.product)
		}
	},
	mounted() {
		// this.$set(this.product, 'quantity', 1)
		Object.assign(this.product, { quantity: 1 })
	}
}
</script>

<style>

</style>