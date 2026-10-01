<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><router-link :to="all_routes.dashboard"> <span><i class="icon-house"></i></span>
                                Dashboard</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Invoices </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="avatar-list-stacked mb-0">
                        <span class="avatar avatar-rounded bg-dark border border-white">
                        </span>
                        <span class="avatar avatar-rounded bg-dark border border-white">
                        </span>
                        <span class="avatar avatar-rounded bg-dark border border-white">
                        </span>
                        <a class="avatar bg-white text-dark avatar-rounded" href="javascript:void(0);">
                            +99
                        </a>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                </div>
            </div>

            <!-- start row -->
            <div class="card">
                <div class="card-body">
                    <div class="row row-gap-4 mb-4">
                        <div class="col-xxl-3 col-lg-6 col-md-6">
                            <h6 class="mb-3">Invoices Overview</h6>
                        </div> <!-- end col-->
                        <div class="col-xxl-3 col-lg-6 col-md-6">
                            <div class="card mb-0">
                                <img src="@/assets/img/icons/shape-03.png" alt="img"
                                    class="position-absolute top-0 start-0">
                                <img src="@/assets/img/icons/shape-04.png" alt="img"
                                    class="position-absolute top-0 end-0">
                                <div class="card-body">
                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        <span class="avatar avatar-lg rounded-3 bg-white flex-shrink-0">
                                            <img src="@/assets/img/icons/customer-2.svg" alt="img"
                                                class="w-auto h-auto">
                                        </span>
                                        <div>
                                            <span class="d-block mb-1 fw-bold text-dark">Membership Customers</span>
                                            <span class="fs-12 text-start">Customer on Memberships</span>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap fs-13">
                                        <span class="fs-18 text-dark me-1 fw-bold">45</span>
                                        <span
                                            class="badge badge-soft-success px-2 text-success d-flex align-items-center gap-1 border-0 fs-10 rounded-pill">4.2%
                                            <i class="icon-arrow-up-right fs-12"></i></span>
                                        Since Last Month
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end col-->
                        <div class="col-xxl-3 col-lg-6 col-md-6">
                            <div class="card mb-0">
                                <img src="@/assets/img/icons/shape-05.png" alt="img"
                                    class="position-absolute top-0 start-0">
                                <img src="@/assets/img/icons/shape-06.png" alt="img"
                                    class="position-absolute top-0 end-0">
                                <div class="card-body">
                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        <span class="avatar avatar-lg rounded-3 bg-white flex-shrink-0">
                                            <img src="@/assets/img/icons/customer-3.svg" alt="img"
                                                class="w-auto h-auto">
                                        </span>
                                        <div>
                                            <span class="d-block mb-1 fw-bold text-dark">New Customers</span>
                                            <span class="fs-12 text-start">New Customers Pharmacy</span>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap fs-13">
                                        <span class="fs-18 text-dark me-1 fw-bold">336</span>
                                        <span
                                            class="badge badge-soft-danger px-2 text-danger d-flex align-items-center gap-1 border-0 fs-10 rounded-pill">9.6%
                                            <i class="icon-arrow-down-right fs-12"></i></span>
                                        Since Last Month
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end col-->
                        <div class="col-xxl-3 col-lg-6 col-md-6">
                            <div class="card mb-0">
                                <img src="@/assets/img/icons/shape-07.png" alt="img"
                                    class="position-absolute top-0 start-0">
                                <img src="@/assets/img/icons/shape-08.png" alt="img"
                                    class="position-absolute top-0 end-0">
                                <div class="card-body">
                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        <span class="avatar avatar-lg rounded-3 bg-white flex-shrink-0">
                                            <img src="@/assets/img/icons/customer-4.svg" alt="img"
                                                class="w-auto h-auto">
                                        </span>
                                        <div>
                                            <span class="d-block mb-1 fw-bold text-dark">Returning Customers</span>
                                            <span class="fs-12 text-start">Overview Return Customers</span>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 flex-wrap fs-13">
                                        <span class="fs-18 text-dark me-1 fw-bold">695</span>
                                        <span
                                            class="badge badge-soft-success px-2 text-success d-flex align-items-center gap-1 border-0 fs-10 rounded-pill">2%
                                            <i class="icon-arrow-up-right fs-12"></i></span>
                                        Since Last Month
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end col-->
                    </div>
                </div>
            </div>
            <!-- end row -->

        </div>
        <!-- End Content -->

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
            all_routes
        }
    }
}
</script>