<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content pb-0">

            <!-- start row -->
            <div class="row g-0">

                <div class="col-xxl-3 col-lg-4 pos-product d-flex justify-content-between flex-column">

                    <div class="bg-white p-3">
                        <div class="input-group w-auto input-group-flat mb-2">
                            <span class="input-group-text">
                                <i class="icon-search"></i>
                            </span>
                            <input type="text" class="form-control px-2" placeholder="Search or scan item…">
                            <span class="input-group-text text-dark">
                                <i class="icon-scan-text"></i>
                            </span>
                        </div>
                        <div class="row justify-content-center g-2">
                            <div class="col-6">
                                <router-link :to="all_routes.addMedicines"
                                    class="btn btn-white d-flex align-items-center justify-content-center gap-2"><i
                                        class="icon-plus"></i>Add Item</router-link>
                            </div>
                            <div class="col-6">
                                <div class="dropdown sortby-dropdown">
                                    <a href="javascript:void(0);"
                                        class="dropdown-toggle btn btn-white d-flex align-items-center gap-2"
                                        data-bs-toggle="dropdown">
                                        <i class="icon-arrow-up-down"></i>Sort
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <a href="javascript:void(0);"
                                                    class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Name
                                                    <span>A-Z</span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"
                                                    class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Name
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content p-3 product-wrap">

                        <!-- Tab -->
                        <div class="tab-pane fade active show" id="all">

                            <div class="row g-2">

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div
                                        class="bg-white border p-2 position-relative rounded pos-item flex-fill active"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-01.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Cetirizine
                                                    10</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 30 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$15.50</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 120</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">Rx</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-02.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Asprin 500</a>
                                            </p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 15 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$12.75</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 120</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">OTC</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-03.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Acetaminophen
                                                    500</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 10 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$7.29</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 3</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">OTC</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-04.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Cofsils
                                                    Gargle</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-droplet me-1"></i>Bottle of 200ml</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$14.99</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 80</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">Rx</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-05.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Ibuprofen
                                                    200</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 15 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$9.99</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 150</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">Rx</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-06.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Digital Blood
                                                    Pre...</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-microscope me-1"></i>Box of 1 Piece</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$4.49</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 200</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">Rx</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-07.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Metformin
                                                    500</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 25 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$21.2</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 85</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">OTC</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-08.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Amox 500

                                                </a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-syringe me-1"></i>Box of 1 Piece</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$4.49</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 85</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">OTC</span>
                                    </div>
                                </div> <!-- end col -->

                            </div>
                            <!-- end row -->

                        </div>

                        <!-- Tab -->
                        <div class="tab-pane fade" id="tablet">

                            <div class="row g-2">

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div
                                        class="bg-white border p-2 position-relative rounded pos-item flex-fill active"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-01.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Cetirizine
                                                    10</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 30 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$15.50</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 120</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">Rx</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-02.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Asprin 500</a>
                                            </p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 15 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$12.75</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 120</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">OTC</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-03.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Acetaminophen
                                                    500</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 10 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$7.29</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 3</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">OTC</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-05.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Ibuprofen
                                                    200</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 15 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$9.99</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 150</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">Rx</span>
                                    </div>
                                </div> <!-- end col -->

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-07.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Metformin
                                                    500</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-pill-bottle me-1"></i>Strip of 25 Tablets</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$21.2</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 85</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">OTC</span>
                                    </div>
                                </div> <!-- end col -->

                            </div>
                            <!-- end row -->

                        </div>

                        <!-- Tab -->
                        <div class="tab-pane fade" id="syrup">

                            <!-- start row -->
                            <div class="row g-2">

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-04.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Cofsils
                                                    Gargle</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-droplet me-1"></i>Bottle of 200ml</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$14.99</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 80</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">Rx</span>
                                    </div>
                                </div> <!-- end col -->

                            </div>
                            <!-- end row -->

                        </div>

                        <!-- Tab -->
                        <div class="tab-pane fade" id="injection">

                            <!-- start row -->
                            <div class="row g-2">
                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-08.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Amox 500

                                                </a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-syringe me-1"></i>Box of 1 Piece</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$4.49</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 85</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">OTC</span>
                                    </div>
                                </div> <!-- end col -->
                            </div>
                            <!-- end row -->

                        </div>

                        <!-- Tab -->
                        <div class="tab-pane fade" id="equipment">

                            <!-- start row -->
                            <div class="row g-2">

                                <div class="col-sm-6 col-md-4 col-lg-6 d-flex">
                                    <div class="bg-white border p-2 position-relative rounded pos-item flex-fill"
                                        @click="selectPosItem">
                                        <a href="#" class="bg-light p-2 text-center rounded d-block mb-2">
                                            <img src="@/assets/img/medicine/medicine-06.png" alt="medicine"
                                                class="img-fluid">
                                        </a>
                                        <div>
                                            <p class="fs-13 fw-bold text-truncate mb-1"><a href="#">Digital Blood
                                                    Pre...</a></p>
                                            <p class="fs-12 d-inline-flex align-items-center mb-2"><i
                                                    class="icon-microscope me-1"></i>Box of 1 Piece</p>
                                            <div class="d-flex aling-items-center justify-content-between gap-1">
                                                <p class="fs-13 fw-bold text-dark mb-0">$4.49</p>
                                                <div>
                                                    <span
                                                        class="badge badge-sm badge-soft-success d-inline-flex align-items-center stock-badge"><i
                                                            class="icon-circle-check-big me-1"></i>Stock: 200</span>
                                                    <span
                                                        class="badge badge-sm badge-soft-orange d-inline-flex align-items-center stock-add"><i
                                                            class="icon-check-check me-1"></i>Added</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            class="badge badge-sm bg-white text-dark position-absolute top-0 end-0 rounded">Rx</span>
                                    </div>
                                </div> <!-- end col -->

                            </div>
                            <!-- end row -->

                        </div>

                    </div>

                    <div class="bg-white border-top p-2">
                        <ul class="nav nav-tabs nav-solid-primary nav-tabs-rounded gap-2 category-slider solid-tab"
                            role="tablist">
                            <li class="nav-item" role="presentation">
                                <a href="#all" class="nav-link active shadow" data-bs-toggle="tab"
                                    data-bs-target="#all">All</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#tablet" class="nav-link shadow" data-bs-toggle="tab"
                                    data-bs-target="#tablet">Tablet</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#syrup" class="nav-link shadow" data-bs-toggle="tab"
                                    data-bs-target="#syrup">Syrup</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#injection" class="nav-link shadow" data-bs-toggle="tab"
                                    data-bs-target="#injection">Injection</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#equipment" class="nav-link shadow" data-bs-toggle="tab"
                                    data-bs-target="#equipment">Equipment</a>
                            </li>
                        </ul>

                    </div>

                </div> <!-- end col -->

                <div class="col-xxl-6 col-lg-5 col-md-6 pos-content d-flex justify-content-between flex-column">

                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 p-3">
                        <div>
                            <p class="fs-13 fw-bold text-dark mb-1">Active Cart · #ORD1024</p>
                            <div class="d-flex align-items-center gap-3">
                                <span class="badge bg-primary-gradient d-inline-flex align-items-center">Items:
                                    0</span>
                                <p class="fs-12 mb-0">Walk-in customer</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <a href="#" class="btn btn-white d-flex align-items-center justify-content-center gap-2"
                                data-bs-toggle="modal" data-bs-target="#onhold-orders"><i
                                    class="icon-file-text"></i>On Hold</a>
                            <a href="#" class="btn btn-white d-flex align-items-center justify-content-center gap-2"
                                data-bs-toggle="modal" data-bs-target="#sync-orders"><i
                                    class="icon-refresh-cw"></i>Sync</a>
                            <a href="#"
                                class="btn btn-white d-flex align-items-center justify-content-center gap-2"><i
                                    class="icon-clipboard-list"></i>History</a>
                            <router-link :to="all_routes.posEmpty"
                                class="btn btn-danger-gradient d-flex align-items-center justify-content-center gap-2"><i
                                    class="icon-trash-2"></i>Clear All</router-link>
                        </div>
                    </div>

                    <div class="bg-white flex-grow-1 pos-table">
                        <div class="table-responsive table-nowrap custom-table">
                            <table class="table mb-0">
                                <thead class="table-white">
                                    <tr>
                                        <th class="w-60"></th>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Tax</th>
                                        <th class="text-end">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-icon rounded-3 danger-icon"><i
                                                    class="icon-trash"></i></a>
                                        </td>
                                        <td>
                                            <p class="fw-bold mb-1"> <a href="#">Ibuprofen 200mg</a></p>
                                            <p class="fs-12 mb-0">SKU: 31022</p>
                                        </td>
                                        <td>
                                            <div class="quantity-control">
                                                <button type="button" class="minus-btn" @click="decrementQty"><i
                                                        class="icon-minus"></i></button>
                                                <input type="text" class="quantity-input" value="1"
                                                    aria-label="Quantity">
                                                <button type="button" class="add-btn" @click="incrementQty"><i
                                                        class="icon-plus"></i></button>
                                            </div>
                                        </td>
                                        <td>$15.25</td>
                                        <td class="fw-medium">$0.00</td>
                                        <td class="fw-bold text-dark text-end">$30.50</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-icon rounded-3 danger-icon"><i
                                                    class="icon-trash"></i></a>
                                        </td>
                                        <td>
                                            <p class="fw-bold mb-1"> <a href="#">Cetirizine 10mg</a></p>
                                            <p class="fs-12 mb-0">SKU: 41023</p>
                                        </td>
                                        <td>
                                            <div class="quantity-control">
                                                <button type="button" class="minus-btn" @click="decrementQty"><i
                                                        class="icon-minus"></i></button>
                                                <input type="text" class="quantity-input" value="1"
                                                    aria-label="Quantity">
                                                <button type="button" class="add-btn" @click="incrementQty"><i
                                                        class="icon-plus"></i></button>
                                            </div>
                                        </td>
                                        <td>$15.25</td>
                                        <td class="fw-medium">$0.00</td>
                                        <td class="fw-bold text-dark text-end">$30.50</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-icon rounded-3 danger-icon"><i
                                                    class="icon-trash"></i></a>
                                        </td>
                                        <td>
                                            <p class="fw-bold mb-1"> <a href="#">Ibuprofen 200mg</a></p>
                                            <p class="fs-12 mb-0">SKU: 31022</p>
                                        </td>
                                        <td>
                                            <div class="quantity-control">
                                                <button type="button" class="minus-btn" @click="decrementQty"><i
                                                        class="icon-minus"></i></button>
                                                <input type="text" class="quantity-input" value="2"
                                                    aria-label="Quantity">
                                                <button type="button" class="add-btn" @click="incrementQty"><i
                                                        class="icon-plus"></i></button>
                                            </div>
                                        </td>
                                        <td>$60.00</td>
                                        <td class="fw-medium">$0.00</td>
                                        <td class="fw-bold text-dark text-end">$30.50</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-icon rounded-3 danger-icon"><i
                                                    class="icon-trash"></i></a>
                                        </td>
                                        <td>
                                            <p class="fw-bold mb-1"> <a href="#">Metformin 500mg</a></p>
                                            <p class="fs-12 mb-0">SKU: 51024</p>
                                        </td>
                                        <td>
                                            <div class="quantity-control">
                                                <button type="button" class="minus-btn" @click="decrementQty"><i
                                                        class="icon-minus"></i></button>
                                                <input type="text" class="quantity-input" value="3"
                                                    aria-label="Quantity">
                                                <button type="button" class="add-btn" @click="incrementQty"><i
                                                        class="icon-plus"></i></button>
                                            </div>
                                        </td>
                                        <td>$25.00</td>
                                        <td class="fw-medium">$0.00</td>
                                        <td class="fw-bold text-dark text-end">$75.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-icon rounded-3 danger-icon"><i
                                                    class="icon-trash"></i></a>
                                        </td>
                                        <td>
                                            <p class="fw-bold mb-1"> <a href="#">Atorvastatin 20mg</a></p>
                                            <p class="fs-12 mb-0">SKU: 61025</p>
                                        </td>
                                        <td>
                                            <div class="quantity-control">
                                                <button type="button" class="minus-btn" @click="decrementQty"><i
                                                        class="icon-minus"></i></button>
                                                <input type="text" class="quantity-input" value="1"
                                                    aria-label="Quantity">
                                                <button type="button" class="add-btn" @click="incrementQty"><i
                                                        class="icon-plus"></i></button>
                                            </div>
                                        </td>
                                        <td>$28.00</td>
                                        <td class="fw-medium">$0.00</td>
                                        <td class="fw-bold text-dark text-end">$28.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-icon rounded-3 danger-icon"><i
                                                    class="icon-trash"></i></a>
                                        </td>
                                        <td>
                                            <p class="fw-bold mb-1"> <a href="#">Simvastatin 10mg</a></p>
                                            <p class="fs-12 mb-0">SKU: 71026</p>
                                        </td>
                                        <td>
                                            <div class="quantity-control">
                                                <button type="button" class="minus-btn" @click="decrementQty"><i
                                                        class="icon-minus"></i></button>
                                                <input type="text" class="quantity-input" value="6"
                                                    aria-label="Quantity">
                                                <button type="button" class="add-btn" @click="incrementQty"><i
                                                        class="icon-plus"></i></button>
                                            </div>
                                        </td>
                                        <td>$20.00</td>
                                        <td class="fw-medium">$0.00</td>
                                        <td class="fw-bold text-dark text-end">$120.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-icon rounded-3 danger-icon"><i
                                                    class="icon-trash"></i></a>
                                        </td>
                                        <td>
                                            <p class="fw-bold mb-1"> <a href="#">Levothyroxine 50mcg</a></p>
                                            <p class="fs-12 mb-0">SKU: 81027</p>
                                        </td>
                                        <td>
                                            <div class="quantity-control">
                                                <button type="button" class="minus-btn" @click="decrementQty"><i
                                                        class="icon-minus"></i></button>
                                                <input type="text" class="quantity-input" value="1"
                                                    aria-label="Quantity">
                                                <button type="button" class="add-btn" @click="incrementQty"><i
                                                        class="icon-plus"></i></button>
                                            </div>
                                        </td>
                                        <td>$28.00</td>
                                        <td class="fw-medium">$0.00</td>
                                        <td class="fw-bold text-dark text-end">$28.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-icon rounded-3 danger-icon"><i
                                                    class="icon-trash"></i></a>
                                        </td>
                                        <td>
                                            <p class="fw-bold mb-1"> <a href="#">Atorvastatin 20mg</a></p>
                                            <p class="fs-12 mb-0">SKU: 61025</p>
                                        </td>
                                        <td>
                                            <div class="quantity-control">
                                                <button type="button" class="minus-btn" @click="decrementQty"><i
                                                        class="icon-minus"></i></button>
                                                <input type="text" class="quantity-input" value="1"
                                                    aria-label="Quantity">
                                                <button type="button" class="add-btn" @click="incrementQty"><i
                                                        class="icon-plus"></i></button>
                                            </div>
                                        </td>
                                        <td>$28.00</td>
                                        <td class="fw-medium">$0.00</td>
                                        <td class="fw-bold text-dark text-end">$28.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="p-3">
                        <div class="mb-2">
                            <p class="d-flex align-items-center justify-content-between mb-2">Sub Total<span
                                    class="fw-bold text-dark">$580.50</span></p>
                            <p class="d-flex align-items-center justify-content-between mb-2">Tax (0%)<span
                                    class="fw-bold text-dark">$34.80</span></p>
                            <p class="d-flex align-items-center justify-content-between mb-2">
                                <span class="d-flex align-items-center gap-2">
                                    Discount<a href="#"
                                        class="btn btn-sm fs-10 text-success btn-white d-flex align-items-center justify-content-center gap-1"
                                        data-bs-toggle="modal" data-bs-target="#add-discount">20% Applied<i
                                            class="icon-x"></i></a>
                                </span>
                                <span class="fw-bold text-orange">-$15.00</span>
                            </p>
                            <p class="d-flex align-items-center justify-content-between mb-0">
                                <span class="d-flex align-items-center gap-2">
                                    Coupon <a href="#"
                                        class="btn btn-sm fs-10 text-success btn-white d-flex align-items-center justify-content-center gap-1">FIRST
                                        PURCHASE<i class="icon-x"></i></a>
                                </span>
                                <span class="fw-bold text-orange">-20.10</span>
                            </p>

                        </div>
                        <p class="d-flex align-items-center justify-content-between fs-16 fw-bold text-dark mb-0">
                            Total Amount<span class="fw-bold text-dark">$580.20</span></p>
                    </div>

                </div> <!-- end col -->

                <div class="col-xxl-3 col-lg-3 col-md-6 pos-profile">

                    <div class="bg-white p-3">

                        <a href="#"
                            class="btn btn-primary-gradient d-flex align-items-center justify-content-center gap-2 mb-2"
                            data-bs-toggle="modal" data-bs-target="#scan-modal"><i class="icon-wand-sparkles"></i>AI
                            Scan Rx</a>

                        <div class="row row-cols-2 row-cols-lg-1 row-cols-xl-2 g-2">
                            <div>
                                <a href="#"
                                    class="btn btn-white d-flex align-items-center justify-content-center gap-2"
                                    data-bs-toggle="modal" data-bs-target="#add-hold"><i class="icon-pause"></i>Hold
                                    Order</a>
                            </div>
                            <div>
                                <a href="#"
                                    class="btn btn-white d-flex align-items-center justify-content-center gap-2"
                                    data-bs-toggle="modal" data-bs-target="#add-print"><i
                                        class="icon-printer-check"></i>Print</a>
                            </div>
                        </div>

                    </div>

                    <div class="p-3 flex-fill">
                        <p class="fs-12 fw-bold text-dark mb-2">Customer Profile</p>
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <vue-select
                                :options="customerProfileOptions"
                                v-model="selectedCustomerProfile"
                                placeholder="Select"
                            />
                            <a href="#" class="btn btn-icon btn-white flex-shrink-0" data-bs-toggle="modal"
                                data-bs-target="#add-customer"><i class="icon-user-round-plus"></i></a>
                        </div>
                        <div class="mb-3">
                            <vue-select
                                :options="doctorOptions"
                                v-model="selectedDoctor"
                                placeholder="Select Doctor"
                            />
                        </div>
                        <div>
                            <input type="text" class="form-control" placeholder="Phone Number (Optional)">
                        </div>
                    </div>

                    <div class="bg-white p-3">
                        <a href="#"
                            class="btn btn-lg btn-primary-gradient d-flex align-items-center justify-content-center gap-2"
                            data-bs-toggle="modal" data-bs-target="#add-payment">Place Order<i
                                class="icon-arrow-right"></i></a>
                    </div>

                </div> <!-- end col -->

            </div>
            <!-- end row -->

        </div>
        <!-- End Content -->

        <!-- Start Footer -->
        <div class="pos-footer d-md-block d-none border-top">
            <div class="row row-cols-6 g-0">
                <router-link :to="all_routes.dashboard" class="pos-menu border-end text-center p-2 position-relative">
                    <i class="icon-layout-dashboard fs-20 mb-4"></i>
                    <p class="mb-0">Dashboard</p>
                </router-link>
                <router-link :to="all_routes.pos" class="pos-menu border-end text-center p-2 position-relative active">
                    <i class="icon-shopping-cart fs-20 mb-4"></i>
                    <p class="mb-0">POS</p>
                    <div class="ripple-container bg-white rounded-circle position-absolute"></div>
                </router-link>
                <router-link :to="all_routes.invoices" class="pos-menu border-end text-center p-2 position-relative">
                    <i class="icon-clipboard-list fs-20 mb-4"></i>
                    <p class="mb-0">Invoices</p>
                </router-link>
                <router-link :to="all_routes.salesReports" class="pos-menu border-end text-center p-2 position-relative">
                    <i class="icon-badge-dollar-sign fs-20 mb-4"></i>
                    <p class="mb-0">Sales</p>
                </router-link>
                <router-link :to="all_routes.prescriptions" class="pos-menu text-center p-2 position-relative">
                    <i class="icon-clipboard-plus fs-20 mb-4"></i>
                    <p class="mb-0">Prescriptions</p>
                </router-link>
                <router-link :to="all_routes.salesReturn" class="pos-menu text-center p-2 position-relative">
                    <i class="icon-clipboard-pen fs-20 mb-4"></i>
                    <p class="mb-0">Sales Return</p>
                </router-link>
            </div>
        </div>
        <!-- End Footer -->

    </div>

    <!-- ========================
        End Page Content
    ========================= -->

    <pos-modal></pos-modal>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import { all_routes } from '@/router/all_routes.js'

