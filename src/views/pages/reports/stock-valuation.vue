<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><router-link :to="all_routes.dashboard"> <span><i class="icon-house"></i></span>
                                Dashboard</router-link></li>
                        <li class="breadcrumb-item" aria-current="page">Reports </li>
                        <li class="breadcrumb-item active" aria-current="page">Stock Valuation </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                </div>
            </div>

            <!-- start card -->
            <div class="card mb-0">
                <div class="card-header">
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div class="d-inline-flex align-items-center flex-wrap flex-sm-nowrap gap-2">
                            <div class="input-icon input-icon-start position-relative">
                                <span class="input-icon-addon addon-search text-dark"><i class="icon-search"></i></span>
                                <input
                                    type="text"
                                    class="form-control search-addon"
                                    placeholder="Search"
                                    v-model="searchQuery"
                                />
                            </div>
                            <div class="input-group position-relative w-fit">
                                <span class="input-icon-addon fs-16 text-gray-9">
                                    <i class="icon-calendar-fold"></i>
                                </span>
                                <input type="text" class="form-control date-range bookingrange rounded-end" ref="dateRangeInput">
                            </div>
                        </div>
                        <div class="d-flex align-items-center flex-wrap gap-2">

                            <!-- Filter -->
                            <a href="#" class="btn btn-white btn-icon" data-bs-toggle="offcanvas"
                                data-bs-target="#add_filter" aria-controls="add_filter"><i
                                    class="icon-funnel"></i></a>
                            <!-- column -->
                            <div class="dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-label="column">
                                    <i class="icon-columns-3"></i> Columns
                                </a>
                                <div class="dropdown-menu dropdown-menu-start dropdown-menu-md">
                                    <div>
                                        <draggable
                                            v-model="columns"
                                            @start="drag=true"
                                            @end="drag=false"
                                            item-key="key"
                                        >
                                            <div class="mb-3" v-for="element in columns" :key="element.key">
                                                <label class="d-flex align-items-center">
                                                    <i class="icon-grip-vertical me-2"></i>
                                                    <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                                    {{element.title}}
                                                </label>
                                            </div>
                                        </draggable>
                                    </div>
                                </div>
                            </div>

                            <!-- sort by -->
                            <div class="dropdown sortby-dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown">
                                    <i class="icon-arrow-down-wide-narrow"></i> Sort by
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Amount
                                                <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Amount
                                                <span>Low-High</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Export -->
                            <div class="gap-3 d-flex align-items-center flex-wrap">
                                <div class="dropdown">
                                    <a href="javascript:void(0);"
                                        class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                        data-bs-toggle="dropdown">
                                        <i class="icon-arrow-up-to-line"></i>Export
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded">Export as
                                                PDF</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded">Export as
                                                Excel</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">

                    <!-- start table -->
                    <div class="table-responsive table-nowrap">
                        <a-table
                            class="table mb-0 datatable"
                            :columns="columns"
                            :data-source="paginatedData"
                            :pagination="false"
                        >
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'SKU'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.SKU }}</a>
                                </template>
                                <template v-if="column.key === 'StockValue'">
                                    <span class="text-dark fw-medium">{{ record.StockValue }}</span>
                                </template>
                                <template v-if="column.key === 'ValuationMethod'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-purple': record.ValuationMethod === 'FIFO',
                                                'badge-soft-pink': record.ValuationMethod === 'FEFO',
                                                'bg-light text-dark': record.ValuationMethod === 'Average',
                                            },
                                        ]"
                                    >
                                        <i class="fa-solid fa-circle fs-5 me-1"></i>
                                        {{ record.ValuationMethod }}
                                    </span>
                                </template>
                            </template>
                        </a-table>

                        <BasePagination
                            :currentPage="currentPage"
                            :pageSize="pageSize"
                            :pageSizeOptions="pageSizeOptions"
                            :totalPages="totalPages"
                            :totalItems="filteredPages.length"
                            itemLabel="stock items"
                            @update:currentPage="onPageChange"
                            @update:pageSize="onPageSizeChange"
                        />
                    </div>
                    <!-- end table -->

                </div>
            </div>
            <!-- end card -->

        </div>
        <!-- End Content -->

        <!-- Start Footer -->
        <footer
            class="footer bg-white border-top px-4 py-2 d-flex align-items-center justify-content-between gap-2 flex-column flex-sm-row">
            <p class="text-dark mb-0">&copy; {{ new Date().getFullYear() }} <a href="#" class="link-primary">DreamsPOS</a>, All Rights
                Reserved</p>
            <div class="d-flex align-items-center gap-2 flex-wrap">
                <a href="#" class="link-body-emphasis">Docs</a>
                <span>/</span>
                <a href="#" class="link-body-emphasis">Support</a>
                <span>/</span>
                <a href="#" class="link-body-emphasis">License</a>
            </div>
        </footer>
        <!-- End Footer -->

    </div>

    <!-- ========================
        End Page Content
    ========================= -->

    <!-- start offcanvas -->
    <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="add_filter">
        <div class="offcanvas-header d-block border-0">
            <div class="d-flex align-items-center justify-content-between">
                <h4 class="title d-flex align-items-center gap-2 mb-0"> <span
                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i class="icon-funnel"></i></span>
                    Filter</h4>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
                        class="icon-x"></i></button>
            </div>
        </div>
        <div class="offcanvas-body pt-0">
            <div class="filter-sidebar">
                <div class="filter-body">

                    <!-- Price Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#stock-value"
                                    aria-expanded="false">
                                    Price
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="stock-value" class="card-collapse collapse show price-range">
                            <div>
                                <div id="price" class="card-collapse collapse show">
                                    <div>
                                        <div class="filter-range">
                                            <a-slider v-model:value="valueOne" range :step="10" @change="onChange" @afterChange="onAfterChange" />
                                            <p class="mb-0 text-body fs-14">Price : <span
                                                    class="text-dark fw-semibold">$200 - $5695</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Status Items -->
                    <div class="filter-item mb-0 pb-0 border-0">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#status"
                                    aria-expanded="false">
                                    Valuation Method
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="status" class="card-collapse collapse show">
                            <div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_37">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_37">
                                        <span class="badge badge-soft-purple d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>FIFO</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_38">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_38">
                                        <span class="badge badge-soft-pink d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> FEFO</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_39">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_39">
                                        <span class="badge bg-light d-inline-flex align-items-center text-dark"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Average </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="offcanvas-footer d-flex align-items-center justify-content-between gap-2 flex-wrap ">
            <a href="#" class="btn btn-light d-inline-flex align-items-center gap-2" data-bs-dismiss="offcanvas"><i
                    class="icon-x"></i>Cancel </a>
            <a href="#" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i class="icon-pocket"></i>
                Apply Filter </a>
        </div>
    </div>
    <!-- end offcanvas -->

