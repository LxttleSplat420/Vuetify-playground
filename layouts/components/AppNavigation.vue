<!-- <script setup lang="ts">
interface NavigationItem {
	title: string
	icon: string
	path: string
}

defineProps<{
	items: NavigationItem[]
}>()
</script>

<template>
	<v-list>
		<v-list-item v-for="item in items" :key="item.path">
			<NuxtLink :to="item.path" class="nav-link" active-class="active-link">
				<v-icon :title="item.title">{{ item.icon }}</v-icon>
				<span class="text-truncate">{{ item.title }}</span>
			</NuxtLink>
		</v-list-item>
	</v-list>
</template>

<style scoped>

.active-link {
	color: rgb(var(--v-theme-primary)) !important;
}

.nav-link {
	display: flex;
	align-items: center;
	gap: 8px;
	text-decoration: none;
	color: inherit;
	padding: 8px;
	width: 100%;
}
</style> -->