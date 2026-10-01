<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content pb-0">

            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <div>
                    <h3 class="display-4 fw-bold mb-1 d-flex align-items-center gap-2 flex-wrap">Welcome, Andrew
                        Merkel <img src="@/assets/img/icons/symbol.svg" alt="icon"></h3>
                    <p class="fs-13 mb-0">This report was generated on 25 Feb 2026 at 8:45 PM - <a
                            href="javascript:void(0);" class="link-info">Refresh Report</a></p>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-2">
                    <router-link :to="all_routes.pos" class="btn btn-danger-gradient d-inline-flex align-items-center gap-2"><i
                            class="icon-shopping-cart"></i>POS </router-link>
                    <div class="input-group input-group-end position-relative w-fit">
                        <input type="text" class="form-control date-range bookingrange rounded-end"  ref="dateRangeInput">
                        <span class="input-icon-addon fs-16 text-dark">
                            <i class="icon-calendar-fold"></i>
                        </span>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
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

            <div class="card">
                <div class="card-body">
                    <div
                        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xxl-5 gx-3 gy-4 justify-content-center">
                        <div class="border-xxl-end">
                            <h3 class="d-flex align-items-center gap-2 section-title">$8,492<span
                                    class="fw-normal fs-14 text-body">Sales</span></h3>
                            <div class="d-flex align-items-center gap-1 flex-wrap">
                                <span
                                    class="badge badge-sm badge-soft-danger d-inline-flex align-items-center">9.6%<i
                                        class="icon-arrow-down-right ms-1"></i></span>
                                <p class="fs-13 mb-0">Since Last Month</p>
                            </div>
                        </div>
                        <div class="border-xxl-end ps-xxl-4">
                            <h3 class="d-flex align-items-center gap-2 section-title">$4,524<span
                                    class="fw-normal fs-14 text-body">Purchases</span></h3>
                            <div class="d-flex align-items-center gap-1 flex-wrap">
                                <span
                                    class="badge badge-sm badge-soft-success d-inline-flex align-items-center">4.2%<i
                                        class="icon-arrow-up-right ms-1"></i></span>
                                <p class="fs-13 mb-0">Since Last Month</p>
                            </div>
                        </div>
                        <div class="border-xxl-end ps-xxl-4">
                            <h3 class="d-flex align-items-center gap-2 section-title">9,492<span
                                    class="fw-normal fs-14 text-body">Medicines</span></h3>
                            <div class="d-flex align-items-center gap-1 flex-wrap">
                                <span
                                    class="badge badge-sm badge-soft-success d-inline-flex align-items-center">4.2%<i
                                        class="icon-arrow-up-right ms-1"></i></span>
                                <p class="fs-13 mb-0">Since Last Month</p>
                            </div>
                        </div>
                        <div class="border-xxl-end ps-xxl-4">
                            <h3 class="d-flex align-items-center gap-2 section-title">1,234<span
                                    class="fw-normal fs-14 text-body">Prescriptions</span></h3>
                            <div class="d-flex align-items-center gap-1 flex-wrap">
                                <span
                                    class="badge badge-sm badge-soft-success d-inline-flex align-items-center">4.2%<i
                                        class="icon-arrow-up-right ms-1"></i></span>
                                <p class="fs-13 mb-0">Since Last Month</p>
                            </div>
                        </div>
                        <div class="ps-xxl-4">
                            <h3 class="d-flex align-items-center gap-2 section-title">23<span
                                    class="fw-normal fs-14 text-body">Low Stock Alerts</span></h3>
                            <div class="d-flex align-items-center gap-1 flex-wrap">
                                <span
                                    class="badge badge-sm badge-soft-success d-inline-flex align-items-center">4.2%<i
                                        class="icon-arrow-up-right ms-1"></i></span>
                                <p class="fs-13 mb-0">Since Last Month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- start row -->
            <div class="row">

                <div class="col-xxl-8 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <h4 class="mb-0">Sales & Purchase</h4>
                                <div class="dropdown">
                                    <a href="javascript:void(0);"
                                        class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                        data-bs-toggle="dropdown">
                                        <i class="icon-calendar"></i>Weekly
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded">Weekly</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded">Monthly</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded">Yearly</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                <div class="d-flex align-items-center gap-3 flex-wrap">
                                    <div class="d-flex align-items-center gap-2 flex-wrap">
                                        <h5 class="mb-0 d-flex align-items-center gap-2"><span
                                                class="fw-normal fs-14 text-body">Sales</span> $12,456</h5>
                                        <span
                                            class="badge badge-sm bg-success text-white d-inline-flex align-items-center"><i
                                                class="icon-arrow-up-right me-1"></i>20.2%</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap">
                                        <h5 class="mb-0 d-flex align-items-center gap-2"><span
                                                class="fw-normal fs-14 text-body">Purchase</span> $8,456</h5>
                                        <span
                                            class="badge badge-sm bg-success text-white d-inline-flex align-items-center"><i
                                                class="icon-arrow-up-right me-1"></i>12.4%</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                    <span
                                        class="badge bg-white text-dark d-inline-flex align-items-center shadow"><i
                                            class="fa-solid fa-circle fs-8 text-secondary me-1"></i>Purchase</span>
                                    <span
                                        class="badge bg-white text-dark d-inline-flex align-items-center shadow"><i
                                            class="fa-solid fa-circle fs-8 text-primary me-1"></i>Sales</span>
                                </div>
                            </div>
                            <div id="sales-purchase-chart">
                                <apexchart
                                    type="area"
                                    height="350"
                                    :options="salesPurchaseChart.chartOptions"
                                    :series="salesPurchaseChart.series"
                                >
                                </apexchart>
                            </div>
                            <h6 class="mb-2">Last Week Statistics</h6>
                            <div class="row g-4">
                                <div class="col-sm-6">
                                    <div
                                        class="border rounded-3 p-3 d-flex align-items-center gap-2 justify-content-between">
                                        <div>
                                            <p class="fw-bold text-dark mb-1">Sales</p>
                                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                                <h6 class="sub-title mb-0">$15,656</h6>
                                                <span
                                                    class="badge badge-sm badge-soft-success d-inline-flex align-items-center">2%<i
                                                        class="icon-arrow-up-right ms-1"></i></span>
                                                <p class="mb-0">From Last Week</p>
                                            </div>
                                        </div>
                                        <div class="avatar avatar-md bg-primary flex-shrink-0">
                                            <img src="@/assets/img/icons/trending.svg" alt="icon"
                                                class="img-fluid w-auto h-auto">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div
                                        class="border rounded-3 p-3 d-flex align-items-center gap-2 justify-content-between">
                                        <div>
                                            <p class="fw-bold text-dark mb-1">Purchase</p>
                                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                                <h6 class="sub-title mb-0">$8,985</h6>
                                                <span
                                                    class="badge badge-sm badge-soft-success d-inline-flex align-items-center">2%<i
                                                        class="icon-arrow-up-right ms-1"></i></span>
                                                <p class="mb-0">From Last Week</p>
                                            </div>
                                        </div>
                                        <div class="avatar avatar-md bg-secondary flex-shrink-0">
                                            <img src="@/assets/img/icons/cart.svg" alt="icon"
                                                class="img-fluid w-auto h-auto">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->
                </div> <!-- end col -->

                <div class="col-xxl-4 d-flex flex-column">

                    <!-- start row -->
                    <div class="row">

                        <div class="col-xxl-12 col-md-6 d-flex">

                            <div class="card bg-dark flex-fill">
                                <div class="card-body">
                                    <div
                                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <h4 class="mb-0 text-white">Medicine Statistics</h4>
                                        <button type="button"
                                            class="btn btn-icon bg-white bg-opacity-10 text-white rounded-circle">
                                            <i class="icon-refresh-ccw"></i>
                                        </button>
                                    </div>
                                    <div class="row align-items-end g-3">
                                        <div class="col-sm-5">
                                            <div class="vstack gap-2">
                                                <div class="bg-primary-gradient-200 rounded-3 p-2">
                                                    <p class="fs-13 text-white mb-1">Low Stock</p>
                                                    <h5 class="fs-16 text-white mb-0">5868</h5>
                                                </div>
                                                <div class="bg-secondary-gradient-200 rounded-3 p-2">
                                                    <p class="fs-13 text-white mb-1">Available</p>
                                                    <h5 class="fs-16 text-white mb-0">2214</h5>
                                                </div>
                                                <div class="bg-danger-gradient-200 rounded-3 p-2">
                                                    <p class="fs-13 text-white mb-1">Out of Stock</p>
                                                    <h5 class="fs-16 text-white mb-0">700</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-7">
                                            <div id="statistics-chart">
                                                <apexchart
                                                    type="bar"
                                                    height="180"
                                                    :options="statisticsChart.chartOptions"
                                                    :series="statisticsChart.series"
                                                >
                                                </apexchart>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end card body -->
                            </div> <!-- end card -->

                        </div>

                        <div class="col-xxl-12 col-md-6 d-flex">

                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div
                                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <h4 class="mb-0">Weekly Sales</h4>
                                        <button type="button" class="btn btn-icon btn-white rounded-circle">
                                            <i class="icon-refresh-ccw"></i>
                                        </button>
                                    </div>
                                    <div id="sale-chart">
                                        <apexchart
                                            type="bar"
                                            height="150"
                                            :options="saleChart.chartOptions"
                                            :series="saleChart.series"
                                        >
                                        </apexchart>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div>
                                            <p class="mb-1">Total Sales</p>
                                            <h5 class="mb-0">$5,456</h5>
                                        </div>
                                        <div>
                                            <div
                                                class="d-flex align-items-center gap-1 border rounded-pill p-1 pe-2">
                                                <span
                                                    class="badge badge-sm bg-danger text-white d-inline-flex align-items-center">9.6%<i
                                                        class="icon-arrow-down-right ms-1"></i></span>
                                                <p class="fs-13 mb-0">Since Yesterday</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end card body -->
                            </div> <!-- end card -->

                        </div>

                    </div>
                    <!-- end row -->

                </div> <!-- end col -->

            </div>
            <!-- end row -->

            <!-- start row -->
            <div class="row">

                <div class="col-xxl-5 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <h4 class="mb-0">Inventory by Category</h4>
                                <div class="d-flex align-items-center gap-2">
                                    <a href="#" class="btn btn-icon btn-white rounded-circle">
                                        <i class="icon-plus"></i>
                                    </a>
                                    <button type="button" class="btn btn-icon btn-white rounded-circle">
                                        <i class="icon-refresh-ccw"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="vstack gap-3 pb-4 mb-4 border-bottom">
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <p class="mb-0 w-80 flex-shrink-0">Tablet</p>
                                    <div class="progress progress-2xl rounded-pill w-100" role="progressbar"
                                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-transparent bg-primary-gradient-100 text-start d-block rounded-pill"
                                            style="width: 80%;"><span
                                                class="badge bg-white text-dark border">1565</span></div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <p class="mb-0 w-80 flex-shrink-0">Syrups</p>
                                    <div class="progress progress-2xl rounded-pill w-100" role="progressbar"
                                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-transparent bg-secondary-gradient-100 text-start d-block rounded-pill"
                                            style="width: 70%;"><span
                                                class="badge bg-white text-dark border">1226</span></div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <p class="mb-0 w-80 flex-shrink-0">Capsules</p>
                                    <div class="progress progress-2xl rounded-pill w-100" role="progressbar"
                                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-transparent bg-info-gradient-100 text-start d-block rounded-pill"
                                            style="width: 60%;"><span
                                                class="badge bg-white text-dark border">1145</span></div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <p class="mb-0 w-80 flex-shrink-0">Injections</p>
                                    <div class="progress progress-2xl rounded-pill w-100" role="progressbar"
                                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-transparent bg-pink-gradient-100 text-start d-block rounded-pill"
                                            style="width: 50%;"><span
                                                class="badge bg-white text-dark border">964</span></div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <p class="mb-0 w-80 flex-shrink-0">Ointments</p>
                                    <div class="progress progress-2xl rounded-pill w-100" role="progressbar"
                                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-transparent bg-purple-gradient-100 text-start d-block rounded-pill"
                                            style="width: 40%;"><span
                                                class="badge bg-white text-dark border">865</span></div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <p class="mb-0 w-80 flex-shrink-0">Drops</p>
                                    <div class="progress progress-2xl rounded-pill w-100" role="progressbar"
                                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-transparent bg-teal-gradient-100 text-start d-block rounded-pill"
                                            style="width: 30%;"><span
                                                class="badge bg-white text-dark border">621</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-sm-3 g-3">
                                <div class="text-center">
                                    <h5 class="section-title mb-1">9,492</h5>
                                    <p class="mb-0">Medicines</p>
                                </div>
                                <div class="text-center">
                                    <h5 class="section-title mb-1">26</h5>
                                    <p class="mb-0">Categories</p>
                                </div>
                                <div class="text-center">
                                    <h5 class="section-title mb-1">03</h5>
                                    <p class="mb-0">Low Stock</p>
                                </div>
                            </div>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->
                </div> <!-- end col -->

                <div class="col-xxl-4 col-lg-6 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <h4 class="mb-0">Stock Alerts</h4>
                                <button type="button" class="btn btn-icon btn-white rounded-circle">
                                    <i class="icon-refresh-ccw"></i>
                                </button>
                            </div>
                            <div class="vstack gap-3">
                                <div
                                    class="d-flex align-items-sm-center justify-content-between gap-2 flex-column flex-sm-row">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-2 bg-soft-primary">
                                            <i class="icon-pill-bottle"></i>
                                        </div>
                                        <div>
                                            <p class="fw-bold text-dark mb-1">Paracetamol 500mg</p>
                                            <p class="mb-0">#RAC0124</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>0 in Stock</span>
                                    </div>
                                </div>
                                <div
                                    class="d-flex align-items-sm-center justify-content-between gap-2 flex-column flex-sm-row">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-2 bg-soft-primary">
                                            <i class="icon-syringe"></i>
                                        </div>
                                        <div>
                                            <p class="fw-bold text-dark mb-1">Tetanus Toxoid</p>
                                            <p class="mb-0">#RAC0414</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>0 in Stock</span>
                                    </div>
                                </div>
                                <div
                                    class="d-flex align-items-sm-center justify-content-between gap-2 flex-column flex-sm-row">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-2 bg-soft-primary">
                                            <i class="icon-pill"></i>
                                        </div>
                                        <div>
                                            <p class="fw-bold text-dark mb-1">Ondansetron</p>
                                            <p class="mb-0">#RAC0142</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-info d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>36 in Stock</span>
                                    </div>
                                </div>
                                <div
                                    class="d-flex align-items-sm-center justify-content-between gap-2 flex-column flex-sm-row">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-2 bg-soft-primary">
                                            <i class="icon-pill"></i>
                                        </div>
                                        <div>
                                            <p class="fw-bold text-dark mb-1">Citrizen 40mg</p>
                                            <p class="mb-0">#RAC0142</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-info d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>36 in Stock</span>
                                    </div>
                                </div>
                                <div
                                    class="d-flex align-items-sm-center justify-content-between gap-2 flex-column flex-sm-row">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-2 bg-soft-primary">
                                            <i class="icon-microscope"></i>
                                        </div>
                                        <div>
                                            <p class="fw-bold text-dark mb-1">Infrared Thermometer</p>
                                            <p class="mb-0">#RAC0741</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-purple d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>27 in Stock</span>
                                    </div>
                                </div>
                                <div
                                    class="d-flex align-items-sm-center justify-content-between gap-2 flex-column flex-sm-row">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-2 bg-soft-primary">
                                            <i class="icon-pill"></i>
                                        </div>
                                        <div>
                                            <p class="fw-bold text-dark mb-1">Axer 400mg</p>
                                            <p class="mb-0">#RAC0471</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="badge badge-soft-orange d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>32 in Stock</span>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->
                </div> <!-- end col -->

                <div class="col-xxl-3 col-lg-6 col-md-6 d-flex flex-column">

                    <!-- start row -->
                    <div class="row">

                        <div class="col-lg-12 col-md-6 d-flex">
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div
                                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <h4 class="mb-0">Expired</h4>
                                        <a href="#" class="btn btn-icon btn-white rounded-circle">
                                            <i class="icon-arrow-up-right"></i>
                                        </a>
                                    </div>
                                    <div class="bg-danger-gradient p-2 rounded-3 mb-2">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <div
                                                    class="avatar avatar-md avatar-rounded bg-white bg-opacity-10 me-2">
                                                    <i class="icon-syringe"></i>
                                                </div>
                                                <div>
                                                    <p class="fw-medium text-white mb-1">Tetanus Toxoid</p>
                                                    <p class="fs-13 text-white mb-0">#RAC1245</p>
                                                </div>
                                            </div>
                                            <p class="fs-13 text-white mb-0">18 Mar</p>
                                        </div>
                                    </div>
                                    <div class="bg-danger-gradient p-2 rounded-3">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <div
                                                    class="avatar avatar-md avatar-rounded bg-white bg-opacity-10 me-2">
                                                    <i class="icon-pill"></i>
                                                </div>
                                                <div>
                                                    <p class="fw-medium text-white mb-1">Cetirizine 10mg</p>
                                                    <p class="fs-13 text-white mb-0">#RAC3122</p>
                                                </div>
                                            </div>
                                            <p class="fs-13 text-white mb-0">18 Mar</p>
                                        </div>
                                    </div>
                                </div> <!-- end card body -->
                            </div> <!-- end card -->

                        </div> <!-- end col -->

                        <div class="col-lg-12 col-md-6 d-flex">

                            <div class="card flex-fill">
                                <div class="card-body pb-0">
                                    <div
                                        class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <h4 class="mb-0">Near Expiry</h4>
                                        <button type="button" class="btn btn-icon btn-white rounded-circle">
                                            <i class="icon-refresh-ccw"></i>
                                        </button>
                                    </div>
                                    <div id="expiry-chart">
                                        <apexchart
                                            type="bar"
                                            height="110"
                                            :options="expiryChart.chartOptions"
                                            :series="expiryChart.series"
                                        >
                                        </apexchart>
                                    </div>
                                </div> <!-- end card body -->
                            </div> <!-- end card -->

                        </div> <!-- end col -->

                    </div>
                    <!-- end row -->

                </div> <!-- end col -->

            </div>
            <!-- end row -->

            <!-- start row -->
            <div class="row">

                <div class="col-xxl-4 col-md-6 d-flex">
                    <div class="card flex-fill">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <h4 class="mb-0">Prescription Status</h4>
                                <button type="button" class="btn btn-icon btn-white rounded-circle">
                                    <i class="icon-refresh-ccw"></i>
                                </button>
                            </div>
                            <div class="text-center position-relative mb-3">
                                <div>
                                    <!-- <canvas id="prescription-chart" class="mx-auto"> -->
                                        <div class="mx-auto" style="width: 250px; height: 250px;">
                                            <Doughnut :data="chartData" :options="chartOptions" />
                                        </div>
                                    <!-- </canvas> -->
                                </div>
                                <div class="position-absolute top-50 start-50 translate-middle">
                                    <h5 class="mb-1 section-title">1,234</h5>
                                    <p class="mb-0">Prescriptions</p>
                                </div>
                            </div>
                            <div class="vstack gap-2">
                                <div
                                    class="bg-light border rounded-3 p-2 d-flex align-items-center justify-content-between">
                                    <h5 class="mb-0 d-inline-flex align-items-center gap-2"><i
                                            class="fa-solid fa-circle fs-8 text-info"></i>845 <span
                                            class="fs-14 fw-normal">Completed</span></h5>
                                    <span
                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center">8.2%<i
                                            class="icon-arrow-up-right ms-1"></i></span>
                                </div>
                                <div
                                    class="bg-light border rounded-3 p-2 d-flex align-items-center justify-content-between">
                                    <h5 class="mb-0 d-inline-flex align-items-center gap-2"><i
                                            class="fa-solid fa-circle fs-8 text-warning"></i>312 <span
                                            class="fs-14 fw-normal">Pending</span></h5>
                                    <span
                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center">5.1%<i
                                            class="icon-arrow-up-right ms-1"></i></span>
                                </div>
                                <div
                                    class="bg-light border rounded-3 p-2 d-flex align-items-center justify-content-between">
                                    <h5 class="mb-0 d-inline-flex align-items-center gap-2"><i
                                            class="fa-solid fa-circle fs-8 text-danger"></i>77 <span
                                            class="fs-14 fw-normal">Cancelled</span></h5>
                                    <span
                                        class="badge badge-sm badge-soft-danger d-inline-flex align-items-center">9.6%<i
                                            class="icon-arrow-down-right ms-1"></i></span>
                                </div>
                            </div>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->
                </div> <!-- end col -->

                <div class="col-xxl-4 col-md-6 d-flex flex-column">
                    <div class="card z-1 overflow-hidden flex-fill">
                        <div class="card-body">
                            <div class="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                <div class="avatar avatar-rounded bg-primary-gradient">
                                    <i class="icon-file-text fs-20"></i>
                                </div>
                                <div>
                                    <span class="badge bg-white text-dark border">8650 Invoices</span>
                                </div>
                            </div>
                            <p class="mb-1">Total Invoices</p>
                            <h3 class="mb-0">$80,658.21</h3>
                        </div> <!-- end card body -->
                        <img src="@/assets/img/bg/overaly-01.png" alt="bg"
                            class="position-absolute top-0 start-0 h-100 z-n1">
                    </div> <!-- end card -->

                    <div class="card z-1 overflow-hidden flex-fill">
                        <div class="card-body">
                            <div class="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                <div class="avatar avatar-rounded bg-info">
                                    <i class="icon-file-input fs-20"></i>
                                </div>
                                <div>
                                    <span class="badge bg-white text-dark border">7586 Invoices</span>
                                </div>
                            </div>
                            <p class="mb-1">Paid Invoices</p>
                            <h3 class="mb-0">$72,565.00</h3>
                        </div> <!-- end card body -->
                        <img src="@/assets/img/bg/overaly-02.png" alt="bg"
                            class="position-absolute top-0 start-0 h-100 z-n1">
                    </div> <!-- end card -->

                    <div class="card z-1 overflow-hidden flex-fill">
                        <div class="card-body">
                            <div class="d-flex justify-content-between flex-wrap gap-2 mb-2">
                                <div class="avatar avatar-rounded bg-danger-gradient">
                                    <i class="icon-file-x fs-20"></i>
                                </div>
                                <div>
                                    <span class="badge bg-white text-dark border">426 Invoices</span>
                                </div>
                            </div>
                            <p class="mb-1">Invoice on Due</p>
                            <h3 class="mb-0">$8,143.21</h3>
                        </div> <!-- end card body -->
                        <img src="@/assets/img/bg/overaly-03.png" alt="bg"
                            class="position-absolute top-0 start-0 h-100 z-n1">
                    </div> <!-- end card -->
                </div> <!-- end col -->

                <div class="col-xxl-4 d-flex">
                    <div class="card flex-fill">
                        <div class="card-header">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h4 class="mb-0">Recent Transactions</h4>
                                <button type="button" class="btn btn-icon btn-white rounded-circle">
                                    <i class="icon-refresh-ccw"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body bg-light">
                            <div class="row gx-3">
                                <div class="col-sm-4">
                                    <div class="border bg-white rounded-3 p-2 text-center mb-3">
                                        <p class="mb-2">Cash</p>
                                        <h5 class="mb-0">$2,454</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="border bg-white rounded-3 p-2 text-center mb-3">
                                        <p class="mb-2">UPI</p>
                                        <h5 class="mb-0">$1,541</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="border bg-white rounded-3 p-2 text-center mb-3">
                                        <p class="mb-2">Card</p>
                                        <h5 class="mb-0">$654</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="progress bg-transparent overflow-visible gap-2 mb-2 position-relative mt-4">
                                <div class="progress-bar bg-pink-gradient rounded" role="progressbar"
                                    style="width: 45%;"><span
                                        class="position-absolute text-dark pro-value">45%</span></div>
                                <div class="progress-bar bg-orange-gradient rounded" role="progressbar"
                                    style="width: 35%;"><span
                                        class="position-absolute text-dark pro-value">35%</span></div>
                                <div class="progress-bar bg-cyan-gradient rounded" role="progressbar"
                                    style="width: 20%;"><span
                                        class="position-absolute text-dark pro-value">20%</span></div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="d-flex align-items-center mb-0"><i
                                        class="fa-solid fa-circle fs-8 text-pink me-1"></i>Cash</p>
                                <p class="d-flex align-items-center mb-0"><i
                                        class="fa-solid fa-circle fs-8 text-orange me-1"></i>UPI</p>
                                <p class="d-flex align-items-center mb-0"><i
                                        class="fa-solid fa-circle fs-8 text-cyan me-1"></i>Card</p>
                            </div>
                        </div> <!-- end card body -->
                        <div class="p-3 border-bottom">
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="avatar avatar-rounded me-2">
                                            <img src="@/assets/img/profiles/avatar-37.jpg" alt="user"
                                                class="img-fluid">
                                        </a>
                                        <div class="overflow-hidden">
                                            <p class="fw-medium text-truncate mb-1"><a href="#">Andre Claire</a></p>
                                            <p class="fs-13 mb-0">#CUS1245</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="fs-13 mb-1">Total Sales</p>
                                            <p class="fw-bold text-dark mb-0">$2400</p>
                                        </div>
                                        <span class="badge badge-soft-pink border border-pink-200">Cash</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 border-bottom">
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="avatar avatar-rounded me-2">
                                            <img src="@/assets/img/profiles/avatar-39.jpg" alt="user"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fw-medium mb-1"><a href="#">Emily Johnson</a></p>
                                            <p class="fs-13 mb-0">#CUS1246</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="fs-13 mb-1">Total Sales</p>
                                            <p class="fw-bold text-dark mb-0">$1500</p>
                                        </div>
                                        <span class="badge badge-soft-orange border border-orange-200">UPI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-3">
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="avatar avatar-rounded me-2">
                                            <img src="@/assets/img/profiles/avatar-38.jpg" alt="user"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fw-medium mb-1"><a href="#">Michael Smith</a></p>
                                            <p class="fs-13 mb-0">#CUS1244</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="fs-13 mb-1">Total Sales</p>
                                            <p class="fw-bold text-dark mb-0">$654</p>
                                        </div>
                                        <span class="badge badge-soft-cyan border border-cyan-200">Card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- end card -->
                </div> <!-- end col -->

            </div>
            <!-- end row -->

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
</template>

