<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content pb-0">

            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><router-link :to="all_routes.dashboard"> <span><i class="icon-house"></i></span>
                                Dashboard</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Settings</li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                </div>
            </div>

            <!-- start row -->
            <div class="row">

                <div class="col-lg-4 col-xxl-3">
                    <div class="card flex-fill">
                        <div class="card-body p-xl-4 p-3">
                            <ul class="nav nav-tabs nav-solid border-0 custom-tab-two vstack gap-2">
                                <li class="nav-item">
                                    <router-link :to="all_routes.businessSettings"
                                        class="nav-link active d-flex align-items-center">
                                        <span class="me-2"><i class="icon-scan-barcode"></i></span>Business
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="all_routes.connectedApps" class="nav-link d-flex align-items-center">
                                        <span class="me-2"><i class="icon-component"></i></span>System Integration
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="all_routes.invoiceSettings" class="nav-link d-flex align-items-center">
                                        <span class="me-2"><i class="icon-file-text"></i></span>Billing
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="all_routes.backupSettings" class="nav-link d-flex align-items-center">
                                        <span class="me-2"><i class="icon-computer"></i></span>System
                                    </router-link>
                                </li>
                            </ul>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->

                </div> <!-- end col -->

                <div class="col-lg-8 col-xxl-9">

                    <ul class="nav nav-tabs nav-bordered border-0 gap-0 mb-3">
                        <li class="nav-item">
                            <router-link :to="all_routes.businessSettings" class="nav-link d-flex align-items-center">
                                <i class="icon-building-2 me-2"></i>Business Settings
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="all_routes.profileSettings" class="nav-link active d-flex align-items-center">
                                <i class="icon-circle-user me-2"></i>Profile
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="all_routes.localizationSettings" class="nav-link d-flex align-items-center">
                                <i class="icon-bolt me-2"></i>Localization
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="all_routes.branchesSettings" class="nav-link d-flex align-items-center">
                                <i class="icon-building me-2"></i>Branches
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="all_routes.notificationsSettings" class="nav-link d-flex align-items-center">
                                <i class="icon-bell me-2"></i>Notifications
                            </router-link>
                        </li>
                    </ul>

                    <div class="card">
                        <div class="card-body">

                            <form @submit.prevent="submitForm">

                                <div class="mb-4">

                                    <div class="mb-3 pb-3 border-bottom">
                                        <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                                class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                                    class="icon-briefcase-medical"></i></span>Basic Information</h4>
                                    </div>

                                    <!-- start row -->
                                    <div class="row row-gap-3">
                                        <div class="col-lg-12">
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                                <div class="avatar avatar-xxxl border bg-light rounded-circle">
                                                    <i class="icon-image fs-20 text-dark"></i>
                                                </div>
                                                <div>
                                                    <label class="form-label mb-1 fw-bold fs-14">Upload Store
                                                        Image</label>
                                                    <p class="fs-13 fw-medium mb-2">Image should below 2MB</p>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <label
                                                            class="btn btn-light btn-sm fs-13 d-flex align-items-center gap-1 position-relative cursor-pointer mb-0">
                                                            <i class="icon-refresh-ccw"></i>
                                                            <input type="file"
                                                                class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer">
                                                            Change Image
                                                        </label>
                                                        <a href="#"
                                                            class="btn btn-icon btn-sm btn-white rounded-circle">
                                                            <i class="icon-trash-2"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> <!-- end col-->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">First Name</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Last Name</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Email <span
                                                        class="text-danger">*</span></label>
                                                <input type="email" class="form-control">
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Phone Number</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div> <!-- end col -->

                                    </div>
                                    <!-- end row -->

                                </div>

                                <div>

                                    <div class="mb-3 pb-3 border-bottom">
                                        <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                                class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                                    class="icon-map-pin"></i></span>Address Information</h4>
                                    </div>

                                    <!-- start row -->
                                    <div class="row g-3">
                                        <div class="col-lg-12">
                                            <div>
                                                <label class="form-label">Address Line 1</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-12">
                                            <div>
                                                <label class="form-label">Address Line 2</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Country</label>
                                                <vue-select
                                                    :options="countryOptions"
                                                    v-model="selectedCountry"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">City</label>
                                                <vue-select
                                                    :options="cityOptions"
                                                    v-model="selectedCity"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">State / Province</label>
                                                <vue-select
                                                    :options="stateOptions"
                                                    v-model="selectedState"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Pin Code</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div> <!-- end col -->

                                    </div>
                                    <!-- end row -->

                                </div>

                                <div
                                    class="d-flex align-items-center justify-content-end gap-2 flex-wrap mt-4 pt-4 border-top">
                                    <button type="submit"
                                        class="btn btn-primary d-inline-flex align-items-center gap-2"><i
                                            class="icon-save"></i>Save Changes</button>
                                </div>
                            </form>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->

                    <div class="card">
                        <div class="card-body">

                            <form @submit.prevent="submitForm">

                                <div>

                                    <div class="mb-3 pb-3 border-bottom">
                                        <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                                class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                                    class="icon-lock"></i></span>Change Password</h4>
                                    </div>

                                    <!-- start row -->
                                    <div class="row g-3">

                                        <div class="col-sm-6 col-lg-4">
                                            <div>
                                                <label class="form-label">Current Password <span
                                                        class="text-danger">*</span></label>
                                                <div class="input-group input-group-flat pass-group w-100">
                                                    <input type="password" class="form-control pass-input">
                                                    <span class="input-group-text toggle-password">
                                                        <i class="icon-eye-off"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="colsm-6 col-lg-4">
                                            <div>
                                                <label class="form-label">New Password <span
                                                        class="text-danger">*</span></label>
                                                <div class="input-group input-group-flat pass-group w-100">
                                                    <input type="password" class="form-control pass-input">
                                                    <span class="input-group-text toggle-password">
                                                        <i class="icon-eye-off"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-sm-6 col-lg-4">
                                            <div>
                                                <label class="form-label">Confirm Password <span
                                                        class="text-danger">*</span></label>
                                                <div class="input-group input-group-flat pass-group w-100">
                                                    <input type="password" class="form-control pass-input">
                                                    <span class="input-group-text toggle-password">
                                                        <i class="icon-eye-off"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div> <!-- end col -->

                                    </div>
                                    <!-- end row -->

                                </div>

                                <div
                                    class="d-flex align-items-center justify-content-end gap-2 flex-wrap mt-4 pt-4 border-top">
                                    <button type="submit"
                                        class="btn btn-primary d-inline-flex align-items-center gap-2"><i
                                            class="icon-save"></i>Save Changes</button>
                                </div>
                            </form>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->

                    <div class="card">
                        <div class="card-body">

                            <form @submit.prevent="submitForm">

                                <div>

                                    <div class="mb-3 pb-3 border-bottom">
                                        <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                                class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                                    class="icon-shield"></i></span>2 Step Verification</h4>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <p class="mb-0 fw-medium">Add an extra layer of security to your account</p>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input custom-switch" type="checkbox"
                                                role="switch" id="securityToggle" checked>
                                        </div>
                                    </div>

                                    <div class="form-check p-0 mb-3">
                                        <label
                                            class="d-flex align-items-center border rounded-3 p-2 w-100 cursor-pointer bg-light"
                                            for="methodPhone">
                                            <input class="form-check-input ms-0 me-2" type="radio"
                                                name="securityMethod" id="methodPhone" checked>
                                            <span>
                                                <span class="fs-12 fw-bold d-block text-dark">Phone</span>
                                                <span class="fs-13">Receive a one time code via SMS when signing
                                                    in</span>
                                            </span>
                                        </label>
                                    </div>

                                    <!-- Email Option -->
                                    <div class="form-check p-0">
                                        <label
                                            class="d-flex align-items-center border rounded-3 p-2 w-100 cursor-pointer bg-light"
                                            for="methodEmail">
                                            <input class="form-check-input ms-0 me-2" type="radio"
                                                name="securityMethod" id="methodEmail">
                                            <span>
                                                <span class="fs-12 fw-bold d-block text-dark">Email</span>
                                                <span class="fs-13">Receive a verification code at your registered
                                                    email address</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div
                                    class="d-flex align-items-center justify-content-end gap-2 flex-wrap mt-4 pt-4 border-top">
                                    <button type="submit"
                                        class="btn btn-primary d-inline-flex align-items-center gap-2"><i
                                            class="icon-save"></i>Save Changes</button>
                                </div>
                            </form>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->

                </div> <!-- end col -->

            </div>
            <!-- end row -->

        </div>
        <!-- End Content -->

        <!-- Start Footer -->
        <footer
            class="footer bg-white border-top px-4 py-2 d-flex align-items-center justify-content-between gap-2 flex-column flex-sm-row">
            <p class="text-dark mb-0">&copy; 2026 <a href="#" class="link-primary">DreamsPOS</a>, All Rights
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
import { all_routes } from '@/router/all_routes.js'

export default {
    data() {
        return {
            all_routes,
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
        }
    },
    methods: {
        submitForm() {
            this.$router.push("/profile-settings");
        },
    },
}
</script>