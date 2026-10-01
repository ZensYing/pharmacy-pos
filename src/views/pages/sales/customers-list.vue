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
                        <li class="breadcrumb-item active" aria-current="page">Customers </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="d-flex align-items-center shadow p-1 rounded-pill border bg-white view-icons">
                        <router-link :to="all_routes.customers" class="btn btn-sm btn-icon p-1 border-0 fs-14"><i
                                class="icon-grid-2x2"></i></router-link>
                        <router-link :to="all_routes.customersList"
                            class="flex-shrink-0 btn btn-primary active btn-sm btn-icon border-0 ms-1 fs-14"><i
                                class="icon-list-todo"></i></router-link>
                    </div>
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
            <div class="row row-gap-4 mb-4">
                <div class="col-xxl-3 col-lg-6 col-md-6">
                    <div class="card mb-0 overflow-hidden">
                        <img src="@/assets/img/icons/shape-01.png" alt="img"
                            class="position-absolute top-0 start-0 h-100">
                        <img src="@/assets/img/icons/shape-02.png" alt="img"
                            class="position-absolute top-0 end-0 h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <span class="avatar avatar-lg rounded-3 bg-white flex-shrink-0">
                                    <img src="@/assets/img/icons/customer-1.svg" alt="img" class="w-auto h-auto">
                                </span>
                                <div>
                                    <span class="d-block mb-1 fw-bold text-dark">All Customers</span>
                                    <span class="fs-12 text-start">Total Customers Overview</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2 flex-wrap fs-13">
                                <span class="fs-18 text-dark me-1 fw-bold">2730</span>
                                <span
                                    class="badge badge-soft-success px-2 text-success d-flex align-items-center gap-1 border-0 fs-10 rounded-pill">2%
                                    <i class="icon-arrow-up-right fs-12"></i></span>
                                Since Last Month
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-xxl-3 col-lg-6 col-md-6">
                    <div class="card mb-0 overflow-hidden">
                        <img src="@/assets/img/icons/shape-03.png" alt="img"
                            class="position-absolute top-0 start-0 h-100">
                        <img src="@/assets/img/icons/shape-04.png" alt="img"
                            class="position-absolute top-0 end-0 h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <span class="avatar avatar-lg rounded-3 bg-white flex-shrink-0">
                                    <img src="@/assets/img/icons/customer-2.svg" alt="img" class="w-auto h-auto">
                                </span>
                                <div>
                                    <span class="d-block mb-1 fw-bold text-dark">Membership Customers</span>
                                    <span class="fs-12 text-start">Customer on Memberships</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2 flex-wrap fs-13">
                                <span class="fs-18 text-dark me-1 fw-bold">45</span>
                                <span
                                    class="badge badge-soft-success px-2 text-success d-flex align-items-center gap-1 border-0 fs-10 rounded-pill">4.2%
                                    <i class="icon-arrow-up-right fs-12"></i></span>
                                Since Last Month
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-xxl-3 col-lg-6 col-md-6">
                    <div class="card mb-0 overflow-hidden">
                        <img src="@/assets/img/icons/shape-05.png" alt="img"
                            class="position-absolute top-0 start-0 h-100">
                        <img src="@/assets/img/icons/shape-06.png" alt="img"
                            class="position-absolute top-0 end-0 h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <span class="avatar avatar-lg rounded-3 bg-white flex-shrink-0">
                                    <img src="@/assets/img/icons/customer-3.svg" alt="img" class="w-auto h-auto">
                                </span>
                                <div>
                                    <span class="d-block mb-1 fw-bold text-dark">New Customers</span>
                                    <span class="fs-12 text-start">New Customers Pharmacy</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2 flex-wrap fs-13">
                                <span class="fs-18 text-dark me-1 fw-bold">336</span>
                                <span
                                    class="badge badge-soft-danger px-2 text-danger d-flex align-items-center gap-1 border-0 fs-10 rounded-pill">9.6%
                                    <i class="icon-arrow-down-right fs-12"></i></span>
                                Since Last Month
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-xxl-3 col-lg-6 col-md-6">
                    <div class="card mb-0 overflow-hidden">
                        <img src="@/assets/img/icons/shape-07.png" alt="img"
                            class="position-absolute top-0 start-0 h-100">
                        <img src="@/assets/img/icons/shape-08.png" alt="img"
                            class="position-absolute top-0 end-0 h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <span class="avatar avatar-lg rounded-3 bg-white flex-shrink-0">
                                    <img src="@/assets/img/icons/customer-4.svg" alt="img" class="w-auto h-auto">
                                </span>
                                <div>
                                    <span class="d-block mb-1 fw-bold text-dark">Returning Customers</span>
                                    <span class="fs-12 text-start">Overview Return Customers</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2 flex-wrap fs-13">
                                <span class="fs-18 text-dark me-1 fw-bold">695</span>
                                <span
                                    class="badge badge-soft-success px-2 text-success d-flex align-items-center gap-1 border-0 fs-10 rounded-pill">2%
                                    <i class="icon-arrow-up-right fs-12"></i></span>
                                Since Last Month
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
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
                                                        checked />Customer</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Email</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Phone</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Orders</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Sales</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Status</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Last Purchase</span>
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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Name
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Price
                                                <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Price
                                                <span>Low-High</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Stock
                                                <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Stock
                                                <span>Low-High</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Expiry
                                                <span>Near Expiry-Valid</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Expiry
                                                <span>Valid-Near Expiry</span></a>
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
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#edit-modal"
                                        class="text-info">{{ record.ID }}</a>
                                </template>
                                <template v-if="column.key === 'Name'">
                                    <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <a v-if="record.Image" href="#"
                                            class="avatar avatar-sm rounded-circle fs-12">
                                            <img :src="getImageUrl(record.Image)" class="rounded-circle" alt="img">
                                        </a>
                                        <a v-else href="#"
                                            :class="['avatar', 'avatar-sm', 'rounded-circle', record.AvatarBg, record.AvatarBorder, 'p-1', 'fs-12']">{{ record.Initials }}</a>
                                        <a href="#">{{ record.Name }}</a>
                                    </h4>
                                </template>
                                <template v-if="column.key === 'Orders'">
                                    <span class="text-dark fw-medium">{{ record.Orders }}</span>
                                </template>
                                <template v-if="column.key === 'Sales'">
                                    <span class="text-dark fw-medium">${{ record.Sales.toLocaleString() }}</span>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-success': record.Status === 'Active',
                                                'badge-soft-danger': record.Status === 'Inactive',
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
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-eye me-2"></i>View Details</a>
                                                </li>
                                                <li>
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#edit-modal"
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
                            itemLabel="customers"
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

    <customers-modal></customers-modal>

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
import CustomersModal from '@/components/modal/customers-modal.vue';

