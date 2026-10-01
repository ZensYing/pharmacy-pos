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
                        <li class="breadcrumb-item active" aria-current="page">Vendors </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="d-flex align-items-center shadow p-1 rounded-pill border bg-white view-icons">
                        <router-link :to="all_routes.vendors"
                            class="btn btn-sm btn-primary btn-icon p-1 border-0 fs-14 active"><i
                                class="icon-grid-2x2"></i></router-link>
                        <router-link :to="all_routes.vendorsList"
                            class="flex-shrink-0 btn btn-sm btn-icon border-0 ms-1 fs-14"><i
                                class="icon-list-todo"></i></router-link>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#add_vendor"
                        class="btn btn-primary d-flex align-items-center gap-2"> <i class="icon-plus"></i> Add
                        New</a>
                </div>
            </div>

            <!-- start row -->
            <div class="row row-gap-3 mb-4">
                <!-- Item 1 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <div>
                                    <h3 class="fs-14 fw-bold mb-1">Total Vendors</h3>
                                    <p class="mb-0">Since last Month</p>
                                </div>
                                <span class="bg-white rounded-pill py-1 px-3 fs-20"> <i
                                        class="icon-users-round text-primary"></i></span>
                            </div>
                            <h4 class="d-flex align-items-center gap-2 text-primary mb-0">1,284 <span
                                    class="badge bg-success d-flex align-items-center gap-2 fs-10 lh-sm">4.2% <i
                                        class="icon-arrow-up-right"></i></span></h4>
                        </div>
                        <img src="@/assets/img/bg/vendor-bg-1.png" alt="vendor"
                            class="img-fluid position-absolute bottom-0 left-0 w-100">
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <div>
                                    <h3 class="fs-14 fw-bold mb-1">Active Vendors</h3>
                                    <p class="mb-0">Since last week</p>
                                </div>
                                <span class="bg-white rounded-pill py-1 px-3 fs-20"> <i
                                        class="icon-user-check text-warning"></i></span>
                            </div>
                            <h4 class="d-flex align-items-center gap-2 text-danger mb-0">100 <span
                                    class="badge bg-danger d-flex align-items-center gap-2 fs-10 lh-sm">4.2% <i
                                        class="icon-arrow-down-right"></i></span></h4>
                        </div>
                        <img src="@/assets/img/bg/vendor-bg-2.png" alt="vendor"
                            class="img-fluid position-absolute bottom-0 left-0 w-100">
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <div>
                                    <h3 class="fs-14 fw-bold mb-1">Inactive Vendors</h3>
                                    <p class="mb-0">Since last week</p>
                                </div>
                                <span class="bg-white rounded-pill py-1 px-3 fs-20"> <i
                                        class="icon-user-x text-info"></i></span>
                            </div>
                            <h4 class="d-flex align-items-center gap-2 text-info mb-0">236 <span
                                    class="badge bg-success d-flex align-items-center gap-2 fs-10 lh-sm">12.2% <i
                                        class="icon-arrow-up-right"></i></span></h4>
                        </div>
                        <img src="@/assets/img/bg/vendor-bg-3.png" alt="vendor"
                            class="img-fluid position-absolute bottom-0 left-0 w-100">
                    </div>
                </div>
                <!-- Item 4 -->
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-sm-6">
                    <div class="card position-relative mb-0 overflow-hidden">
                        <div class="card-body position-relative z-1">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <div>
                                    <h3 class="fs-14 fw-bold mb-1">Top Vendor</h3>
                                    <p class="mb-0">From Last Week</p>
                                </div>
                                <span class="bg-white rounded-pill py-1 px-3 fs-20"> <i
                                        class="icon-trending-up text-warning"></i></span>
                            </div>
                            <h4 class="d-flex align-items-center gap-2 text-warning mb-0">Apex Agency <span
                                    class="badge bg-danger d-flex align-items-center gap-2 fs-10 lh-sm">4.2% <i
                                        class="icon-arrow-down-right"></i></span></h4>
                        </div>
                        <img src="@/assets/img/bg/vendor-bg-4.png" alt="vendor"
                            class="img-fluid position-absolute bottom-0 left-0 w-100">
                    </div>
                </div>
            </div>
            <!-- end row -->

            <!-- start card -->
            <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-4">
                <div class="input-icon input-icon-start position-relative">
                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <div class="d-flex align-items-center flex-wrap gap-2">
                    <!-- Filter -->
                    <a href="#" class="btn btn-white btn-icon" data-bs-toggle="offcanvas"
                        data-bs-target="#add_filter" aria-controls="add_filter"><i class="icon-funnel"></i></a>
                    <!-- import -->
                    <a href="javascript:void(0);" class="btn btn-white shadow">
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
                                    <a href="javascript:void(0);" class="dropdown-item rounded">Export as PDF</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded">Export as Excel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end card -->

            <!-- start row -->
            <div class="row row-gap-4">
                <!-- Item 1 -->
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="card mb-0 rounded-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                                <div class="d-flex align-items-center gap-3">
                                    <span class="avatar avatar-lg bg-white rounded-circle"><a href="#"><img
                                                src="@/assets/img/supplier/supplier-img-5.jpg" alt="icon"
                                                class="rounded-circle"></a></span>
                                    <div>
                                        <h5 class="fs-14 fw-bold mb-2"><a href="#">Primecare Traders</a></h5>
                                        <span class="badge bg-light fs-13 text-body">#VND212</span>
                                    </div>
                                </div>
                                <span class="badge badge-soft-success d-inline-flex align-items-center gap-1"><i
                                        class="fa-solid fa-circle fs-5"></i> Active</span>
                            </div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-user fs-16 text-dark"></i> Robert Chen (Account Manager)</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-phone fs-16 text-dark"></i> (704) 555-0127</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-mail fs-16 text-dark"></i> nvt.lsst.nute@gmail.com</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-3 fs-13"><i
                                    class="icon-map-pin fs-16 text-dark"></i> 2715 Ash Dr. San Jose, South Dakota
                                83475</div>
                            <div class="mt-4 p-3 bg-light rounded-3">
                                <div class="row row-gap-3">
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Total Purchases</p>
                                        <h6 class="fw-medium mb-0 fs-14">$40,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Outstanding</p>
                                        <h6 class="fw-medium text-danger mb-0 fs-14">$50,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Last Order</p>
                                        <h6 class="fw-medium mb-0 fs-14">25 Apr 2026</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Rating</p>
                                        <div class="d-flex align-items-center gap-1 text-dark">
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="card mb-0 rounded-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                                <div class="d-flex align-items-center gap-3">
                                    <span class="avatar avatar-lg bg-white rounded-circle"><a href="#"><img
                                                src="@/assets/img/supplier/supplier-img-2.jpg" alt="icon"
                                                class="rounded-circle"></a></span>
                                    <div>
                                        <h5 class="fs-14 fw-bold mb-2"><a href="#">CareWell Agencies</a></h5>
                                        <span class="badge bg-light fs-13 text-body">#VND209</span>
                                    </div>
                                </div>
                                <span class="badge badge-soft-success d-inline-flex align-items-center gap-1"><i
                                        class="fa-solid fa-circle fs-5"></i> Active</span>
                            </div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-user fs-16 text-dark"></i> Robert Chen (Account Manager)</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-phone fs-16 text-dark"></i> (704) 555-0127</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-mail fs-16 text-dark"></i> nvt.lsst.nute@gmail.com</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-3 fs-13"><i
                                    class="icon-map-pin fs-16 text-dark"></i> 2715 Ash Dr. San Jose, South Dakota
                                83475</div>
                            <div class="mt-4 p-3 bg-light rounded-3">
                                <div class="row row-gap-3">
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Total Purchases</p>
                                        <h6 class="fw-medium mb-0 fs-14">$130,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Outstanding</p>
                                        <h6 class="fw-medium text-danger mb-0 fs-14">$10,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Last Order</p>
                                        <h6 class="fw-medium mb-0 fs-14">12 Jan 2026</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Rating</p>
                                        <div class="d-flex align-items-center gap-1 text-dark">
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="card mb-0 rounded-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                                <div class="d-flex align-items-center gap-3">
                                    <span class="avatar avatar-lg bg-white rounded-circle"><a href="#"><img
                                                src="@/assets/img/supplier/supplier-img-3.jpg" alt="icon"
                                                class="rounded-circle"></a></span>
                                    <div>
                                        <h5 class="fs-14 fw-bold mb-2"><a href="#">NovaHealth Pharma</a></h5>
                                        <span class="badge bg-light fs-13 text-body">#VND255</span>
                                    </div>
                                </div>
                                <span class="badge badge-soft-success d-inline-flex align-items-center gap-1"><i
                                        class="fa-solid fa-circle fs-5"></i> Active</span>
                            </div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-user fs-16 text-dark"></i> Robert Chen (Account Manager)</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-phone fs-16 text-dark"></i> (704) 555-0127</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-mail fs-16 text-dark"></i> nvt.lsst.nute@gmail.com</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-3 fs-13"><i
                                    class="icon-map-pin fs-16 text-dark"></i> 2715 Ash Dr. San Jose, South Dakota
                                83475</div>
                            <div class="mt-4 p-3 bg-light rounded-3">
                                <div class="row row-gap-3">
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Total Purchases</p>
                                        <h6 class="fw-medium mb-0 fs-14">$10,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Outstanding</p>
                                        <h6 class="fw-medium text-danger mb-0 fs-14">$3,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Last Order</p>
                                        <h6 class="fw-medium mb-0 fs-14">12 Feb 2026</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Rating</p>
                                        <div class="d-flex align-items-center gap-1 text-dark">
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Item 4 -->
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="card mb-0 rounded-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                                <div class="d-flex align-items-center gap-3">
                                    <span class="avatar avatar-lg bg-white rounded-circle"><a href="#"><img
                                                src="@/assets/img/supplier/supplier-img-4.jpg" alt="icon"
                                                class="rounded-circle"></a></span>
                                    <div>
                                        <h5 class="fs-14 fw-bold mb-2"><a href="#">Lifeline Traders</a></h5>
                                        <span class="badge bg-light fs-13 text-body">#VND200</span>
                                    </div>
                                </div>
                                <span class="badge badge-soft-success d-inline-flex align-items-center gap-1"><i
                                        class="fa-solid fa-circle fs-5"></i> Active</span>
                            </div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-user fs-16 text-dark"></i> Robert Chen (Account Manager)</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-phone fs-16 text-dark"></i> (704) 555-0127</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-mail fs-16 text-dark"></i> nvt.lsst.nute@gmail.com</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-3 fs-13"><i
                                    class="icon-map-pin fs-16 text-dark"></i> 2715 Ash Dr. San Jose, South Dakota
                                83475</div>
                            <div class="mt-4 p-3 bg-light rounded-3">
                                <div class="row row-gap-3">
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Total Purchases</p>
                                        <h6 class="fw-medium mb-0 fs-14">$50,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Outstanding</p>
                                        <h6 class="fw-medium text-danger mb-0 fs-14">$30,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Last Order</p>
                                        <h6 class="fw-medium mb-0 fs-14">12 Mar 2026</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Rating</p>
                                        <div class="d-flex align-items-center gap-1 text-dark">
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Item 5 -->
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="card mb-0 rounded-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                                <div class="d-flex align-items-center gap-3">
                                    <span class="avatar avatar-lg bg-white rounded-circle"><a href="#"><img
                                                src="@/assets/img/supplier/supplier-img-5.jpg" alt="icon"
                                                class="rounded-circle"></a></span>
                                    <div>
                                        <h5 class="fs-14 fw-bold mb-2"><a href="#">Primecare Traders</a></h5>
                                        <span class="badge bg-light fs-13 text-body">#VND299</span>
                                    </div>
                                </div>
                                <span class="badge badge-soft-danger d-inline-flex align-items-center gap-1"><i
                                        class="fa-solid fa-circle fs-5"></i> Inactive</span>
                            </div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-user fs-16 text-dark"></i> Robert Chen (Account Manager)</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-phone fs-16 text-dark"></i> (704) 555-0127</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-mail fs-16 text-dark"></i> nvt.lsst.nute@gmail.com</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-3 fs-13"><i
                                    class="icon-map-pin fs-16 text-dark"></i> 2715 Ash Dr. San Jose, South Dakota
                                83475</div>
                            <div class="mt-4 p-3 bg-light rounded-3">
                                <div class="row row-gap-3">
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Total Purchases</p>
                                        <h6 class="fw-medium mb-0 fs-14">$40,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Outstanding</p>
                                        <h6 class="fw-medium text-body mb-0 fs-14">-</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Last Order</p>
                                        <h6 class="fw-medium mb-0 fs-14">25 Apr 2026</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Rating</p>
                                        <div class="d-flex align-items-center gap-1 text-dark">
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Item 6 -->
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="card mb-0 rounded-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                                <div class="d-flex align-items-center gap-3">
                                    <span class="avatar avatar-lg bg-white rounded-circle"><a href="#"><img
                                                src="@/assets/img/supplier/supplier-img-6.jpg" alt="icon"
                                                class="rounded-circle"></a></span>
                                    <div>
                                        <h5 class="fs-14 fw-bold mb-2"><a href="#">Zenith Distributors</a></h5>
                                        <span class="badge bg-light fs-13 text-body">#VND288</span>
                                    </div>
                                </div>
                                <span class="badge badge-soft-success d-inline-flex align-items-center gap-1"><i
                                        class="fa-solid fa-circle fs-5"></i> Active</span>
                            </div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-user fs-16 text-dark"></i> Robert Chen (Account Manager)</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-phone fs-16 text-dark"></i> (704) 555-0127</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-2 fs-13"><i
                                    class="icon-mail fs-16 text-dark"></i> nvt.lsst.nute@gmail.com</div>
                            <div class="d-flex align-items-center gap-2 text-body mb-3 fs-13"><i
                                    class="icon-map-pin fs-16 text-dark"></i> 2715 Ash Dr. San Jose, South Dakota
                                83475</div>
                            <div class="mt-4 p-3 bg-light rounded-3">
                                <div class="row row-gap-3">
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Total Purchases</p>
                                        <h6 class="fw-medium mb-0 fs-14">$230,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Outstanding</p>
                                        <h6 class="fw-medium text-danger mb-0 fs-14">$50,000</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Last Order</p>
                                        <h6 class="fw-medium mb-0 fs-14">05 Aug 2026</h6>
                                    </div>
                                    <div class="col-6">
                                        <p class="text-body mb-1 fs-12">Rating</p>
                                        <div class="d-flex align-items-center gap-1 text-dark">
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                            <i class="icon-star fs-14"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

    <vendors-modal></vendors-modal>

