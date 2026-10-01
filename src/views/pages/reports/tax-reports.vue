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
                        <li class="breadcrumb-item">Reports</li>
                        <li class="breadcrumb-item active" aria-current="page">Tax Reports</li>
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

            <!-- start row -->
            <div class="row row-gap-3 mb-4 pb-4 border-bottom">
                <!-- Item 1 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <p class="mb-2">Total Tax Collected</p>
                                    <h3 class="fs-24 fw-bold mb-0 d-flex align-items-center gap-2">$12,977 <span
                                            class="badge bg-success d-flex align-items-center gap-2 fs-10 lh-sm">14.2%
                                            <i class="icon-arrow-up-right"></i></span></h3>
                                </div>
                                <span class="avatar avatar-lg rounded-3 bg-purple text-white"> <i
                                        class="icon-dollar-sign fs-20"></i></span>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/tax-bg-1.png" alt="user"
                            class="img-fluid position-absolute inset-0 w-100 h-100">
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <p class="mb-2">Input Tax</p>
                                    <h3 class="fs-24 fw-bold mb-0 d-flex align-items-center gap-2">$1756 <span
                                            class="badge bg-danger d-flex align-items-center gap-2 fs-10 lh-sm">4.2%
                                            <i class="icon-arrow-down-right"></i></span></h3>
                                </div>
                                <span class="avatar avatar-lg rounded-3 bg-danger text-white"> <i
                                        class="icon-arrow-down-from-line fs-20"></i></span>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/tax-bg-2.png" alt="user"
                            class="img-fluid position-absolute inset-0 w-100 h-100">
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <p class="mb-2">Output Tax</p>
                                    <h3 class="fs-24 fw-bold mb-0 d-flex align-items-center gap-2">$656 <span
                                            class="badge bg-info d-flex align-items-center gap-2 fs-10 lh-sm">14.2%
                                            <i class="icon-arrow-up-right"></i></span></h3>
                                </div>
                                <span class="avatar avatar-lg rounded-3 bg-info text-white"> <i
                                        class="icon-arrow-up-to-line fs-20"></i></span>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/tax-bg-3.png" alt="user"
                            class="img-fluid position-absolute inset-0 w-100 h-100">
                    </div>
                </div>
                <!-- Item 4 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <p class="mb-2">Net Tax Payable</p>
                                    <h3 class="fs-24 fw-bold mb-0 d-flex align-items-center gap-2">$149 <span
                                            class="badge bg-warning d-flex align-items-center gap-2 fs-10 lh-sm">33.2%
                                            <i class="icon-arrow-up-right"></i></span></h3>
                                </div>
                                <span class="avatar avatar-lg rounded-3 bg-warning text-white"> <i
                                        class="icon-badge-dollar-sign fs-20"></i></span>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/tax-bg-4.png" alt="user"
                            class="img-fluid position-absolute inset-0 w-100 h-100">
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
                                                        checked />Invoice No</span>
                                            </label>
                                        </li>
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
                                                        checked />Tax Type</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Tax Rate</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Taxable Amount</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Tax Amount</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Total Amount</span>
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
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Vendor
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Total
                                                Amount
                                                <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Total
                                                Amount
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
                                <template v-if="column.key === 'InvoiceNo'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.InvoiceNo }}</a>
                                </template>
                                <template v-if="column.key === 'Vendor'">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="avatar avatar-xs me-2">
                                            <img :src="getImageUrl(record.VendorImage)" class="rounded-circle" alt="user">
                                        </a>
                                        <h6 class="fw-medium mb-0 fs-14 fw-medium"><a href="javascript:void(0);">{{ record.Vendor }}</a></h6>
                                    </div>
                                </template>
                                <template v-if="column.key === 'TaxType'">
                                    <span class="badge"
                                        :class="[
                                            {
                                                'badge-soft-success': record.TaxType === 'GST',
                                                'badge-soft-info': record.TaxType === 'CGST',
                                                'badge-soft-secondary': record.TaxType === 'SGST',
                                                'badge-soft-primary': record.TaxType === 'IGST',
                                            },
                                        ]"
                                    >{{ record.TaxType }}</span>
                                </template>
                                <template v-if="column.key === 'TotalAmount'">
                                    <span class="text-dark fw-medium">{{ record.TotalAmount }}</span>
                                </template>
                            </template>
                        </a-table>

                        <BasePagination
                            :currentPage="currentPage"
                            :pageSize="pageSize"
                            :pageSizeOptions="pageSizeOptions"
                            :totalPages="totalPages"
                            :totalItems="filteredPages.length"
                            itemLabel="records"
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
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#supplier"
                                    aria-expanded="false">
                                    Vendor
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="supplier" class="card-collapse collapse show">
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
                                        <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                src="@/assets/img/supplier/supplier-img-1.jpg" alt="icon"
                                                class="rounded-circle"></span>
                                        MedLife Distributors
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_02">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_02">
                                        <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                src="@/assets/img/supplier/supplier-img-2.jpg" alt="icon"
                                                class="rounded-circle"></span>HealthCare Pharma
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_03">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_03">
                                        <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                src="@/assets/img/supplier/supplier-img-3.jpg" alt="icon"
                                                class="rounded-circle"></span>GreenCross
                                        Medicals
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_04">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_04">
                                        <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                src="@/assets/img/supplier/supplier-img-3.jpg" alt="icon"
                                                class="rounded-circle"></span>NovaCure Pharma
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_05">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_05">
                                        <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                src="@/assets/img/supplier/supplier-img-4.jpg" alt="icon"
                                                class="rounded-circle"></span>CareWell Agency
                                    </label>
                                </div>
                                <div class="more-menu1">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_06">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_06">
                                            <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                    src="@/assets/img/supplier/supplier-img-5.jpg" alt="icon"
                                                    class="rounded-circle"></span>Zenith Distributors
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_07">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_07">
                                            <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                    src="@/assets/img/supplier/supplier-img-7.jpg" alt="icon"
                                                    class="rounded-circle"></span>LifeLine
                                            Pharma
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_08">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_08">
                                            <span class="avatar avatar-xs bg-light rounded-circle"><img
                                                    src="@/assets/img/supplier/supplier-img-6.jpg" alt="icon"
                                                    class="rounded-circle"></span>SafeMeds Distribution
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
                                    Taxable Amount
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
                                            <p class="mb-0 text-body fs-14">Amount : <span
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
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#tax_type"
                                    aria-expanded="false">
                                    Tax Type
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="tax_type" class="card-collapse collapse show">
                            <div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_37">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_37">
                                        <span class="badge badge-soft-success">GST</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_38">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_38">
                                        <span class="badge badge-soft-info">CGST</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_39">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_39">
                                        <span class="badge badge-soft-secondary">SGST</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mt-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_40">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_40">
                                        <span class="badge badge-soft-primary">IGST</span>
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
import { all_routes } from '@/router/all_routes.js'

