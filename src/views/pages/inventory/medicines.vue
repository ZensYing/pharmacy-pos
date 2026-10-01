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
                        <li class="breadcrumb-item active" aria-current="page">Medicine List </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <router-link :to="all_routes.addMedicines" class="btn btn-primary d-flex align-items-center gap-2"> <i
                            class="icon-plus"></i> Add New</router-link>
                </div>
            </div>

            <!-- start row -->
            <div class="row row-gap-4 mb-4">
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
                    <div class="card mb-0">
                        <div class="card-body pe-1">
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p class="mb-3 d-flex align-items-center gap-2"><i
                                            class="icon-briefcase-medical text-purple"></i> Total Medicine</p>
                                    <h4 class="mb-0 d-flex align-items-center gap-2">1200 <span
                                            class="badge badge-sm badge-soft-success"> <i
                                                class="icon-trending-up me-1"></i> 2%</span> </h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-end">
                                    <div id="medicine-chart-1">
                                        <apexchart
                                            type="area"
                                            height="60"
                                            width="120"
                                            :options="medicineChart1.chartOptions"
                                            :series="medicineChart1.series"
                                        >
                                        </apexchart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
                    <div class="card mb-0">
                        <div class="card-body pe-1">
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p class="mb-3 d-flex align-items-center gap-2"><i
                                            class="icon-joystick text-success"></i> In Stock </p>
                                    <h4 class="mb-0 d-flex align-items-center gap-2">1100 <span
                                            class="badge badge-sm badge-soft-success"> <i
                                                class="icon-trending-up me-1"></i> 8%</span> </h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-end">
                                    <div id="medicine-chart-2">
                                        <apexchart
                                            type="area"
                                            height="60"
                                            width="120"
                                            :options="medicineChart2.chartOptions"
                                            :series="medicineChart2.series"
                                        >
                                        </apexchart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
                    <div class="card mb-0">
                        <div class="card-body pe-1">
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p class="mb-3 d-flex align-items-center gap-2"><i
                                            class="icon-battery-low text-orange"></i> Low Stock</p>
                                    <h4 class="mb-0 d-flex align-items-center gap-2">600 <span
                                            class="badge badge-sm badge-soft-danger text-danger"> <i
                                                class="icon-trending-down me-1"></i> 5%</span> </h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-end">
                                    <div id="medicine-chart-3">
                                        <apexchart
                                            type="area"
                                            height="60"
                                            width="120"
                                            :options="medicineChart3.chartOptions"
                                            :series="medicineChart3.series"
                                        >
                                        </apexchart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
                    <div class="card mb-0">
                        <div class="card-body pe-1">
                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p class="mb-3 d-flex align-items-center gap-2"><i
                                            class="icon-archive-x text-danger"></i> Out of Stock </p>
                                    <h4 class="mb-0 d-flex align-items-center gap-2">200 <span
                                            class="badge badge-sm badge-soft-danger text-danger"> <i
                                                class="icon-trending-down me-1"></i> 2%</span> </h4>
                                </div>
                                <div class="d-flex align-items-center justify-content-end">
                                    <div id="medicine-chart-4">
                                        <apexchart
                                            type="area"
                                            height="60"
                                            width="120"
                                            :options="medicineChart4.chartOptions"
                                            :series="medicineChart4.series"
                                        >
                                        </apexchart>
                                    </div>
                                </div>
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
                                <template v-if="column.key === 'Item'">
                                    <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-1">
                                        <span class="avatar avatar-xs rounded-circle bg-light p-1">
                                            <img :src="getImageUrl(record.ItemImage)" alt="tablet">
                                        </span>
                                        {{ record.Item }}
                                    </h4>
                                </template>
                                <template v-if="column.key === 'Category'">
                                    <span class="badge"
                                        :class="[
                                            { 
                                                'badge-soft-orange': record.Category === 'Tablet', 
                                                'badge-soft-pink': record.Category === 'Syrup',
                                                'badge-soft-cyan': record.Category === 'Ointment',
                                                'bg-light text-dark': record.Category === 'Uncategorized',
                                                'badge-soft-purple': record.Category === 'Injection',
                                            },
                                        ]"
                                    >{{ record.Category }}</span>
                                </template>
                                <template v-if="column.key === 'StockStatus'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            { 
                                                'badge-soft-info': record.StockStatus === 'In Stock',
                                                'badge-soft-warning': record.StockStatus === 'Low Stock',
                                                'badge-soft-danger': record.StockStatus === 'Out of Stock',
                                            },
                                        ]"
                                    >
                                        <i class="fa-solid fa-circle fs-5 me-1"></i>
                                        {{ record.StockStatus }}
                                    </span>
                                </template>
                                <template v-if="column.key === 'Supplier'">
                                    <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <span class="avatar avatar-xs">
                                            <img :src="getImageUrlOne(record.SupplierImage)" alt="supplier" class="rounded-circle">
                                            </span>
                                        {{ record.Supplier }}
                                    </h4>
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
                                                    <router-link :to="all_routes.editMedicines"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-pencil-line me-2"></i>Edit</router-link>
                                                </li>
                                                <li>
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#inventory_history"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-timer me-2"></i>Inventory History</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center"
                                                        data-bs-toggle="modal" data-bs-target="#barcode_modal"><i
                                                            class="icon-scan-barcode me-2"></i>Barcode/QR</a>
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
                            itemLabel="medicines"
                            @update:currentPage="onPageChange"
                            @update:pageSize="onPageSizeChange"
                        />
                        <!-- <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 p-3 pt-0">
                            <div id="tableinfo"></div>
                            <div id="tablepage"></div>
                            <div id="tablelength"></div>
                        </div> -->
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

    <medicines-modal></medicines-modal>

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
import { medicineChart1, medicineChart2, medicineChart3, medicineChart4 } from './data.js'

