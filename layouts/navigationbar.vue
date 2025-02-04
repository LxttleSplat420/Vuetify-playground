<template>
  <v-card>
    <v-layout>
      <v-app-bar color="indigo" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vuetify Component Playground</v-toolbar-title>
        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">

          <!-- Search Field -->
          <v-text-field v-if="isSearchVisible" v-model="useComponentSearchStore().searchQuery" :label="'Search by: ' + useComponentSearchStore().filter"
            outlined clearable @click:clear="searchClear()" class="mt-7"
            ref="searchField"></v-text-field>

          <v-btn icon="mdi-magnify" variant="text" @click="toggleSearch"></v-btn>

          <!-- Filter Search -->
          <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn icon="mdi-filter" variant="text" v-bind="activatorProps"></v-btn>
      </template>

      <v-list>
        <v-list-item @click="onClick('Component Type')">
          <v-list-item-title>Component Type</v-list-item-title>
        </v-list-item>

        <v-list-item @click="onClick('Author')">
          <v-list-item-title>Author</v-list-item-title>
        </v-list-item>

        <v-list-item @click="onClick('Co-Author')">
          <v-list-item-title>CoAuthor</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

          
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>

        <!-- Dark/ Light Mode Switch -->
        <v-switch class="pt-5 pr-3 " v-model="isLightTheme" color='primary' true-icon='mdi-weather-sunny'
          false-icon='mdi-weather-night' inset />
      </v-app-bar>

      <client-only>
        <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary
          color="#ebebf3">
          <v-list>
            <v-list-item v-for="component in components" :key="component.title" :to="{path: `${component.link}/individual`,
            query: route.query}"
              :class="{ 'v-list-item--active': selectedItem === component.link }" @click="selectItem(component)">
              <v-list-item-content>
                <v-list-item-title>{{ component.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </client-only>

      <v-main>
        <v-card>
          <v-tabs v-if="$route.path !== '/'" v-model="tab" bg-color="indigo" align-tabs="title">
            <v-tab :to="{path: `${selectedItem}/individual`,
            query: route.query}">Individual</v-tab>
            <v-tab :to="{path: `${selectedItem}/shared`,
            query: route.query}">Shared</v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="individual">
                <NuxtPage />
              </v-tabs-window-item>
              <v-tabs-window-item value="shared">
                <NuxtPage />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

import { useComponentSearchStore } from '~/stores/useComponentSearchStore';

const drawer = ref(null);
const selectedItem = ref("/Buttons");
const tab = ref("individual");

const components = [
  { title: 'Buttons', link: '/Buttons' },
  { title: 'Selects', link: '/Selects' },
  { title: 'Cards', link: '/Cards' },
  { title: 'Switches', link: '/Switches' },
  { title: 'Badges', link: '/Badges' },
  { title: 'Test', link: '/Test' },
  //Add more component title and links for navigation
];

function selectItem(component: any) {
  selectedItem.value = component.link;
};


const isSearchVisible = ref(false); // Toggles the search field visibility
const searchField = ref<HTMLInputElement | null>(null);

// Toggle search field visibility
const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;

  nextTick(() => {
    if (searchField.value !== null) {
      searchField.value.focus(); // Focus the search input when visible
    }
  });
};
//Clear search Field
const searchClear = () => {
  useComponentSearchStore().searchQuery = '';
};

//Change light and dark modes
const theme = useTheme();

const isLightTheme = ref(theme.global.name.value === 'light');

watch(isLightTheme, (newValue: boolean) => {

  const themeName = newValue ? 'light' : 'dark';

  theme.global.name.value = themeName;
});

//Update page URL when search query is entered
const route = useRoute();
const router = useRouter();

watch(() => useComponentSearchStore().searchQuery, (newValue) => {  
  router.replace({ query: { ...route.query, Search: newValue } }); //Update URL Search Term
},
);

//Keep page URL search paramater when page switching
onMounted(() => {

 
  //Store/ Load URL search parameters
  if (route.query.Search !== null || route.query.Search !== "") {
    const searchQuery = Array.isArray(route.query.Search) ? route.query.Search[0] : route.query.Search;
    const Filter = Array.isArray(route.query.Filter) ? route.query.Filter[0] : route.query.Filter;
    console.log(Filter);

    useComponentSearchStore().searchQuery = searchQuery === null ? "" : searchQuery as string;    
    useComponentSearchStore().filter = Filter === "" ? "Component Type" : Filter as string;   
  }
  
})


//Search Filter
const onClick = (filterType : any) => {
  isSearchVisible.value = true;
  useComponentSearchStore().filter = filterType;  
  router.replace({ query: { ...route.query, Filter: filterType } }); //Update URL Search Term with filter

  nextTick(() => {
    if (searchField.value !== null) {
      searchField.value.focus(); // Focus the search input when visible
    }
  });


};

</script>
