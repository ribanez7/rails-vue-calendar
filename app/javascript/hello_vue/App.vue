<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>{{ i18n.hello }}</p>
    <p>{{ i18n.bye }}</p>
  </div>
</template>

<script>
    export default {
	props: {
	    i18n: {
		type: Object,
		required: true
	    }
	},
	data: function () {
	    return {
		message: "Hello Vue!"
	    }
	}
    }
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
