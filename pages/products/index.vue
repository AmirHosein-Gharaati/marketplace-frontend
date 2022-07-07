<template>
  <div class="products">
    <div class="filter-panel-wrapper">
      <div class="filter-panel">
        <div class="filter-panel__item">
          <h2 class="filter-panel__item__title">Brand</h2>
          <div class="filter-panel__item__options">
            <div
              v-for="item in brands"
              :key="item.id"
              class="px-2 filter-panel__item__option"
            >
              <v-checkbox hide-details :label="item.name"></v-checkbox>
            </div>
          </div>
          <div class="line"></div>
        </div>

        <div class="filter-panel__item">
          <h2 class="filter-panel__item__title">Price</h2>
          <div class="filter-panel__item__options">
            <v-text-field v-model="priceFrom" solo label="From"></v-text-field>
            <v-text-field v-model="priceTo" solo label="To"></v-text-field>
          </div>
          <div class="line"></div>
        </div>

        <div class="filter-panel__item">
          <h2 class="filter-panel__item__title">Other</h2>
          <div class="filter-panel__item__options">
            <div
              v-for="item in brands"
              :key="item.id"
              class="px-2 filter-panel__item__option"
            >
              <v-checkbox hide-details :label="item.name"></v-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="products__top">
        <h2 class="d-flex txt">Best matches</h2>
        <div class="products__top__sort">
          <h3 class="txt px-4">Sort By</h3>
          <v-select
            v-model="sortByModel"
            height="20"
            hide-details
            :items="sortItems"
            label="Select Sort"
            solo
          ></v-select>
        </div>
      </div>
      <v-container>
        <v-row class="py-2" v-for="rowCount in 5" :key="rowCount">
          <v-col v-for="colCount in 5" :key="colCount">
            <CardItem />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      priceFrom: null,
      priceTo: null,
      sortItems: ['Brand', 'Date'],
      sortByModel: 'Brand',
      brands: [
        {
          id: 1,
          name: 'Brand 1',
        },
        {
          id: 2,
          name: 'Brand 2',
        },
        {
          id: 3,
          name: 'Brand 3',
        },
        {
          id: 4,
          name: 'Brand 4',
        },
        {
          id: 5,
          name: 'Brand 5',
        },
      ],
    }
  },
}
</script>

<style></style>
