<template>
	<div id="NavBar">
	  	<div class="navbar-fixed">
	    	<nav class="nav-extended blue">
				<div class="nav-wrapper">
					<a href="#" class="brand-logo center">M2W beta</a>
					<ul class="right">
						<li><a href="http://m2w2.herokuapp.com/settings"><i class="material-icons">settings</i></a></li>
					</ul>
				</div>
				<div class="nav-content">
					<ul class="tabs tabs-transparent">
						<li class="tab" id="home"><a  href="#" @click="openMenu()">Home</a></li>
						<li class="tab"><a  href="#" @click="openAdd()">Add</a></li>
					</ul>
				</div>
	  		</nav>
  		</div>
		<br><br><br>  
	</div>
</template>

<script>
	export default {
		name: 'NavBar',

		data () {
			return {
			}
		},

		methods: {
			openMenu: function () {
				console.log("open menu")
				this.$router.push({path: '/'});
			},

			openAdd: function () {
				console.log("open add")
				this.$router.push({path: '/add'});
			},

			openSettings: function () {
				this.$router.push({path: '/settings'});
			}
		}
	}
</script>

<style scoped>
</style>