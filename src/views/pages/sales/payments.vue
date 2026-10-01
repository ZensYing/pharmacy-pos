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
                        <li class="breadcrumb-item active" aria-current="page">Payments</li>
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

            <!-- Filter Bar -->
            <div class="card">
                <div class="card-body d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="d-inline-flex align-items-center flex-wrap gap-2">
                        <div class="input-icon input-icon-start position-relative">
                            <span class="input-icon-addon"><i class="icon-search"></i></span>
                            <input type="text" class="form-control" placeholder="Search Payment ID">
                        </div>
                        <div class="input-group position-relative w-fit">
                            <span class="input-icon-addon fs-16 text-gray-9">
                                <i class="icon-calendar-fold"></i>
                            </span>
                            <input type="text" class="form-control date-range bookingrange rounded-end" ref="dateRangeInput">
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                data-bs-toggle="dropdown">
                                <i class="icon-circle-dot-dashed"></i> All Status
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="javascript:void(0);" class="dropdown-item rounded">All Status</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded">Completed</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded">Paid</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded">Pending</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded">Failed</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                data-bs-toggle="dropdown">
                                <i class="icon-credit-card"></i> All Methods
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="javascript:void(0);" class="dropdown-item rounded">All Methods</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded">Cash</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded">Card</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded">UPI</a></li>
                            </ul>
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center gap-2"><i
                            class="icon-pocket"></i> Apply Filter</a>
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
                        </div>
                        <div class="d-flex align-items-center flex-wrap gap-2">

                            <!-- sort by -->
                            <div class="dropdown sortby-dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown">
                                    <i class="icon-arrow-down-wide-narrow"></i> Sort By
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Name
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Name
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Amount
                                                <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Amount
                                                <span>Low-High</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Export -->
                            <div class="dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown">
                                    <i class="icon-arrow-up-to-line"></i> Export
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
                                <template v-if="column.key === 'InvoiceNumber'">
                                    <a href="#" class="text-info">{{ record.InvoiceNumber }}</a>
                                </template>
                                <template v-if="column.key === 'Customer'">
                                    <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <a href="#" class="avatar avatar-sm rounded-circle fs-12"
                                            :class="[record.CustomerImage ? '' : [record.CustomerAvatarClass]]"
                                        >
                                            <img v-if="record.CustomerImage" :src="getImageUrl(record.CustomerImage)" class="rounded-circle">
                                            <template v-else>{{ record.CustomerInitials }}</template>
                                        </a>
                                        <a href="#">{{ record.Customer }}</a>
                                    </h4>
                                </template>
                                <template v-if="column.key === 'TransactionID'">
                                    <span class="badge bg-soft-info text-info border border-info border-dashed d-inline-flex align-items-center gap-2">
                                        {{ record.TransactionID }}
                                        <i class="icon-copy fs-12"></i>
                                    </span>
                                </template>
                                <template v-if="column.key === 'Amount'">
                                    <span class="text-dark fw-medium">{{ record.Amount }}</span>
                                </template>
                                <template v-if="column.key === 'PaymentMethod'">
                                    <span class="badge"
                                        :class="[
                                            {
                                                'badge-soft-danger': record.PaymentMethod === 'Cash',
                                                'badge-soft-orange': record.PaymentMethod === 'UPI',
                                                'badge-soft-info': record.PaymentMethod === 'Card',
                                            },
                                        ]"
                                    >{{ record.PaymentMethod }}</span>
                                </template>
                                <template v-if="column.key === 'LastTransaction'">
                                    {{ record.LastTransaction }}
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-success': record.Status === 'Completed',
                                                'badge-soft-purple': record.Status === 'Paid',
                                                'badge-soft-warning': record.Status === 'Pending',
                                                'badge-soft-danger': record.Status === 'Failed',
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
                                                        data-bs-target="#add_payment_modal"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-plus me-2"></i>Add Payment</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-file-output me-2"></i>Refund</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-pencil-line me-2"></i>Mark as Completed</a>
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

    <payments-modal></payments-modal>

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
        "InvoiceNumber": "#INV016",
        "Customer": "Andrew George",
        "CustomerAvatarClass": "bg-soft-orange border border-orange p-1",
        "CustomerInitials": "AG",
        "CustomerImage": "",
        "TransactionID": "#TRN12658999657",
        "Amount": "$12,000",
        "PaymentMethod": "Cash",
        "LastTransaction": "28 Jan 2026",
        "Status": "Completed",
    },
    {
        "InvoiceNumber": "#INV017",
        "Customer": "Anderson Claire",
        "CustomerAvatarClass": "",
        "CustomerInitials": "",
        "CustomerImage": "avatar-37.jpg",
        "TransactionID": "#TRN12658999660",
        "Amount": "$9,000",
        "PaymentMethod": "UPI",
        "LastTransaction": "15 Feb 2026",
        "Status": "Paid",
    },
    {
        "InvoiceNumber": "#INV018",
        "Customer": "Alex Smith",
        "CustomerAvatarClass": "bg-soft-teal border border-teal p-1",
        "CustomerInitials": "AS",
        "CustomerImage": "",
        "TransactionID": "#TRN12658999664",
        "Amount": "$4,200",
        "PaymentMethod": "Card",
        "LastTransaction": "10 Mar 2026",
        "Status": "Completed",
    },
    {
        "InvoiceNumber": "#INV019",
        "Customer": "Emily Johnson",
        "CustomerAvatarClass": "",
        "CustomerInitials": "",
        "CustomerImage": "avatar-39.jpg",
        "TransactionID": "#TRN12658999662",
        "Amount": "$7,200",
        "PaymentMethod": "Cash",
        "LastTransaction": "22 Apr 2026",
        "Status": "Completed",
    },
    {
        "InvoiceNumber": "#INV020",
        "Customer": "Michael Brown",
        "CustomerAvatarClass": "bg-soft-danger border border-danger p-1",
        "CustomerInitials": "MB",
        "CustomerImage": "",
        "TransactionID": "#TRN12658999665",
        "Amount": "$11,100",
        "PaymentMethod": "Card",
        "LastTransaction": "05 May 2026",
        "Status": "Pending",
    },
    {
        "InvoiceNumber": "#INV021",
        "Customer": "Sarah Wilson",
        "CustomerAvatarClass": "",
        "CustomerInitials": "",
        "CustomerImage": "avatar-32.jpg",
        "TransactionID": "#TRN12658999659",
        "Amount": "$3,100",
        "PaymentMethod": "Cash",
        "LastTransaction": "30 Jun 2026",
        "Status": "Completed",
    },
    {
        "InvoiceNumber": "#INV022",
        "Customer": "Michael Smith",
        "CustomerAvatarClass": "bg-soft-cyan border border-cyan p-1",
        "CustomerInitials": "MS",
        "CustomerImage": "",
        "TransactionID": "#TRN12658999661",
        "Amount": "$2,100",
        "PaymentMethod": "Card",
        "LastTransaction": "15 May 2026",
        "Status": "Completed",
    },
    {
        "InvoiceNumber": "#INV023",
        "Customer": "Ava Martinez",
        "CustomerAvatarClass": "",
        "CustomerInitials": "",
        "CustomerImage": "avatar-40.jpg",
        "TransactionID": "#TRN12658999663",
        "Amount": "$4,900",
        "PaymentMethod": "Card",
        "LastTransaction": "10 Jun 2026",
        "Status": "Failed",
    },
    {
        "InvoiceNumber": "#INV024",
        "Customer": "Liam Brown",
        "CustomerAvatarClass": "bg-soft-warning border border-warning p-1",
        "CustomerInitials": "LB",
        "CustomerImage": "",
        "TransactionID": "#TRN12658999666",
        "Amount": "$1,200",
        "PaymentMethod": "UPI",
        "LastTransaction": "30 Jun 2026",
        "Status": "Failed",
    },
    {
        "InvoiceNumber": "#INV025",
        "Customer": "Peter Brown",
        "CustomerAvatarClass": "bg-soft-info border border-info p-1",
        "CustomerInitials": "PB",
        "CustomerImage": "",
        "TransactionID": "#TRN12658999658",
        "Amount": "$1,400",
        "PaymentMethod": "Cash",
        "LastTransaction": "29 Jun 2026",
        "Status": "Failed",
    },
]

