<template>
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
                                                src="@/assets/img/supplier/supplier-img-1.jpg" alt="supplier"
                                                class="img-fluid rounded-circle"></span>MedLife Distributors
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_19">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_19">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                src="@/assets/img/supplier/supplier-img-2.jpg" alt="supplier"
                                                class="img-fluid rounded-circle"></span>HealthCare Pharma
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_20">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_20">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                src="@/assets/img/supplier/supplier-img-3.jpg" alt="supplier"
                                                class="img-fluid rounded-circle"></span>GreenCross Medicals
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_21">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_21">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                src="@/assets/img/supplier/supplier-img-4.jpg" alt="supplier"
                                                class="img-fluid rounded-circle"></span>NovaCure Pharma
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_22">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_22">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                src="@/assets/img/supplier/supplier-img-5.jpg" alt="supplier"
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
                                                    src="@/assets/img/supplier/supplier-img-6.jpg" alt="supplier"
                                                    class="img-fluid rounded-circle"></span>Zenith Distributors
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_24">
                                        <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                            for="check_24">
                                            <span class="avatar avatar-xs rounded-circle"><img
                                                    src="@/assets/img/supplier/supplier-img-7.jpg" alt="supplier"
                                                    class="img-fluid rounded-circle"></span>LifeLine Pharma
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_25">
                                        <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                            for="check_25">
                                            <span class="avatar avatar-xs rounded-circle"><img
                                                    src="@/assets/img/supplier/supplier-img-8.jpg" alt="supplier"
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

                    <!-- Manufacture Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#manufacture"
                                    aria-expanded="false">
                                    Manufacture
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="manufacture" class="card-collapse collapse show">
                            <div>
                                <div class="input-icon input-icon-start position-relative mb-3">
                                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                    <input name="manufacture" type="text" class="form-control" placeholder="Search">
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_26">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_26">
                                        ABC Pharma
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_27">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_27">
                                        HealCare Labs
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_28">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_28">
                                        Medix Ltd
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_29">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_29">
                                        SkinPlus Pharma
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_30">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_30">
                                        NovaLife Pharma
                                    </label>
                                </div>
                                <div class="more-menu4">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_31">
                                        <label class="form-check-label ms-2 d-flex align-items-center w-100"
                                            for="check_31">
                                            CareWell Labs
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_32">
                                        <label class="form-check-label ms-2 d-flex align-items-center w-100"
                                            for="check_32">
                                            MedSure Pharma
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_33">
                                        <label class="form-check-label ms-2 d-flex align-items-center w-100"
                                            for="check_33">
                                            BioLife Labs
                                        </label>
                                    </div>
                                </div>
                                <div class="view-all mt-3">
                                    <a href="#" class="viewall4-button text-primary font-medium">View More</a>
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
                                            <p class="mb-0 text-body fs-14">Price : <span
                                                    class="text-dark fw-semibold">$200 - $5695</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Stock Status Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#stock-status"
                                    aria-expanded="false">
                                    Stock Status
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
                                                class="fa-solid fa-circle fs-5 me-1"></i> In Stock</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_35">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_35">
                                        <span class="badge badge-soft-warning d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Low Stock</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_36">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_36">
                                        <span class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Out of Stock</span>
                                    </label>
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
                                    Status
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
                                        <span class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_38">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_38">
                                        <span class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Inactive</span>
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

    <!-- Start Generate Barcode Modal -->
    <div class="modal fade" id="barcode_modal">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-qr-code"></i></span>Generate Barcode / QR Code</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">
                    <ul class="nav nav-tabs nav-solid custom-tab mb-3 m-auto">
                        <li class="nav-item">
                            <a href="#barcode-tab" data-bs-toggle="tab" aria-expanded="false"
                                class="nav-link active d-flex align-items-center">
                                <i class="icon-scan-barcode me-1"></i>Barcode
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#qr-tab" data-bs-toggle="tab" aria-expanded="true"
                                class="nav-link d-flex align-items-center">
                                <i class="icon-scan-qr-code me-1"></i>QR Code
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="barcode-tab">
                            <div class="card bg-light border-0 mb-0">
                                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 class="fs-14 fw-medium text-body mb-3">Paracetamol 500</h5>
                                    <span class="badge badge-soft-info mb-3">#TAB016</span>
                                    <div class="mb-3">
                                        <img src="@/assets/img/icons/bar-code.svg" alt="bar" class="img-fluid">
                                    </div>
                                    <h5 class="fs-14 fw-medium text-body mb-3">89012345</h5>
                                    <h6 class="mb-0 fs-14 fw-bold">$120 / Tab</h6>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="qr-tab">
                            <div class="card bg-light border-0 mb-0">
                                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 class="fs-14 fw-medium text-body mb-3">Paracetamol 500</h5>
                                    <span class="badge badge-soft-info mb-3">#TAB016</span>
                                    <div class="mb-3">
                                        <img src="@/assets/img/icons/qr-code.svg" alt="bar" class="img-fluid">
                                    </div>
                                    <h5 class="fs-14 fw-medium text-body mb-3">89012345</h5>
                                    <h6 class="mb-0 fs-14 fw-bold">$120 / Tab</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <a href="#" class="btn btn-light d-inline-flex align-items-center gap-2"><i
                            class="icon-printer"></i>Print </a>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i
                            class="icon-download"></i> Download </a>
                </div>
            </div>
        </div>
    </div>
    <!-- End Generate Barcode Modal -->

    <!-- Start Generate Barcode Modal -->
    <div class="modal fade" id="inventory_history">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-timer"></i></span>Inventory History</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <!-- Item 1 -->
                    <div class="card mb-3">
                        <div class="card-body d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <span
                                    class="avatar avatar-lg bg-light border border-color rounded-circle text-dark fs-20"><i
                                        class="icon-shopping-bag"></i></span>
                                <div>
                                    <h5 class="fs-14 fw-medium mb-1">5 units deducted (<span
                                            class="text-info">#BAT0016</span>)</h5>
                                    <p class="d-flex align-items-center gap-1 flex-wrap fs-13 mb-0">24 Apr 2026, 10:00
                                        AM <i class="fa-solid fa-circle fs-5 text-body"></i> By <span
                                            class="text-dark">Mervin Nesmith</span> </p>
                                </div>
                            </div>
                            <span class="badge badge-soft-success">Sale Completed</span>
                        </div>
                    </div>

                    <!-- Item 2 -->
                    <div class="card mb-3">
                        <div class="card-body d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <span
                                    class="avatar avatar-lg bg-light border border-color rounded-circle text-dark fs-20"><i
                                        class="icon-shopping-cart"></i></span>
                                <div>
                                    <h5 class="fs-14 fw-medium mb-1">120 units added (<span
                                            class="text-info">#BAT0016</span>)</h5>
                                    <p class="d-flex align-items-center gap-1 flex-wrap fs-13 mb-0">24 Apr 2026, 09:50
                                        AM <i class="fa-solid fa-circle fs-5 text-body"></i> By <span
                                            class="text-dark">Store Admin</span> </p>
                                </div>
                            </div>
                            <span class="badge badge-soft-indigo">Purchase Received</span>
                        </div>
                    </div>

                    <!-- Item 3 -->
                    <div class="card mb-3">
                        <div class="card-body d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <span
                                    class="avatar avatar-lg bg-light border border-color rounded-circle text-dark fs-20"><i
                                        class="icon-layers"></i></span>
                                <div>
                                    <h5 class="fs-14 fw-medium mb-1">10 units added (<span
                                            class="text-info">#ADJ0015</span>)</h5>
                                    <p class="d-flex align-items-center gap-1 flex-wrap fs-13 mb-0">24 Apr 2026, 09:30
                                        AM <i class="fa-solid fa-circle fs-5 text-body"></i> By <span
                                            class="text-dark">John Baxter</span> </p>
                                </div>
                            </div>
                            <span class="badge badge-soft-success">Stock Adjusted</span>
                        </div>
                    </div>

                    <!-- Item 4 -->
                    <div class="card mb-3">
                        <div class="card-body d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <span
                                    class="avatar avatar-lg bg-light border border-color rounded-circle text-dark fs-20"><i
                                        class="icon-truck"></i></span>
                                <div>
                                    <h5 class="fs-14 fw-medium mb-1">50 units from Branch 2 (<span
                                            class="text-info">#TRA0015</span>)</h5>
                                    <p class="d-flex align-items-center gap-1 flex-wrap fs-13 mb-0">24 Apr 2026, 09:20
                                        AM <i class="fa-solid fa-circle fs-5 text-body"></i> By <span
                                            class="text-dark">Steave Baxter</span> </p>
                                </div>
                            </div>
                            <span class="badge badge-soft-pink">John Baxter</span>
                        </div>
                    </div>

                    <!-- Item 5 -->
                    <div class="card mb-0">
                        <div class="card-body d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <span
                                    class="avatar avatar-lg bg-light border border-color rounded-circle text-dark fs-20"><i
                                        class="icon-send-to-back"></i></span>
                                <div>
                                    <h5 class="fs-14 fw-medium mb-1">3 units added (<span
                                            class="text-info">#INV0015</span>)</h5>
                                    <p class="d-flex align-items-center gap-1 flex-wrap fs-13 mb-0">23 Apr 2026, 06:10
                                        PM <i class="fa-solid fa-circle fs-5 text-body"></i> By <span
                                            class="text-dark">Doris Crosby</span> </p>
                                </div>
                            </div>
                            <span class="badge badge-soft-cyan">Customer Return</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- End Generate Barcode Modal -->
</template>

<script>
import { ref } from 'vue';
const valueOne = ref([20, 50]);

export default {
    data() {
        return {
            valueOne,
        }
    }
}
</script>