export default {
    data() {
        return {
            all_routes,
            selectedCustomerProfile: "Anderson Claire",
            customerProfileOptions: [
                { label: "Walk-in Customer", value: "Walk-in Customer" },
                { label: "Anderson Claire", value: "Anderson Claire" },
                { label: "Emily Johnson", value: "Emily Johnson" },
                { label: "Sarah Wilson", value: "Sarah Wilson" },
                { label: "Ava Martinez", value: "Ava Martinez" },
                { label: "Peter Brown", value: "Peter Brown" },
            ],
            selectedDoctor: null,
            doctorOptions: [
                { label: "Select Doctor", value: "Select Doctor" },
                { label: "Dr. Michael Anderson", value: "Dr. Michael Anderson" },
                { label: "Dr. Emily Thompson", value: "Dr. Emily Thompson" },
                { label: "Dr. David Wilson", value: "Dr. David Wilson" },
                { label: "Dr. Sophia Martinez", value: "Dr. Sophia Martinez" },
                { label: "Dr. James Carter", value: "Dr. James Carter" },
            ],
        }
    },
    methods: {
        selectPosItem(event) {
            const item = event.currentTarget;
            const container = item.closest(".tab-pane");
            if (container) {
                container.querySelectorAll(".pos-item.active").forEach((el) => {
                    el.classList.remove("active");
                });
            }
            item.classList.add("active");
        },
        incrementQty(event) {
            const wrapper = event.currentTarget.closest(".quantity-control");
            const input = wrapper && wrapper.querySelector(".quantity-input");
            if (!input) return;
            const value = parseInt(input.value, 10) || 0;
            input.value = value + 1;
        },
        decrementQty(event) {
            const wrapper = event.currentTarget.closest(".quantity-control");
            const input = wrapper && wrapper.querySelector(".quantity-input");
            if (!input) return;
            const value = parseInt(input.value, 10) || 0;
            input.value = value > 1 ? value - 1 : 1;
        },
    },
    setup() {
        onMounted(() => {
            document.body.classList.add("pos-page");
        });
        onBeforeUnmount(() => {
            document.body.classList.remove("pos-page");
        });
    },
}
</script>