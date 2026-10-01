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
                                    <router-link :to="all_routes.backupSettings"
                                        class="nav-link active d-flex align-items-center">
                                        <span class="me-2"><i class="icon-computer"></i></span>System
                                    </router-link>
                                </li>
                            </ul>
                        </div> <!-- end card body -->
                    </div> <!-- end card -->

                </div> <!-- end col -->

                <div class="col-lg-8 col-xxl-9">

                    <!-- System Backup Card -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="d-flex justify-content-between flex-wrap gap-2 mb-3 pb-3 border-bottom">
                                <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                            class="icon-file-text"></i></span>System Backup</h4>
                                <a href="#" class="btn btn-teal d-flex align-items-center gap-2"
                                    data-bs-toggle="modal" data-bs-target="#generate_system_backup"> <i
                                        class="icon-archive-restore"></i> Generate Backup</a>
                            </div>

                            <div class="table-responsive table-nowrap border rounded-3">
                                <table class="table mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Created On</th>
                                            <th class="text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-dark fw-medium">customer_data_backup_2025.txt</td>
                                            <td>20 Mar 2026</td>
                                            <td class="text-end action-item">
                                                <button class="btn btn-icon" type="button" data-bs-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                    <i class="icon-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                class="icon-download me-2"></i>Download</a></li>
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center text-danger"
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-dark fw-medium">invoice_records_backup_2024.txt</td>
                                            <td>15 Feb 2026</td>
                                            <td class="text-end action-item">
                                                <button class="btn btn-icon" type="button" data-bs-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                    <i class="icon-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                class="icon-download me-2"></i>Download</a></li>
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center text-danger"
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-dark fw-medium">sales_transactions_2024.txt</td>
                                            <td>10 Jan 2026</td>
                                            <td class="text-end action-item">
                                                <button class="btn btn-icon" type="button" data-bs-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                    <i class="icon-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                class="icon-download me-2"></i>Download</a></li>
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center text-danger"
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- Database Backup Card -->
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between flex-wrap gap-2 mb-3 pb-3 border-bottom">
                                <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                            class="icon-database"></i></span>Database Backup</h4>
                                <a href="#" class="btn btn-teal d-flex align-items-center gap-2"
                                    data-bs-toggle="modal" data-bs-target="#generate_db_backup"> <i
                                        class="icon-archive-restore"></i> Generate Backup</a>
                            </div>

                            <div class="table-responsive table-nowrap border rounded-3">
                                <table class="table mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Created On</th>
                                            <th class="text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-dark fw-medium">sales_db_backup_20250312.sql</td>
                                            <td>20 Mar 2026</td>
                                            <td class="text-end action-item">
                                                <button class="btn btn-icon" type="button" data-bs-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                    <i class="icon-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                class="icon-download me-2"></i>Download</a></li>
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center text-danger"
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-dark fw-medium">invoice_db_backup_2025-03-12_1430.sql
                                            </td>
                                            <td>15 Feb 2026</td>
                                            <td class="text-end action-item">
                                                <button class="btn btn-icon" type="button" data-bs-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                    <i class="icon-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                class="icon-download me-2"></i>Download</a></li>
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center text-danger"
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-dark fw-medium">inventory_db_backup_2025-03-12.sql</td>
                                            <td>10 Jan 2026</td>
                                            <td class="text-end action-item">
                                                <button class="btn btn-icon" type="button" data-bs-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                    <i class="icon-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-2">
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                class="icon-download me-2"></i>Download</a></li>
                                                    <li><a href="#"
                                                            class="dropdown-item rounded d-flex align-items-center text-danger"
                                                            data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                                class="icon-trash-2 me-2"></i>Delete</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div> <!-- end col -->

            </div>
            <!-- end row -->

        </div>
        <!-- End Content -->

        <!-- Start Footer -->
        <footer
            class="footer bg-white border-top px-4 py-2 d-flex align-items-center justify-content-between gap-2 flex-column flex-sm-row">
            <p class="text-dark mb-0">&copy; {{ new Date().getFullYear() }} <a href="#" class="link-primary">DreamsPOS</a>, All Rights
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