</template>

<script>
import { all_routes } from '@/router/all_routes.js'

const data = [
    {
        "ID": "#VND299",
        "Image": "supplier-img-1.jpg",
        "VendorName": "MedLife Distributors",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$120,897",
        "Outstanding": "-",
        "LastOrder": "25 Apr 2026",
        "Rating": 5,
        "Status": "Active"
    },
    {
        "ID": "#VND291",
        "Image": "supplier-img-2.jpg",
        "VendorName": "HealthCare Pharma",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$20,000",
        "Outstanding": "$20",
        "LastOrder": "12 Jan 2026",
        "Rating": 4,
        "Status": "Inactive"
    },
    {
        "ID": "#VND292",
        "Image": "supplier-img-3.jpg",
        "VendorName": "GreenCross Medicals",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$100,004",
        "Outstanding": "-",
        "LastOrder": "12 Feb 2026",
        "Rating": 5,
        "Status": "Active"
    },
    {
        "ID": "#VND294",
        "Image": "supplier-img-4.jpg",
        "VendorName": "NovaCure Pharma",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$350,876",
        "Outstanding": "$15",
        "LastOrder": "12 Mar 2026",
        "Rating": 5,
        "Status": "Active"
    },
    {
        "ID": "#VND295",
        "Image": "supplier-img-5.jpg",
        "VendorName": "CareWell Agency",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$12,000",
        "Outstanding": "$20",
        "LastOrder": "05 Aug 2026",
        "Rating": 4,
        "Status": "Active"
    },
    {
        "ID": "#VND296",
        "Image": "supplier-img-6.jpg",
        "VendorName": "Zenith Distributors",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$25,872",
        "Outstanding": "$25",
        "LastOrder": "05 Aug 2026",
        "Rating": 5,
        "Status": "Inactive"
    },
    {
        "ID": "#VND297",
        "Image": "supplier-img-7.jpg",
        "VendorName": "LifeLine Pharma",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$130,232",
        "Outstanding": "-",
        "LastOrder": "10 Dec 2026",
        "Rating": 4,
        "Status": "Active"
    },
    {
        "ID": "#VND298",
        "Image": "supplier-img-8.jpg",
        "VendorName": "SafeMeds Distribution",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$182,000",
        "Outstanding": "$180",
        "LastOrder": "21 Aug 2026",
        "Rating": 3,
        "Status": "Inactive"
    },
    {
        "ID": "#VND210",
        "Image": "supplier-img-9.jpg",
        "VendorName": "NovaHealth Pharma",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$60,000",
        "Outstanding": "$30",
        "LastOrder": "17 Nov 2026",
        "Rating": 5,
        "Status": "Active"
    },
    {
        "ID": "#VND219",
        "Image": "supplier-img-10.jpg",
        "VendorName": "PrimeCare Pharma",
        "ContactPerson": "Robert Chen (Account Manager)",
        "Phone": "(704) 555-0127",
        "Email": "nvt.lsst.nute@gmail.com",
        "Address": "2715 Ash Dr. San Jose, South Dakota 83475",
        "TotalPurchase": "$800,654",
        "Outstanding": "-",
        "LastOrder": "10 Dec 2026",
        "Rating": 5,
        "Status": "Active"
    }
]

export default {
    data() {
        return {
            all_routes,
            searchQuery: "",
            data,
            currentPage: 1,
            pageSize: 9,
            pageSizeOptions: [3, 6, 9, 18],
            itemToDelete: null,
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/supplier/${imageName}`, import.meta.url).href;
        },
        getBgUrl(imageName) {
            return new URL(`/src/assets/img/bg/${imageName}`, import.meta.url).href;
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
                    record.VendorName.toLowerCase().includes(query) ||
                    record.ID.toLowerCase().includes(query) ||
                    record.ContactPerson.toLowerCase().includes(query) ||
                    record.Email.toLowerCase().includes(query) ||
                    record.Phone.toLowerCase().includes(query) ||
                    record.Address.toLowerCase().includes(query) ||
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
}
</script>
