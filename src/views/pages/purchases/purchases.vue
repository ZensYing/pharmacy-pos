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
                        <li class="breadcrumb-item active" aria-current="page">Purchase </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#add-modal"
                        class="btn btn-primary d-flex align-items-center gap-2"> <i class="icon-plus"></i> Add
                        New</a>
                </div>
            </div>

            <!-- start row -->
            <div class="row mb-4">
                <div class="col-xxl-3 col-lg-6 col-md-6 d-flex">
                    <div class="card rounded-4 flex-fill bg-primary-gradient border-0">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <span class="avatar avatar-lg bg-white rounded-circle flex-shrink-0 text-primary">
                                    <i class="icon-shopping-bag fs-20"></i>
                                </span>
                                <span
                                    class="badge bg-white bg-opacity-10 text-white px-2 d-flex align-items-center gap-1 border-0 fs-12 rounded-pill"><i
                                        class="icon-arrow-up-right fs-12"></i>+12.5%
                                </span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <span class="d-block mb-3 text-white fw-medium">Total Purchases</span>
                                    <h2 class="text-white mb-0">1,284</h2>
                                    <span class="text-white fs-12">Since last week</span>
                                </div>
                                <div>
                                    <img :src="getImageUrl('purchase-icon1.svg')" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-lg-6 col-md-6 d-flex">
                    <div class="card rounded-4 flex-fill bg-white">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <span
                                    class="avatar avatar-lg bg-primary-gradient rounded-circle flex-shrink-0 text-white">
                                    <i class="icon-dollar-sign fs-20"></i>
                                </span>
                                <span
                                    class="badge bg-danger text-white px-2 d-flex align-items-center gap-1 border-0 fs-12 rounded-pill"><i
                                        class="icon-arrow-up-right fs-12"></i>+14.5%
                                </span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <span class="d-block mb-3 text-dark fw-medium">Total Amount</span>
                                    <h2 class="text-dark mb-0">$12,450</h2>
                                    <span class="text-dark fs-12">From Last Year</span>
                                </div>
                                <div>
                                    <img :src="getImageUrl('purchase-icon2.svg')" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- end col-->
                <div class="col-xxl-3 col-lg-6 col-md-6 d-flex">
                    <div class="card rounded-4 flex-fill bg-white">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <span
                                    class="avatar avatar-lg bg-primary-gradient rounded-circle flex-shrink-0 text-white">
                                    <i class="icon-timer-reset fs-20"></i>
                                </span>
                                <span
                                    class="badge bg-success text-white px-2 d-flex align-items-center gap-1 border-0 fs-12 rounded-pill"><i
                                        class="icon-arrow-up-right fs-12"></i>+19.7%
                                </span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <span class="d-block mb-3 text-dark fw-medium">Pending Payments</span>
                                    <h2 class="text-dark mb-0">1,450</h2>
                                    <span class="text-dark fs-12">Requires attention</span>
                                </div>
                                <div>
                                    <img :src="getImageUrl('purchase-icon3.svg')" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- end col-->
                <div class="col-xxl-3 col-lg-6 col-md-6 d-flex">
                    <div class="card rounded-4 flex-fill bg-white">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <span
                                    class="avatar avatar-lg bg-primary-gradient rounded-circle flex-shrink-0 text-white">
                                    <i class="icon-users-round fs-20"></i>
                                </span>
                                <span
                                    class="badge bg-danger text-white px-2 d-flex align-items-center gap-1 border-0 fs-12 rounded-pill"><i
                                        class="icon-arrow-up-right fs-12"></i>+14.5%
                                </span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <span class="d-block mb-3 text-dark fw-medium">Vendors</span>
                                    <h2 class="text-dark mb-0">134</h2>
                                    <span class="text-dark fs-12">Processed this month</span>
                                </div>
                                <div>
                                    <img :src="getImageUrl('purchase-icon4.svg')" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- end col-->
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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Vendor Name
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Vendor Name
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Date - Ascending
                                                <span>1-9</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Date - Ascending
                                                <span>9-1</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Total Amount
                                                <span>Low-High</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Total Amount
                                                <span>High-Low</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- import -->
                            <a href="javascript:void(0);" class="btn btn-white">
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
                                <template v-if="column.key === 'PurchaseId'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.PurchaseId }}</a>
                                </template>
                                <template v-if="column.key === 'Vendor'">
                                    <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <span class="avatar avatar-sm rounded-circle fs-12">
                                            <img :src="getImageUrlOne(record.VendorImage)" alt="vendor" class="rounded-circle">
                                        </span>
                                        <a href="javascript:void(0);">{{ record.Vendor }}</a>
                                    </h4>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-success': record.Status === 'Paid',
                                                'badge-soft-danger': record.Status === 'Pending',
                                                'badge-soft-warning': record.Status === 'Partially Paid',
                                            },
                                        ]"
                                    >
                                        <i class="fa-solid fa-circle fs-5 me-1"></i>
                                        {{ record.Status }}
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
                                                        data-bs-target="#pay-now-modal"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-dollar-sign me-2"></i>Pay Now</a>
                                                </li>
                                                <li>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#edit-modal"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-pencil-line me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center text-danger"
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"  @click="setDelete(record)"><i
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
                            itemLabel="purchases"
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

    <purchases-modal></purchases-modal>

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
        "PurchaseId": "#PUR016",
        "VendorImage": "supplier-img-1.jpg",
        "Vendor": "MedLife Distributors",
        "PurchaseDate": "28 Jan 2026",
        "TotalAmount": "$120",
        "PaidAmount": "$120",
        "DueAmount": "-",
        "Status": "Paid"
    },
    {
        "PurchaseId": "#PUR015",
        "VendorImage": "supplier-img-2.jpg",
        "Vendor": "HealthCare Pharma",
        "PurchaseDate": "15 Feb 2026",
        "TotalAmount": "$520",
        "PaidAmount": "$20",
        "DueAmount": "$520",
        "Status": "Pending"
    },
    {
        "PurchaseId": "#PUR014",
        "VendorImage": "supplier-img-3.jpg",
        "Vendor": "GreenCross Medicals",
        "PurchaseDate": "10 Mar 2026",
        "TotalAmount": "$100",
        "PaidAmount": "$100",
        "DueAmount": "-",
        "Status": "Paid"
    },
    {
        "PurchaseId": "#PUR013",
        "VendorImage": "supplier-img-4.jpg",
        "Vendor": "NovaCure Pharma",
        "PurchaseDate": "14 Apr 2026",
        "TotalAmount": "$35",
        "PaidAmount": "$25",
        "DueAmount": "$15",
        "Status": "Partially Paid"
    },
    {
        "PurchaseId": "#PUR012",
        "VendorImage": "supplier-img-5.jpg",
        "Vendor": "CareWell Agency",
        "PurchaseDate": "30 May 2026",
        "TotalAmount": "$120",
        "PaidAmount": "$100",
        "DueAmount": "$20",
        "Status": "Partially Paid"
    },
    {
        "PurchaseId": "#PUR011",
        "VendorImage": "supplier-img-6.jpg",
        "Vendor": "Zenith Distributors",
        "PurchaseDate": "02 Jun 2026",
        "TotalAmount": "$25",
        "PaidAmount": "$25",
        "DueAmount": "$25",
        "Status": "Pending"
    },
    {
        "PurchaseId": "#PUR010",
        "VendorImage": "supplier-img-7.jpg",
        "Vendor": "LifeLine Pharma",
        "PurchaseDate": "07 Jul 2026",
        "TotalAmount": "$130",
        "PaidAmount": "$130",
        "DueAmount": "-",
        "Status": "Paid"
    },
    {
        "PurchaseId": "#PUR009",
        "VendorImage": "supplier-img-8.jpg",
        "Vendor": "SafeMeds Distribution",
        "PurchaseDate": "21 Aug 2026",
        "TotalAmount": "$180",
        "PaidAmount": "$180",
        "DueAmount": "$180",
        "Status": "Pending"
    },
    {
        "PurchaseId": "#PUR008",
        "VendorImage": "supplier-img-9.jpg",
        "Vendor": "NovaHealth Pharma",
        "PurchaseDate": "17 Nov 2026",
        "TotalAmount": "$60",
        "PaidAmount": "$30",
        "DueAmount": "$30",
        "Status": "Partially Paid"
    },
    {
        "PurchaseId": "#PUR007",
        "VendorImage": "supplier-img-10.jpg",
        "Vendor": "PrimeCare Pharma",
        "PurchaseDate": "10 Dec 2026",
        "TotalAmount": "$80",
        "PaidAmount": "$80",
        "DueAmount": "-",
        "Status": "Paid"
    }
]

