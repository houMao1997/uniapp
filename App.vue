<script>
	
export default {
	
	onLaunch: function() {
		console.log('App Launch');
		setTimeout(() => {
			// uni.setTabBarBadge({
			// 	index: 1,
			// 	text: ''
			// });
			// uni.showTabBarRedDot({
			// 	index: 3
			// });
		}, 1000);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
.cmd-nav-bar{
	box-shadow: none;
}

</style>