const data = [
    {
        "ID": "#CUS016",
        "Name": "Andrew George",
        "Initials": "AG",
        "Image": "",
        "AvatarBg": "bg-soft-orange",
        "AvatarBorder": "border border-orange",
        "Phone": "+1 56589 54547",
        "Email": "jackde@example.com",
        "Orders": 569,
        "Sales": 500,
        "Status": "Active",
        "LastPurchase": "28 Jan 2026"
    },
    {
        "ID": "#CUS017",
        "Name": "Andrew George",
        "Initials": "AG",
        "Image": "avatar-37.jpg",
        "AvatarBg": "bg-soft-orange",
        "AvatarBorder": "border border-orange",
        "Phone": "+1 56589 54547",
        "Email": "jackde@example.com",
        "Orders": 569,
        "Sales": 500,
        "Status": "Active",
        "LastPurchase": "28 Jan 2026"
    },
    {
        "ID": "#CUS018",
        "Name": "Alex Smith",
        "Initials": "AS",
        "Image": "",
        "AvatarBg": "bg-soft-teal",
        "AvatarBorder": "border border-teal",
        "Phone": "+1 98765 43210",
        "Email": "alexsmith@example.com",
        "Orders": 310,
        "Sales": 4500,
        "Status": "Active",
        "LastPurchase": "10 Mar 2026"
    },
    {
        "ID": "#CUS019",
        "Name": "Emily Johnson",
        "Initials": "EJ",
        "Image": "avatar-39.jpg",
        "AvatarBg": "bg-soft-orange",
        "AvatarBorder": "border border-orange",
        "Phone": "+1 12345 67890",
        "Email": "emilyj@example.com",
        "Orders": 400,
        "Sales": 7600,
        "Status": "Inactive",
        "LastPurchase": "22 Apr 2026"
    },
    {
        "ID": "#CUS020",
        "Name": "Michael Brown",
        "Initials": "MB",
        "Image": "",
        "AvatarBg": "bg-soft-info",
        "AvatarBorder": "border border-info",
        "Phone": "+1 45678 90123",
        "Email": "michaelb@example.com",
        "Orders": 256,
        "Sales": 5120,
        "Status": "Active",
        "LastPurchase": "05 Feb 2026"
    },
    {
        "ID": "#CUS021",
        "Name": "Sophia Turner",
        "Initials": "ST",
        "Image": "",
        "AvatarBg": "bg-soft-danger",
        "AvatarBorder": "border border-danger",
        "Phone": "+1 65432 10987",
        "Email": "sophiat@example.com",
        "Orders": 198,
        "Sales": 2450,
        "Status": "Active",
        "LastPurchase": "18 Feb 2026"
    },
    {
        "ID": "#CUS022",
        "Name": "David Lee",
        "Initials": "DL",
        "Image": "",
        "AvatarBg": "bg-soft-success",
        "AvatarBorder": "border border-success",
        "Phone": "+1 78901 23456",
        "Email": "davidlee@example.com",
        "Orders": 175,
        "Sales": 1980,
        "Status": "Inactive",
        "LastPurchase": "01 Mar 2026"
    },
    {
        "ID": "#CUS023",
        "Name": "Olivia Martin",
        "Initials": "OM",
        "Image": "",
        "AvatarBg": "bg-soft-orange",
        "AvatarBorder": "border border-orange",
        "Phone": "+1 89012 34567",
        "Email": "oliviam@example.com",
        "Orders": 412,
        "Sales": 4870,
        "Status": "Active",
        "LastPurchase": "12 Mar 2026"
    },
    {
        "ID": "#CUS024",
        "Name": "James Wilson",
        "Initials": "JW",
        "Image": "",
        "AvatarBg": "bg-soft-teal",
        "AvatarBorder": "border border-teal",
        "Phone": "+1 90123 45678",
        "Email": "jamesw@example.com",
        "Orders": 320,
        "Sales": 3650,
        "Status": "Active",
        "LastPurchase": "25 Mar 2026"
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
        title: "Customer",
        dataIndex: "Name",
        key: "Name",
        sorter: {
            compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Email",
        dataIndex: "Email",
        sorter: {
            compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Phone",
        dataIndex: "Phone",
        sorter: {
            compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Orders",
        dataIndex: "Orders",
        key: "Orders",
        sorter: {
            compare: (a, b) => a.Orders - b.Orders,
        },
    },
    {
        title: "Sales",
        dataIndex: "Sales",
        key: "Sales",
        sorter: {
            compare: (a, b) => a.Sales - b.Sales,
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
        title: "Last Purchase",
        dataIndex: "LastPurchase",
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
        'customers-modal': CustomersModal,
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
                    record.ID.toLowerCase().includes(query) ||
                    record.Name.toLowerCase().includes(query) ||
                    record.Email.toLowerCase().includes(query) ||
                    record.Phone.toLowerCase().includes(query) ||
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
