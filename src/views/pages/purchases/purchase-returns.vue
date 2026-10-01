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
                        <li class="breadcrumb-item active" aria-current="page">Purchase Returns </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <router-link :to="all_routes.addPurchaseReturns" class="btn btn-primary d-flex align-items-center gap-2"> <i
                            class="icon-plus"></i> Add New</router-link>
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
                                    <ul class="list-unstyled mb-0">
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Vendor</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Invoice No</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Date</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Amount</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Balance</span>
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
                                                Name
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Vendor
                                                Name
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Date
                                                - Ascending
                                                <span>1-9</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Date
                                                - Descending
                                                <span>9-1</span></a>
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
                                <template v-if="column.key === 'ID'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.ID }}</a>
                                </template>
                                <template v-if="column.key === 'Vendor'">
                                    <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <span class="avatar avatar-xs rounded-circle fs-12">
                                            <img :src="getImageUrl(record.VendorImage)" class="rounded-circle" alt="img">
                                        </span>
                                        <a href="javascript:void(0);">{{ record.Vendor }}</a>
                                    </h4>
                                </template>
                                <template v-if="column.key === 'Amount'">
                                    <span class="text-dark fw-medium">{{ record.Amount }}</span>
                                </template>
                                <template v-if="column.key === 'RefundStatus'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-primary': record.RefundStatus === 'Refunded',
                                                'badge-soft-warning': record.RefundStatus === 'Pending',
                                                'badge-soft-info': record.RefundStatus === 'Partially Paid',
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
                                                    <router-link :to="all_routes.editPurchaseReturns"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-pencil-line me-2"></i>Edit</router-link>
                                                </li>
                                                <li>
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_modal"
                                                        class="dropdown-item rounded d-flex align-items-center text-danger"
                                                        @click="setDelete(record)"><i
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
                            itemLabel="purchase returns"
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

    <purchases-returns-modal></purchases-returns-modal>

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
        ID: "#PRS016",
        VendorImage: "supplier-img-1.jpg",
        Vendor: "MedLife Distributors",
        InvoiceNo: "INV001",
        Date: "28 Jan 2026",
        Amount: "$120",
        Balance: "-",
        RefundStatus: "Refunded",
    },
    {
        ID: "#PRS016",
        VendorImage: "supplier-img-2.jpg",
        Vendor: "HealthCare Pharma",
        InvoiceNo: "INV002",
        Date: "15 Feb 2026",
        Amount: "$20",
        Balance: "$20",
        RefundStatus: "Pending",
    },
    {
        ID: "#PRS016",
        VendorImage: "supplier-img-3.jpg",
        Vendor: "GreenCross Medicals",
        InvoiceNo: "INV003",
        Date: "10 Mar 2026",
        Amount: "$100",
        Balance: "-",
        RefundStatus: "Refunded",
    },
    {
        ID: "#PRS016",
        VendorImage: "supplier-img-4.jpg",
        Vendor: "NovaCure Pharma",
        InvoiceNo: "INV004",
        Date: "14 Apr 2026",
        Amount: "$35",
        Balance: "$15",
        RefundStatus: "Partially Paid",
    },
    {
        ID: "#PRS016",
        VendorImage: "supplier-img-5.jpg",
        Vendor: "CareWell Agency",
        InvoiceNo: "INV005",
        Date: "30 May 2026",
        Amount: "$120",
        Balance: "$20",
        RefundStatus: "Partially Paid",
    },
    {
        ID: "#PRS016",
        VendorImage: "supplier-img-6.jpg",
        Vendor: "Zenith Distributors",
        InvoiceNo: "INV006",
        Date: "02 Jun 2026",
        Amount: "$25",
        Balance: "$25",
        RefundStatus: "Pending",
    },
    {
        ID: "#PRS016",
        VendorImage: "supplier-img-7.jpg",
        Vendor: "LifeLine Pharma",
        InvoiceNo: "INV007",
        Date: "07 Jul 2026",
        Amount: "$130",
        Balance: "-",
        RefundStatus: "Refunded",
    },
    {
        ID: "#PRS016",
        VendorImage: "supplier-img-8.jpg",
        Vendor: "SafeMeds Distribution",
        InvoiceNo: "INV008",
        Date: "21 Aug 2026",
        Amount: "$180",
        Balance: "$180",
        RefundStatus: "Pending",
    },
    {
        ID: "#PRS016",
        VendorImage: "supplier-img-9.jpg",
        Vendor: "NovaHealth Pharma",
        InvoiceNo: "INV009",
        Date: "17 Nov 2026",
        Amount: "$60",
        Balance: "$30",
        RefundStatus: "Partially Paid",
    },
    {
        ID: "#PRS016",
        VendorImage: "supplier-img-10.jpg",
        Vendor: "PrimeCare Pharma",
        InvoiceNo: "INV010",
        Date: "10 Dec 2026",
        Amount: "$80",
        Balance: "-",
        RefundStatus: "Refunded",
    },
]

const columns = [
    { title: "ID", dataIndex: "ID", key: "ID" },
    { title: "Vendor", dataIndex: "Vendor", key: "Vendor" },
    { title: "Invoice No", dataIndex: "InvoiceNo", key: "InvoiceNo" },
    { title: "Date", dataIndex: "Date", key: "Date" },
    { title: "Amount", dataIndex: "Amount", key: "Amount" },
    { title: "Balance", dataIndex: "Balance", key: "Balance" },
    { title: "Refund Status", dataIndex: "RefundStatus", key: "RefundStatus" },
    { title: "Action", key: "action", sorter: false },
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
                    record.Vendor.toLowerCase().includes(query) ||
                    record.InvoiceNo.toLowerCase().includes(query) ||
                    record.Date.toLowerCase().includes(query) ||
                    record.Amount.toLowerCase().includes(query) ||
                    record.Balance.toLowerCase().includes(query) ||
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
