<template>
	<div class="flex flex-wrap p-3">
		<catalog-product
		v-for="product in PRODUCTS"
		:key="product.article"
		:product="product"
		@addToCart="addToCart" />
	</div>
</template>

<script>
import CatalogProduct from '@/components/CatalogProduct'
import { mapActions, mapGetters } from "vuex";

export default {
	name: 'CatalogList',
	components: {
		CatalogProduct
	},
	data() {
		return {

		}
	},
	computed: {
		...mapGetters([
			'PRODUCTS'
			]),
	},
	methods: {
		...mapActions([
			'GET_PRODUCTS',
			'ADD_TO_CART'
			]),
		addToCart(data) {
			this.ADD_TO_CART(data)
		}
	},
	mounted() {
		this.GET_PRODUCTS()
		.then(res => {
			if(res.data) {
				console.log('Data loaded');
			}
		})
	}
}
</script>

<style>

</style>