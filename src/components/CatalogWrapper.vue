<template>
	<div>
		<catalog-cart
		v-if="CART.length"
		:cart="CART" />
		<catalog-list />
	</div>
</template>

<script>
import CatalogList from '@/components/CatalogList'
import CatalogCart from '@/components/CatalogCart'
import { mapGetters } from "vuex";

export default {
	name: 'CatalogWrapper',
	components: {
		CatalogList,
		CatalogCart
	},
	computed: {
		...mapGetters(['CART'])
	}
}
</script>

<style>

</style>