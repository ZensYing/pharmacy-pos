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
                        <li class="breadcrumb-item active" aria-current="page">Expiry Tracking</li>
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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Items
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Items
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Supplier
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Supplier
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Current
                                                Stock <span>High-Low</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Current
                                                Stock <span>Low-High</span></a>
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
                                <template v-if="column.key === 'Item'">
                                    <span class="fw-medium text-dark">{{ record.Item }}</span>
                                </template>
                                <template v-if="column.key === 'Category'">
                                    <span class="badge"
                                        :class="[
                                            {
                                                'badge-soft-orange': record.Category === 'Tablet',
                                                'badge-soft-pink': record.Category === 'Syrup',
                                                'badge-soft-cyan': record.Category === 'Oinment',
                                                'badge-soft-purple': record.Category === 'Injection',
                                            },
                                        ]"
                                    >{{ record.Category }}</span>
                                </template>
                                <template v-if="column.key === 'BatchID'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.BatchID }}</a>
                                </template>
                                <template v-if="column.key === 'Supplier'">
                                    <div class="d-flex align-items-center fw-medium text-dark">
                                        <span class="avatar avatar-xs rounded-circle me-2">
                                            <img :src="getImageUrlOne(record.SupplierImage)" class="rounded-circle" alt="user">
                                        </span>
                                        {{ record.Supplier }}
                                    </div>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-warning': record.StatusClass === 'warning',
                                                'badge-soft-purple': record.StatusClass === 'purple',
                                                'badge-soft-danger': record.StatusClass === 'danger',
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
                                                :src="getImageUrl('tablet-icon-1.svg')" alt="icon"></span> Paracetamol
                                        500
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_02">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_02">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                :src="getImageUrl('tablet-icon-2.svg')" alt="icon"></span>Amoxicillin
                                        250
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_03">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_03">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                :src="getImageUrl('tablet-icon-3.svg')" alt="icon"></span>Cetirizine
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_04">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_04">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                :src="getImageUrl('tablet-icon-4.svg')" alt="icon"></span>Ceftriaxone
                                        20
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_05">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_05">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                :src="getImageUrl('tablet-icon-5.svg')" alt="icon"></span>Betnovate
                                    </label>
                                </div>
                                <div class="more-menu1">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_06">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_06">
                                            <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                    :src="getImageUrl('tablet-icon-6.svg')"
                                                    alt="icon"></span>Amoxicillin 30
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_07">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_07">
                                            <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                    :src="getImageUrl('tablet-icon-7.svg')" alt="icon"></span>Tetanus
                                            Toxoid
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_08">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_08">
                                            <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                    :src="getImageUrl('tablet-icon-8.svg')"
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

                    <!-- Type Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#category"
                                    aria-expanded="false">
                                    Category
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="category" class="card-collapse collapse show">
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
                                        Uncategorized
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_10">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_10">
                                        Tablet
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_11">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_11">
                                        Capsule
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_13">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_13">
                                        Oinment
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_14">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_14">
                                        Syrup
                                    </label>
                                </div>
                                <div class="more-menu2">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_15">
                                        <label
                                            class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                            for="check_15">
                                            Drops
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_16">
                                        <label
                                            class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                            for="check_16">
                                            Medical Devices
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_17">
                                        <label
                                            class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                            for="check_17">
                                            Supplements
                                        </label>
                                    </div>
                                </div>
                                <div class="view-all mt-3">
                                    <a href="#" class="viewall2-button text-primary font-medium">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Supplier Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#supplier"
                                    aria-expanded="false">
                                    Supplier
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
                                        id="check_18">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_18">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                :src="getImageUrlOne('supplier-img-1.jpg')" alt="supplier"
                                                class="img-fluid rounded-circle"></span>MedLife Distributors
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_19">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_19">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                :src="getImageUrlOne('supplier-img-2.jpg')" alt="supplier"
                                                class="img-fluid rounded-circle"></span>HealthCare Pharma
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_20">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_20">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                :src="getImageUrlOne('supplier-img-3.jpg')" alt="supplier"
                                                class="img-fluid rounded-circle"></span>GreenCross Medicals
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_21">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_21">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                :src="getImageUrlOne('supplier-img-4.jpg')" alt="supplier"
                                                class="img-fluid rounded-circle"></span>NovaCure Pharma
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_22">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_22">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                :src="getImageUrlOne('supplier-img-5.jpg')" alt="supplier"
                                                class="img-fluid rounded-circle"></span>CareWell Agency
                                    </label>
                                </div>
                                <div class="more-menu3">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_23">
                                        <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                            for="check_23">
                                            <span class="avatar avatar-xs rounded-circle"><img
                                                    :src="getImageUrlOne('supplier-img-6.jpg')" alt="supplier"
                                                    class="img-fluid rounded-circle"></span>Zenith Distributors
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_24">
                                        <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                            for="check_24">
                                            <span class="avatar avatar-xs rounded-circle"><img
                                                    :src="getImageUrlOne('supplier-img-7.jpg')" alt="supplier"
                                                    class="img-fluid rounded-circle"></span>LifeLine Pharma
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_25">
                                        <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                            for="check_25">
                                            <span class="avatar avatar-xs rounded-circle"><img
                                                    :src="getImageUrlOne('supplier-img-8.jpg')" alt="supplier"
                                                    class="img-fluid rounded-circle"></span>SafeMeds Distribution
                                        </label>
                                    </div>
                                </div>
                                <div class="view-all mt-3">
                                    <a href="#" class="viewall3-button text-primary font-medium">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Stock Status Items -->
                    <div class="filter-item pb-0 mb-0 border-0">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#stock-status"
                                    aria-expanded="false">
                                    Status
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="stock-status" class="card-collapse collapse show">
                            <div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_34">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_34">
                                        <span class="badge badge-soft-info d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Expire in 2 days</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_35">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_35">
                                        <span class="badge badge-soft-warning d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Expire in 20 days</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_36">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_36">
                                        <span class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Expired </span>
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
        "SKU": "#TAB016",
        "Item": "Paracetamol 500",
        "Category": "Tablet",
        "BatchID": "#BTH016",
        "ExpiryDate": "28 Jan 2026",
        "Quantity": "20",
        "SupplierImage": "supplier-img-1.jpg",
        "Supplier": "MedLife Distributors",
        "Status": "Expire in 2 days",
        "StatusClass": "warning"
    },
    {
        "SKU": "#TAB015",
        "Item": "Amoxicillin 250",
        "Category": "Tablet",
        "BatchID": "#BTH015",
        "ExpiryDate": "15 Feb 2026",
        "Quantity": "200",
        "SupplierImage": "supplier-img-2.jpg",
        "Supplier": "HealthCare Pharma",
        "Status": "Expire in 20 days",
        "StatusClass": "purple"
    },
    {
        "SKU": "#SYR014",
        "Item": "Cetirizine",
        "Category": "Syrup",
        "BatchID": "#BTH014",
        "ExpiryDate": "10 Mar 2026",
        "Quantity": "40",
        "SupplierImage": "supplier-img-3.jpg",
        "Supplier": "GreenCross Medicals",
        "Status": "Expired",
        "StatusClass": "danger"
    },
    {
        "SKU": "#TAB013",
        "Item": "Ceftriaxone 20",
        "Category": "Tablet",
        "BatchID": "#BTH013",
        "ExpiryDate": "14 Apr 2026",
        "Quantity": "120",
        "SupplierImage": "supplier-img-4.jpg",
        "Supplier": "NovaCure Pharma",
        "Status": "Expire in 7 days",
        "StatusClass": "warning"
    },
    {
        "SKU": "#CRE012",
        "Item": "Betnovate",
        "Category": "Oinment",
        "BatchID": "#BTH012",
        "ExpiryDate": "30 May 2026",
        "Quantity": "60",
        "SupplierImage": "supplier-img-5.jpg",
        "Supplier": "CareWell Agency",
        "Status": "Expire in 30 days",
        "StatusClass": "purple"
    },
    {
        "SKU": "#TAB011",
        "Item": "Amoxicillin 30",
        "Category": "Tablet",
        "BatchID": "#BTH011",
        "ExpiryDate": "02 Jun 2026",
        "Quantity": "310",
        "SupplierImage": "supplier-img-6.jpg",
        "Supplier": "Zenith Distributors",
        "Status": "Expire in 10 days",
        "StatusClass": "warning"
    },
    {
        "SKU": "#INJ010",
        "Item": "Tetanus Toxoid",
        "Category": "Injection",
        "BatchID": "#BTH010",
        "ExpiryDate": "07 Jul 2026",
        "Quantity": "250",
        "SupplierImage": "supplier-img-7.jpg",
        "Supplier": "LifeLine Pharma",
        "Status": "Expired",
        "StatusClass": "danger"
    },
    {
        "SKU": "#SYR009",
        "Item": "Atorvastatin",
        "Category": "Syrup",
        "BatchID": "#BTH009",
        "ExpiryDate": "21 Aug 2026",
        "Quantity": "35",
        "SupplierImage": "supplier-img-8.jpg",
        "Supplier": "SafeMeds Distribution",
        "Status": "Expire in 7 days",
        "StatusClass": "warning"
    },
    {
        "SKU": "#TAB008",
        "Item": "Metformin 100",
        "Category": "Tablet",
        "BatchID": "#BTH008",
        "ExpiryDate": "17 Nov 2026",
        "Quantity": "150",
        "SupplierImage": "supplier-img-9.jpg",
        "Supplier": "NovaHealth Pharma",
        "Status": "Expire in 30 days",
        "StatusClass": "purple"
    },
    {
        "SKU": "#INJ007",
        "Item": "Ondansetron",
        "Category": "Injection",
        "BatchID": "#BTH007",
        "ExpiryDate": "10 Dec 2026",
        "Quantity": "120",
        "SupplierImage": "supplier-img-10.jpg",
        "Supplier": "PrimeCare Pharma",
        "Status": "Expired",
        "StatusClass": "danger"
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
        title: "Category",
        dataIndex: "Category",
        key: "Category",
        sorter: {
            compare: (a, b) => (a.Category.toLowerCase() > b.Category.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Batch ID",
        dataIndex: "BatchID",
        key: "BatchID",
        sorter: {
            compare: (a, b) => (a.BatchID.toLowerCase() > b.BatchID.toLowerCase() ? -1 : 1),
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
        title: "Quantity",
        dataIndex: "Quantity",
        sorter: {
            compare: (a, b) => (a.Quantity.toLowerCase() > b.Quantity.toLowerCase() ? -1 : 1),
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
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.SKU.toLowerCase().includes(query) ||
                    record.Item.toLowerCase().includes(query) ||
                    record.Category.toLowerCase().includes(query) ||
                    record.BatchID.toLowerCase().includes(query) ||
                    record.ExpiryDate.toLowerCase().includes(query) ||
                    record.Quantity.toLowerCase().includes(query) ||
                    record.Supplier.toLowerCase().includes(query) ||
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
