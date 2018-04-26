<template>
    <div class="Admin">
        <div class="container">
            <h3>Admin
                <button class="btn" @click="backToMenu()">Done</button>
            </h3>
            <blockquote v-for="(msg, index) in reversed" :key="index">
                <p>{{msg.content}}</p>
                <p>
                    <strong>- {{msg.author}}</strong>
                </p>
                <!-- For debug : -->
                <!-- <p class="white-text" style="font-size: 10px;">{{msg._id}}</p> -->
                <button class="btn red" @click="remove(msg._id)">Remove</button>
            </blockquote>
        </div>
    </div>
</template>

<script>

    import { getMessages, postMessage, deleteMessage } from './services/MessagesServices.js'

    export default {
        name: 'Admin',

        data: () => {
            return {
            }
        },

        methods: {
            remove: async function (id) {
                this.$parent.messages = await deleteMessage(id);
            },
            backToMenu: function () {
                this.$router.push({ path: '/' });
                // socket.emit('new_message');
                this.$socket.emit('new_message');
            }
        },

        computed: {
            messages: function () {
                return this.$parent.messages;
            },

            reversed: function () {
                return this.messages.reverse();
            }
        },

        async created() {
            this.$parent.messages = await getMessages();
        }
    }
</script>

<style scoped>
</style>