<script>
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

import { all_routes } from '@/router/all_routes.js'
import { salesPurchaseChart, statisticsChart, saleChart, expiryChart } from './data.js'

export default {
    components: {
        Doughnut
    },
    data() {
        return {
            all_routes,
            salesPurchaseChart: salesPurchaseChart,
            statisticsChart: statisticsChart,
            saleChart: saleChart,
            expiryChart: expiryChart,
            chartData: {
                labels: [],
                datasets: []
            },
            chartOptions: {
                cutout: '70%',
                plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    usePointStyle: true,
                    displayColors: true,
                    boxWidth: 8,
                    boxHeight: 8,
                    borderColor: 'transparent',
                    borderWidth: 0
                }
                }
            }
        }
    },
    mounted() {
        this.buildChartData()
    },
    methods: {
        createGradient(canvasCtx, color1, color2) {
            const gradient = canvasCtx.createLinearGradient(0, 0, 0, 400)
            gradient.addColorStop(0, color1)
            gradient.addColorStop(1, color2)
            return gradient
        },
        buildChartData() {
            const tempCanvas = document.createElement('canvas')
            const ctx = tempCanvas.getContext('2d')

            this.chartData = {
                labels: ['Cancelled', 'Pending', 'Completed'],
                datasets: [{
                data: [100, 312, 845],
                backgroundColor: [
                    this.createGradient(ctx, '#f74838c8', '#e44233'),
                    this.createGradient(ctx, '#fa920080', '#FA9200'),
                    this.createGradient(ctx, '#3848f580', '#3848F5')
                ],
                borderWidth: 8,
                borderColor: '#ffffff',
                borderRadius: 15,
                hoverOffset: 4
                }]
            }
        }
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