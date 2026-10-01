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
                                    <router-link :to="all_routes.businessSettings" class="nav-link d-flex align-items-center">
                                        <span class="me-2"><i class="icon-scan-barcode"></i></span>Business
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="all_routes.connectedApps" class="nav-link active d-flex align-items-center">
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

                    <!-- Item 1 -->
                    <div class="card">
                        <div
                            class="card-body d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                            <div class="d-flex align-items-center gap-2 flex-sm-nowrap flex-wrap">
                                <div class="avatar avatar-lg bg-light rounded-circle p-2 flex-shrink-0">
                                    <img src="@/assets/img/icons/conect-icon-1.svg" alt="Img">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-medium mb-1">Gmail</h6>
                                    <p class="mb-0">Send supplier purchase orders, batch expiry alerts, and invoice
                                        emails directly.</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <button class="btn btn-icon btn-light btn-sm border-0" data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"><i class="icon-trash-2"></i></button>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="switchCheckChecked2" checked>
                                </div>
                            </div>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->

                    <!-- Item 2 -->
                    <div class="card">
                        <div
                            class="card-body d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                            <div class="d-flex align-items-center gap-2 flex-sm-nowrap flex-wrap">
                                <div class="avatar avatar-lg bg-light rounded-circle p-2 flex-shrink-0">
                                    <img src="@/assets/img/icons/conect-icon-2.svg" alt="Img">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-medium mb-1">Quickbooks</h6>
                                    <p class="mb-0">Sync purchase batches, stock value and expense entries</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <button class="btn btn-icon btn-light btn-sm border-0" data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"><i class="icon-trash-2"></i></button>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="switchCheckChecked3" checked>
                                </div>
                            </div>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->

                    <!-- Item 3 -->
                    <div class="card">
                        <div
                            class="card-body d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                            <div class="d-flex align-items-center gap-2 flex-sm-nowrap flex-wrap">
                                <div class="avatar avatar-lg bg-light rounded-circle p-2 flex-shrink-0">
                                    <img src="@/assets/img/icons/conect-icon-3.svg" alt="Img">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-medium mb-1">Xero</h6>
                                    <p class="mb-0">Auto sync supplier bills and inventory valuation</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <button class="btn btn-icon btn-light btn-sm border-0" data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"><i class="icon-trash-2"></i></button>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="switchCheckChecked4" checked>
                                </div>
                            </div>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->

                    <!-- Item 4 -->
                    <div class="card">
                        <div
                            class="card-body d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                            <div class="d-flex align-items-center gap-2 flex-sm-nowrap flex-wrap">
                                <div class="avatar avatar-lg bg-light rounded-circle p-2 flex-shrink-0">
                                    <img src="@/assets/img/icons/conect-icon-.svg" alt="Img">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-medium mb-1">Square</h6>
                                    <p class="mb-0">POS transaction sync with inventory deduction</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <button class="btn btn-icon btn-light btn-sm border-0" data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"><i class="icon-trash-2"></i></button>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="switchCheckChecked5" checked>
                                </div>
                            </div>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->

                    <!-- Item 5 -->
                    <div class="card">
                        <div
                            class="card-body d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                            <div class="d-flex align-items-center gap-2 flex-sm-nowrap flex-wrap">
                                <div class="avatar avatar-lg bg-light rounded-circle p-2 flex-shrink-0">
                                    <img src="@/assets/img/icons/conect-icon-5.svg" alt="Img">
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-medium mb-1">Avalara</h6>
                                    <p class="mb-0">Automatic tax calculation by product category with tax mapping
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <button class="btn btn-icon btn-light btn-sm border-0" data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"><i class="icon-trash-2"></i></button>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="switchCheckChecked6" checked>
                                </div>
                            </div>
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
        }
    },
}
</script>