const columns = [
    {
        title: "ID",
        dataIndex: "PurchaseId",
        key: "PurchaseId",
        sorter: {
            compare: (a, b) => (a.PurchaseId.toLowerCase() > b.PurchaseId.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Vendor",
        dataIndex: "Vendor",
        key: "Vendor",
        sorter: {
            compare: (a, b) => (a.Vendor.toLowerCase() > b.Vendor.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Purchase Date",
        dataIndex: "PurchaseDate",
        sorter: {
            compare: (a, b) => (a.PurchaseDate.toLowerCase() > b.PurchaseDate.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Total Amount",
        dataIndex: "TotalAmount",
        sorter: {
            compare: (a, b) => (a.TotalAmount.toLowerCase() > b.TotalAmount.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Paid Amount",
        dataIndex: "PaidAmount",
        sorter: {
            compare: (a, b) => (a.PaidAmount.toLowerCase() > b.PaidAmount.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Due Amount",
        dataIndex: "DueAmount",
        sorter: {
            compare: (a, b) => (a.DueAmount.toLowerCase() > b.DueAmount.toLowerCase() ? -1 : 1),
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
    {
        title: "Action",
        key: "action",
        sorter: false,
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
            itemToDelete: null,
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
        },
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
                    record.PurchaseId.toLowerCase().includes(query) ||
                    record.Vendor.toLowerCase().includes(query) ||
                    record.PurchaseDate.toLowerCase().includes(query) ||
                    record.TotalAmount.toLowerCase().includes(query) ||
                    record.PaidAmount.toLowerCase().includes(query) ||
                    record.DueAmount.toLowerCase().includes(query) ||
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
