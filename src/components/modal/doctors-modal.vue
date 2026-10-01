<template>

    <!-- Add Doctor Modal -->
    <div class="modal fade" id="add_doctor">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Add New Doctor</h4>
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
                                <label class="form-label">Doctor Name <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="doctorNameOptions"
                                    v-model="selectedDoctorName"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Doctor Code</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Specialization</label>
                                <vue-select
                                    :options="specializationOptions"
                                    v-model="selectedSpecialization"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Clinic / Hospital Name</label>
                                <vue-select
                                    :options="clinicOptions"
                                    v-model="selectedClinic"
                                    placeholder="Select"
                                />
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
                                <input type="text" class="form-control">
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
    <!-- /Add Doctor Modal -->

    <!-- Edit Doctor Modal -->
    <div class="modal fade" id="edit_doctor">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Edit Doctor</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <!-- start row -->
                        <div class="row row-gap-3">
                            <div class="col-lg-12">
                                <div class="d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-xxxl rounded-circle border bg-light">
                                        <img src="@/assets/img/doctors/doctor-img-2.jpg" alt="avatar"
                                            class="rounded-circle">
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
                                <label class="form-label">Doctor Name <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="doctorNameOptions"
                                    v-model="selectedDoctorNameEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Doctor Code</label>
                                <input type="text" class="form-control" value="#DOC016">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Specialization</label>
                                <vue-select
                                    :options="specializationOptions"
                                    v-model="selectedSpecializationEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Clinic / Hospital Name</label>
                                <vue-select
                                    :options="clinicOptions"
                                    v-model="selectedClinicEdit"
                                    placeholder="Select"
                                />
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
                                <input type="text" class="form-control" value="90001">
                            </div>
                            <div class="col-md-12">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="doctorsModalStatusSwitch" checked>
                                    <label class="form-check-label" for="doctorsModalStatusSwitch">Status</label>
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
    <!-- /Edit Doctor Modal -->

</template>

<script>
export default {
    data() {
        return {
            selectedDoctorName: null,
            selectedSpecialization: null,
            selectedClinic: null,
            selectedCountry: null,
            selectedCity: null,
            selectedState: null,
            selectedDoctorNameEdit: ['Dr. Michael Anderson'],
            selectedSpecializationEdit: ['Pediatrician'],
            selectedClinicEdit: ['Horizon Hospital'],
            selectedCountryEdit: ['UK'],
            selectedCityEdit: ['Los Angeles'],
            selectedStateEdit: ['California'],
            doctorNameOptions: [
                { label: "Select Doctor", value: "Select Doctor" },
                { label: "Dr. David Wilson", value: "Dr. David Wilson" },
                { label: "Dr. Michael Anderson", value: "Dr. Michael Anderson" },
                { label: "Dr. Sarah Johnson", value: "Dr. Sarah Johnson" },
                { label: "Dr. Robert Brown", value: "Dr. Robert Brown" },
                { label: "Dr. Emily Davis", value: "Dr. Emily Davis" },
            ],
            specializationOptions: [
                { label: "Select", value: "Select" },
                { label: "Pediatrician", value: "Pediatrician" },
                { label: "Cardiologist", value: "Cardiologist" },
                { label: "Dermatologist", value: "Dermatologist" },
                { label: "Neurologist", value: "Neurologist" },
                { label: "Orthopedic Surgeon", value: "Orthopedic Surgeon" },
            ],
            clinicOptions: [
                { label: "Select", value: "Select" },
                { label: "Royal Care Clinic", value: "Royal Care Clinic" },
                { label: "Horizon Hospital", value: "Horizon Hospital" },
                { label: "Al Noor Clinic", value: "Al Noor Clinic" },
                { label: "CityCare Medical Clinic", value: "CityCare Medical Clinic" },
                { label: "Sunrise Health Clinic", value: "Sunrise Health Clinic" },
                { label: "WellSpring Clinic", value: "WellSpring Clinic" },
            ],
            countryOptions: [
                { label: "Select", value: "Select" },
                { label: "USA", value: "USA" },
                { label: "UK", value: "UK" },
                { label: "Canada", value: "Canada" },
                { label: "Australia", value: "Australia" },
                { label: "Germany", value: "Germany" },
            ],
            cityOptions: [
                { label: "Select", value: "Select" },
                { label: "New York", value: "New York" },
                { label: "Los Angeles", value: "Los Angeles" },
                { label: "Chicago", value: "Chicago" },
                { label: "Houston", value: "Houston" },
                { label: "Phoenix", value: "Phoenix" },
            ],
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
