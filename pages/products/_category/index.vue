<template>
  <div class="products">
    <div class="filter-panel-wrapper">
      <div class="filter-panel">
        <div class="filter-panel__item" v-if="brands.length">
          <h2 class="filter-panel__item__title">Brand</h2>
          <div class="filter-panel__item__options">
            <div
              v-for="item in brands"
              :key="item.id"
              class="px-2 filter-panel__item__option"
            >
              <v-checkbox hide-details :label="item"></v-checkbox>
            </div>
          </div>
          <div class="line"></div>
        </div>

        <div class="filter-panel__item">
          <h2 class="filter-panel__item__title">Price</h2>
          <div class="filter-panel__item__options">
            <v-text-field
              v-model="priceRange.min"
              solo
              label="From"
            ></v-text-field>
            <v-text-field
              v-model="priceRange.max"
              solo
              label="To"
            ></v-text-field>
          </div>
          <div class="line"></div>
        </div>

        <div class="filter-panel__item" v-if="specificationKeys.length">
          <h2 class="filter-panel__item__title">Specification Keys</h2>
          <div class="filter-panel__item__options">
            <div
              v-for="item in specificationKeys"
              :key="item"
              class="px-2 filter-panel__item__option"
            >
              <v-checkbox hide-details :label="item"></v-checkbox>
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
            item-value="id"
            item-text="name"
            label="Select Sort"
            solo
          ></v-select>
        </div>
      </div>
      <v-container>
        <v-row class="py-2" v-for="rowCount in numberOfRows" :key="rowCount">
          <v-col v-for="colCount in 5" :key="colCount">
            <template v-if="getProductByIndex(rowCount, colCount)">
              <CardItem :product="getProductByIndex(rowCount, colCount)" />
            </template>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  asyncData({ params }) {
    if (params.category) {
      return {
        category: params.category,
      }
    }
  },
  data() {
    return {
      priceFrom: null,
      priceTo: null,
      sortByModel: 4,
      products: [],
      brands: [],
      specificationKeys: [],
      priceRange: {
        min: 0,
        max: 100,
      },
      sortItems: [
        {
          id: 1,
          name: 'Lowest Price',
        },
        {
          id: 2,
          name: 'Highest Price',
        },
        {
          id: 3,
          name: 'Rating',
        },
        {
          id: 4,
          name: 'Date',
        },
      ],
    }
  },
  mounted() {
    this.getProductsByCategory()
    this.getBrandsByCategoryId()
    this.getPriceRangeByCategoryId()
    this.getSpecificationKeysBydCategoryId()
  },
  computed: {
    numberOfRows() {
      return Math.ceil(this.products.length / 5)
    },
  },
  methods: {
    getProductByIndex(row, col) {
      return this.products[(row - 1) * 5 - (col - 1)]
    },
    async getProductsByCategory() {
      const data = await this.$store.dispatch(
        'product/getProductsByCategoryId',
        this.category
      )

      this.products = data.products
    },
    async getBrandsByCategoryId() {
      const data = await this.$store.dispatch(
        'product/getBrandsByCategoryId',
        this.category
      )

      this.brands = data.brands
    },
    async getPriceRangeByCategoryId() {
      // const data = await this.$store.dispatch(
      //   'product/getPriceRangeByCategoryId',
      //   this.category
      // )
    },
    async getSpecificationKeysBydCategoryId() {
      const data = await this.$store.dispatch(
        'product/getSpecificationKeysByCategoryId',
        this.category
      )

      this.specificationKeys = data.specification_keys
    },
  },
}
</script>
