<template>
	<div class="Menu">
		<div class="container">
			<h3>Messages</h3>
			<blockquote v-for="(msg, index) in reversed" :key="index">
				<p>{{msg.content}}</p>
				<p><strong>- {{msg.author}}</strong></p>
				<!-- For debug : -->
				<!-- <p class="white-text" style="font-size: 10px;">{{msg._id}}</p> -->
			</blockquote>
		</div>
	</div>
</template>

<script>
	
	import {getMessages, postMessage, deleteMessage} from './services/MessagesServices.js'

	export default {
		name: 'Menu',

		data: () => {
			return {
			}
		},

		sockets: {
			update: function() {
				this.updateMessages();
			}
		},

		computed: {
			messages: function(){
				return this.$parent.messages;
			},

			reversed: function() {
				return this.messages.reverse();
			}
		},

		methods: {
			updateMessages: async function () {
				this.$parent.messages = await getMessages();
			}
		},

		async created () {
			this.$parent.messages = await getMessages();
		},
	}

</script>

<style scoped>
</style>