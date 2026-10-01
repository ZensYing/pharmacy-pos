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
                            <router-link :to="all_routes.profileSettings" class="nav-link d-flex align-items-center">
                                <i class="icon-circle-user me-2"></i>Profile
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="all_routes.localizationSettings" class="nav-link d-flex align-items-center">
                                <i class="icon-bolt me-2"></i>Localization
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="all_routes.branchesSettings" class="nav-link active d-flex align-items-center">
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

                            <div class="d-flex justify-content-between flex-wrap mb-3 pb-3 border-bottom">
                                <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                            class="icon-building"></i></span>Branches</h4>
                                <a href="#" class="btn btn-primary d-flex align-items-center gap-2"
                                    data-bs-toggle="modal" data-bs-target="#add_branch"> <i class="icon-plus"></i>
                                    Add New</a>
                            </div>

                            <div class="table-responsive table-nowrap border rounded-3">
                                <table class="table mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>ID</th>
                                            <th>Branch Name</th>
                                            <th>Manager</th>
                                            <th>Phone Number</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="javascript:void(0);" class="text-info">#BRN001</a></td>
                                            <td>Main Branch</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-2">
                                                    <span class="avatar avatar-xs avatar-rounded">
                                                        <img src="@/assets/img/staffs/staff-1.jpg" alt="manager">
                                                    </span>
                                                    <span class="fs-14 fw-medium text-dark">Mervin Nesmith</span>
                                                </div>
                                            </td>
                                            <td>+1 84204 28494</td>
                                            <td>mervin@example.com</td>
                                            <td><span
                                                    class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                        class="fa-solid fa-circle fs-5 me-1"></i> Active</span></td>
                                            <td class="text-end">
                                                <div class="action-item">
                                                    <button class="btn btn-icon" type="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" aria-label="Actions">
                                                        <i class="icon-ellipsis-vertical"></i>
                                                    </button>
                                                    <ul class="dropdown-menu p-3">
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#edit_branch"><i
                                                                    class="icon-pencil-line me-2"></i>Edit</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center text-danger"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><i
                                                                    class="icon-trash-2 me-2"></i>Delete</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="javascript:void(0);" class="text-info">#BRN002</a></td>
                                            <td>Branch 2</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-2">
                                                    <span class="avatar avatar-xs avatar-rounded">
                                                        <img src="@/assets/img/staffs/staff-2.jpg" alt="manager">
                                                    </span>
                                                    <span class="fs-14 fw-medium text-dark">Joyce Kerns</span>
                                                </div>
                                            </td>
                                            <td>+1 77289 42940</td>
                                            <td>joyce@examle.com</td>
                                            <td><span
                                                    class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                        class="fa-solid fa-circle fs-5 me-1"></i> Active</span></td>
                                            <td class="text-end">
                                                <div class="action-item">
                                                    <button class="btn btn-icon" type="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" aria-label="Actions">
                                                        <i class="icon-ellipsis-vertical"></i>
                                                    </button>
                                                    <ul class="dropdown-menu p-3">
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#edit_branch"><i
                                                                    class="icon-pencil-line me-2"></i>Edit</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center text-danger"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><i
                                                                    class="icon-trash-2 me-2"></i>Delete</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="javascript:void(0);" class="text-info">#BRN003</a></td>
                                            <td>Branch 3</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-2">
                                                    <span class="avatar avatar-xs avatar-rounded">
                                                        <img src="@/assets/img/staffs/staff-3.jpg" alt="manager">
                                                    </span>
                                                    <span class="fs-14 fw-medium text-dark">John Baxter</span>
                                                </div>
                                            </td>
                                            <td>+1 82920 52805</td>
                                            <td>john@example.com</td>
                                            <td><span
                                                    class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                        class="fa-solid fa-circle fs-5 me-1"></i> Active</span></td>
                                            <td class="text-end">
                                                <div class="action-item">
                                                    <button class="btn btn-icon" type="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" aria-label="Actions">
                                                        <i class="icon-ellipsis-vertical"></i>
                                                    </button>
                                                    <ul class="dropdown-menu p-3">
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#edit_branch"><i
                                                                    class="icon-pencil-line me-2"></i>Edit</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center text-danger"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><i
                                                                    class="icon-trash-2 me-2"></i>Delete</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="javascript:void(0);" class="text-info">#BRN004</a></td>
                                            <td>Main Branch</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-2">
                                                    <span class="avatar avatar-xs avatar-rounded">
                                                        <img src="@/assets/img/staffs/staff-4.jpg" alt="manager">
                                                    </span>
                                                    <span class="fs-14 fw-medium text-dark">Margaret Fehr</span>
                                                </div>
                                            </td>
                                            <td>+1 62844 42903</td>
                                            <td>margaret@example.com</td>
                                            <td><span
                                                    class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                        class="fa-solid fa-circle fs-5 me-1"></i> Active</span></td>
                                            <td class="text-end">
                                                <div class="action-item">
                                                    <button class="btn btn-icon" type="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" aria-label="Actions">
                                                        <i class="icon-ellipsis-vertical"></i>
                                                    </button>
                                                    <ul class="dropdown-menu p-3">
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#edit_branch"><i
                                                                    class="icon-pencil-line me-2"></i>Edit</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center text-danger"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><i
                                                                    class="icon-trash-2 me-2"></i>Delete</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="javascript:void(0);" class="text-info">#BRN005</a></td>
                                            <td>Branch 5</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-2">
                                                    <span class="avatar avatar-xs avatar-rounded">
                                                        <img src="@/assets/img/staffs/staff-5.jpg" alt="manager">
                                                    </span>
                                                    <span class="fs-14 fw-medium text-dark">Benjamin Walker</span>
                                                </div>
                                            </td>
                                            <td>+1 74830 43950</td>
                                            <td>benjamin@example.com</td>
                                            <td><span
                                                    class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                        class="fa-solid fa-circle fs-5 me-1"></i> Active</span></td>
                                            <td class="text-end">
                                                <div class="action-item">
                                                    <button class="btn btn-icon" type="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" aria-label="Actions">
                                                        <i class="icon-ellipsis-vertical"></i>
                                                    </button>
                                                    <ul class="dropdown-menu p-3">
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#edit_branch"><i
                                                                    class="icon-pencil-line me-2"></i>Edit</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                                class="dropdown-item rounded d-flex align-items-center text-danger"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><i
                                                                    class="icon-trash-2 me-2"></i>Delete</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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