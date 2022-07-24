import { createStore } from "vuex"
import axios from 'axios'

const store = createStore({
	state: {
		products: [],
		cart: []
	},
	mutations: {
		SET_PRODUCTS: (state, products) => {
			state.products = products;
		},
		SET_CART: (state, product) => {
			if (state.cart.length) {
				let isProduct = false;
				state.cart.map(item => {
					if (item.article == product.article) {
						isProduct = true;
						item.quantity++;
					}
				})
				if (!isProduct) {
					state.cart.push(product);
				}
			} else {
				state.cart.push(product);
			}
		},
		REMOVE_FROM_CART: (state, index) => {
			state.cart.splice(index, 1);
		}
	},
	actions: {
		GET_PRODUCTS({ commit }) {
			return axios.get('http://localhost:3000/products')
				.then(products => {
					commit('SET_PRODUCTS', products.data);
					return products;
				})
				.catch(error => {
					console.log(error);
					return error;
				})
		},
		ADD_TO_CART({ commit }, product) {
			commit('SET_CART', product);
		},
		DELETE_FROM_CART({ commit }, index) {
			commit('REMOVE_FROM_CART', index)
		}
	},
	getters: {
		PRODUCTS(state) {
			return state.products;
		},
		CART(state) {
			return state.cart;
		}
	}
});

export default store;