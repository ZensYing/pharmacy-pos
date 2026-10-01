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
                        <li class="breadcrumb-item active" aria-current="page">Vendor Payments </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <span class="badge badge-soft-success d-inline-flex align-items-center rounded"> <i
                            class="fa-solid fa-circle fs-8 me-1"></i> Last Updated: 20 Min Ago</span>
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
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <div class="input-icon input-icon-start position-relative">
                                <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Search Vendor Payments"
                                    v-model="searchQuery"
                                />
                            </div>
                            <div class="input-group position-relative w-fit">
                                <span class="input-icon-addon fs-16 text-gray-9">
                                    <i class="icon-calendar-fold"></i>
                                </span>
                                <input type="text" class="form-control date-range bookingrange rounded-end" ref="dateRangeInput">
                            </div>
                            <!-- Status -->
                            <div class="dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-label="column">
                                    <i class="icon-circle-dot-dashed"></i> All Status
                                </a>
                                <div class="dropdown-menu dropdown-menu-start dropdown-menu-md">
                                    <ul class="list-unstyled mb-0">
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                            class="fa-solid fa-circle fs-5 me-1"></i>
                                                        Paid</span></span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-info d-inline-flex align-items-center"><i
                                                            class="fa-solid fa-circle fs-5 me-1"></i> Partially
                                                        paid</span></span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                            class="fa-solid fa-circle fs-5 me-1"></i>
                                                        Overdue</span></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- All Methods -->
                            <div class="dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-label="column">
                                    <i class="icon-credit-card"></i> All Methods
                                </a>
                                <div class="dropdown-menu dropdown-menu-start dropdown-menu-md">
                                    <ul class="list-unstyled mb-0">
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-success d-inline-flex align-items-center">
                                                        Cash</span></span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-orange d-inline-flex align-items-center">
                                                        Card</span></span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-cyan d-inline-flex align-items-center">
                                                        UPI</span></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary d-flex align-items-center gap-2"><i
                                class="icon-pocket"></i>Apply Filter</a>
                    </div>
                </div>
            </div>
            <!-- end card -->

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
                        </div>
                        <div class="d-flex align-items-center flex-wrap gap-2">

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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">
                                                Name <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">
                                                Name <span>Z-A</span></a>
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
                                <template v-if="column.key === 'ID'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.ID }}</a>
                                </template>
                                <template v-if="column.key === 'Supplier'">
                                    <a href="javascript:void(0);" class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <span class="avatar avatar-xs">
                                            <img :src="getImageUrl(record.SupplierImage)" alt="user" class="rounded-circle">
                                        </span>
                                        {{ record.Supplier }}
                                    </a>
                                </template>
                                <template v-if="column.key === 'PaymentType'">
                                    {{ record.PaymentType }}
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-success': record.Status === 'Paid',
                                                'badge-soft-info': record.Status === 'Partially Paid',
                                                'badge-soft-danger': record.Status === 'Overdue',
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
                                                    <a href="javascript:void(0);"
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
                            itemLabel="payments"
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
        "ID": "#VPS016",
        "SupplierImage": "supplier-img-1.jpg",
        "Supplier": "MedLife Distributors",
        "InvoiceNo": "INV001",
        "Date": "28 Jan 2026",
        "PaymentType": "Card",
        "Paid": "$120",
        "Outstanding": "-",
        "Status": "Paid"
    },
    {
        "ID": "#VPS017",
        "SupplierImage": "supplier-img-2.jpg",
        "Supplier": "HealthCare Pharma",
        "InvoiceNo": "INV002",
        "Date": "15 Feb 2026",
        "PaymentType": "UPI",
        "Paid": "$20",
        "Outstanding": "$20",
        "Status": "Overdue"
    },
    {
        "ID": "#VPS018",
        "SupplierImage": "supplier-img-3.jpg",
        "Supplier": "GreenCross Medicals",
        "InvoiceNo": "INV003",
        "Date": "10 Mar 2026",
        "PaymentType": "Card",
        "Paid": "$100",
        "Outstanding": "-",
        "Status": "Paid"
    },
    {
        "ID": "#VPS019",
        "SupplierImage": "supplier-img-4.jpg",
        "Supplier": "NovaCure Pharma",
        "InvoiceNo": "INV004",
        "Date": "14 Apr 2026",
        "PaymentType": "Cash",
        "Paid": "$35",
        "Outstanding": "$15",
        "Status": "Partially Paid"
    },
    {
        "ID": "#VPS020",
        "SupplierImage": "supplier-img-5.jpg",
        "Supplier": "CareWell Agency",
        "InvoiceNo": "INV005",
        "Date": "30 May 2026",
        "PaymentType": "Card",
        "Paid": "$120",
        "Outstanding": "$20",
        "Status": "Partially Paid"
    },
    {
        "ID": "#VPS021",
        "SupplierImage": "supplier-img-6.jpg",
        "Supplier": "Zenith Distributors",
        "InvoiceNo": "INV006",
        "Date": "02 Jun 2026",
        "PaymentType": "UPI",
        "Paid": "$25",
        "Outstanding": "$25",
        "Status": "Overdue"
    },
    {
        "ID": "#VPS022",
        "SupplierImage": "supplier-img-7.jpg",
        "Supplier": "LifeLine Pharma",
        "InvoiceNo": "INV007",
        "Date": "07 Jul 2026",
        "PaymentType": "Card",
        "Paid": "$130",
        "Outstanding": "-",
        "Status": "Paid"
    },
    {
        "ID": "#VPS023",
        "SupplierImage": "supplier-img-8.jpg",
        "Supplier": "SafeMeds Distribution",
        "InvoiceNo": "INV008",
        "Date": "21 Aug 2026",
        "PaymentType": "UPI",
        "Paid": "$180",
        "Outstanding": "$180",
        "Status": "Overdue"
    },
    {
        "ID": "#VPS024",
        "SupplierImage": "supplier-img-9.jpg",
        "Supplier": "NovaHealth Pharma",
        "InvoiceNo": "INV009",
        "Date": "17 Nov 2026",
        "PaymentType": "Cash",
        "Paid": "$60",
        "Outstanding": "$30",
        "Status": "Partially Paid"
    },
    {
        "ID": "#VPS025",
        "SupplierImage": "supplier-img-10.jpg",
        "Supplier": "PrimeCare Pharma",
        "InvoiceNo": "INV010",
        "Date": "10 Dec 2026",
        "PaymentType": "Card",
        "Paid": "$80",
        "Outstanding": "-",
        "Status": "Paid"
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
        title: "Invoice No",
        dataIndex: "InvoiceNo",
        key: "InvoiceNo",
        sorter: {
            compare: (a, b) => (a.InvoiceNo.toLowerCase() > b.InvoiceNo.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Date",
        dataIndex: "Date",
        key: "Date",
        sorter: {
            compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Payment Type",
        dataIndex: "PaymentType",
        key: "PaymentType",
        sorter: {
            compare: (a, b) => (a.PaymentType.toLowerCase() > b.PaymentType.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Paid",
        dataIndex: "Paid",
        key: "Paid",
        sorter: {
            compare: (a, b) => (a.Paid.toLowerCase() > b.Paid.toLowerCase() ? -1 : 1),
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
                    record.Supplier.toLowerCase().includes(query) ||
                    record.InvoiceNo.toLowerCase().includes(query) ||
                    record.Date.toLowerCase().includes(query) ||
                    record.PaymentType.toLowerCase().includes(query) ||
                    record.Paid.toLowerCase().includes(query) ||
                    record.Outstanding.toLowerCase().includes(query) ||
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
