<template>
    <!-- start offcanvas -->
    <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="add_filter">
        <div class="offcanvas-header d-block border-0">
            <div class="d-flex align-items-center justify-content-between">
                <h4 class="title d-flex align-items-center gap-2 mb-0"> <span
                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i class="icon-funnel"></i></span>
                    Filter
                </h4>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i class="icon-x"></i>
                </button>
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

    <!-- Start Vendors Modal -->
    <div class="modal fade" id="add_vendor">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Create New Vendor</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <!-- start row -->
                        <div class="row row-gap-3">
                            <div class="col-lg-12">
                                <div class="d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-xxxl border bg-light rounded-circle">
                                        <i class="icon-image fs-20 text-dark"></i>
                                    </div>
                                    <div>
                                        <label class="form-label mb-1 fw-bold fs-14">Upload Profile Image</label>
                                        <p class="fs-13 fw-medium mb-2">Image should below 2MB</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <label
                                                class="btn btn-light btn-sm fs-13 d-flex align-items-center gap-1 position-relative cursor-pointer mb-0">
                                                <i class="icon-refresh-ccw"></i>
                                                <input type="file"
                                                    class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer">
                                                Change Image
                                            </label>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-white rounded-circle">
                                                <i class="icon-trash-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end col-->
                            <div class="col-md-12">
                                <label class="form-label">Vendor Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Enter vendor name">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Phone</label>
                                <input type="text" class="form-control" placeholder="Enter phone number">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Email Address</label>
                                <input type="email" class="form-control" placeholder="Enter email address">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Address</label>
                                <input type="text" class="form-control" placeholder="Enter address">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Country</label>
                                <vue-select
                                    :options="countryOptions"
                                    v-model="selectedCountry"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">City</label>
                                <vue-select
                                    :options="cityOptions"
                                    v-model="selectedCity"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">State/Province</label>
                                <vue-select
                                    :options="stateOptions"
                                    v-model="selectedState"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Pincode</label>
                                <input type="text" class="form-control" placeholder="Enter pincode">
                            </div>
                        </div>
                        <!-- end row -->
                    </form>

                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <a href="#" class="btn btn-light d-inline-flex align-items-center gap-2" data-bs-dismiss="modal"><i
                            class="icon-x"></i>Cancel </a>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i
                            class="icon-plus"></i> Create New </a>
                </div>
            </div>
        </div>
    </div>
    <!-- End Vendors Modal -->

    <!-- Start Edit Vendors Modal -->
    <div class="modal fade" id="edit_vendor">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-edit"></i></span>Edit Vendor</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <!-- start row -->
                        <div class="row row-gap-3">
                            <div class="col-lg-12">
                                <div class="d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-xxxl border bg-light rounded-circle overflow-hidden">
                                        <img src="@/assets/img/supplier/supplier-img-2.jpg" alt="supplier">
                                    </div>
                                    <div>
                                        <label class="form-label mb-1 fw-bold fs-14">Upload Profile Image</label>
                                        <p class="fs-13 fw-medium mb-2">Image should below 2MB</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <label
                                                class="btn btn-light btn-sm fs-13 d-flex align-items-center gap-1 position-relative cursor-pointer mb-0">
                                                <i class="icon-refresh-ccw"></i>
                                                <input type="file"
                                                    class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer">
                                                Change Image
                                            </label>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-white rounded-circle">
                                                <i class="icon-trash-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end col-->
                            <div class="col-md-12">
                                <label class="form-label">Vendor Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="Medlife Distributers">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Phone</label>
                                <input type="text" class="form-control" value="+009  56595 45478">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Email Address</label>
                                <input type="email" class="form-control" value="isst54@example.com">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Address</label>
                                <input type="text" class="form-control" value="1455 3rd Street">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Country</label>
                                <vue-select
                                    :options="countryOptions"
                                    v-model="selectedCountryEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">City</label>
                                <vue-select
                                    :options="cityOptions"
                                    v-model="selectedCityEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">State/Province</label>
                                <vue-select
                                    :options="stateOptions"
                                    v-model="selectedStateEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Pincode</label>
                                <input type="text" class="form-control" value="94107">
                            </div>
                            <div class="col-md-12">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="switchCheckChecked2" checked>
                                    <label class="form-check-label" for="switchCheckChecked2">Status</label>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                    </form>

                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <a href="#" class="btn btn-light d-inline-flex align-items-center gap-2" data-bs-dismiss="modal"><i
                            class="icon-x"></i>Cancel </a>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i
                            class="icon-save"></i> Save Changes </a>
                </div>
            </div>
        </div>
    </div>
    <!-- End Edit Vendors Modal -->

</template>

<script>
import { ref } from 'vue';
const valueOne = ref([20, 50]);

export default {
    data() {
        return {
            valueOne,
            selectedCountry: null,
            selectedCountryEdit: ['USA'],
            countryOptions: [
                { label: "Select", value: "Select" },
                { label: "USA", value: "USA" },
                { label: "UK", value: "UK" },
                { label: "Canada", value: "Canada" },
                { label: "Australia", value: "Australia" },
                { label: "Germany", value: "Germany" },
            ],
            selectedCity: null,
            selectedCityEdit: ['New York'],
            cityOptions: [
                { label: "Select", value: "Select" },
                { label: "New York", value: "New York" },
                { label: "Los Angeles", value: "Los Angeles" },
                { label: "Chicago", value: "Chicago" },
                { label: "Houston", value: "Houston" },
                { label: "Phoenix", value: "Phoenix" },
            ],
            selectedState: null,
            selectedStateEdit: ['California'],
            stateOptions: [
                { label: "Select", value: "Select" },
                { label: "California", value: "California" },
                { label: "New York", value: "New York" },
                { label: "Illinois", value: "Illinois" },
                { label: "Texas", value: "Texas" },
                { label: "Florida", value: "Florida" },
            ]
        }
    }
}
</script>
