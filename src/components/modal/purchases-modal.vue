<template>
    <!-- Add modal -->
    <div class="modal custom-modal fade" id="add-modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Create New Purchase</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <form action="#">
                    <div class="modal-body pt-0">
                        <!-- Start row -->
                        <div class="row row-gap-3">
                            <div class="col-lg-12">
                                <div class="d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-xxxl border bg-light rounded-circle">
                                        <i class="icon-image fs-20 text-dark"></i>
                                    </div>
                                    <div>
                                        <label class="form-label mb-1 fw-bold fs-14">Upload Store Image</label>
                                        <p class="fs-13 fw-medium mb-2">Image should below 2MB</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <label
                                                class="btn btn-light btn-sm fs-13 d-flex align-items-center gap-1 position-relative cursor-pointer mb-0">
                                                <i class="icon-refresh-ccw"></i>
                                                <input type="file"
                                                    class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer">
                                                Change Image
                                            </label>
                                            <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle">
                                                <i class="icon-trash-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end col-->
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">Vendor <span class="text-danger">*</span></label>
                                    <vue-select
                                        :options="vendorOptions"
                                        v-model="selectedVendor"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Purchase Date <span class="text-danger">*</span></label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-days"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">Payment Method <span class="text-danger">*</span></label>
                                    <vue-select
                                        :options="paymentMethodOptions"
                                        v-model="selectedPaymentMethod"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Due Date <span class="text-danger">*</span></label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-days"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Status <span class="text-danger">*</span></label>
                                    <vue-select
                                        :options="statusOptions"
                                        v-model="selectedStatus"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- End row -->

                    </div>
                    <div class="modal-footer">
                        <div class="d-flex align-items-center gap-2 felx-grow-1 w-100 justify-content-between">
                            <button class="btn btn-light d-inline-flex align-items-center gap-2"
                                data-bs-dismiss="modal"><i class="icon-x"></i>Cancel </button>
                            <button type="button" class="btn btn-primary"><i class="icon-plus me-1"></i>Create
                                New</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Add modal -->

    <!-- Edit modal -->
    <div class="modal custom-modal fade" id="edit-modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Edit Purchase</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <form action="#">
                    <div class="modal-body pt-0">
                        <!-- Start row -->
                        <div class="row row-gap-3">
                            <div class="col-lg-12">
                                <div class="d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-xxxl border bg-light rounded-circle">
                                        <i class="icon-image fs-20 text-dark"></i>
                                    </div>
                                    <div>
                                        <label class="form-label mb-1 fw-bold fs-14">Upload Store Image</label>
                                        <p class="fs-13 fw-medium mb-2">Image should below 2MB</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <label
                                                class="btn btn-light btn-sm fs-13 d-flex align-items-center gap-1 position-relative cursor-pointer mb-0">
                                                <i class="icon-refresh-ccw"></i>
                                                <input type="file"
                                                    class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer">
                                                Change Image
                                            </label>
                                            <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle">
                                                <i class="icon-trash-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end col-->
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">Vendor <span class="text-danger">*</span></label>
                                    <vue-select
                                        :options="vendorOptions"
                                        v-model="selectedVendorEdit"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Purchase Date <span class="text-danger">*</span></label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-days"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">Payment Method <span class="text-danger">*</span></label>
                                    <vue-select
                                        :options="paymentMethodOptions"
                                        v-model="selectedPaymentMethodEdit"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Due Date <span class="text-danger">*</span></label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-days"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Status <span class="text-danger">*</span></label>
                                    <vue-select
                                        :options="statusOptions"
                                        v-model="selectedStatusEdit"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- End row -->

                    </div>
                    <div class="modal-footer">
                        <div class="d-flex align-items-center gap-2 felx-grow-1 w-100 justify-content-between">
                            <button class="btn btn-light d-inline-flex align-items-center gap-2"
                                data-bs-dismiss="modal"><i class="icon-x"></i>Cancel </button>
                            <button type="button" class="btn btn-primary"><i class="icon-save me-1"></i>Save
                                Changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Edit modal -->

    <!-- Add Payment modal -->
    <div class="modal custom-modal fade" id="pay-now-modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h4 class="modal-title fw-bold">Pay Now</h4>
                    <span class="text-warning fs-14">#PUR016</span>
                </div>
                <form action="#">
                    <div class="modal-body">
                        <!-- Payment Summary -->
                        <div class="card mb-4 bg-light">
                            <div class="card-header border-0">
                                <h6 class="fw-bold mb-0">Payment Summary</h6>
                            </div>
                            <div class="card-body pt-0">
                                <div class="p-3 bg-white rounded-3">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span class="text-gray-9 fs-14">Bill Total</span>
                                        <span class="fw-semibold text-dark fs-14">$520</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span class="text-gray-9 fs-14">Already Paid</span>
                                        <span class="fw-semibold text-dark fs-14">$20</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="text-gray-9 fs-14">Due Amount</span>
                                        <span class="fw-semibold text-danger fs-14">$569</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Payment Amount -->
                        <div class="mb-3">
                            <div class="d-flex align-items-center justify-content-between mb-1">
                                <label class="form-label mb-0">Payment Amount <span class="text-danger">*</span></label>
                                <span class="fs-13 text-gray-9">Bill total: $569</span>
                            </div>
                            <input type="text" class="form-control" value="$569">
                        </div>
                        <!-- Payment Method -->
                        <div class="mb-0">
                            <label class="form-label">Payment Method <span class="text-danger">*</span></label>
                            <vue-select
                                :options="payNowMethodOptions"
                                v-model="selectedPayNowMethod"
                                placeholder="Select"
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="d-flex align-items-center gap-2 w-100 justify-content-between">
                            <button class="btn btn-light d-inline-flex align-items-center gap-2"
                                data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-teal" data-bs-toggle="modal"
                                data-bs-target="#payment-history-modal">Complete Payment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Add Payment modal -->

    <!-- payement history modal -->
    <div class="modal custom-modal fade" id="payment-history-modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h4 class="modal-title fw-bold">Payment History</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- Payment Summary -->
                    <div class="card mb-4 bg-light">
                        <div class="card-header border-0">
                            <h6 class="fw-bold mb-0">Payment Summary</h6>
                        </div>
                        <div class="card-body pt-0">
                            <div class="p-3 bg-white rounded-3">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <span class="text-gray-9 fs-14">Purchase ID</span>
                                    <span class="fw-semibold text-danger fs-14">#PUR016</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <span class="text-gray-9 fs-14">Bill Total</span>
                                    <span class="fw-semibold text-dark fs-14">$520</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                                    <span class="text-gray-9 fs-14">Total Paid</span>
                                    <span class="fw-semibold text-dark fs-14">$20</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="text-gray-9 fs-16 fw-bold">Due Amount</span>
                                    <span class="text-danger fs-16 fw-bold">$569</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6>Payments</h6>
                    <div class="table-responsive table-nowrap rounded-2 border">
                        <table class="table mb-0 border">
                            <thead class="table-light">
                                <tr>
                                    <th class="no-sort">Date</th>
                                    <th class="no-sort">Order Status</th>
                                    <th class="no-sort">Amount</th>
                                    <th class="no-sort">Payment Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>28 Jan 2026 - 10:14:20 AM</td>
                                    <td>
                                        <span class="badge badge-soft-success d-inline-flex align-items-center">
                                            <i class="fa-solid fa-circle fs-6 me-1"></i> Completed
                                        </span>
                                    </td>
                                    <td class="fw-medium">$12,569</td>
                                    <td>
                                        <span class="badge badge-soft-danger">Cash</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>15 Feb 2026 - 02:14:20 PM</td>
                                    <td>
                                        <span class="badge badge-soft-warning d-inline-flex align-items-center">
                                            <i class="fa-solid fa-circle fs-6 me-1"></i> Inprogress
                                        </span>
                                    </td>
                                    <td class="fw-medium">$9,800</td>
                                    <td>
                                        <span class="badge badge-soft-warning">UPI</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>10 Mar 2026 - 03:14:20 PM</td>
                                    <td>
                                        <span class="badge badge-soft-success d-inline-flex align-items-center">
                                            <i class="fa-solid fa-circle fs-6 me-1"></i> Completed
                                        </span>
                                    </td>
                                    <td class="fw-medium">$4,500</td>
                                    <td>
                                        <span class="badge badge-soft-info">Card</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>22 Apr 2026 - 01:14:20 PM</td>
                                    <td>
                                        <span class="badge badge-soft-purple d-inline-flex align-items-center">
                                            <i class="fa-solid fa-circle fs-6 me-1"></i> Pending
                                        </span>
                                    </td>
                                    <td class="fw-medium">$7,600</td>
                                    <td>
                                        <span class="badge badge-soft-primary">Wallet</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>29 Jun 2026 - 06:15:30 PM</td>
                                    <td>
                                        <span class="badge badge-soft-purple d-inline-flex align-items-center">
                                            <i class="fa-solid fa-circle fs-6 me-1"></i> Pending
                                        </span>
                                    </td>
                                    <td class="fw-medium">$1,800</td>
                                    <td>
                                        <span class="badge badge-soft-danger">Cash</span>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- payement history modal -->

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
                                        <span
                                            class="avatar avatar-xs bg-soft-teal border border-teal rounded-circle p-1">AS</span>GreenCross
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
                                            <span
                                                class="avatar avatar-xs bg-soft-cyan border border-cyan rounded-circle p-1">MS</span>LifeLine
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
                                    Stock Status
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
                                                class="fa-solid fa-circle fs-5 me-1"></i> Paid</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_38">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_38">
                                        <span class="badge badge-soft-warning d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Pending</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_39">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_39">
                                        <span class="badge badge-soft-info d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Partially Paid</span>
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

