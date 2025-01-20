<template>
    <div>
        <v-card>
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title >Vuetify Component Playground</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>  
      

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list>
            <v-list-item v-for="component in components" :key="component.title" :to="component.link" 
            :class="{'v-list-item--active': selectedItem === component.link}"
              @click="selectItem(component)">
          <v-list-item-content>
            <v-list-item-title>{{ component.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main >
        <template>
            <v-card>
            <v-tabs
              v-model="tab"
              bg-color="primary"
              align-tabs="title"
            >
              <v-tab :to="`${selectedItem}/individual`">
                Individual
              </v-tab>
              <v-tab :to="`${selectedItem}/shared`">
              Shared
              </v-tab>
            </v-tabs>

            <v-card-text>
              <v-tabs-window v-model="tab">
              <v-tabs-window-item value="individual">
                <slot></slot>
              </v-tabs-window-item>

              <v-tabs-window-item value="shared">
                <slot></slot>
              </v-tabs-window-item>
              </v-tabs-window>
            </v-card-text>
            </v-card>
          </template>
          
      </v-main>
    </v-layout>
  </v-card>
</div>
    

</template>

<script>

export default {
    data: () => ({
      drawer: false,
      group: null,
      selectedItem: "/buttons",
      tab: null,
      
      tabs:["Shared", "Individual"],
      components: [
        {
          title: 'Buttons',
          link: '/buttons',
        },
        {
          title: 'Test',
          link: '/test',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false;
        this.currComponent = item.title;
      },
    },
    methods: {
    selectItem(component) {
      // Update the selected item when clicked
      this.selectedItem = component.link;
    },
  },
    
}
</script>

<style scoped>

</style>