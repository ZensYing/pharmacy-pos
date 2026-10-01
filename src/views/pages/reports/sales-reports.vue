<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content pb-0">

            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><router-link :to="all_routes.dashboard"> <span><i class="icon-house"></i></span>
                                Dashboard</router-link></li>
                        <li class="breadcrumb-item">Reports</li>
                        <li class="breadcrumb-item active" aria-current="page">Sales</li>
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

            <div class="row">

                <div class="col-sm-6 col-xl-3 d-flex">
                    <div class="card overflow-hidden z-1 flex-fill">
                        <div class="card-body d-flex align-items-center">
                            <div class="avatar bg-primary me-3 flex-shrink-0 rotate-n45 rounded-0">
                                <i class="icon-dollar-sign fs-20 rotate-45"></i>
                            </div>
                            <div>
                                <p class="mb-1">Total Sales</p>
                                <div class="d-flex align-items-center flex-wrap gap-1">
                                    <p class="main-title fw-bold mb-0 text-dark">$9,700</p>
                                    <span class="badge bg-light text-primary d-flex align-items-center gap-1">
                                        10.9% <i class="icon-arrow-up-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/shape-01.png" alt="bg" class="position-absolute start-0 top-0 z-n1">
                        <img src="@/assets/img/bg/shape-02.png" alt="bg" class="position-absolute end-0 top-0 z-n1">
                    </div>
                </div> <!-- end col -->

                <div class="col-sm-6 col-xl-3 d-flex">
                    <div class="card overflow-hidden z-1 flex-fill">
                        <div class="card-body d-flex align-items-center">
                            <div class="avatar bg-secondary me-3 flex-shrink-0 rotate-n45 rounded-0">
                                <i class="icon-circle-dollar-sign fs-20 rotate-45"></i>
                            </div>
                            <div>
                                <p class="mb-1">Total Tax</p>
                                <div class="d-flex align-items-center flex-wrap gap-1">
                                    <p class="main-title fw-bold mb-0 text-dark">13,786</p>
                                    <span class="badge bg-light text-secondary d-flex align-items-center gap-1">
                                        12.7% <i class="icon-arrow-up-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/shape-03.png" alt="bg" class="position-absolute start-0 top-0 z-n1">
                        <img src="@/assets/img/bg/shape-04.png" alt="bg" class="position-absolute end-0 top-0 z-n1">
                    </div>

                </div> <!-- end col -->

                <div class="col-sm-6 col-xl-3 d-flex">
                    <div class="card overflow-hidden z-1 flex-fill">
                        <div class="card-body d-flex align-items-center">
                            <div class="avatar bg-primary me-3 flex-shrink-0 rotate-n45 rounded-0">
                                <i class="icon-chart-no-axes-combined fs-20 rotate-45"></i>
                            </div>
                            <div>
                                <p class="mb-1">Net Revenue</p>
                                <div class="d-flex align-items-center flex-wrap gap-1">
                                    <p class="main-title fw-bold mb-0 text-dark">$14,700</p>
                                    <span class="badge bg-light text-primary d-flex align-items-center gap-1">
                                        12.9% <i class="icon-arrow-up-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/shape-01.png" alt="bg" class="position-absolute start-0 top-0 z-n1">
                        <img src="@/assets/img/bg/shape-02.png" alt="bg" class="position-absolute end-0 top-0 z-n1">
                    </div>

                </div> <!-- end col -->

                <div class="col-sm-6 col-xl-3 d-flex">
                    <div class="card overflow-hidden z-1 flex-fill">
                        <div class="card-body d-flex align-items-center">
                            <div class="avatar bg-secondary me-3 flex-shrink-0 rotate-n45 rounded-0">
                                <i class="icon-baggage-claim fs-20 rotate-45"></i>
                            </div>
                            <div>
                                <p class="mb-1">Sales Count</p>
                                <div class="d-flex align-items-center flex-wrap gap-1">
                                    <p class="main-title fw-bold mb-0 text-dark">11,433</p>
                                    <span class="badge bg-light text-secondary d-flex align-items-center gap-1">
                                        19.7% <i class="icon-arrow-up-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/shape-03.png" alt="bg" class="position-absolute start-0 top-0 z-n1">
                        <img src="@/assets/img/bg/shape-04.png" alt="bg" class="position-absolute end-0 top-0 z-n1">
                    </div>

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
                                    <ul class="list-unstyled mb-0">
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked>Date</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked>Branch</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked>Customer Name</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked>Sales Amount</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked>Tax</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked>Net Revenue</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked>Status</span>
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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Customer
                                                Name <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Customer
                                                Name <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Net
                                                Revenue <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Net
                                                Revenue <span>Low-High</span></a>
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
                                <template v-if="column.key === 'InvoiceNo'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.InvoiceNo }}</a>
                                </template>
                                <template v-if="column.key === 'CustomerName'">
                                    <a href="javascript:void(0);" class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <span class="avatar avatar-sm">
                                            <img :src="getImageUrl(record.CustomerImage)" alt="user" class="rounded-circle">
                                        </span>
                                        {{ record.CustomerName }}
                                    </a>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-primary': record.Status === 'Paid',
                                                'badge-soft-secondary': record.Status === 'Pending',
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
                            itemLabel="sales"
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
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#customer"
                                    aria-expanded="false">
                                    Customer
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="customer" class="card-collapse collapse show">
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
                                        <span
                                            class="avatar avatar-xs bg-soft-orange border border-orange rounded-circle p-1">AG</span>
                                        Andrew George
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_02">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_02">
                                        <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                src="@/assets/img/profiles/avatar-37.jpg" alt="icon"
                                                class="rounded-circle"></span>Anderson Claire
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_03">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_03">
                                        <span
                                            class="avatar avatar-xs bg-soft-teal border border-teal rounded-circle p-1">AS</span>Alex
                                        Smith
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_04">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_04">
                                        <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                src="@/assets/img/profiles/avatar-39.jpg" alt="icon"
                                                class="rounded-circle"></span>Emily Johnson
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_05">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_05">
                                        <span
                                            class="avatar avatar-xs bg-soft-danger border border-danger rounded-circle p-1">MB</span>Michael
                                        Brown
                                    </label>
                                </div>
                                <div class="more-menu1">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_06">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_06">
                                            <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                    src="@/assets/img/profiles/avatar-32.jpg" alt="icon"
                                                    class="rounded-circle"></span>Sarah Wilson
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_07">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_07">
                                            <span
                                                class="avatar avatar-xs bg-soft-cyan border border-cyan rounded-circle p-1">MS</span>Michael
                                            Smith
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_08">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_08">
                                            <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                    src="@/assets/img/profiles/avatar-40.jpg" alt="icon"
                                                    class="rounded-circle"></span>Ava Martinez
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
                                    Sales
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
                                    Refund Status
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
                                        <span class="badge badge-soft-primary d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Paid</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_38">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_38">
                                        <span class="badge badge-soft-secondary d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Pending</span>
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
            <a href="#" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i class="icon-pocket"></i>Apply
                Filter </a>
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
import { all_routes } from '@/router/all_routes.js'

