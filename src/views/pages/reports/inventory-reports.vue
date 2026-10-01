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
                        <li class="breadcrumb-item active" aria-current="page">Inventory Reports</li>
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
                            <div class="d-flex align-items-center flex-wrap gap-3">
                                <span class="avatar avatar-lg avatar-rounded bg-info text-white"> <i
                                        class="icon-file-box fs-20"></i></span>
                                <div>
                                    <p class="mb-2">Total Items</p>
                                    <h3 class="fs-24 fw-bold mb-0 d-flex align-items-center gap-2">13,786 <span
                                            class="badge bg-success d-flex align-items-center gap-2 fs-10 lh-sm">14.2%
                                            <i class="icon-arrow-up-right"></i></span></h3>
                                </div>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/element-1.png" alt="user"
                            class="img-fluid position-absolute top-0 end-0">
                        <img src="@/assets/img/bg/shadow-1.png" alt="user"
                            class="img-fluid position-absolute top-0 start-0">
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center flex-wrap gap-3">
                                <span class="avatar avatar-lg avatar-rounded bg-cyan text-white"> <i
                                        class="icon-dollar-sign fs-20"></i></span>
                                <div>
                                    <p class="mb-2">Total Stock Value</p>
                                    <h3 class="fs-24 fw-bold mb-0 d-flex align-items-center gap-2">$12,977 <span
                                            class="badge bg-danger d-flex align-items-center gap-2 fs-10 lh-sm">14.2%
                                            <i class="icon-arrow-down-right"></i></span></h3>
                                </div>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/element-2.png" alt="user"
                            class="img-fluid position-absolute top-0 end-0">
                        <img src="@/assets/img/bg/shadow-2.png" alt="user"
                            class="img-fluid position-absolute top-0 start-0">
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center flex-wrap gap-3">
                                <span class="avatar avatar-lg avatar-rounded bg-danger text-white"> <i
                                        class="icon-circle-arrow-out-down-right fs-20"></i></span>
                                <div>
                                    <p class="mb-2">Out of Stock Count</p>
                                    <h3 class="fs-24 fw-bold mb-0 d-flex align-items-center gap-2">12 <span
                                            class="badge bg-success d-flex align-items-center gap-2 fs-10 lh-sm">15.9%
                                            <i class="icon-arrow-up-right"></i></span></h3>
                                </div>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/element-3.png" alt="user"
                            class="img-fluid position-absolute top-0 end-0">
                        <img src="@/assets/img/bg/shadow-3.png" alt="user"
                            class="img-fluid position-absolute top-0 start-0">
                    </div>
                </div>
                <!-- Item 4 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center flex-wrap gap-3">
                                <span class="avatar avatar-lg avatar-rounded bg-warning text-white"> <i
                                        class="icon-file-down fs-20"></i></span>
                                <div>
                                    <p class="mb-2">Low Stock Count</p>
                                    <h3 class="fs-24 fw-bold mb-0 d-flex align-items-center gap-2">128 <span
                                            class="badge bg-danger d-flex align-items-center gap-2 fs-10 lh-sm">16.2%
                                            <i class="icon-arrow-down-right"></i></span></h3>
                                </div>
                            </div>
                        </div>
                        <img src="@/assets/img/bg/element-4.png" alt="user"
                            class="img-fluid position-absolute top-0 end-0">
                        <img src="@/assets/img/bg/shadow-4.png" alt="user"
                            class="img-fluid position-absolute top-0 start-0">
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
                                                        checked />Batch No</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Medicine Name</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />In Stock</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Out Stock</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Stock Value</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span><i class="icon-grip-vertical me-3"></i></span>
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />Expiry Date</span>
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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Medicine
                                                Name
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Medicine
                                                Name
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Stock
                                                Value
                                                <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Stock
                                                Value
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
                                <template v-if="column.key === 'MedicineName'">
                                    <span class="text-dark fw-medium">{{ record.MedicineName }}</span>
                                </template>
                                <template v-if="column.key === 'StockValue'">
                                    <span class="text-dark fw-medium">{{ record.StockValue }}</span>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-success': record.Status === 'In Stock',
                                                'badge-soft-warning': record.Status === 'Low Stock',
                                                'badge-soft-danger': record.Status === 'Out of Stock',
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
                            itemLabel="items"
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

                    <!-- Batch Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#batch"
                                    aria-expanded="false">
                                    Batch
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="batch" class="card-collapse collapse show">
                            <div>
                                <div class="input-icon input-icon-start position-relative mb-3">
                                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_09">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_09">
                                        Batch-2026-001
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_10">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_10">
                                        Batch-2026-002
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_11">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_11">
                                        Batch-2026-003
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_13">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_13">
                                        Batch-2026-004
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_14">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_14">
                                        Batch-2026-005
                                    </label>
                                </div>
                                <div class="more-menu2">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_15">
                                        <label
                                            class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                            for="check_15">
                                            Batch-2026-006
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_16">
                                        <label
                                            class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                            for="check_16">
                                            Batch-2026-007
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_17">
                                        <label
                                            class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                            for="check_17">
                                            Batch-2026-008
                                        </label>
                                    </div>
                                </div>
                                <div class="view-all mt-3">
                                    <a href="#" class="viewall2-button text-primary font-medium">View More</a>
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
                                            <p class="mb-0 text-body fs-14">Value : <span
                                                    class="text-dark fw-semibold">$0 - $10,000</span></p>
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
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#stock_status"
                                    aria-expanded="false">
                                    Stock Status
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="stock_status" class="card-collapse collapse show">
                            <div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="status" type="checkbox"
                                        id="status_01" checked>
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100"
                                        for="status_01">
                                        <span class="badge badge-soft-success"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>In Stock</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="status" type="checkbox"
                                        id="status_02">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100"
                                        for="status_02">
                                        <span class="badge badge-soft-warning"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>Low Stock</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="status" type="checkbox"
                                        id="status_03">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100"
                                        for="status_03">
                                        <span class="badge badge-soft-danger"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>Out of Stock</span>
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
        "SKU": "#MED016",
        "BatchNo": "Batch-2026-001",
        "MedicineName": "Paracetamol 500mg",
        "InStock": "200",
        "OutStock": "50",
        "StockValue": "$120",
        "ExpiryDate": "28 Jan 2026",
        "Status": "In Stock"
    },
    {
        "SKU": "#MED017",
        "BatchNo": "Batch-2026-002",
        "MedicineName": "Amoxicillin 250mg",
        "InStock": "40",
        "OutStock": "45",
        "StockValue": "$20",
        "ExpiryDate": "15 Feb 2026",
        "Status": "Low Stock"
    },
    {
        "SKU": "#MED018",
        "BatchNo": "Batch-2026-003",
        "MedicineName": "Cetirizine 10mg",
        "InStock": "50",
        "OutStock": "15",
        "StockValue": "$100",
        "ExpiryDate": "10 Mar 2026",
        "Status": "In Stock"
    },
    {
        "SKU": "#MED019",
        "BatchNo": "Batch-2026-004",
        "MedicineName": "Vitamin D3",
        "InStock": "322",
        "OutStock": "36",
        "StockValue": "$0",
        "ExpiryDate": "14 Apr 2026",
        "Status": "Out of Stock"
    },
    {
        "SKU": "#MED020",
        "BatchNo": "Batch-2026-005",
        "MedicineName": "Ibuprofen 400mg",
        "InStock": "677",
        "OutStock": "68",
        "StockValue": "$0",
        "ExpiryDate": "30 May 2026",
        "Status": "Out of Stock"
    },
    {
        "SKU": "#MED021",
        "BatchNo": "Batch-2026-006",
        "MedicineName": "Metformin 500mg",
        "InStock": "367",
        "OutStock": "43",
        "StockValue": "$25",
        "ExpiryDate": "02 Jun 2026",
        "Status": "Low Stock"
    },
    {
        "SKU": "#MED022",
        "BatchNo": "Batch-2026-007",
        "MedicineName": "Azithromycin 500mg",
        "InStock": "97",
        "OutStock": "311",
        "StockValue": "$130",
        "ExpiryDate": "07 Jul 2026",
        "Status": "In Stock"
    },
    {
        "SKU": "#MED023",
        "BatchNo": "Batch-2026-008",
        "MedicineName": "Metformin 500mg",
        "InStock": "55",
        "OutStock": "612",
        "StockValue": "$180",
        "ExpiryDate": "21 Aug 2026",
        "Status": "Low Stock"
    },
    {
        "SKU": "#MED024",
        "BatchNo": "Batch-2026-009",
        "MedicineName": "Metformin 500mg",
        "InStock": "156",
        "OutStock": "15",
        "StockValue": "$0",
        "ExpiryDate": "17 Nov 2026",
        "Status": "Out of Stock"
    },
    {
        "SKU": "#MED025",
        "BatchNo": "Batch-2026-010",
        "MedicineName": "Cetirizine 10mg",
        "InStock": "498",
        "OutStock": "67",
        "StockValue": "$80",
        "ExpiryDate": "10 Dec 2026",
        "Status": "In Stock"
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
        title: "In Stock",
        dataIndex: "InStock",
        sorter: {
            compare: (a, b) => (a.InStock.toLowerCase() > b.InStock.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Out Stock",
        dataIndex: "OutStock",
        sorter: {
            compare: (a, b) => (a.OutStock.toLowerCase() > b.OutStock.toLowerCase() ? -1 : 1),
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
                    record.InStock.toLowerCase().includes(query) ||
                    record.OutStock.toLowerCase().includes(query) ||
                    record.StockValue.toLowerCase().includes(query) ||
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
