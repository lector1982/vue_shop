<template>
	<div class="cart__item flex justify-between items-center mb-2 px-5">
		<img
		class="block h-20 rounded"
		:src="require('@/assets/img/' + cart_prod.image)"
		:alt="cart_prod.name">
		<h4 class="mt-2 font-bold text-lg">{{ cart_prod.name }}</h4>
		<div class="my-2 font-semibold">{{ cart_prod.price }} $</div>
		<div class="my-2 font-semibold">{{ cart_prod.quantity }}</div>
		<button class="bg-red-500 p-2 text-white" @click="deleteFromCart">Delete</button>
		</div>
</template>

<script>

export default {
	props: {
		cart_prod: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		deleteFromCart() {
			this.$emit('deleteFromCart');
		}
	},
	mounted() {
		// this.cart_prod[cart_prod.quantity] = 1;
		// this.cart_prod.quantity = 1;
		// Vue.set(this.cart_prod, 'quantity', 1);
		// Object.assign(this.cart_prod, { quantity: 1 })
		// console.log(this.cart_prod);
		// this.cart_prod['quantity'] = 1;
	}
}
</script>

<style>

</style>