const data = [
    {
        "InvoiceNo": "#INVO050",
        "VendorImage": "supplier-img-1.jpg",
        "Vendor": "MedLife Distributors",
        "TaxType": "GST",
        "TaxRate": "18%",
        "TaxableAmount": "$20",
        "TaxAmount": "$10",
        "TotalAmount": "$30"
    },
    {
        "InvoiceNo": "#INVO052",
        "VendorImage": "supplier-img-2.jpg",
        "Vendor": "HealthCare Pharma",
        "TaxType": "CGST",
        "TaxRate": "24%",
        "TaxableAmount": "$90",
        "TaxAmount": "$20",
        "TotalAmount": "$110"
    },
    {
        "InvoiceNo": "#INVO053",
        "VendorImage": "supplier-img-3.jpg",
        "Vendor": "GreenCross Medicals",
        "TaxType": "SGST",
        "TaxRate": "18%",
        "TaxableAmount": "$13",
        "TaxAmount": "$17",
        "TotalAmount": "$30"
    },
    {
        "InvoiceNo": "#INVO054",
        "VendorImage": "supplier-img-4.jpg",
        "Vendor": "NovaCure Pharma",
        "TaxType": "IGST",
        "TaxRate": "24%",
        "TaxableAmount": "$24",
        "TaxAmount": "$14",
        "TotalAmount": "$38"
    },
    {
        "InvoiceNo": "#INVO055",
        "VendorImage": "supplier-img-5.jpg",
        "Vendor": "CareWell Agency",
        "TaxType": "CGST",
        "TaxRate": "16%",
        "TaxableAmount": "$26",
        "TaxAmount": "$16",
        "TotalAmount": "$42"
    },
    {
        "InvoiceNo": "#INVO056",
        "VendorImage": "supplier-img-6.jpg",
        "Vendor": "Zenith Distributors",
        "TaxType": "GST",
        "TaxRate": "24%",
        "TaxableAmount": "$42",
        "TaxAmount": "$12",
        "TotalAmount": "$54"
    },
    {
        "InvoiceNo": "#INVO057",
        "VendorImage": "supplier-img-7.jpg",
        "Vendor": "LifeLine Pharma",
        "TaxType": "CGST",
        "TaxRate": "18%",
        "TaxableAmount": "$57",
        "TaxAmount": "$19",
        "TotalAmount": "$76"
    },
    {
        "InvoiceNo": "#INVO058",
        "VendorImage": "supplier-img-8.jpg",
        "Vendor": "SafeMeds Distribution",
        "TaxType": "SGST",
        "TaxRate": "16%",
        "TaxableAmount": "$26",
        "TaxAmount": "$12",
        "TotalAmount": "$38"
    },
    {
        "InvoiceNo": "#INVO059",
        "VendorImage": "supplier-img-9.jpg",
        "Vendor": "NovaHealth Pharma",
        "TaxType": "GST",
        "TaxRate": "16%",
        "TaxableAmount": "$19",
        "TaxAmount": "$18",
        "TotalAmount": "$35"
    },
    {
        "InvoiceNo": "#INVO060",
        "VendorImage": "supplier-img-10.jpg",
        "Vendor": "PrimeCare Pharma",
        "TaxType": "CGST",
        "TaxRate": "18%",
        "TaxableAmount": "$72",
        "TaxAmount": "$20",
        "TotalAmount": "$92"
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
        title: "Vendor",
        dataIndex: "Vendor",
        key: "Vendor",
        sorter: {
            compare: (a, b) => (a.Vendor.toLowerCase() > b.Vendor.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Tax Type",
        dataIndex: "TaxType",
        key: "TaxType",
        sorter: {
            compare: (a, b) => (a.TaxType.toLowerCase() > b.TaxType.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Tax Rate",
        dataIndex: "TaxRate",
        sorter: {
            compare: (a, b) => (a.TaxRate.toLowerCase() > b.TaxRate.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Taxable Amount",
        dataIndex: "TaxableAmount",
        sorter: {
            compare: (a, b) => (a.TaxableAmount.toLowerCase() > b.TaxableAmount.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Tax Amount",
        dataIndex: "TaxAmount",
        sorter: {
            compare: (a, b) => (a.TaxAmount.toLowerCase() > b.TaxAmount.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Total Amount",
        dataIndex: "TotalAmount",
        key: "TotalAmount",
        sorter: {
            compare: (a, b) => (a.TotalAmount.toLowerCase() > b.TotalAmount.toLowerCase() ? -1 : 1),
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
                    record.InvoiceNo.toLowerCase().includes(query) ||
                    record.Vendor.toLowerCase().includes(query) ||
                    record.TaxType.toLowerCase().includes(query) ||
                    record.TaxRate.toLowerCase().includes(query) ||
                    record.TaxableAmount.toLowerCase().includes(query) ||
                    record.TaxAmount.toLowerCase().includes(query) ||
                    record.TotalAmount.toLowerCase().includes(query)
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
