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
                        <li class="breadcrumb-item active" aria-current="page">Vendors </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="d-flex align-items-center shadow p-1 rounded-pill border bg-white view-icons">
                        <router-link :to="all_routes.vendors" class="btn btn-sm btn-icon p-1 border-0 fs-14"><i
                                class="icon-grid-2x2"></i></router-link>
                        <router-link :to="all_routes.vendorsList"
                            class="flex-shrink-0 btn btn-primary active btn-sm btn-icon border-0 ms-1 fs-14"><i
                                class="icon-list-todo"></i></router-link>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#add_vendor"
                        class="btn btn-primary d-flex align-items-center gap-2"> <i class="icon-plus"></i> Add
                        New</a>
                </div>
            </div>

            <!-- start row -->
            <div class="row row-gap-3 mb-4">
                <!-- Item 1 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <div>
                                    <h3 class="fs-14 fw-bold mb-1">Total Vendors</h3>
                                    <p class="mb-0">Since last Month</p>
                                </div>
                                <span class="bg-white rounded-pill py-1 px-3 fs-20"> <i
                                        class="icon-users-round text-primary"></i></span>
                            </div>
                            <h4 class="d-flex align-items-center gap-2 text-primary mb-0">1,284 <span
                                    class="badge bg-success d-flex align-items-center gap-2 fs-10 lh-sm">4.2% <i
                                        class="icon-arrow-up-right"></i></span></h4>
                        </div>
                        <img src="@/assets/img/bg/vendor-bg-1.png" alt="vendor"
                            class="img-fluid position-absolute bottom-0 left-0 w-100">
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <div>
                                    <h3 class="fs-14 fw-bold mb-1">Active Vendors</h3>
                                    <p class="mb-0">Since last week</p>
                                </div>
                                <span class="bg-white rounded-pill py-1 px-3 fs-20"> <i
                                        class="icon-user-check text-warning"></i></span>
                            </div>
                            <h4 class="d-flex align-items-center gap-2 text-danger mb-0">100 <span
                                    class="badge bg-danger d-flex align-items-center gap-2 fs-10 lh-sm">4.2% <i
                                        class="icon-arrow-down-right"></i></span></h4>
                        </div>
                        <img src="@/assets/img/bg/vendor-bg-2.png" alt="vendor"
                            class="img-fluid position-absolute bottom-0 left-0 w-100">
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <div>
                                    <h3 class="fs-14 fw-bold mb-1">Inactive Vendors</h3>
                                    <p class="mb-0">Since last week</p>
                                </div>
                                <span class="bg-white rounded-pill py-1 px-3 fs-20"> <i
                                        class="icon-user-x text-info"></i></span>
                            </div>
                            <h4 class="d-flex align-items-center gap-2 text-info mb-0">236 <span
                                    class="badge bg-success d-flex align-items-center gap-2 fs-10 lh-sm">12.2% <i
                                        class="icon-arrow-up-right"></i></span></h4>
                        </div>
                        <img src="@/assets/img/bg/vendor-bg-3.png" alt="vendor"
                            class="img-fluid position-absolute bottom-0 left-0 w-100">
                    </div>
                </div>
                <!-- Item 4 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <div>
                                    <h3 class="fs-14 fw-bold mb-1">Top Vendor</h3>
                                    <p class="mb-0">From Last Week</p>
                                </div>
                                <span class="bg-white rounded-pill py-1 px-3 fs-20"> <i
                                        class="icon-trending-up text-warning"></i></span>
                            </div>
                            <h4 class="d-flex align-items-center gap-2 text-warning mb-0">Apex Agency <span
                                    class="badge bg-danger d-flex align-items-center gap-2 fs-10 lh-sm">4.2% <i
                                        class="icon-arrow-down-right"></i></span></h4>
                        </div>
                        <img src="@/assets/img/bg/vendor-bg-4.png" alt="vendor"
                            class="img-fluid position-absolute bottom-0 left-0 w-100">
                    </div>
                </div>
            </div>
            <!-- end row -->

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
                                    <ul class="list-unstyled mb-0">
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />ID</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Supplier</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Contact Person</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Total Purchase</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Outstanding</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Refund Status</span>
                                            </label>
                                        </li>
                                    </ul>
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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Vendor
                                                Name <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Vendor
                                                Name <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Date
                                                - Ascending <span>1-9</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Date
                                                - Descending <span>9-1</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Total
                                                Purchase <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Total
                                                Purchase <span>Low-High</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- import -->
                            <a href="javascript:void(0);" class="btn btn-white shadow">
                                <i class="icon-import me-2"></i>Import
                            </a>
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
                                <template v-if="column.key === 'ID'">
                                    <router-link :to="all_routes.vendorsList" class="text-info">{{ record.ID }}</router-link>
                                </template>
                                <template v-if="column.key === 'Supplier'">
                                    <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <span class="avatar avatar-xs">
                                            <img :src="getImageUrl(record.Image)" alt="supplier" class="rounded-circle">
                                        </span>
                                        {{ record.Supplier }}
                                    </h4>
                                </template>
                                <template v-if="column.key === 'ContactPerson'">
                                    {{ record.ContactPerson }}
                                </template>
                                <template v-if="column.key === 'TotalPurchase'">
                                    {{ record.TotalPurchase }}
                                </template>
                                <template v-if="column.key === 'Outstanding'">
                                    {{ record.Outstanding }}
                                </template>
                                <template v-if="column.key === 'RefundStatus'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-success': record.RefundStatus === 'Active',
                                                'badge-soft-danger': record.RefundStatus === 'Inactive',
                                            },
                                        ]"
                                    >
                                        <i class="fa-solid fa-circle fs-5 me-1"></i>
                                        {{ record.RefundStatus }}
                                    </span>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <div class="text-end">
                                        <div class="action-item">
                                            <button class="btn btn-icon" type="button" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#edit_vendor"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-pencil-line me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center text-danger"
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal" @click="setDelete(record)"><i
                                                            class="icon-trash-2 me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </template>
                            </template>
                        </a-table>

                        <BasePagination
                            :currentPage="currentPage"
                            :pageSize="pageSize"
                            :pageSizeOptions="pageSizeOptions"
                            :totalPages="totalPages"
                            :totalItems="filteredPages.length"
                            itemLabel="vendors"
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

    <!-- Start Delete Modal -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="avatar avatar-xl rounded-circle bg-soft-danger mb-3">
                        <i class="icon-trash-2"></i>
                    </span>
                    <h4 class="mb-2">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light d-flex align-items-center" data-bs-dismiss="modal"><i
                                class="icon-x me-1"></i> Cancel</a>
                        <a href="#" class="btn btn-danger d-flex align-items-center" data-bs-dismiss="modal" @click="deleteItem"><i
                                class="icon-trash-2 me-1"></i>Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal -->

    <vendors-list-modal></vendors-list-modal>