const columns = [
    {
        title: "Invoice Number",
        dataIndex: "InvoiceNumber",
        key: "InvoiceNumber",
        sorter: {
            compare: (a, b) => (a.InvoiceNumber.toLowerCase() > b.InvoiceNumber.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Customer",
        dataIndex: "Customer",
        key: "Customer",
        sorter: {
            compare: (a, b) => (a.Customer.toLowerCase() > b.Customer.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Transaction ID",
        dataIndex: "TransactionID",
        key: "TransactionID",
        sorter: {
            compare: (a, b) => (a.TransactionID.toLowerCase() > b.TransactionID.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Amount",
        dataIndex: "Amount",
        key: "Amount",
        sorter: {
            compare: (a, b) => (a.Amount.toLowerCase() > b.Amount.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Payment Method",
        dataIndex: "PaymentMethod",
        key: "PaymentMethod",
        sorter: {
            compare: (a, b) => (a.PaymentMethod.toLowerCase() > b.PaymentMethod.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Last Transaction",
        dataIndex: "LastTransaction",
        key: "LastTransaction",
        sorter: {
            compare: (a, b) => (a.LastTransaction.toLowerCase() > b.LastTransaction.toLowerCase() ? -1 : 1),
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
        title: "",
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
            return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
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
                    record.InvoiceNumber.toLowerCase().includes(query) ||
                    record.Customer.toLowerCase().includes(query) ||
                    record.TransactionID.toLowerCase().includes(query) ||
                    record.Amount.toLowerCase().includes(query) ||
                    record.PaymentMethod.toLowerCase().includes(query) ||
                    record.LastTransaction.toLowerCase().includes(query) ||
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