export default {
    data() {
        return {
            valueOne,
            selectedVendor: null,
            selectedVendorEdit: ['MedLife Distributors'],
            vendorOptions: [
                { label: "Select", value: "Select" },
                { label: "MedLife Distributors", value: "MedLife Distributors" },
                { label: "HealthCare Pharma", value: "HealthCare Pharma" },
                { label: "GreenCross Medicals", value: "GreenCross Medicals" },
                { label: "NovaCure Pharma", value: "NovaCure Pharma" },
            ],
            selectedPaymentMethod: null,
            selectedPaymentMethodEdit: ['Cash'],
            paymentMethodOptions: [
                { label: "Select", value: "Select" },
                { label: "Cash", value: "Cash" },
                { label: "Card", value: "Card" },
                { label: "Online", value: "Online" },
                { label: "Bank Transfer", value: "Bank Transfer" },
            ],
            selectedStatus: null,
            selectedStatusEdit: ['Paid'],
            statusOptions: [
                { label: "Select", value: "Select" },
                { label: "Paid", value: "Paid" },
                { label: "Pending", value: "Pending" },
                { label: "Partially Paid", value: "Partially Paid" },
            ],
            selectedPayNowMethod: ['Card'],
            payNowMethodOptions: [
                { label: "Card", value: "Card" },
                { label: "Cash", value: "Cash" },
                { label: "UPI", value: "UPI" },
            ]
        }
    }
}
</script>
