<!-- <script setup lang="ts">
import {useTheme} from "vuetify";
import AppNavigation from "~/layouts/components/AppNavigation.vue";
import {navigationItems} from "~/layouts/constants/navigation";

const drawer = ref(true)

// setting dark mode
const theme = useTheme();

const isLightTheme = ref(theme.global.name.value === 'light');

watch(isLightTheme, (newValue: boolean) => {

	const themeName = newValue ? 'light' : 'dark';

	theme.global.name.value = themeName;
});


</script> -->
<!-- <template>
	<v-app>
		<v-app-bar
				:elevation="2"
				density="comfortable">
			<v-app-bar-nav-icon
					@click.stop="drawer = !drawer"
			/>
			<v-toolbar-title title="Stock analysis app">
				<span class="font-weight-bold">Stock Analysis App</span>
			</v-toolbar-title>
			<v-switch
					class="pt-5 pr-3 "
					v-model="isLightTheme"
					color='primary'
					true-icon='mdi-weather-sunny'
					false-icon='mdi-weather-night'
					inset
			/>
		</v-app-bar>

		<!--Add the following to get it to expand on hover-->
		<!--				v-model="drawer"-->
		<!--				expand-on-hover-->
		<!-- <v-navigation-drawer
				:rail="drawer"
				:rail-width="70"
				:width="240"
				permanent
		>
			<AppNavigation :items="navigationItems"/>

		</v-navigation-drawer>

		<v-main>
			<v-container>
				<slot/>
			</v-container>
		</v-main>
	</v-app> -->
<!-- </template> -->

<!-- <style scoped>

</style> -->