const data = [
    {
        "InvoiceNo": "#INV055",
        "Date": "28 Jan 2026",
        "Branch": "Downtown Branch",
        "CustomerImage": "avatar-01.jpg",
        "CustomerName": "Jane Cooper",
        "SalesAmount": "$120",
        "Tax": "18%",
        "NetRevenue": "$1200",
        "Status": "Paid"
    },
    {
        "InvoiceNo": "#INV056",
        "Date": "15 Feb 2026",
        "Branch": "Central Branch",
        "CustomerImage": "avatar-02.jpg",
        "CustomerName": "Wade Warren",
        "SalesAmount": "$20",
        "Tax": "24%",
        "NetRevenue": "$2143",
        "Status": "Pending"
    },
    {
        "InvoiceNo": "#INV057",
        "Date": "10 Mar 2026",
        "Branch": "West Loop Branch",
        "CustomerImage": "avatar-03.jpg",
        "CustomerName": "Cameron Williamson",
        "SalesAmount": "$100",
        "Tax": "18%",
        "NetRevenue": "$1300",
        "Status": "Paid"
    },
    {
        "InvoiceNo": "#INV058",
        "Date": "14 Apr 2026",
        "Branch": "Medical Center Branch",
        "CustomerImage": "avatar-04.jpg",
        "CustomerName": "Brooklyn Simmons",
        "SalesAmount": "$35",
        "Tax": "24%",
        "NetRevenue": "$3795",
        "Status": "Pending"
    },
    {
        "InvoiceNo": "#INV059",
        "Date": "30 May 2026",
        "Branch": "Midtown Branch",
        "CustomerImage": "avatar-05.jpg",
        "CustomerName": "Leslie Alexander",
        "SalesAmount": "$120",
        "Tax": "16%",
        "NetRevenue": "$12040",
        "Status": "Pending"
    },
    {
        "InvoiceNo": "#INV060",
        "Date": "02 Jun 2026",
        "Branch": "Uptown Branch",
        "CustomerImage": "avatar-06.jpg",
        "CustomerName": "Robert Fox",
        "SalesAmount": "$25",
        "Tax": "24%",
        "NetRevenue": "$2235",
        "Status": "Pending"
    },
    {
        "InvoiceNo": "#INV061",
        "Date": "07 Jul 2026",
        "Branch": "Downtown Branch",
        "CustomerImage": "avatar-07.jpg",
        "CustomerName": "Micheal John",
        "SalesAmount": "$130",
        "Tax": "18%",
        "NetRevenue": "$15330",
        "Status": "Paid"
    },
    {
        "InvoiceNo": "#INV062",
        "Date": "21 Aug 2026",
        "Branch": "Buckhead Branch",
        "CustomerImage": "avatar-08.jpg",
        "CustomerName": "Darlene Robertson",
        "SalesAmount": "$180",
        "Tax": "16%",
        "NetRevenue": "$18340",
        "Status": "Pending"
    },
    {
        "InvoiceNo": "#INV063",
        "Date": "17 Nov 2026",
        "Branch": "Capitol Hill Branch",
        "CustomerImage": "avatar-09.jpg",
        "CustomerName": "Dianne Russell",
        "SalesAmount": "$60",
        "Tax": "16%",
        "NetRevenue": "$86460",
        "Status": "Paid"
    },
    {
        "InvoiceNo": "#INV064",
        "Date": "10 Dec 2026",
        "Branch": "Central Branch",
        "CustomerImage": "avatar-10.jpg",
        "CustomerName": "Devon Lane",
        "SalesAmount": "$80",
        "Tax": "16%",
        "NetRevenue": "$87650",
        "Status": "Paid"
    }
]

