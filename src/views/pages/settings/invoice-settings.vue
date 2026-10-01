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
                        <li class="breadcrumb-item active" aria-current="page">Invoice Settings</li>
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
                                    <router-link :to="all_routes.businessSettings" class="nav-link d-flex align-items-center">
                                        <span class="me-2"><i class="icon-scan-barcode"></i></span>Business
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="all_routes.connectedApps" class="nav-link d-flex align-items-center">
                                        <span class="me-2"><i class="icon-component"></i></span>System Integration
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="all_routes.invoiceSettings"
                                        class="nav-link active d-flex align-items-center">
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

                    <div class="card">
                        <div class="card-body">

                            <div class="d-flex justify-content-between flex-wrap mb-4 pb-3 border-bottom">
                                <h4 class="d-flex align-items-center gap-2 mb-0">
                                    <span class="avatar avatar-sm bg-primary rounded-circle fs-16">
                                        <i class="icon-file-text"></i>
                                    </span>Invoice Settings
                                </h4>
                            </div>

                            <form @submit.prevent="submitForm">
                                <div class="row align-items-center mb-4 row-gap-2">
                                    <div class="col-xl-4 col-lg-12 col-sm-4">
                                        <h6 class="fs-14 fw-semibold mb-1">Upload Profile Image</h6>
                                        <p class="text-body mb-0">Image should below 2MB</p>
                                    </div>
                                    <div class="col-xl-4 col-lg-12 col-sm-8">
                                        <div class="d-flex align-items-center gap-3 flex-wrap flex-md-nowrap">
                                            <div class="bg-light rounded-3 p-3 py-4 border">
                                                <img src="@/assets/img/logo-dark.svg" alt="Logo" width="80">
                                            </div>
                                            <div class="d-flex align-items-center gap-2 flex-wrap flex-md-nowrap">
                                                <label
                                                    class="btn btn-dark btn-sm fs-13 flex-shrink-0 d-flex align-items-center gap-1 position-relative cursor-pointer mb-0">
                                                    <i class="icon-refresh-ccw"></i>
                                                    <input type="file"
                                                        class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer">
                                                    Change Image
                                                </label>
                                                <a href="#" class="btn btn-icon btn-sm btn-light rounded-circle">
                                                    <i class="icon-trash-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-4 row-gap-2">
                                    <div class="col-xl-4 col-lg-12 col-sm-4">
                                        <h6 class="fs-13 fw-semibold mb-0">Invoice Prefix</h6>
                                    </div>
                                    <div class="col-xl-8 col-lg-12 col-sm-8">
                                        <input type="text" class="form-control rounded-pill">
                                    </div>
                                </div>

                                <div class="row align-items-center mb-4 row-gap-2">
                                    <div class="col-xl-4 col-lg-12 col-sm-4">
                                        <h6 class="fs-13 fw-semibold mb-0">Invoice Roundoff</h6>
                                    </div>
                                    <div class="col-xl-8 col-lg-12 col-sm-8">
                                        <div class="d-flex align-items-center gap-3">
                                            <vue-select
                                                :options="invoiceRoundoffOptions"
                                                v-model="selectedInvoiceRoundoff"
                                                placeholder="Select"
                                            />
                                            <div class="form-check form-switch mb-0">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                    checked>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-4 row-gap-2">
                                    <div class="col-xl-4 col-lg-12 col-sm-4">
                                        <h6 class="fs-13 fw-semibold mb-0">Show Company Details</h6>
                                    </div>
                                    <div class="col-xl-8 col-lg-12 col-sm-8">
                                        <div class="form-check form-switch mb-0">
                                            <input class="form-check-input" type="checkbox" role="switch" checked>
                                        </div>
                                    </div>
                                </div>

                                <div class="row row-gap-2">
                                    <div class="col-xl-4 col-lg-12 col-sm-4 pt-2">
                                        <h6 class="fs-13 fw-semibold mb-0">Invoice Terms</h6>
                                    </div>
                                    <div class="col-xl-8 col-lg-12 col-sm-8">
                                        <textarea class="form-control rounded-3" rows="4"></textarea>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-end mt-3 pt-3 border-top">
                                    <button type="submit"
                                        class="btn btn-primary d-flex align-items-center gap-2 rounded-pill px-4">
                                        <i class="icon-save fs-16"></i> Save Changes
                                    </button>
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
            selectedInvoiceRoundoff: "Select",
            invoiceRoundoffOptions: [
                { label: "Select", value: "Select" },
                { label: "No Round Off", value: "No Round Off" },
                { label: "Round Up", value: "Round Up" },
                { label: "Round Down", value: "Round Down" },
            ],
        }
    },
    methods: {
        submitForm() {
            this.$router.push("/invoice-settings");
        },
    },
}
</script>