const data = [
    {
        "SKU": "#TAB016",
        "ItemImage": "tablet-icon-1.svg",
        "Item": "Paracetamol 500",
        "GenericName": "Paracetamol",
        "Category": "Tablet",
        "Quantity": "20",
        "Price": "$120",
        "StockValue": "$2400",
        "HTSCode": "3004",
        "StockStatus": "In Stock",
        "Manufacture": "ABC Pharma",
        "SupplierImage": "supplier-img-1.jpg",
        "Supplier": "MedLife Distributors",
        "ExpiryDate": "28 Jan 2026",
        "Status": "Active"
    },
    {
        "SKU": "#TAB015",
        "ItemImage": "tablet-icon-2.svg",
        "Item": "Amoxicillin 250",
        "GenericName": "Amoxicillin",
        "Category": "Tablet",
        "Quantity": "200",
        "Price": "$20",
        "StockValue": "$4000",
        "HTSCode": "3004",
        "StockStatus": "Low Stock",
        "Manufacture": "HealCare Labs",
        "SupplierImage": "supplier-img-2.jpg",
        "Supplier": "HealthCare Pharma",
        "ExpiryDate": "15 Feb 2026",
        "Status": "Active"
    },
    {
        "SKU": "#SYR014",
        "ItemImage": "tablet-icon-3.svg",
        "Item": "Cetirizine",
        "GenericName": "Cetirizine",
        "Category": "Syrup",
        "Quantity": "40",
        "Price": "$100",
        "StockValue": "$4000",
        "HTSCode": "3004",
        "StockStatus": "Out of Stock",
        "Manufacture": "Medix Ltd",
        "SupplierImage": "supplier-img-3.jpg",
        "Supplier": "GreenCross Medicals",
        "ExpiryDate": "10 Mar 2026",
        "Status": "Active"
    },
    {
        "SKU": "#TAB013",
        "ItemImage": "tablet-icon-4.svg",
        "Item": "Ceftriaxone 20",
        "GenericName": "Ceftriaxone",
        "Category": "Tablet",
        "Quantity": "120",
        "Price": "$35",
        "StockValue": "$4200",
        "HTSCode": "3004",
        "StockStatus": "In Stock",
        "Manufacture": "SkinPlus Pharma",
        "SupplierImage": "supplier-img-4.jpg",
        "Supplier": "NovaCure Pharma",
        "ExpiryDate": "14 Apr 2026",
        "Status": "Inactive"
    },
    {
        "SKU": "#CRE012",
        "ItemImage": "tablet-icon-5.svg",
        "Item": "Betnovate",
        "GenericName": "Betnovate",
        "Category": "Ointment",
        "Quantity": "60",
        "Price": "$120",
        "StockValue": "$7200",
        "HTSCode": "3004",
        "StockStatus": "In Stock",
        "Manufacture": "NovaLife Pharma",
        "SupplierImage": "supplier-img-5.jpg",
        "Supplier": "CareWell Agency",
        "ExpiryDate": "30 May 2026",
        "Status": "Active"
    },
    {
        "SKU": "#TAB011",
        "ItemImage": "tablet-icon-6.svg",
        "Item": "Amoxicillin 30",
        "GenericName": "Amoxicillin",
        "Category": "Uncategorized",
        "Quantity": "310",
        "Price": "$25",
        "StockValue": "$7750",
        "HTSCode": "3004",
        "StockStatus": "Low Stock",
        "Manufacture": "CareWell Labs",
        "SupplierImage": "supplier-img-6.jpg",
        "Supplier": "Zenith Distributors",
        "ExpiryDate": "02 Jun 2026",
        "Status": "Active"
    },
    {
        "SKU": "#INJ010",
        "ItemImage": "tablet-icon-7.svg",
        "Item": "Tetanus Toxoid",
        "GenericName": "Tetanus Toxoid",
        "Category": "Injection",
        "Quantity": "250",
        "Price": "$20",
        "StockValue": "$5000",
        "HTSCode": "3002",
        "StockStatus": "In Stock",
        "Manufacture": "MedSure Pharma",
        "SupplierImage": "supplier-img-7.jpg",
        "Supplier": "LifeLine Pharma",
        "ExpiryDate": "07 Jul 2026",
        "Status": "Active"
    },
    {
        "SKU": "#SYR009",
        "ItemImage": "tablet-icon-8.svg",
        "Item": "Atorvastatin",
        "GenericName": "Atorvastatin",
        "Category": "Syrup",
        "Quantity": "35",
        "Price": "$180",
        "StockValue": "$6300",
        "HTSCode": "3004",
        "StockStatus": "In Stock",
        "Manufacture": "BioLife Labs",
        "SupplierImage": "supplier-img-8.jpg",
        "Supplier": "SafeMeds Distribution",
        "ExpiryDate": "21 Aug 2026",
        "Status": "Active"
    },
    {
        "SKU": "#TAB008",
        "ItemImage": "tablet-icon-1.svg",
        "Item": "Metformin 100",
        "GenericName": "Metformin",
        "Category": "Tablet",
        "Quantity": "150",
        "Price": "$60",
        "StockValue": "$9000",
        "HTSCode": "3004",
        "StockStatus": "In Stock",
        "Manufacture": "NutriPlus Labs",
        "SupplierImage": "supplier-img-9.jpg",
        "Supplier": "NovaHealth Pharma",
        "ExpiryDate": "17 Nov 2026",
        "Status": "Active"
    },
    {
        "SKU": "#INJ007",
        "ItemImage": "tablet-icon-2.svg",
        "Item": "Ondansetron",
        "GenericName": "Ondansetron",
        "Category": "Injection",
        "Quantity": "120",
        "Price": "$80",
        "StockValue": "$9600",
        "HTSCode": "3002",
        "StockStatus": "Low Stock",
        "Manufacture": "NutraCare Pharma",
        "SupplierImage": "supplier-img-10.jpg",
        "Supplier": "PrimeCare Pharma",
        "ExpiryDate": "10 Dec 2026",
        "Status": "Active"
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
        title: "Item",
        dataIndex: "Item",
        key: "Item",
        sorter: {
            compare: (a, b) => (a.Item.toLowerCase() > b.Item.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Generic Name",
        dataIndex: "GenericName",
        sorter: {
            compare: (a, b) => (a.GenericName.toLowerCase() > b.GenericName.toLowerCase() ? -1 : 1),
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
        title: "Quantity",
        dataIndex: "Quantity",
        sorter: {
            compare: (a, b) => (a.Quantity.toLowerCase() > b.Quantity.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Price",
        dataIndex: "Price",
        sorter: {
            compare: (a, b) => (a.Price.toLowerCase() > b.Price.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Stock Status",
        dataIndex: "StockStatus",
        sorter: {
            compare: (a, b) => (a.StockStatus.toLowerCase() > b.StockStatus.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "HTSCode",
        dataIndex: "HTSCode",
        sorter: {
            compare: (a, b) => (a.HTSCode.toLowerCase() > b.HTSCode.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Stock Status",
        dataIndex: "StockStatus",
        key: "StockStatus",
        sorter: {
            compare: (a, b) => (a.StockStatus.toLowerCase() > b.StockStatus.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Manufacture",
        dataIndex: "Manufacture",
        sorter: {
            compare: (a, b) => (a.Manufacture.toLowerCase() > b.Manufacture.toLowerCase() ? -1 : 1),
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
        title: "Expiry Date",
        dataIndex: "ExpiryDate",
        sorter: {
            compare: (a, b) => (a.ExpiryDate.toLowerCase() > b.ExpiryDate.toLowerCase() ? -1 : 1),
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
            medicineChart1: medicineChart1,
            medicineChart2: medicineChart2,
            medicineChart3: medicineChart3,
            medicineChart4: medicineChart4,
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
                    record.SKU.toLowerCase().includes(query) ||
                    record.Item.toLowerCase().includes(query) ||
                    record.GenericName.toLowerCase().includes(query) ||
                    record.Category.toLowerCase().includes(query) ||
                    record.Quantity.toLowerCase().includes(query) ||
                    record.Price.toLowerCase().includes(query) ||
                    record.StockValue.toLowerCase().includes(query) ||
                    record.HTSCode.toLowerCase().includes(query) ||
                    record.StockStatus.toLowerCase().includes(query) ||
                    record.Manufacture.toLowerCase().includes(query) ||
                    record.Supplier.toLowerCase().includes(query) ||
                    record.ExpiryDate.toLowerCase().includes(query) ||
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