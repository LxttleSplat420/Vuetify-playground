<!-- Tabs -->
<template v-slot:extension>
    <v-tabs
      v-model="tab"
      align-tabs="title"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab"
        :text="tab"
        :value="tab"
      ></v-tab>
    </v-tabs>
  </template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>