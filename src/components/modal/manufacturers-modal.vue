<template>
    <!-- Add Manufacturer Modal -->
    <div class="modal custom-modal fade" id="add_manifacture" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Add New Manufacturer</h4>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
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
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Manufacturer Name <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Contact Person</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Email Address</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Phone Number</label>
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
                            <div class="col-md-12">
                                <label class="form-label">Linked Medicines</label>
                                <vue-select
                                    :options="medicineOptions"
                                    v-model="selectedMedicines"
                                    :isMulti="true"
                                    placeholder="Select"
                                />
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
    <!-- /Add Manufacturer Modal -->

    <!-- Edit Manufacturer Modal -->
    <div class="modal custom-modal fade" id="edit_manifacture" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Edit Manufacturer</h4>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">
                    <div class="modal-body pt-0">
                        <!-- Start row -->
                        <div class="row row-gap-3">
                            <div class="col-lg-12">
                                <div class="d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-xxxl border bg-light rounded-circle">
                                        <img src="@/assets/img/profiles/avatar-09.jpg" alt="avatar"
                                            class="img-fluid rounded-circle">
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
                                    <label class="form-label">Manufacturer Name <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" class="form-control" value="ABC Pharma">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Contact Person</label>
                                    <input type="text" class="form-control" value="Steven Kelley">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Email Address</label>
                                    <input type="text" class="form-control" value="steven@example.com">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Phone Number</label>
                                    <input type="text" class="form-control" value="+1 89384 47384">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Address</label>
                                    <input type="text" class="form-control" value="123 Pharma St, New York">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">Country</label>
                                    <vue-select
                                        :options="countryOptions"
                                        v-model="selectedCountryEdit"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">City </label>
                                    <vue-select
                                        :options="cityOptions"
                                        v-model="selectedCityEdit"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">State / Province </label>
                                    <vue-select
                                        :options="stateOptions"
                                        v-model="selectedStateEdit"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Pincode</label>
                                    <input type="text" class="form-control" value="10292">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Linked Medicines</label>
                                <vue-select
                                    :options="medicineOptions"
                                    v-model="selectedMedicinesEdit"
                                    :isMulti="true"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-lg-12">
                                <div class="form-check form-switch">
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
                            <button type="button" class="btn btn-primary"><i class="icon-save me-1"></i>Save
                                Changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Edit Manufacturer Modal -->
</template>

<script>
export default {
    data() {
        return {
            selectedCountry: null,
            selectedCity: null,
            selectedState: null,
            selectedMedicines: [],
            selectedCountryEdit: ['USA'],
            selectedCityEdit: ['Los Angeles'],
            selectedStateEdit: ['California'],
            selectedMedicinesEdit: ['Amoxicillin'],
            countryOptions: [
                { label: "Select", value: "Select" },
                { label: "USA", value: "USA" },
                { label: "Canada", value: "Canada" },
                { label: "Germany", value: "Germany" },
                { label: "France", value: "France" },
            ],
            cityOptions: [
                { label: "Select", value: "Select" },
                { label: "Los Angeles", value: "Los Angeles" },
                { label: "San Diego", value: "San Diego" },
                { label: "Fresno", value: "Fresno" },
                { label: "San Francisco", value: "San Francisco" },
            ],
            stateOptions: [
                { label: "Select", value: "Select" },
                { label: "California", value: "California" },
                { label: "New York", value: "New York" },
                { label: "Texas", value: "Texas" },
                { label: "Florida", value: "Florida" },
            ],
            medicineOptions: [
                { label: "Select", value: "Select" },
                { label: "Paracetamol", value: "Paracetamol" },
                { label: "Amoxicillin", value: "Amoxicillin" },
                { label: "Ibuprofen", value: "Ibuprofen" },
                { label: "Ciprofloxacin", value: "Ciprofloxacin" },
            ]
        }
    }
}
</script>
