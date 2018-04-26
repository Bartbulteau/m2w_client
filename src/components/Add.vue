<template>
	<div class="Add">
		<div class="container">
            <h3>Add your own message</h3>
            <div class="row">
                <div class="input-field col s10 offset-s1">
                    <textarea id="textarea1" class="materialize-textarea" v-model="msg.content"></textarea>
                    <label for="textarea1">Message</label>
                </div>
                <div class="input-field col s10 offset-s1">
                    <input type="text" id="autocomplete-input" class="autocomplete" v-model="msg.author">
                    <label for="autocomplete-input">Author</label>
                </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" @click="sendMsg()">
                Send
                <i class="material-icons right">send</i>
            </button>
        </div>
        <br><br><br>
	</div>
</template>

<script>

    import {getMessages, postMessage, deleteMessage} from './services/MessagesServices.js'

	export default {
		name: 'Add',

		data: () => {
			return {
                msg: {
                    content: "",
                    author: ""
                }
			}
		},

		methods: {
            sendMsg: async function() {
                if(this.msg.content !== "" && this.msg.author !== "") {
                    this.$parent.messages = await postMessage(this.msg)
                    this.msg.content = "";
                    this.msg.author = "";

                    // tell socket.io to update messages :
                    // socket.emit('new_message');
                    this.$socket.emit('new_message');
                    this.$router.push({path: '/'});
                } else {
                    alert('No field can stay empty !');
                }
            }
		}
	}
</script>

<style scoped>
</style>