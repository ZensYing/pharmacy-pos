<template>
    <!-- Add modal -->
    <div class="modal custom-modal fade" id="add-customer" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Create New Customer</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <form>
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
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Name <span class="text-danger">*</span> </label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Phone</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Email Address</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Address</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">Country</label>
                                    <vue-select
                                        :options="countryOptions"
                                        v-model="selectedCountry"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">City </label>
                                    <vue-select
                                        :options="cityOptions"
                                        v-model="selectedCity"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">State / Province </label>
                                    <vue-select
                                        :options="stateOptions"
                                        v-model="selectedState"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Pincode</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-check form-switch mb-0">
                                    <label class="form-check-label d-flex align-items-center gap-2">
                                        <input class="form-check-input form-check-input-sm switchCheckDefault"
                                            type="checkbox" role="switch" checked>
                                        <span>Status</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- End row -->

                    </div>
                    <div class="modal-footer">
                        <div class="d-flex align-items-center gap-2 felx-grow-1 w-100 justify-content-between">
                            <button class="btn btn-light d-inline-flex align-items-center gap-2"
                                data-bs-dismiss="modal"><i class="icon-x"></i>Cancel </button>
                            <button type="submit" class="btn btn-primary"><i class="icon-plus me-1"></i>Create
                                New</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Discount modal -->
    <div class="modal custom-modal fade" id="add-discount" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-badge-percent"></i></span>Add Discount</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <form>
                    <div class="modal-body pt-0">
                        <!-- Start row -->
                        <div class="row row-gap-3">
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Discount Type <span class="text-danger">*</span> </label>
                                    <div class="d-flex align-items-center gap-2 flex-wrap">
                                        <div class="d-inline-flex align-items-center custom-btn">
                                            <input type="radio" class="btn-check form-check-input ms-2" name="discount"
                                                id="percentage" checked>
                                            <label class="btn btn-white p-2 rounded-3"
                                                for="percentage">Percentage</label>
                                        </div>
                                        <div class="d-inline-flex align-items-center custom-btn">
                                            <input type="radio" class="btn-check form-check-input ms-2" name="discount"
                                                id="flat">
                                            <label class="btn btn-white p-2 rounded-3" for="flat">Flat Price</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Enter Discount Rate <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <!-- End row -->

                    </div>
                    <div class="modal-footer">
                        <div class="d-flex align-items-center gap-2 felx-grow-1 w-100 justify-content-between">
                            <button class="btn btn-light d-inline-flex align-items-center gap-2"
                                data-bs-dismiss="modal"><i class="icon-x"></i>Cancel </button>
                            <button type="submit" class="btn btn-primary"><i class="icon-plus me-1"></i>Add
                                Discount</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Sale Modal -->
    <div class="modal custom-modal fade" id="add-coupon" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-ticket-percent"></i></span>Add Coupon</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="row g-4">
                        <div class="col-md-6 d-flex">
                            <div class="border rounded-3 shadow d-flex flex-fill">
                                <div
                                    class="bg-purple text-white p-2 code-label d-flex align-items-center justify-content-center position-relative rounded-start-3">
                                    <p class="fw-bold m-0">REFILL REWARD</p>
                                    <img src="@/assets/img/bg/label-bg.png" alt="bg"
                                        class="img-fluid position-absolute top-0 end-0 h-100 code-bg">
                                </div>
                                <div class="p-3 flex-grow-1">
                                    <p class="fs-13 mb-2">Get $10 off</p>
                                    <p class="text-dark mb-1">REFILL10</p>
                                    <p class="mb-2">Receive $10 off your next refill</p>
                                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                        <a href="#" class="btn btn-sm btn-white">Redeem</a>
                                        <a href="#" class="fw-medium d-flex align-items-center"><i
                                                class="icon-copy me-2"></i>Copy Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 d-flex">
                            <div class="border rounded-3 shadow d-flex flex-fill overflow-hidden">
                                <div
                                    class="bg-info text-white p-2 code-label d-flex align-items-center justify-content-center position-relative rounded-start-3">
                                    <p class="fw-bold m-0 text-uppercase">REFILL REWARD</p>
                                    <img src="@/assets/img/bg/label-bg.png" alt="bg"
                                        class="img-fluid position-absolute top-0 end-0 h-100 code-bg">
                                </div>
                                <div class="p-3 flex-grow-1">
                                    <p class="fs-13 mb-2">Get $10 off</p>
                                    <p class="text-dark mb-1 fw-bold">REFILL10</p>
                                    <p class="mb-2">Receive $10 off your next refill</p>
                                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                        <a href="#" class="btn btn-sm btn-white">Redeem</a>
                                        <a href="#" class="fw-medium d-flex align-items-center"><i
                                                class="icon-copy me-2"></i>Copy Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 d-flex">
                            <div class="border rounded-3 shadow d-flex flex-fill overflow-hidden">
                                <div
                                    class="bg-indigo text-white p-2 code-label d-flex align-items-center justify-content-center position-relative rounded-start-3">
                                    <p class="fw-bold m-0 text-uppercase">BULK BUY BONUS</p>
                                    <img src="@/assets/img/bg/label-bg.png" alt="bg"
                                        class="img-fluid position-absolute top-0 end-0 h-100 code-bg">
                                </div>
                                <div class="p-3 flex-grow-1">
                                    <p class="fs-13 mb-2">15% discount</p>
                                    <p class="text-dark mb-1 fw-bold">BULK15</p>
                                    <p class="mb-2">Enjoy 15% off on bulk purchases</p>
                                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                        <a href="#" class="btn btn-sm btn-white">Use Now</a>
                                        <a href="#" class="fw-medium d-flex align-items-center"><i
                                                class="icon-copy me-2"></i>Copy Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 d-flex">
                            <div class="border rounded-3 shadow d-flex flex-fill overflow-hidden">
                                <div
                                    class="bg-pink text-white p-2 code-label d-flex align-items-center justify-content-center position-relative rounded-start-3">
                                    <p class="fw-bold m-0 text-uppercase">BULK BUY BONUS</p>
                                    <img src="@/assets/img/bg/label-bg.png" alt="bg"
                                        class="img-fluid position-absolute top-0 end-0 h-100 code-bg">
                                </div>
                                <div class="p-3 flex-grow-1">
                                    <p class="fs-13 mb-2">15% discount</p>
                                    <p class="text-dark mb-1 fw-bold">BULK15</p>
                                    <p class="mb-2">Enjoy 15% off on bulk purchases</p>
                                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                        <a href="#" class="btn btn-sm btn-white">Use Now</a>
                                        <a href="#" class="fw-medium d-flex align-items-center"><i
                                                class="icon-copy me-2"></i>Copy Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 d-flex">
                            <div class="border rounded-3 shadow d-flex flex-fill overflow-hidden">
                                <div
                                    class="bg-success text-white p-2 code-label d-flex align-items-center justify-content-center position-relative rounded-start-3">
                                    <p class="fw-bold m-0 text-uppercase">LOYALTY PERK</p>
                                    <img src="@/assets/img/bg/label-bg.png" alt="bg"
                                        class="img-fluid position-absolute top-0 end-0 h-100 code-bg">
                                </div>
                                <div class="p-3 flex-grow-1">
                                    <p class="fs-13 mb-2">Earn double points</p>
                                    <p class="text-dark mb-1 fw-bold">LOYALTY2X</p>
                                    <p class="mb-2">Get double loyalty points on your next order</p>
                                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                        <a href="#" class="btn btn-sm btn-white">Use Now</a>
                                        <a href="#" class="fw-medium d-flex align-items-center"><i
                                                class="icon-copy me-2"></i>Copy Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 d-flex">
                            <div class="border rounded-3 shadow d-flex flex-fill overflow-hidden">
                                <div
                                    class="bg-primary text-white p-2 code-label d-flex align-items-center justify-content-center position-relative rounded-start-3">
                                    <p class="fw-bold m-0 text-uppercase">LOYALTY PERK</p>
                                    <img src="@/assets/img/bg/label-bg.png" alt="bg"
                                        class="img-fluid position-absolute top-0 end-0 h-100 code-bg">
                                </div>
                                <div class="p-3 flex-grow-1">
                                    <p class="fs-13 mb-2">Earn double points</p>
                                    <p class="text-dark mb-1 fw-bold">LOYALTY2X</p>
                                    <p class="mb-2">Get double loyalty points on your next order</p>
                                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                        <a href="#" class="btn btn-sm btn-white">Claim</a>
                                        <a href="#" class="fw-medium d-flex align-items-center"><i
                                                class="icon-copy me-2"></i>Copy Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Payment modal -->
    <div class="modal custom-modal fade" id="add-payment" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header d-flex align-items-center justify-content-between">
                    <h4 class="modal-title d-flex align-items-center gap-2">Collect Payment</h4>
                    <p class="mb-0 text-orange">#ORD1024</p>
                </div>
                <form>
                    <div class="modal-body pt-0">

                        <div class="row gx-3 justify-content-center">
                            <div class="col-6 d-flex">
                                <div class="payment-btn flex-fill mb-3">
                                    <input type="radio" class="btn-check" name="payment-method" id="full" checked>
                                    <label class="btn btn-white fw-medium p-2 rounded-3 d-flex flex-column" for="full">
                                        <i class="icon-circle-dollar-sign fs-20"></i>
                                        <span class="d-block">Full Payment</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-6 d-flex">
                                <div class="payment-btn flex-fill mb-3">
                                    <input type="radio" class="btn-check" name="payment-method" id="split">
                                    <label class="btn btn-white fw-medium p-2 rounded-3 d-flex flex-column" for="split">
                                        <i class="icon-circle-equal fs-20"></i>
                                        <span class="d-block">Split Payment</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="split-content">
                            <h5 class="fs-16 mb-2">Payment Methods</h5>

                            <div class="row gx-3 justify-content-center">
                                <div class="col-6 col-sm-4 d-flex">
                                    <div class="card-btn flex-fill mb-3">
                                        <input type="radio" class="btn-check" name="payment" id="cash" checked>
                                        <label
                                            class="btn btn-white fw-medium p-2 rounded-3 d-flex flex-column position-relative"
                                            for="cash">
                                            <i class="icon-banknote fs-20"></i>
                                            <span class="d-block fs-13">Cash</span>
                                            <span
                                                class="ripple-container bg-white rounded-circle position-absolute top-0 end-0 m-2"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 d-flex">
                                    <div class="card-btn flex-fill mb-3">
                                        <input type="radio" class="btn-check" name="payment" id="card">
                                        <label
                                            class="btn btn-white fw-medium p-2 rounded-3 d-flex flex-column position-relative"
                                            for="card">
                                            <i class="icon-credit-card fs-20"></i>
                                            <span class="d-block fs-13">Card</span>
                                            <span
                                                class="ripple-container bg-white rounded-circle position-absolute top-0 end-0 m-2"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4 d-flex">
                                    <div class="card-btn flex-fill mb-3">
                                        <input type="radio" class="btn-check" name="payment" id="upi">
                                        <label
                                            class="btn btn-white fw-medium p-2 rounded-3 d-flex flex-column position-relative"
                                            for="upi">
                                            <i class="icon-qr-code fs-20"></i>
                                            <span class="d-block fs-13">UPI / QR</span>
                                            <span
                                                class="ripple-container bg-white rounded-circle position-absolute top-0 end-0 m-2"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <!-- End row -->

                        </div>

                        <div class="mb-3">
                            <div class="d-flex align-items-center justify-content-between gap-2">
                                <label class="form-label">Payment Amount <span class="text-danger">*</span></label>
                                <p class="mb-1">Bill total: $580.20</p>
                            </div>
                            <input type="text" class="form-control">
                        </div>
                        <div class="payment-content card-info d-none mb-3">
                            <div class="row g-3">
                                <div class="col-md-12">
                                    <label class="form-label">Card Number <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="col-md-8">
                                    <label class="form-label">Expiry Date</label>
                                    <div class="input-group w-auto input-group-flat">
                                        <a-date-picker  v-model="valueOne"  class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                        <span class="input-group-text">
                                            <i class="icon-calendar-days"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">CVV</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="payment-content upi-info d-none text-center mb-3">
                            <p class="fs-16 fw-bold text-dark mb-2">Scan Now</p>
                            <img src="@/assets/img/icons/qr-code.svg" alt="icon" class="img-fluid">
                        </div>
                        <div class="mb-3 split-content">
                            <div class="d-flex align-items-center justify-content-between gap-2">
                                <label class="form-label">Order Notes</label>
                                <label class="d-flex align-items-center mb-1">
                                    <span class="d-flex align-items-center"><input class="form-check-input m-0 me-2"
                                            type="checkbox" checked>Display on Result</span>
                                </label>
                            </div>
                            <textarea class="form-control rounded-3 resize-none" rows="4"></textarea>
                        </div>

                        <h5 class="fs-16 mb-2">Payment Summary</h5>
                        <div class="border rounded-3 p-3">

                            <!-- Amount Paid -->
                            <div class="d-flex justify-content-between mb-2">
                                <p class="fs-13 mb-0">Amount Paid</p>
                                <p class="fs-13 text-dark fw-bold mb-0">$500.00</p>
                            </div>

                            <!-- Due Amount -->
                            <div class="d-flex justify-content-between mb-2">
                                <p class="fs-13 mb-0">Due Amount</p>
                                <p class="fs-13 text-dark fw-bold mb-0">$80.20</p>
                            </div>

                            <!-- Total Amount -->
                            <div class="d-flex justify-content-between align-items-center border-top pt-2 mt-2">
                                <h6 class="mb-0">Total Amount</h6>
                                <h6 class=" fw-bold mb-0">$580.50</h6>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <div class="d-flex align-items-center gap-2 felx-grow-1 w-100 justify-content-between">
                            <button class="btn btn-light d-inline-flex align-items-center gap-2"
                                data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal"
                                data-bs-target="#payment-success">Complete Payment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Payment modal -->
    <div class="modal custom-modal fade" id="payment-success" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form>
                    <div class="modal-body">
                        <div class="text-center mb-3">
                            <div
                                class="avatar avatar-xl avatar-rounded border border-4 border-success-subtle bg-primary mb-2">
                                <i class="icon-check-check fs-24"></i>
                            </div>
                            <h4 class="mb-1">Payment Success</h4>
                            <p>Your Order has been Successfuly Completed</p>
                        </div>
                        <h5 class="mb-3">Order Details</h5>
                        <div class="border rounded-3 p-3 mb-3">

                            <div class="d-flex justify-content-between mb-2">
                                <p class="fs-13 mb-0">Amount</p>
                                <p class="text-dark fw-medium mb-0">4580.00</p>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <p class="fs-13 mb-0">Date</p>
                                <p class="text-dark fw-medium mb-0">28 Jan 2026 - 10:14:20 AM</p>
                            </div>
                            <div class="d-flex justify-content-between mb-0">
                                <p class="fs-13 mb-0">Invoice Number</p>
                                <p class="text-orange fw-medium mb-0">$INV001</p>
                            </div>
                        </div>
                        <h5 class="mb-3">Item Details</h5>
                        <div class="table-responsive text-nowrap">
                            <table class="table border border-bottom-0 mb-3">
                                <thead class="table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Unit</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td class="fw-medium text-dark">Paracetamol 500</td>
                                        <td>3</td>
                                        <td>300</td>
                                        <td class="fw-medium text-dark">$200</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td class="fw-medium text-dark">Amoxicillin 250</td>
                                        <td>4</td>
                                        <td>500</td>
                                        <td class="fw-medium text-dark">$600</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td class="fw-medium text-dark">Cetirizine</td>
                                        <td>3</td>
                                        <td>800</td>
                                        <td class="fw-medium text-dark">$500</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td class="fw-medium text-dark">Ceftriaxone 20</td>
                                        <td>4</td>
                                        <td>397</td>
                                        <td class="fw-medium text-dark">$600</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td class="fw-medium text-dark">Ondansetron</td>
                                        <td>3</td>
                                        <td>450</td>
                                        <td class="fw-medium text-dark">$800</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="border rounded-3 p-3 mt-3">

                            <div class="d-flex justify-content-between mb-2">
                                <p class="fs-13 mb-0">Sub Total</p>
                                <p class="text-dark fw-medium mb-0">$524.25</p>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <p class="fs-13 mb-0">Tax</p>
                                <p class="text-dark fw-medium mb-0">$80.00</p>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <p class="fs-13 mb-0">Discount</p>
                                <p class="text-danger fw-medium mb-0">-$14.00</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center border-top pt-2 mt-2">
                                <h6 class="mb-0">Total Amount</h6>
                                <h6 class=" fw-bold mb-0">$580.50</h6>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <div
                            class="d-flex align-items-center gap-2 w-100 justify-content-between flex-column flex-sm-row">
                            <button class="btn btn-light d-flex align-items-center gap-2" data-bs-dismiss="modal"><i
                                    class="icon-printer"></i>Print Invoice</button>
                            <button type="submit" class="btn btn-primary d-flex align-items-center gap-2"><i
                                    class="icon-file-spreadsheet"></i>Print Bill</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Sale Modal -->
    <div class="modal custom-modal fade" id="today-sale" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-chart-column-big"></i></span>Today’s Sales Insights</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="bg-info-subtle rounded-3 p-2 text-center mb-4">
                        <p class="mb-1">Total Sale Amount</p>
                        <h5 class="text-info heading-title mb-0">$2000</h5>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 row-gap-4">
                        <div class="col">
                            <div class="bg-white border rounded-3 text-center shadow p-2">
                                <p class="d-flex align-items-center justify-content-center mb-1"><i
                                        class="fa-solid fa-circle fs-8 text-pink me-1"></i>Cash Amount</p>
                                <h5 class="mb-0">$1500</h5>
                            </div>
                        </div>
                        <div class="col">
                            <div class="bg-white border rounded-3 text-center shadow p-2">
                                <p class="d-flex align-items-center justify-content-center mb-1"><i
                                        class="fa-solid fa-circle fs-8 text-teal me-1"></i>Credit Card</p>
                                <h5 class="mb-0">$400</h5>
                            </div>
                        </div>
                        <div class="col">
                            <div class="bg-white border rounded-3 text-center shadow p-2">
                                <p class="d-flex align-items-center justify-content-center mb-1"><i
                                        class="fa-solid fa-circle fs-8 text-cyan me-1"></i>Debit Card</p>
                                <h5 class="mb-0">$456</h5>
                            </div>
                        </div>
                        <div class="col">
                            <div class="bg-white border rounded-3 text-center shadow p-2">
                                <p class="d-flex align-items-center justify-content-center mb-1"><i
                                        class="fa-solid fa-circle fs-8 text-orange me-1"></i>UPI</p>
                                <h5 class="mb-0">$600</h5>
                            </div>
                        </div>
                        <div class="col">
                            <div class="bg-white border rounded-3 text-center shadow p-2">
                                <p class="d-flex align-items-center justify-content-center mb-1"><i
                                        class="fa-solid fa-circle fs-8 text-danger me-1"></i>Others</p>
                                <h5 class="mb-0">$600</h5>
                            </div>
                        </div>
                        <div class="col">
                            <div class="bg-white border rounded-3 text-center shadow p-2">
                                <p class="d-flex align-items-center justify-content-center mb-1"><i
                                        class="fa-solid fa-circle fs-8 text-purple me-1"></i>Sales Return</p>
                                <h5 class="mb-0">$6598</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Print modal -->
    <div class="modal custom-modal fade" id="add-print" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-printer"></i></span>Options</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <form>
                    <div class="modal-body pt-0">
                        <!-- Start row -->
                        <div class="row g-3">
                            <div class="col-lg-6">
                                <div class="p-3 rounded-3 shadow border text-center position-relative cursor-pointer print-item"
                                    data-bs-toggle="modal" data-bs-target="#thermal-print">
                                    <i class="icon-file-terminal fs-20 mb-2"></i>
                                    <p class="fs-13 fw-medium mb-0">Thermal</p>
                                    <div class="ripple-container bg-white rounded-circle position-absolute"></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div
                                    class="p-3 rounded-3 shadow border text-center position-relative cursor-pointer print-item">
                                    <i class="icon-file fs-20 mb-2"></i>
                                    <p class="fs-13 fw-medium mb-0">A4</p>
                                    <div class="ripple-container bg-white rounded-circle position-absolute"></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div
                                    class="p-3 rounded-3 shadow border text-center position-relative cursor-pointer print-item">
                                    <i class="icon-message-circle fs-20 mb-2"></i>
                                    <p class="fs-13 fw-medium mb-0">Send Whatsapp</p>
                                    <div class="ripple-container bg-white rounded-circle position-absolute"></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div
                                    class="p-3 rounded-3 shadow border text-center position-relative cursor-pointer print-item">
                                    <i class="icon-copy fs-20 mb-2"></i>
                                    <p class="fs-13 fw-medium mb-0">Copy Link</p>
                                    <div class="ripple-container bg-white rounded-circle position-absolute"></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div
                                    class="p-3 rounded-3 shadow border text-center position-relative cursor-pointer print-item">
                                    <i class="icon-mails fs-20 mb-2"></i>
                                    <p class="fs-13 fw-medium mb-0">Send Email</p>
                                    <div class="ripple-container bg-white rounded-circle position-absolute"></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div
                                    class="p-3 rounded-3 shadow border text-center position-relative cursor-pointer print-item">
                                    <i class="icon-message-square fs-20 mb-2"></i>
                                    <p class="fs-13 fw-medium mb-0">Send SMS</p>
                                    <div
                                        class="ripple-container bg-white rounded-circle position-absolute top-0 end-0 m-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End row -->

                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Thermal modal -->
    <div class="modal custom-modal fade" id="thermal-print" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2">Print Invoice</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <form>
                    <div class="modal-body pt-0">
                        <div class="text-center mb-3">
                            <div class="mb-3">
                                <img src="@/assets/img/logo-dark.svg" class="logo-default img-fluid" alt="logo">
                                <img src="@/assets/img/logo.svg" class="logo-white img-fluid" alt="logo">
                            </div>
                            <p class="fs-13 text-dark mb-1">742 Evergreen Terrace Springfield, IL 62704,USA</p>
                            <p class="fs-13 text-dark mb-1">Phone :+1 54565 44521 Email : info@example.com</p>
                            <p class="fs-13 text-dark mb-0">GST : 215452215565464</p>
                        </div>
                        <div class="py-2 border-top border-bottom border-dashed text-center mb-3">
                            <h4 class="main-title mb-0">Sales Reciept</h4>
                        </div>
                        <div class="d-flex align-items-center justify-content-between border-bottom border-dashed pb-3">
                            <p class="fs-13 text-dark mb-0">Invoice : #INV1024</p>
                            <p class="fs-13 text-dark mb-0">Date : 25 May 2026</p>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table table-dashed mb-0">
                                <thead class="table-white">
                                    <tr>
                                        <th>#</th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td class="fw-medium text-dark">Paracetamol 500</td>
                                        <td>3</td>
                                        <td>$200</td>
                                        <td class="fw-medium text-dark">$600</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td class="fw-medium text-dark">Amoxicillin 250</td>
                                        <td>2</td>
                                        <td>$180</td>
                                        <td class="fw-medium text-dark">$360</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td class="fw-medium text-dark">Cetirizine</td>
                                        <td>2</td>
                                        <td>$120</td>
                                        <td class="fw-medium text-dark">$240</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td class="fw-medium text-dark">Ceftriaxone 20</td>
                                        <td>6</td>
                                        <td>$80</td>
                                        <td class="fw-medium text-dark">$480</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td class="fw-medium text-dark">Ondansetron</td>
                                        <td>2</td>
                                        <td>$42</td>
                                        <td class="fw-medium text-dark">$84</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="p-3">
                            <div class="row">
                                <div class="col-6 ms-auto">
                                    <p class="fs-13 mb-2">Sub Total <span
                                            class="fw-medium float-end text-dark">$1764.00</span></p>
                                    <p class="fs-13 mb-2">Tax (18%) <span
                                            class="fw-medium float-end text-dark">$317.52</span></p>
                                    <p class="fs-13 mb-2">Discount (20%) <span class="fw-medium float-end text-dark">-
                                            416.30</span></p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="d-flex align-items-center justify-content-between p-4 flex-wrap border-top border-bottom border-dashed mb-3">
                            <p class="text-dark fw-bold mb-0">Items : 05</p>
                            <p class="text-dark fw-bold mb-0">Quantity : 13</p>
                            <p class="text-dark fw-bold mb-0">Total : $1,664.70</p>
                        </div>
                        <div class="text-center">
                            <div class="mb-4">
                                <p class="fs-13 text-dark mb-1">Payment Method : Cash</p>
                                <p class="fs-13 text-dark mb-1">Cash Given : $1700</p>
                                <p class="fs-13 text-dark mb-1">Order Amount : $1,664.70</p>
                                <p class="fs-13 text-dark mb-0">Change : 35.3</p>
                            </div>
                            <img src="@/assets/img/icons/bar-code.svg" alt="barcode" class="img-fluid mb-2">
                            <p class="fw-medium mb-2">#INV0125</p>
                            <h4 class="mb-0">Thanks for your Purchase</h4>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="d-flex align-items-center gap-2 felx-grow-1 w-100 justify-content-between">
                            <button class="btn btn-light d-inline-flex align-items-center gap-2"
                                data-bs-dismiss="modal"><i class="icon-x"></i>Cancel </button>
                            <button type="submit" class="btn btn-primary"><i
                                    class="icon-printer me-1"></i>Print</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Onhold Modal -->
    <div class="modal custom-modal fade" id="onhold-orders" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-shopping-bag"></i></span>Onhold Orders</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <div class="modal-body pt-0 vstack gap-3">

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-end">
                            <div class="col-sm-6 col-lg-4">
                                <div>
                                    <a href="#" class="badge bg-primary-gradient text-white mb-2">#ORD1215</a>
                                    <p class="text-dark mb-2">Customer : Walk-in Customer</p>
                                    <p class="text-dark mb-0">Total : $452</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-5">
                                <div>
                                    <p class="text-dark mb-2">Date & time : 25 May 2026 - 11:45 AM</p>
                                    <p class="text-dark d-flex align-items-center gap-1 mb-0">No of Items : 5 <span
                                            data-bs-toggle="tooltip" data-bs-html="true"
                                            data-bs-custom-class="custom-tooltip"
                                            title="Paracetamol 500 &times; 3<br>Amoxicillin 250 &times; 3<br>Cetirizine &times; 3<br>Ceftriaxone 20 &times; 3<br>Ondansetron &times; 3"><i
                                                class="icon-info"></i></span></p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="float-start float-lg-end">
                                    <a href="#" class="btn btn-white d-flex align-items-center mb-2"><i
                                            class="icon-play me-2"></i>Resume</a>
                                    <a href="#" class="btn btn-light d-flex align-items-center"><i
                                            class="icon-x me-2"></i>Cancel</a>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-end">
                            <div class="col-sm-6 col-lg-4">
                                <div>
                                    <a href="#" class="badge bg-primary-gradient text-white mb-2">#ORD1216</a>
                                    <p class="text-dark mb-2">Customer : Walk-in Customer</p>
                                    <p class="text-dark mb-0">Total : $1234</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-5">
                                <div>
                                    <p class="text-dark mb-2">Date & time : 25 May 2026 - 12:30 PM</p>
                                    <p class="text-dark d-flex align-items-center gap-1 mb-0">No of Items : 10 <span
                                            data-bs-toggle="tooltip" data-bs-html="true"
                                            data-bs-custom-class="custom-tooltip"
                                            title="Paracetamol 500 &times; 3<br>Amoxicillin 250 &times; 3<br>Cetirizine &times; 3<br>Ceftriaxone 20 &times; 3<br>Ondansetron &times; 3"><i
                                                class="icon-info"></i></span></p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="float-start float-lg-end">
                                    <a href="#" class="btn btn-white d-flex align-items-center mb-2"><i
                                            class="icon-play me-2"></i>Resume</a>
                                    <a href="#" class="btn btn-light d-flex align-items-center"><i
                                            class="icon-x me-2"></i>Cancel</a>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-end">
                            <div class="col-sm-6 col-lg-4">
                                <div>
                                    <a href="#" class="badge bg-primary-gradient text-white mb-2">#ORD1217</a>
                                    <p class="text-dark mb-2">Customer : Walk-in Customer</p>
                                    <p class="text-dark mb-0">Total : $987</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-5">
                                <div>
                                    <p class="text-dark mb-2">Date & time : 25 May 2026 - 1:15 PM</p>
                                    <p class="text-dark d-flex align-items-center gap-1 mb-0">No of Items : 8 <span
                                            data-bs-toggle="tooltip" data-bs-html="true"
                                            data-bs-custom-class="custom-tooltip"
                                            title="Paracetamol 500 &times; 3<br>Amoxicillin 250 &times; 3<br>Cetirizine &times; 3<br>Ceftriaxone 20 &times; 3<br>Ondansetron &times; 3"><i
                                                class="icon-info"></i></span></p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="float-start float-lg-end">
                                    <a href="#" class="btn btn-white d-flex align-items-center mb-2"><i
                                            class="icon-play me-2"></i>Resume</a>
                                    <a href="#" class="btn btn-light d-flex align-items-center"><i
                                            class="icon-x me-2"></i>Cancel</a>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-end">
                            <div class="col-sm-6 col-lg-4">
                                <div>
                                    <a href="#" class="badge bg-primary-gradient text-white mb-2">#ORD1218</a>
                                    <p class="text-dark mb-2">Customer : Walk-in Customer</p>
                                    <p class="text-dark mb-0">Total : $654</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-5">
                                <div>
                                    <p class="text-dark mb-2">Date & time : 25 May 2026 - 2:00 PM</p>
                                    <p class="text-dark d-flex align-items-center gap-1 mb-0">No of Items : 6 <span
                                            data-bs-toggle="tooltip" data-bs-html="true"
                                            data-bs-custom-class="custom-tooltip"
                                            title="Paracetamol 500 &times; 3<br>Amoxicillin 250 &times; 3<br>Cetirizine &times; 3<br>Ceftriaxone 20 &times; 3<br>Ondansetron &times; 3"><i
                                                class="icon-info"></i></span></p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="float-start float-lg-end">
                                    <a href="#" class="btn btn-white d-flex align-items-center mb-2"><i
                                            class="icon-play me-2"></i>Resume</a>
                                    <a href="#" class="btn btn-light d-flex align-items-center"><i
                                            class="icon-x me-2"></i>Cancel</a>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                </div>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Sync Orders Modal -->
    <div class="modal custom-modal fade" id="sync-orders" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-wifi-off"></i></span>Sync Orders</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <div class="modal-body pt-0 vstack gap-3">

                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div>
                            <h5 class="fs-16 mb-1">Offline Orders Queue</h5>
                            <p class="fs-13 mb-0">Working offline • 6 pending orders</p>
                        </div>
                        <a href="#" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal"
                            data-bs-target="#sync-modal"><i class="icon-folder-sync me-2"></i>Sync Orders</a>
                    </div>

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-center">
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Order ID</p>
                                    <p class="text-dark fw-medium mb-0">#ORD-2847</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Items</p>
                                    <p class="text-dark fw-medium mb-0">7 items</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Amount</p>
                                    <p class="text-dark fw-medium mb-0">$1,245.00</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Time</p>
                                    <p class="text-dark fw-medium mb-0">02:34 PM</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-4">
                                <div class="text-lg-end">
                                    <span class="badge badge-soft-purple d-inline-flex align-items-center"><i
                                            class="fa-solid fa-circle fs-5 me-1"></i>Pending</span>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-center">
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Order ID</p>
                                    <p class="text-dark fw-medium mb-0">#ORD-2848</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Items</p>
                                    <p class="text-dark fw-medium mb-0">3 items</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Amount</p>
                                    <p class="text-dark fw-medium mb-0">$567.50</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Time</p>
                                    <p class="text-dark fw-medium mb-0">02:45 PM</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-4">
                                <div class="text-lg-end">
                                    <span class="badge badge-soft-purple d-inline-flex align-items-center"><i
                                            class="fa-solid fa-circle fs-5 me-1"></i>Pending</span>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-center">
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Order ID</p>
                                    <p class="text-dark fw-medium mb-0">#ORD-2849</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Items</p>
                                    <p class="text-dark fw-medium mb-0">12 items</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Amount</p>
                                    <p class="text-dark fw-medium mb-0">$2,890.00</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Time</p>
                                    <p class="text-dark fw-medium mb-0">03:12 PM</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-4">
                                <div class="text-lg-end">
                                    <span class="badge badge-soft-purple d-inline-flex align-items-center"><i
                                            class="fa-solid fa-circle fs-5 me-1"></i>Pending</span>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-center">
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Order ID</p>
                                    <p class="text-dark fw-medium mb-0">#ORD-2850</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Items</p>
                                    <p class="text-dark fw-medium mb-0">5 items</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Amount</p>
                                    <p class="text-dark fw-medium mb-0">$789.00</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Time</p>
                                    <p class="text-dark fw-medium mb-0">03:28 PM</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-4">
                                <div class="text-lg-end">
                                    <span class="badge badge-soft-purple d-inline-flex align-items-center"><i
                                            class="fa-solid fa-circle fs-5 me-1"></i>Pending</span>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-center">
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Order ID</p>
                                    <p class="text-dark fw-medium mb-0">#ORD-2851</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Items</p>
                                    <p class="text-dark fw-medium mb-0">8 items</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Amount</p>
                                    <p class="text-dark fw-medium mb-0">$1,456.75</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Time</p>
                                    <p class="text-dark fw-medium mb-0">03:55 PM</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-4">
                                <div class="text-lg-end">
                                    <span class="badge badge-soft-purple d-inline-flex align-items-center"><i
                                            class="fa-solid fa-circle fs-5 me-1"></i>Pending</span>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                    <div class="p-3 rounded-3 border">

                        <!-- start row -->
                        <div class="row g-3 align-items-center">
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Order ID</p>
                                    <p class="text-dark fw-medium mb-0">#ORD-2852</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Items</p>
                                    <p class="text-dark fw-medium mb-0">4 items</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Amount</p>
                                    <p class="text-dark fw-medium mb-0">$623.00</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-2">
                                <div>
                                    <p class="fs-13 mb-1">Time</p>
                                    <p class="text-dark fw-medium mb-0">04:10 PM</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-lg-4">
                                <div class="text-lg-end">
                                    <span class="badge badge-soft-purple d-inline-flex align-items-center"><i
                                            class="fa-solid fa-circle fs-5 me-1"></i>Pending</span>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- end card -->

                </div>
                <div class="modal-footer">
                    <div class="d-flex align-items-center gap-2 flex-wrap w-100 justify-content-between">
                        <h4 class="mb-0">Total Amount</h4>
                        <h4 class="mb-0">$7571.25</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Sync Modal -->
    <div class="modal custom-modal fade" id="sync-modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="loading-state">
                        <div class="text-center mb-3">
                            <div class="avatar-list-stacked avatar-group-lg mb-3">
                                <span class="avatar avatar-lg avatar-rounded bg-primary"><i
                                        class="icon-wifi-off fs-24"></i></span>
                                <span class="avatar avatar-rounded bg-dark border border-white"><img
                                        class="w-auto h-auto" src="@/assets/img/logo-small.svg" alt="small logo"></span>
                            </div>
                            <h4 class="card-title mb-1">Syncing Orders to Server</h4>
                            <p class="mb-0">Uploading offline orders to the cloud. Please do not close the application.
                            </p>
                        </div>
                        <div class="p-3 rounded-3 bg-primary-subtle mb-3">
                            <p
                                class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-2 text-dark fw-medium">
                                Sync Progress <span>1 / 6</span></p>
                            <div class="progress mb-2 progress-animate progress-md" role="progressbar"
                                aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-primary-gradient" style="width: 10%"></div>
                            </div>
                            <p
                                class="d-flex align-items-center justify-content-between gap-2 flex-wrap fs-12 fw-medium mb-0">
                                Processing... <span class="text-dark fw-semibold">18%</span></p>
                        </div>
                        <div class="border rounded-3 p-3 mb-3">
                            <p class="fw-bold text-primary d-flex align-items-center mb-2"><i
                                    class="fa-solid fa-circle fs-8 me-1"></i>Currently Syncing</p>
                            <p class="fs-13 mb-2 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                Order ID <span class="fs-14 fw-medium text-dark">#ORD2847</span></p>
                            <p class="fs-13 mb-2 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                Items <span class="fs-14 fw-medium text-dark">7 items</span></p>
                            <p class="fs-13 mb-2 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                Amount <span class="fs-14 fw-medium text-dark">$1,245.00</span></p>
                            <p class="fs-13 mb-0 d-flex align-items-center justify-content-between gap-2 flex-wrap">Time
                                <span class="fs-14 fw-medium text-dark">02:34 PM</span>
                            </p>
                        </div>
                        <div class="row gx-3 justify-content-center">
                            <div class="col-6 col-sm-4">
                                <div class="border rounded-3 p-2 text-center mb-3">
                                    <p class="mb-1">Loading</p>
                                    <h5 class="mb-0">1</h5>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4">
                                <div class="border rounded-3 p-2 text-center mb-3">
                                    <p class="mb-1">Remaining</p>
                                    <h5 class="mb-0">5</h5>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4">
                                <div class="border rounded-3 p-2 text-center mb-3">
                                    <p class="mb-1">Total</p>
                                    <h5 class="mb-0">6</h5>
                                </div>
                            </div>
                        </div>
                        <div class="badge-soft-warning badge rounded-3 d-block text-start px-3 mb-3">
                            <p class="mb-0 text-wrap"><span class="fw-bold">Important:</span> Keep the POS running until
                                sync is complete. Do not turn off the system.</p>
                        </div>
                        <button class="btn btn-light d-flex align-items-center justify-content-center gap-2 w-100"
                            data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#cancel-sync"><i
                                class="icon-x"></i>Cancel</button>
                    </div>
                    <div class="content-state d-none">
                        <div class="text-center mb-3">
                            <div class="avatar avatar-rounded bg-light border mb-3">
                                <img class="w-auto h-auto" src="@/assets/img/logo-small.svg" alt="small logo">
                            </div>
                            <h4 class="card-title mb-1">All Orders Synced Successfully!</h4>
                            <p class="mb-0">All offline orders have been uploaded to the server. Your data is now up to
                                date.</p>
                        </div>
                        <div class="row gx-3 justify-content-center">
                            <div class="col-6 col-sm-4">
                                <div class="border rounded-3 p-2 text-center mb-3">
                                    <div class="avatar bg-primary mb-2">
                                        <i class="icon-database fs-20"></i>
                                    </div>
                                    <h5 class="mb-1">6</h5>
                                    <p class="mb-0">Orders Synced</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4">
                                <div class="border rounded-3 p-2 text-center mb-3">
                                    <div class="avatar bg-purple mb-2">
                                        <i class="icon-trending-up fs-20"></i>
                                    </div>
                                    <h5 class="mb-1">49</h5>
                                    <p class="mb-0">Total Items</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4">
                                <div class="border rounded-3 p-2 text-center mb-3">
                                    <div class="avatar bg-orange mb-2">
                                        <i class="icon-dollar-sign fs-20"></i>
                                    </div>
                                    <h5 class="mb-1">$7452.56</h5>
                                    <p class="mb-0">Total Value</p>
                                </div>
                            </div>
                        </div>
                        <div class="badge-soft-success badge rounded-3 d-block px-3 mb-3">
                            <p class="mb-0 text-wrap">Complete: Your POS is now fully synchronized with the server.</p>
                        </div>
                        <button class="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100"
                            data-bs-dismiss="modal"><i class="icon-arrow-right"></i>Continue Working</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Add Scan modal -->
    <div class="modal custom-modal fade" id="scan-modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-file-text"></i></span>Prescription</h4>
                    <button class="btn-close custom-btn-close border p-1 me-0 text-dark" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i>
                    </button>
                </div>
                <form>
                    <div class="modal-body pt-0">
                        <div
                            class="bg-light border p-2 rounded-3 prescription-tab d-flex align-items-center flex-wrap gap-1 mb-3">
                            <a href="#"
                                class="py-2 px-3 fw-medium text-dark d-inline-flex align-items-center rounded-3 active"
                                id="scan-prescription"><i class="icon-scan-text me-1"></i>Scan Prescription</a>
                            <a href="#" class="py-2 px-3 fw-medium text-dark d-inline-flex align-items-center rounded-3"
                                id="upload-prescription"><i class="icon-upload me-1"></i>Upload Prescription</a>
                        </div>
                        <div
                            class="upload-content p-5 text-center bg-light border border-2 border-dashed position-relative rounded-3 mb-4">
                            <input type="file" class="position-absolute w-100 h-100 opacity-0 top-0 start-0">
                            <div class="avatar avatar-lg avatar-rounded bg-white text-primary shadow mb-2">
                                <i class="icon-cloud-upload fs-20"></i>
                            </div>
                            <p class="text-dark fw-medium mb-1">Click to upload or drag and drop</p>
                            <p class="fs-12 mb-0">Supports JPG, PNG, PDF (Max 10MB)</p>
                        </div>
                        <h5 class="fs-16 mb-2">Customer Details</h5>
                        <div class="mb-4">
                            <!-- Start row -->
                            <div class="row g-3">
                                <div class="col-lg-3 col-sm-6">
                                    <div>
                                        <label class="form-label">Customer Name <span class="text-danger">*</span>
                                        </label>
                                        <input type="text" class="form-control" value="Peter Brown">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div>
                                        <label class="form-label">Gender</label>
                                        <vue-select
                                            :options="genderOptions"
                                            v-model="selectedGender"
                                            placeholder="Select"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div>
                                        <label class="form-label">Age</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div>
                                        <label class="form-label">Phone Number</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <!-- end row -->
                        </div>
                        <div class="mb-4">

                            <h5 class="fs-16 mb-2">Doctor Selection</h5>
                            <!-- Start row -->
                            <div class="row g-3">
                                <div class="col-lg-4 col-sm-6">
                                    <div>
                                        <label class="form-label">Doctor <span class="text-danger">*</span></label>
                                        <vue-select
                                            :options="doctorOptions"
                                            v-model="selectedDoctor"
                                            placeholder="Select"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6">
                                    <div>
                                        <label class="form-label">Clinic / Hospital</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6">
                                    <div>
                                        <label class="form-label">Registration No</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <!-- end row -->
                        </div>
                        <h5 class="fs-16 mb-2">Prescribed Medicine</h5>
                        <div class="table-responsive table-nowrap border border-bottom-0">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Items</th>
                                        <th>Dosage</th>
                                        <th>Frequency</th>
                                        <th>Duration</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <a href="#" class="link-danger"><i class="icon-trash-2"></i></a>
                                                <a href="#" class="text-body"><i class="icon-grip-vertical"></i></a>
                                                <div class="flex-grow-1 min-w-120">
                                                    <vue-select
                                                        :options="medicineOptions"
                                                        v-model="selectedMedicine"
                                                        placeholder="Select"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td class="min-w-120">
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="min-w-120">
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="min-w-120">
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="min-w-120">
                                            <input type="text" class="form-control">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <a href="#" class="link-danger"><i class="icon-trash-2"></i></a>
                                                <a href="#" class="text-body"><i class="icon-grip-vertical"></i></a>
                                                <div class="flex-grow-1 min-w-120">
                                                    <vue-select
                                                        :options="medicineOptions"
                                                        v-model="selectedMedicineTwo"
                                                        placeholder="Select"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td class="min-w-120">
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="min-w-120">
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="min-w-120">
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="min-w-120">
                                            <input type="text" class="form-control">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="d-flex align-items-center gap-2 felx-grow-1 w-100 justify-content-between">
                            <button class="btn btn-light d-inline-flex align-items-center gap-2"
                                data-bs-dismiss="modal"><i class="icon-x"></i>Cancel </button>
                            <button type="submit" class="btn btn-primary"><i class="icon-plus me-1"></i>Create
                                Order</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- End modal -->

    <!-- Start Delete Modal -->
    <div class="modal fade" id="add-hold">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="avatar avatar-xl rounded-circle bg-soft-danger mb-3">
                        <i class="icon-pause"></i>
                    </span>
                    <h4 class="mb-2">Hold Order</h4>
                    <p class="mb-4">Are you sure you want to Hold the Order?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light d-flex align-items-center" data-bs-dismiss="modal"><i
                                class="icon-x me-1"></i> Cancel</a>
                        <a href="#" class="btn btn-danger d-flex align-items-center" data-bs-dismiss="modal"><i
                                class="icon-pause me-1"></i>Hold</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal -->

    <!-- Start Delete Sync Modal -->
    <div class="modal fade" id="cancel-sync">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="avatar avatar-xl rounded-circle bg-soft-danger mb-3">
                        <i class="icon-trash-2"></i>
                    </span>
                    <h4 class="mb-2">Cancel Sync Progress</h4>
                    <p class="mb-4">Are you sure you want to Cancel the Sync Progress?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light d-flex align-items-center" data-bs-dismiss="modal"><i
                                class="icon-x me-1"></i>Back to Sync Orders</a>
                        <a href="#" class="btn btn-danger d-flex align-items-center" data-bs-dismiss="modal"><i
                                class="icon-pause me-1"></i>Yes, Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal -->
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
export default {
    data() {
        return {
            valueOne,
            selectedCountry: null,
            countryOptions: [
                { label: "Select", value: "Select" },
                { label: "USA", value: "USA" },
                { label: "Canada", value: "Canada" },
                { label: "Germany", value: "Germany" },
                { label: "France", value: "France" },
            ],
            selectedCity: null,
            cityOptions: [
                { label: "Select", value: "Select" },
                { label: "Los Angeles", value: "Los Angeles" },
                { label: "San Diego", value: "San Diego" },
                { label: "Fresno", value: "Fresno" },
                { label: "San Francisco", value: "San Francisco" },
            ],
            selectedState: null,
            stateOptions: [
                { label: "Select", value: "Select" },
                { label: "California", value: "California" },
                { label: "New York", value: "New York" },
                { label: "Texas", value: "Texas" },
                { label: "Florida", value: "Florida" },
            ],
            selectedGender: null,
            genderOptions: [
                { label: "Select", value: "Select" },
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
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
            selectedMedicine: null,
            selectedMedicineTwo: null,
            medicineOptions: [
                { label: "Select", value: "Select" },
                { label: "Paracetamol", value: "Paracetamol" },
                { label: "Amoxicillin", value: "Amoxicillin" },
                { label: "Cetirizine", value: "Cetirizine" },
            ]
        }
    }
}
</script>