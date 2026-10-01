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
                        <router-link :to="all_routes.customers"
                            class="btn btn-sm btn-primary btn-icon p-1 border-0 fs-14 active"><i
                                class="icon-grid-2x2"></i></router-link>
                        <router-link :to="all_routes.customersList"
                            class="flex-shrink-0 btn btn-sm btn-icon border-0 ms-1 fs-14"><i
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
            </div>
            <!-- end row -->

            <!-- start card -->
            <div class="card border-0 shadow-none mb-0 bg-transparent rounded-0 pt-4 border-top">
                <div class="card-header p-0 mb-4 border-0">
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div class="d-inline-flex align-items-center flex-wrap flex-sm-nowrap gap-2">
                            <div class="input-icon input-icon-start position-relative">
                                <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                <input type="text" class="form-control" placeholder="Search">
                            </div>
                        </div>
                        <div class="d-flex align-items-center flex-wrap gap-2">

                            <!-- Filter -->
                            <a href="#" class="btn btn-white btn-icon" data-bs-toggle="offcanvas"
                                data-bs-target="#add_filter" aria-controls="add_filter"><i
                                    class="icon-funnel"></i></a>

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
                    <div class="row">
                        <div class="col-xl-4 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a href="#"
                                                class="avatar rounded-circle bg-soft-orange border border-orange p-1 fs-18">AG</a>
                                            <div>
                                                <a href="#">Andrew George</a>
                                                <span class="text-body fs-13 fw-normal d-block mt-1">#CUS016</span>
                                            </div>
                                        </h4>
                                        <div class="d-flex align-items-center gap-1">
                                            <span
                                                class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                    class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
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
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3 row-gap-2">
                                        <div class="col-lg-6">
                                            <div class="bg-soft-success p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Orders</span>
                                                <span class="fs-18 fw-bold text-success">569</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-soft-info p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Sales</span>
                                                <span class="fs-18 fw-bold text-info">$6,565</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-phone-call me-1 text-gray-9"></i> Phone</span>
                                        <span class="text-gray-9">+1 56589 54547</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-mail me-1 text-gray-9"></i> Email</span>
                                        <span class="text-gray-9">jackde@example.com</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-shopping-cart me-1 text-gray-9"></i> Last
                                            Purchase</span>
                                        <span class="text-gray-9">28 Jan 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a href="#"
                                                class="avatar rounded-circle bg-soft-orange border border-orange fs-18"><img
                                                    src="@/assets/img/profiles/avatar-37.jpg" alt="img"
                                                    class="rounded-circle"></a>
                                            <div>
                                                <a href="#">Anderson Claire</a>
                                                <span class="text-body fs-13 fw-normal d-block mt-1">#CUS017</span>
                                            </div>
                                        </h4>
                                        <div class="d-flex align-items-center gap-1">
                                            <span
                                                class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                    class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
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
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3 row-gap-2">
                                        <div class="col-lg-6">
                                            <div class="bg-soft-success p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Orders</span>
                                                <span class="fs-18 fw-bold text-success">423</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-soft-info p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Sales</span>
                                                <span class="fs-18 fw-bold text-info">$4,230</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-phone-call me-1 text-gray-9"></i> Phone</span>
                                        <span class="text-gray-9">+1 56589 54547</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-mail me-1 text-gray-9"></i> Email</span>
                                        <span class="text-gray-9">andersonc@example.com</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-shopping-cart me-1 text-gray-9"></i> Last
                                            Purchase</span>
                                        <span class="text-gray-9">28 Jan 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a href="#"
                                                class="avatar rounded-circle bg-soft-teal border border-teal p-1 fs-18">AS</a>
                                            <div>
                                                <a href="#">Alex Smith</a>
                                                <span class="text-body fs-13 fw-normal d-block mt-1">#CUS018</span>
                                            </div>
                                        </h4>
                                        <div class="d-flex align-items-center gap-1">
                                            <span
                                                class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                    class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
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
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3 row-gap-2">
                                        <div class="col-lg-6">
                                            <div class="bg-soft-success p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Orders</span>
                                                <span class="fs-18 fw-bold text-success">342</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-soft-info p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Sales</span>
                                                <span class="fs-18 fw-bold text-info">$3,420</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-phone-call me-1 text-gray-9"></i> Phone</span>
                                        <span class="text-gray-9">+1 56589 54547</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-mail me-1 text-gray-9"></i> Email</span>
                                        <span class="text-gray-9">alexsmith@example.com</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-shopping-cart me-1 text-gray-9"></i> Last
                                            Purchase</span>
                                        <span class="text-gray-9">28 Jan 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a href="#"
                                                class="avatar rounded-circle bg-soft-orange border border-orange fs-18"><img
                                                    src="@/assets/img/profiles/avatar-39.jpg" alt="img"
                                                    class="rounded-circle"></a>
                                            <div>
                                                <a href="#">Emily Johnson</a>
                                                <span class="text-body fs-13 fw-normal d-block mt-1">#CUS019</span>
                                            </div>
                                        </h4>
                                        <div class="d-flex align-items-center gap-1">
                                            <span
                                                class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                    class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
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
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3 row-gap-2">
                                        <div class="col-lg-6">
                                            <div class="bg-soft-success p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Orders</span>
                                                <span class="fs-18 fw-bold text-success">289</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-soft-info p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Sales</span>
                                                <span class="fs-18 fw-bold text-info">$2,890</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-phone-call me-1 text-gray-9"></i> Phone</span>
                                        <span class="text-gray-9">+1 56589 54547</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-mail me-1 text-gray-9"></i> Email</span>
                                        <span class="text-gray-9">emilyj@example.com</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-shopping-cart me-1 text-gray-9"></i> Last
                                            Purchase</span>
                                        <span class="text-gray-9">15 Mar 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a href="#"
                                                class="avatar rounded-circle bg-soft-orange border border-orange p-1 fs-18">AG</a>
                                            <div>
                                                <a href="#">Andrew George</a>
                                                <span class="text-body fs-13 fw-normal d-block mt-1">#CUS016</span>
                                            </div>
                                        </h4>
                                        <div class="d-flex align-items-center gap-1">
                                            <span
                                                class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                    class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
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
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3 row-gap-2">
                                        <div class="col-lg-6">
                                            <div class="bg-soft-success p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Orders</span>
                                                <span class="fs-18 fw-bold text-success">569</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-soft-info p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Sales</span>
                                                <span class="fs-18 fw-bold text-info">$6,565</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-phone-call me-1 text-gray-9"></i> Phone</span>
                                        <span class="text-gray-9">+1 56589 54547</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-mail me-1 text-gray-9"></i> Email</span>
                                        <span class="text-gray-9">jackde@example.com</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-shopping-cart me-1 text-gray-9"></i> Last
                                            Purchase</span>
                                        <span class="text-gray-9">28 Jan 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a href="#"
                                                class="avatar rounded-circle bg-soft-orange border border-orange fs-18"><img
                                                    src="@/assets/img/profiles/avatar-32.jpg" alt="img"
                                                    class="rounded-circle"></a>
                                            <div>
                                                <a href="#">Sarah Wilson</a>
                                                <span class="text-body fs-13 fw-normal d-block mt-1">#CUS018</span>
                                            </div>
                                        </h4>
                                        <div class="d-flex align-items-center gap-1">
                                            <span
                                                class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                    class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
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
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3 row-gap-2">
                                        <div class="col-lg-6">
                                            <div class="bg-soft-success p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Orders</span>
                                                <span class="fs-18 fw-bold text-success">423</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-soft-info p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Sales</span>
                                                <span class="fs-18 fw-bold text-info">$4,230</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-phone-call me-1 text-gray-9"></i> Phone</span>
                                        <span class="text-gray-9">+1 56589 54547</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-mail me-1 text-gray-9"></i> Email</span>
                                        <span class="text-gray-9">sarahw@example.com</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-shopping-cart me-1 text-gray-9"></i> Last
                                            Purchase</span>
                                        <span class="text-gray-9">28 Jan 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a href="#"
                                                class="avatar rounded-circle bg-soft-teal border border-teal p-1 fs-18">AS</a>
                                            <div>
                                                <a href="#">Alex Smith</a>
                                                <span class="text-body fs-13 fw-normal d-block mt-1">#CUS018</span>
                                            </div>
                                        </h4>
                                        <div class="d-flex align-items-center gap-1">
                                            <span
                                                class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                    class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
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
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3 row-gap-2">
                                        <div class="col-lg-6">
                                            <div class="bg-soft-success p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Orders</span>
                                                <span class="fs-18 fw-bold text-success">342</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-soft-info p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Sales</span>
                                                <span class="fs-18 fw-bold text-info">$3,420</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-phone-call me-1 text-gray-9"></i> Phone</span>
                                        <span class="text-gray-9">+1 56589 54547</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-mail me-1 text-gray-9"></i> Email</span>
                                        <span class="text-gray-9">alexsmith@example.com</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-shopping-cart me-1 text-gray-9"></i> Last
                                            Purchase</span>
                                        <span class="text-gray-9">28 Jan 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a href="#"
                                                class="avatar rounded-circle bg-soft-orange border border-orange fs-18"><img
                                                    src="@/assets/img/profiles/avatar-39.jpg" alt="img"
                                                    class="rounded-circle"></a>
                                            <div>
                                                <a href="#">Emily Johnson</a>
                                                <span class="text-body fs-13 fw-normal d-block mt-1">#CUS019</span>
                                            </div>
                                        </h4>
                                        <div class="d-flex align-items-center gap-1">
                                            <span
                                                class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                    class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
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
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3 row-gap-2">
                                        <div class="col-lg-6">
                                            <div class="bg-soft-success p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Orders</span>
                                                <span class="fs-18 fw-bold text-success">289</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-soft-info p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Sales</span>
                                                <span class="fs-18 fw-bold text-info">$2,890</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-phone-call me-1 text-gray-9"></i> Phone</span>
                                        <span class="text-gray-9">+1 56589 54547</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-mail me-1 text-gray-9"></i> Email</span>
                                        <span class="text-gray-9">emilyj@example.com</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-shopping-cart me-1 text-gray-9"></i> Last
                                            Purchase</span>
                                        <span class="text-gray-9">15 Mar 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a href="#"
                                                class="avatar rounded-circle bg-soft-orange border border-orange fs-18"><img
                                                    src="@/assets/img/profiles/avatar-37.jpg" alt="img"
                                                    class="rounded-circle"></a>
                                            <div>
                                                <a href="#">Anderson Claire</a>
                                                <span class="text-body fs-13 fw-normal d-block mt-1">#CUS017</span>
                                            </div>
                                        </h4>
                                        <div class="d-flex align-items-center gap-1">
                                            <span
                                                class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                    class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
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
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3 row-gap-2">
                                        <div class="col-lg-6">
                                            <div class="bg-soft-success p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Orders</span>
                                                <span class="fs-18 fw-bold text-success">423</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="bg-soft-info p-2 text-center rounded-3">
                                                <span class="d-block mb-1">Sales</span>
                                                <span class="fs-18 fw-bold text-info">$4,230</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-phone-call me-1 text-gray-9"></i> Phone</span>
                                        <span class="text-gray-9">+1 56589 54547</span>
                                    </div>
                                    <div
                                        class="d-flex align-items-center gap-2 flex-wrap justify-content-between mb-2">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-mail me-1 text-gray-9"></i> Email</span>
                                        <span class="text-gray-9">andersonc@example.com</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                                        <span class="d-flex align-items-center"><i
                                                class="icon-shopping-cart me-1 text-gray-9"></i> Last
                                            Purchase</span>
                                        <span class="text-gray-9">28 Jan 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end card -->

            <div class="text-center">
                <a href="#" class="btn btn-white">Load More</a>
            </div>

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
import { all_routes } from '@/router/all_routes.js'
import CustomersModal from '@/components/modal/customers-modal.vue';


export default {
    components: {
        'customers-modal': CustomersModal,
    },
    data() {
        return {
            all_routes,
        }
    },
}
</script>
