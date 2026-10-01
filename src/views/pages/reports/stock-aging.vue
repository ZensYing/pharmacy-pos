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
                        <li class="breadcrumb-item active" aria-current="page">Stock Aging </li>
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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Medicine Name
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Medicine Name
                                                <span>Z-A</span></a>
                                        </li>
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
                                <template v-if="column.key === 'AgingBucket'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-success': record.AgingBucket === '0-30 Days',
                                                'badge-soft-warning': record.AgingBucket === '31-60 Days',
                                                'badge-soft-danger': record.AgingBucket === '61+ Days',
                                            },
                                        ]"
                                    >
                                        <i class="fa-solid fa-circle fs-5 me-1"></i>
                                        {{ record.AgingBucket }}
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

                    <!-- Item 1 -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#medicine"
                                    aria-expanded="false">
                                    Medicine
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="medicine" class="card-collapse collapse show">
                            <div>
                                <div class="input-icon input-icon-start position-relative mb-3">
                                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_01">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_01">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-1.svg" alt="icon"></span> Paracetamol
                                        500
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_02">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_02">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-2.svg" alt="icon"></span>Amoxicillin
                                        250
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_03">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_03">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-3.svg" alt="icon"></span>Cetirizine
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_04">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_04">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-4.svg" alt="icon"></span>Ceftriaxone
                                        20
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_05">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_05">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-5.svg" alt="icon"></span>Betnovate
                                    </label>
                                </div>
                                <div class="more-menu1">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_06">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_06">
                                            <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                    src="@/assets/img/icons/tablet-icon-6.svg"
                                                    alt="icon"></span>Amoxicillin 30
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_07">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_07">
                                            <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                    src="@/assets/img/icons/tablet-icon-7.svg" alt="icon"></span>Tetanus
                                            Toxoid
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_08">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_08">
                                            <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                    src="@/assets/img/icons/tablet-icon-8.svg"
                                                    alt="icon"></span>Atorvastatin
                                        </label>
                                    </div>
                                </div>
                                <div class="view-all mt-3">
                                    <a href="#" class="viewall1-button text-primary font-medium">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Price Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#stock-value"
                                    aria-expanded="false">
                                    Stock Value
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
                                    Aging Bucket
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
                                        <span class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> 0-30 Days</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_38">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_38">
                                        <span class="badge badge-soft-warning d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> 31-60 Days</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_39">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_39">
                                        <span class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> 61+ Days</span>
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
        "MedicineName": "Paracetamol 500mg",
        "PurchaseDate": "28 Jan 2026",
        "ExpiryDate": "28 Jan 2027",
        "CurrentStock": "250",
        "StockValue": "$30",
        "AgingDays": "10",
        "AgingBucket": "0-30 Days"
    },
    {
        "SKU": "#MED031",
        "BatchNo": "Batch-2026-012",
        "MedicineName": "Amoxicillin 250mg",
        "PurchaseDate": "15 Feb 2026",
        "ExpiryDate": "15 Feb 2027",
        "CurrentStock": "47",
        "StockValue": "$110",
        "AgingDays": "12",
        "AgingBucket": "0-30 Days"
    },
    {
        "SKU": "#MED032",
        "BatchNo": "Batch-2026-013",
        "MedicineName": "Cetirizine 10mg",
        "PurchaseDate": "10 Mar 2026",
        "ExpiryDate": "10 Mar 2027",
        "CurrentStock": "52",
        "StockValue": "$30",
        "AgingDays": "40",
        "AgingBucket": "31-60 Days"
    },
    {
        "SKU": "#MED033",
        "BatchNo": "Batch-2026-014",
        "MedicineName": "Vitamin D3",
        "PurchaseDate": "14 Apr 2026",
        "ExpiryDate": "14 Apr 2027",
        "CurrentStock": "30",
        "StockValue": "$38",
        "AgingDays": "125",
        "AgingBucket": "61+ Days"
    },
    {
        "SKU": "#MED034",
        "BatchNo": "Batch-2026-015",
        "MedicineName": "Ibuprofen 400mg",
        "PurchaseDate": "30 May 2026",
        "ExpiryDate": "30 May 2027",
        "CurrentStock": "66",
        "StockValue": "$42",
        "AgingDays": "16",
        "AgingBucket": "0-30 Days"
    },
    {
        "SKU": "#MED035",
        "BatchNo": "Batch-2026-016",
        "MedicineName": "Metformin 500mg",
        "PurchaseDate": "02 Jun 2026",
        "ExpiryDate": "02 Jun 2027",
        "CurrentStock": "416",
        "StockValue": "$54",
        "AgingDays": "33",
        "AgingBucket": "31-60 Days"
    },
    {
        "SKU": "#MED036",
        "BatchNo": "Batch-2026-017",
        "MedicineName": "Azithromycin 500mg",
        "PurchaseDate": "07 Jul 2026",
        "ExpiryDate": "07 Jul 2027",
        "CurrentStock": "399",
        "StockValue": "$76",
        "AgingDays": "87",
        "AgingBucket": "61+ Days"
    },
    {
        "SKU": "#MED037",
        "BatchNo": "Batch-2026-018",
        "MedicineName": "Metformin 500mg",
        "PurchaseDate": "21 Aug 2026",
        "ExpiryDate": "21 Aug 2027",
        "CurrentStock": "60",
        "StockValue": "$38",
        "AgingDays": "99",
        "AgingBucket": "61+ Days"
    },
    {
        "SKU": "#MED038",
        "BatchNo": "Batch-2026-019",
        "MedicineName": "Metformin 500mg",
        "PurchaseDate": "17 Nov 2026",
        "ExpiryDate": "17 Nov 2027",
        "CurrentStock": "144",
        "StockValue": "$35",
        "AgingDays": "7",
        "AgingBucket": "0-30 Days"
    },
    {
        "SKU": "#MED039",
        "BatchNo": "Batch-2026-020",
        "MedicineName": "Cetirizine 10mg",
        "PurchaseDate": "10 Dec 2026",
        "ExpiryDate": "10 Dec 2027",
        "CurrentStock": "437",
        "StockValue": "$92",
        "AgingDays": "56",
        "AgingBucket": "31-60 Days"
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
        title: "Medicine Name",
        dataIndex: "MedicineName",
        key: "MedicineName",
        sorter: {
            compare: (a, b) => (a.MedicineName.toLowerCase() > b.MedicineName.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Purchase Date",
        dataIndex: "PurchaseDate",
        key: "PurchaseDate",
        sorter: {
            compare: (a, b) => (a.PurchaseDate.toLowerCase() > b.PurchaseDate.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Expiry Date",
        dataIndex: "ExpiryDate",
        key: "ExpiryDate",
        sorter: {
            compare: (a, b) => (a.ExpiryDate.toLowerCase() > b.ExpiryDate.toLowerCase() ? -1 : 1),
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
        title: "Stock Value",
        dataIndex: "StockValue",
        key: "StockValue",
        sorter: {
            compare: (a, b) => (a.StockValue.toLowerCase() > b.StockValue.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Aging Days",
        dataIndex: "AgingDays",
        key: "AgingDays",
        sorter: {
            compare: (a, b) => (a.AgingDays.toLowerCase() > b.AgingDays.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Aging Bucket",
        dataIndex: "AgingBucket",
        key: "AgingBucket",
        sorter: {
            compare: (a, b) => (a.AgingBucket.toLowerCase() > b.AgingBucket.toLowerCase() ? -1 : 1),
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
                    record.MedicineName.toLowerCase().includes(query) ||
                    record.PurchaseDate.toLowerCase().includes(query) ||
                    record.ExpiryDate.toLowerCase().includes(query) ||
                    record.CurrentStock.toLowerCase().includes(query) ||
                    record.StockValue.toLowerCase().includes(query) ||
                    record.AgingDays.toLowerCase().includes(query) ||
                    record.AgingBucket.toLowerCase().includes(query)
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