const columns = [
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
        sorter: {
            compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Branch",
        dataIndex: "Branch",
        sorter: {
            compare: (a, b) => (a.Branch.toLowerCase() > b.Branch.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Customer Name",
        dataIndex: "CustomerName",
        key: "CustomerName",
        sorter: {
            compare: (a, b) => (a.CustomerName.toLowerCase() > b.CustomerName.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Sales Amount",
        dataIndex: "SalesAmount",
        sorter: {
            compare: (a, b) => (a.SalesAmount.toLowerCase() > b.SalesAmount.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Tax",
        dataIndex: "Tax",
        sorter: {
            compare: (a, b) => (a.Tax.toLowerCase() > b.Tax.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Net Revenue",
        dataIndex: "NetRevenue",
        sorter: {
            compare: (a, b) => (a.NetRevenue.toLowerCase() > b.NetRevenue.toLowerCase() ? -1 : 1),
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
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.InvoiceNo.toLowerCase().includes(query) ||
                    record.Date.toLowerCase().includes(query) ||
                    record.Branch.toLowerCase().includes(query) ||
                    record.CustomerName.toLowerCase().includes(query) ||
                    record.SalesAmount.toLowerCase().includes(query) ||
                    record.Tax.toLowerCase().includes(query) ||
                    record.NetRevenue.toLowerCase().includes(query) ||
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
