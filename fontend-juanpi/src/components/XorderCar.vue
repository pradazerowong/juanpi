<template>
	<div id="shortcut" style="display: block;">
    <a @click="go()" class="bag-enter clear">
        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/bag_shortcut_new.png?74baee69-1&amp;sv=449ce9ee">
        <em style="display: inline;">1</em>
        <span class="time-out"></span>
    </a>
</div>
</template>

<script>
	export default {
		methods: {
			go() {
				this.$router.push('car')
			}
		}
	}
</script>

<style>
</style>