</template>

<script>
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

import BasePagination from '@/components/BasePagination.vue';
import { all_routes } from '@/router/all_routes.js'

const data = [
    {
        "ID": "#VND299",
        "Image": "supplier-img-1.jpg",
        "Supplier": "MedLife Distributors",
        "ContactPerson": "INV001",
        "TotalPurchase": "$120,897",
        "Outstanding": "-",
        "RefundStatus": "Active"
    },
    {
        "ID": "#VND291",
        "Image": "supplier-img-2.jpg",
        "Supplier": "HealthCare Pharma",
        "ContactPerson": "INV002",
        "TotalPurchase": "$20,000",
        "Outstanding": "$20",
        "RefundStatus": "Inactive"
    },
    {
        "ID": "#VND292",
        "Image": "supplier-img-3.jpg",
        "Supplier": "GreenCross Medicals",
        "ContactPerson": "INV003",
        "TotalPurchase": "$100,004",
        "Outstanding": "-",
        "RefundStatus": "Active"
    },
    {
        "ID": "#VND294",
        "Image": "supplier-img-4.jpg",
        "Supplier": "NovaCure Pharma",
        "ContactPerson": "INV004",
        "TotalPurchase": "$350,876",
        "Outstanding": "$15",
        "RefundStatus": "Active"
    },
    {
        "ID": "#VND295",
        "Image": "supplier-img-5.jpg",
        "Supplier": "CareWell Agency",
        "ContactPerson": "INV005",
        "TotalPurchase": "$12,000",
        "Outstanding": "$20",
        "RefundStatus": "Active"
    },
    {
        "ID": "#VND296",
        "Image": "supplier-img-6.jpg",
        "Supplier": "Zenith Distributors",
        "ContactPerson": "INV006",
        "TotalPurchase": "$25,872",
        "Outstanding": "$25",
        "RefundStatus": "Inactive"
    },
    {
        "ID": "#VND297",
        "Image": "supplier-img-7.jpg",
        "Supplier": "LifeLine Pharma",
        "ContactPerson": "INV007",
        "TotalPurchase": "$130,232",
        "Outstanding": "-",
        "RefundStatus": "Active"
    },
    {
        "ID": "#VND298",
        "Image": "supplier-img-8.jpg",
        "Supplier": "SafeMeds Distribution",
        "ContactPerson": "INV008",
        "TotalPurchase": "$182,000",
        "Outstanding": "$180",
        "RefundStatus": "Inactive"
    },
    {
        "ID": "#VND210",
        "Image": "supplier-img-9.jpg",
        "Supplier": "NovaHealth Pharma",
        "ContactPerson": "INV009",
        "TotalPurchase": "$60,000",
        "Outstanding": "$30",
        "RefundStatus": "Active"
    },
    {
        "ID": "#VND219",
        "Image": "supplier-img-10.jpg",
        "Supplier": "PrimeCare Pharma",
        "ContactPerson": "INV010",
        "TotalPurchase": "$800,654",
        "Outstanding": "-",
        "RefundStatus": "Active"
    }
]