</template>

<script>
import { ref } from 'vue';
const valueOne = ref([20, 50]);
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { all_routes } from '@/router/all_routes.js'

const data = [
    {
        "SKU": "#MED030",
        "BatchNo": "Batch-2026-011",
        "CurrentStock": "250",
        "PurchasePrice": "$20",
        "SalePrice": "$10",
        "StockValue": "$30",
        "ValuationMethod": "FIFO"
    },
    {
        "SKU": "#MED031",
        "BatchNo": "Batch-2026-012",
        "CurrentStock": "47",
        "PurchasePrice": "$90",
        "SalePrice": "$20",
        "StockValue": "$110",
        "ValuationMethod": "FEFO"
    },
    {
        "SKU": "#MED032",
        "BatchNo": "Batch-2026-013",
        "CurrentStock": "52",
        "PurchasePrice": "$13",
        "SalePrice": "$17",
        "StockValue": "$30",
        "ValuationMethod": "FIFO"
    },
    {
        "SKU": "#MED033",
        "BatchNo": "Batch-2026-014",
        "CurrentStock": "30",
        "PurchasePrice": "$24",
        "SalePrice": "$14",
        "StockValue": "$38",
        "ValuationMethod": "FEFO"
    },
    {
        "SKU": "#MED034",
        "BatchNo": "Batch-2026-015",
        "CurrentStock": "66",
        "PurchasePrice": "$26",
        "SalePrice": "$16",
        "StockValue": "$42",
        "ValuationMethod": "Average"
    },
    {
        "SKU": "#MED035",
        "BatchNo": "Batch-2026-016",
        "CurrentStock": "416",
        "PurchasePrice": "$42",
        "SalePrice": "$12",
        "StockValue": "$54",
        "ValuationMethod": "FIFO"
    },
    {
        "SKU": "#MED036",
        "BatchNo": "Batch-2026-017",
        "CurrentStock": "399",
        "PurchasePrice": "$57",
        "SalePrice": "$19",
        "StockValue": "$76",
        "ValuationMethod": "Average"
    },
    {
        "SKU": "#MED037",
        "BatchNo": "Batch-2026-018",
        "CurrentStock": "60",
        "PurchasePrice": "$26",
        "SalePrice": "$12",
        "StockValue": "$38",
        "ValuationMethod": "FEFO"
    },
    {
        "SKU": "#MED038",
        "BatchNo": "Batch-2026-019",
        "CurrentStock": "144",
        "PurchasePrice": "$19",
        "SalePrice": "$18",
        "StockValue": "$35",
        "ValuationMethod": "FIFO"
    },
    {
        "SKU": "#MED039",
        "BatchNo": "Batch-2026-020",
        "CurrentStock": "437",
        "PurchasePrice": "$72",
        "SalePrice": "$20",
        "StockValue": "$92",
        "ValuationMethod": "FEFO"
    }
]

