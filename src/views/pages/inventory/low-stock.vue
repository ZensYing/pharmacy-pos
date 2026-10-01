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
                        <li class="breadcrumb-item active" aria-current="page">Low Stock</li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                </div>
            </div>

            <!-- start card -->
            <div class="card">
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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Items
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Items
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Supplier
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Supplier
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Current
                                                Stock <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Current
                                                Stock <span>Low-High</span></a>
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
                                    <router-link :to="all_routes.editMedicines" class="text-info">{{ record.SKU }}</router-link>
                                </template>
                                <template v-if="column.key === 'Items'">
                                    <span class="fw-medium text-dark">{{ record.Items }}</span>
                                </template>
                                <template v-if="column.key === 'Category'">
                                    <span class="badge"
                                        :class="[
                                            {
                                                'badge-soft-orange': record.Category === 'Tablet',
                                                'badge-soft-pink': record.Category === 'Syrup',
                                                'badge-soft-cyan': record.Category === 'Oinment',
                                                'badge-soft-purple': record.Category === 'Injection',
                                            },
                                        ]"
                                    >{{ record.Category }}</span>
                                </template>
                                <template v-if="column.key === 'Supplier'">
                                    <div class="d-flex align-items-center fw-medium text-dark">
                                        <span class="avatar avatar-xs rounded-circle me-2">
                                            <img :src="getImageUrlOne(record.SupplierImage)" alt="user" class="rounded-circle">
                                        </span>
                                        {{ record.Supplier }}
                                    </div>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-danger': record.Status === 'Critical',
                                                'badge-soft-warning': record.Status === 'Low stock',
                                            },
                                        ]"
                                    >
                                        <i class="fa-solid fa-circle fs-5 me-1"></i>
                                        {{ record.Status }}
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
                            itemLabel="items"
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

    <low-stock-modal></low-stock-modal>

</template>

<script>
import { ref } from "vue";
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
        "SKU": "#TAB016",
        "Items": "Paracetamol 500",
        "Category": "Tablet",
        "CurrentStock": "20",
        "MinimumStockLevel": "200",
        "ReorderQuantity": "180",
        "SupplierImage": "supplier-img-1.jpg",
        "Supplier": "MedLife Distributors",
        "Status": "Critical"
    },
    {
        "SKU": "#TAB015",
        "Items": "Amoxicillin 250",
        "Category": "Tablet",
        "CurrentStock": "200",
        "MinimumStockLevel": "300",
        "ReorderQuantity": "100",
        "SupplierImage": "supplier-img-2.jpg",
        "Supplier": "HealthCare Pharma",
        "Status": "Low stock"
    },
    {
        "SKU": "#SYR014",
        "Items": "Cetirizine",
        "Category": "Syrup",
        "CurrentStock": "40",
        "MinimumStockLevel": "100",
        "ReorderQuantity": "60",
        "SupplierImage": "supplier-img-3.jpg",
        "Supplier": "GreenCross Medicals",
        "Status": "Low stock"
    },
    {
        "SKU": "#TAB013",
        "Items": "Ceftriaxone 20",
        "Category": "Tablet",
        "CurrentStock": "120",
        "MinimumStockLevel": "200",
        "ReorderQuantity": "80",
        "SupplierImage": "supplier-img-4.jpg",
        "Supplier": "NovaCure Pharma",
        "Status": "Low stock"
    },
    {
        "SKU": "#CRE012",
        "Items": "Betnovate",
        "Category": "Oinment",
        "CurrentStock": "60",
        "MinimumStockLevel": "100",
        "ReorderQuantity": "40",
        "SupplierImage": "supplier-img-5.jpg",
        "Supplier": "CareWell Agency",
        "Status": "Low stock"
    },
    {
        "SKU": "#TAB011",
        "Items": "Amoxicillin 30",
        "Category": "Tablet",
        "CurrentStock": "310",
        "MinimumStockLevel": "400",
        "ReorderQuantity": "90",
        "SupplierImage": "supplier-img-6.jpg",
        "Supplier": "Zenith Distributors",
        "Status": "Low stock"
    },
    {
        "SKU": "#INJ010",
        "Items": "Tetanus Toxoid",
        "Category": "Injection",
        "CurrentStock": "250",
        "MinimumStockLevel": "300",
        "ReorderQuantity": "50",
        "SupplierImage": "supplier-img-7.jpg",
        "Supplier": "LifeLine Pharma",
        "Status": "Critical"
    },
    {
        "SKU": "#SYR009",
        "Items": "Atorvastatin",
        "Category": "Syrup",
        "CurrentStock": "35",
        "MinimumStockLevel": "100",
        "ReorderQuantity": "65",
        "SupplierImage": "supplier-img-8.jpg",
        "Supplier": "SafeMeds Distribution",
        "Status": "Low stock"
    },
    {
        "SKU": "#TAB008",
        "Items": "Metformin 100",
        "Category": "Tablet",
        "CurrentStock": "150",
        "MinimumStockLevel": "200",
        "ReorderQuantity": "50",
        "SupplierImage": "supplier-img-9.jpg",
        "Supplier": "NovaHealth Pharma",
        "Status": "Low stock"
    },
    {
        "SKU": "#INJ007",
        "Items": "Ondansetron",
        "Category": "Injection",
        "CurrentStock": "120",
        "MinimumStockLevel": "200",
        "ReorderQuantity": "80",
        "SupplierImage": "supplier-img-10.jpg",
        "Supplier": "PrimeCare Pharma",
        "Status": "Low stock"
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
        title: "Items",
        dataIndex: "Items",
        key: "Items",
        sorter: {
            compare: (a, b) => (a.Items.toLowerCase() > b.Items.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Category",
        dataIndex: "Category",
        key: "Category",
        sorter: {
            compare: (a, b) => (a.Category.toLowerCase() > b.Category.toLowerCase() ? -1 : 1),
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
        title: "Minimum Stock Level",
        dataIndex: "MinimumStockLevel",
        key: "MinimumStockLevel",
        sorter: {
            compare: (a, b) => (a.MinimumStockLevel.toLowerCase() > b.MinimumStockLevel.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Reorder Quantity",
        dataIndex: "ReorderQuantity",
        key: "ReorderQuantity",
        sorter: {
            compare: (a, b) => (a.ReorderQuantity.toLowerCase() > b.ReorderQuantity.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Supplier",
        dataIndex: "Supplier",
        key: "Supplier",
        sorter: {
            compare: (a, b) => (a.Supplier.toLowerCase() > b.Supplier.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        sorter: {
            compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
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
        getImageUrlOne(imageName) {
            return new URL(`/src/assets/img/supplier/${imageName}`, import.meta.url).href;
        },
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
                    record.Items.toLowerCase().includes(query) ||
                    record.Category.toLowerCase().includes(query) ||
                    record.CurrentStock.toLowerCase().includes(query) ||
                    record.MinimumStockLevel.toLowerCase().includes(query) ||
                    record.ReorderQuantity.toLowerCase().includes(query) ||
                    record.Supplier.toLowerCase().includes(query) ||
                    record.Status.toLowerCase().includes(query)
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

        // Move the function declaration outside of the onMounted callback
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