const columns = [
    {
        title: "ID",
        dataIndex: "ID",
        key: "ID",
        sorter: {
            compare: (a, b) => (a.ID.toLowerCase() > b.ID.toLowerCase() ? -1 : 1),
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
        title: "Contact Person",
        dataIndex: "ContactPerson",
        key: "ContactPerson",
        sorter: {
            compare: (a, b) => (a.ContactPerson.toLowerCase() > b.ContactPerson.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Total Purchase",
        dataIndex: "TotalPurchase",
        key: "TotalPurchase",
        sorter: {
            compare: (a, b) => (a.TotalPurchase.toLowerCase() > b.TotalPurchase.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Outstanding",
        dataIndex: "Outstanding",
        key: "Outstanding",
        sorter: {
            compare: (a, b) => (a.Outstanding.toLowerCase() > b.Outstanding.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Refund Status",
        dataIndex: "RefundStatus",
        key: "RefundStatus",
        sorter: false,
    },
    {
        title: "Action",
        key: "action",
        sorter: false,
    },
]

export default {
    components: {
        BasePagination,
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
            itemToDelete: null,
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/supplier/${imageName}`, import.meta.url).href;
        },
        getBgUrl(imageName) {
            return new URL(`/src/assets/img/bg/${imageName}`, import.meta.url).href;
        },
        onPageChange(page) {
            this.currentPage = page;
        },
        onPageSizeChange(size) {
            this.pageSize = Number(size);
            this.currentPage = 1;
        },
        setDelete(record) {
            this.itemToDelete = record;
        },
        deleteItem() {
            if (this.itemToDelete) {
                this.data = this.data.filter(item => item !== this.itemToDelete);
                this.itemToDelete = null;
            }
        },
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.ID.toLowerCase().includes(query) ||
                    record.Supplier.toLowerCase().includes(query) ||
                    record.ContactPerson.toLowerCase().includes(query) ||
                    record.TotalPurchase.toLowerCase().includes(query) ||
                    record.Outstanding.toLowerCase().includes(query) ||
                    record.RefundStatus.toLowerCase().includes(query)
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
