<template>
  <div>
    <v-expansion-panels v-if="items.length" flat accordion hover>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <div>
            <span>{{ category.name }}</span>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list nav dense>
            <Category
              v-for="item in items"
              :key="item.id"
              :id="item.id"
              :category="item"
            />
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-list-item @click="navigate" v-else link>
      <v-list-item-title>{{ category.name }}</v-list-item-title>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['id', 'category'],
  mounted() {
    this.getSubCategories()
  },
  methods: {
    async getSubCategories() {
      const data = await this.$store.dispatch('getSubCategories', this.id)
      const cats = data.categories

      for (let index in cats) {
        const sub = cats[index]
        if (sub.parent !== null && sub.id !== this.id) {
          this.items.push(sub)
        }
      }
    },
    navigate() {
      this.$router.push(`/products/${this.category.name}`)
    },
  },
  data() {
    return {
      group: null,
      items: [],
    }
  },
}
</script>