const columns = [
    {
        title: "SKU",
        dataIndex: "SKU",
        key: "SKU",
        sorter: {
            compare: (a, b) => (a.SKU.toLowerCase() > b.SKU.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Batch No",
        dataIndex: "BatchNo",
        key: "BatchNo",
        sorter: {
            compare: (a, b) => (a.BatchNo.toLowerCase() > b.BatchNo.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Current Stock",
        dataIndex: "CurrentStock",
        key: "CurrentStock",
        sorter: {
            compare: (a, b) => (a.CurrentStock.toLowerCase() > b.CurrentStock.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Purchase Price",
        dataIndex: "PurchasePrice",
        key: "PurchasePrice",
        sorter: {
            compare: (a, b) => (a.PurchasePrice.toLowerCase() > b.PurchasePrice.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Sale Price",
        dataIndex: "SalePrice",
        key: "SalePrice",
        sorter: {
            compare: (a, b) => (a.SalePrice.toLowerCase() > b.SalePrice.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Stock Value",
        dataIndex: "StockValue",
        key: "StockValue",
        sorter: {
            compare: (a, b) => (a.StockValue.toLowerCase() > b.StockValue.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Valuation Method",
        dataIndex: "ValuationMethod",
        key: "ValuationMethod",
        sorter: {
            compare: (a, b) => (a.ValuationMethod.toLowerCase() > b.ValuationMethod.toLowerCase() ? -1 : 1),
        },
    },
]

export default {
    components: {
        BasePagination,
        draggable: VueDraggableNext,
    },
    data() {
        return {
            valueOne,
            all_routes,
            searchQuery: "",
            data,
            columns,
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 20, 50],
        }
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
        },
        onPageSizeChange(size) {
            this.pageSize = Number(size);
            this.currentPage = 1;
        },
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.SKU.toLowerCase().includes(query) ||
                    record.BatchNo.toLowerCase().includes(query) ||
                    record.CurrentStock.toLowerCase().includes(query) ||
                    record.PurchasePrice.toLowerCase().includes(query) ||
                    record.SalePrice.toLowerCase().includes(query) ||
                    record.StockValue.toLowerCase().includes(query) ||
                    record.ValuationMethod.toLowerCase().includes(query)
                );
            });
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.pageSize;
            return this.filteredPages.slice(start, start + this.pageSize);
        },
        totalPages() {
            return Math.ceil(this.filteredPages.length / this.pageSize) || 1;
        },
    },
    setup() {
        const dateRangeInput = ref(null);

        function booking_range(start, end) {
            return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
        }

        onMounted(() => {
            if (dateRangeInput.value) {
                const start = moment().subtract(6, "days");
                const end = moment();

                new DateRangePicker(
                dateRangeInput.value,
                    {
                        startDate: start,
                        endDate: end,
                        ranges: {
                        Today: [moment(), moment()],
                        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                        "Last 7 Days": [moment().subtract(6, "days"), moment()],
                        "Last 30 Days": [moment().subtract(29, "days"), moment()],
                        "This Month": [moment().startOf("month"), moment().endOf("month")],
                        "Last Month": [
                            moment().subtract(1, "month").startOf("month"),
                            moment().subtract(1, "month").endOf("month"),
                        ],
                        },
                    },
                    booking_range
                );

                booking_range(start, end);
            }
        });

        return {
            dateRangeInput,
        };
    },
}
</script>
