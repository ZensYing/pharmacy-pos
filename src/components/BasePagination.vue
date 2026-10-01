<template>
    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 p-3">
        <div id="tableinfo">
            <div class="dataTables_info" role="status">Showing {{ infoStart }}-{{ infoEnd }} of {{ totalItems }} {{ itemLabel }}</div>
        </div>
        <div id="tablepage">
            <div class="dataTables_paginate paging_simple_numbers">
                <ul class="pagination">
                    <li class="paginate_button page-item previous" :class="{ disabled: currentPage === 1 }"
                        id="calls-list_previous" @click="currentPage > 1 && $emit('update:currentPage', currentPage - 1)">
                        <button class="page-link" type="button" role="link" :disabled="currentPage === 1">
                            <span>
                                <i class="icon-chevron-left"></i>
                            </span>
                        </button>
                    </li>
                    <li class="paginate_button page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                        <button class="page-link" type="button" role="link" :aria-current="currentPage === page ? 'page' : undefined" :data-dt-idx="page - 1"
                            :tabindex="currentPage === page ? 0 : -1" @click.prevent="$emit('update:currentPage', page)"
                        >
                            {{ page }}
                        </button>
                    </li>
                    <li class="paginate_button page-item next"  :class="{ disabled: currentPage === totalPages }"
                        id="calls-list_next" @click="currentPage < totalPages && $emit('update:currentPage', currentPage + 1)">
                        <button class="page-link" type="button" role="link" :disabled="currentPage === totalPages">
                            <span>
                                <i class="icon-chevron-right"></i>
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div id="tablelength" class="d-flex align-items-center gap-2">
            <div class="dataTables_length">
              <label class="mb-0">
                  Go to Page
                  <select name="calls-list_length" aria-controls="calls-list" class="form-select form-select-sm me-2"
                      :value="pageSize" @change="$emit('update:pageSize', Number($event.target.value))">
                      <option v-for="size in pageSizeOptions" :key="size" :value="size">
                          {{ size }}
                      </option>
                  </select>
              </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    pageSizeOptions: {
      type: Array,
      default: () => [5, 10, 20, 50],
    },
    totalPages: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    itemLabel: {
      type: String,
      default: 'entries',
    },
  },
  emits: ['update:currentPage', 'update:pageSize'],
  data() {
    return {
      goToPageValue: this.currentPage,
    };
  },
  computed: {
    infoStart() {
      return this.totalItems === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
    },
    infoEnd() {
      return Math.min(this.currentPage * this.pageSize, this.totalItems);
    },
  },
  watch: {
    currentPage(value) {
      this.goToPageValue = value;
    },
  },
  methods: {
    goToPage() {
      let page = Number(this.goToPageValue);
      if (!page || page < 1) page = 1;
      if (page > this.totalPages) page = this.totalPages;
      this.goToPageValue = page;
      if (page !== this.currentPage) {
        this.$emit('update:currentPage', page);
      }
    },
  },
};
</script>
