<template>
    <!-- Topbar Start -->
    <header class="navbar-header">
        <div class="page-container topbar-menu">
            <div class="d-flex align-items-center gap-2">
                <!-- Logo -->
                <router-link :to="all_routes.dashboard" class="logo">

                    <!-- Logo Normal -->
                    <span class="logo-light">
                        <span class="logo-lg"><img src="@/assets/img/logo.svg" alt="logo"></span>
                    </span>

                    <!-- Logo Dark -->
                    <span class="logo-dark">
                        <span class="logo-lg"><img src="@/assets/img/logo-dark.svg" alt="dark logo"></span>
                    </span>

                    <!-- Logo Sm -->
                    <span class="logo-small">
                        <span class="logo-lg"><img src="@/assets/img/logo-small.svg" alt="small logo"></span>
                    </span>
                </router-link>
                <!-- Sidebar Mobile Button -->
                <a id="mobile_btn" class="mobile-btn" href="#sidebar">
                    <i class="icon-menu"></i>
                </a>

                <div class="d-none">
                    <h4 class="mb-0">POS</h4>
                </div>

                <div class="dropdown me-1 d-xl-flex d-none">
                    <a href="javascript:void(0);"
                        class="dropdown-toggle btn btn-light d-inline-flex align-items-center gap-2"
                        data-bs-toggle="dropdown">
                        <i class="icon-map-pin-house"></i>Newyork
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded">Newyork</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded">Los Angeles</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded">San Diego</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded">Dallas</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded">San Antonio</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="d-xl-flex align-items-center gap-2 d-none">
                <a class="badge badge-soft-warning" href="#" data-bs-toggle="modal"
                    data-bs-target="#today-sale">Today's Sales <span class="fs-14 fw-bold">$1,245.50</span></a>
                <span class="badge badge-soft-success d-inline-flex align-items-center"><i
                        class="icon-activity me-1"></i>Shift A · 09:00 - 17:00</span>
            </div>

            <div class="d-flex align-items-center gap-2">

                <a href="#"
                    class="btn btn-white d-lg-flex align-items-center justify-content-center gap-2 d-none"><i
                        class="icon-receipt"></i>Cash Book</a>

                <a href="#"
                    class="btn btn-white d-lg-flex align-items-center justify-content-center gap-2 d-none"><i
                        class="icon-receipt-text"></i>Recent Bills</a>

                <div class="header-item d-flex me-1">
                    <button class="topbar-link btn" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                        aria-label="Calculator" data-bs-original-title="Calculator">
                        <i class="icon-calculator"></i>
                    </button>
                </div>

                <!-- Light/Dark Mode Button -->
                <div class="header-item d-flex me-1">
                    <button class="topbar-link btn" id="light-dark-mode" type="button">
                        <i class="icon-sun-medium"></i>
                    </button>
                </div>

                <!-- Notification Dropdown -->
                <div class="header-item">
                    <div class="dropdown notification-dropdown me-1">

                        <button class="topbar-link btn dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown"
                            data-bs-offset="0,15" type="button" aria-haspopup="false" aria-expanded="false">
                            <i class="icon-bell animate-ring"></i>
                            <span class="notification-badge"></span>
                        </button>

                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg p-3"
                            style="min-height: 300px;">

                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                <h5 class="m-0">Notifications</h5>
                                <a href="#" class="fw-medium text-decoration-underline">Mark all as read</a>
                            </div>

                            <!-- Notification Body -->
                            <div class="notification-body position-relative z-2 rounded-0" data-simplebar>

                                <div class="vstack gap-3">

                                    <!-- Item-->
                                    <div class="dropdown-item notification-item text-wrap border rounded-3 p-3"
                                        id="notification-1">
                                        <div class="d-flex">
                                            <div
                                                class="avatar avatar-rounded me-2 position-relative flex-shrink-0 bg-soft-orange border border-orange-200">
                                                <i class="icon-layers-2"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <p class="mb-0 fw-medium text-dark">Low Stock Alert</p>
                                                <p class="mb-2 text-wrap">Paracetamol 500mg is running low (5 items
                                                    left)</p>
                                                <p class="fs-13 mb-0">2 mins ago</p>
                                            </div>
                                            <a href="javascript:void(0);"
                                                class="notification-read rounded-circle bg-danger border border-danger-subtle"
                                                data-bs-toggle="tooltip" title=""
                                                data-bs-original-title="Mark as Read" aria-label="Make as Read"></a>
                                        </div>
                                    </div>

                                    <!-- Item-->
                                    <div class="dropdown-item notification-item text-wrap border rounded-3 p-3"
                                        id="notification-2">
                                        <div class="d-flex">
                                            <div
                                                class="avatar avatar-rounded me-2 position-relative flex-shrink-0 bg-soft-info border border-info-200">
                                                <i class="icon-inbox"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <p class="mb-0 fw-medium text-dark">Stock Updated</p>
                                                <p class="mb-2 text-wrap">Inventory for Ibuprofen 200mg has been
                                                    successfully updated.</p>
                                                <p class="fs-13 mb-0">10 mins ago</p>
                                            </div>
                                            <a href="javascript:void(0);"
                                                class="notification-read rounded-circle bg-danger border border-danger-subtle"
                                                data-bs-toggle="tooltip" title=""
                                                data-bs-original-title="Mark as Read" aria-label="Make as Read"></a>
                                        </div>
                                    </div>

                                    <!-- Item-->
                                    <div class="dropdown-item notification-item text-wrap border rounded-3 p-3"
                                        id="notification-3">
                                        <div class="d-flex">
                                            <div
                                                class="avatar avatar-rounded me-2 position-relative flex-shrink-0 bg-soft-warning border border-warning-200">
                                                <i class="icon-clock-alert"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <p class="mb-0 fw-medium text-dark">Medicine Expiry Reminder</p>
                                                <p class="mb-2 text-wrap">Amoxicillin Capsules will expire in 7
                                                    days.</p>
                                                <p class="fs-13 mb-0">5 hours ago</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Item-->
                                    <div class="dropdown-item notification-item text-wrap border rounded-3 p-3"
                                        id="notification-4">
                                        <div class="d-flex">
                                            <div
                                                class="avatar avatar-rounded me-2 position-relative flex-shrink-0 bg-soft-danger border border-danger-200">
                                                <i class="icon-triangle-alert"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <p class="mb-0 fw-medium text-dark">Out of Stock</p>
                                                <p class="mb-2 text-wrap">Vitamin C Tablets are currently out of
                                                    stock. </p>
                                                <p class="fs-13 mb-0">1 day ago</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <!-- View All-->
                            <div class="pt-3">
                                <a href="#" class="btn btn-white d-flex align-items-center justify-content-center">
                                    View All<i class="icon-arrow-right ms-2"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Settings -->
                <div class="header-item d-lg-flex d-none">
                    <div class="me-1">
                        <router-link :to="all_routes.businessSettings" class="btn topbar-link" aria-label="Settings"><i
                                class="icon-settings"></i></router-link>
                    </div>
                </div>
                <!-- Settings -->

                <!-- User Dropdown -->
                <div class="dropdown profile-dropdown d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0);"
                        class="topbar-link dropdown-toggle drop-arrow-none position-relative"
                        data-bs-toggle="dropdown" data-bs-offset="0,15" aria-haspopup="false" aria-expanded="false"
                        data-bs-auto-close="outside">
                        <img src="@/assets/img/profiles/avatar-28.jpg" width="36" class="rounded-circle d-flex"
                            alt="user">
                    </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-md p-3">

                        <div class="d-flex align-items-center bg-light rounded p-3 mb-2">
                            <div class="avatar flex-shrink-0">
                                <img src="@/assets/img/profiles/avatar-28.jpg" class="rounded-circle" alt="user">
                            </div>
                            <div class="ms-2">
                                <p class="fw-medium text-dark mb-0">Robert Ordway</p>
                                <span class="d-block fs-13">Administrator</span>
                            </div>
                        </div>

                        <!-- Item-->
                        <router-link :to="all_routes.profileSettings" class="dropdown-item d-flex align-items-center">
                            <i class="icon-user-cog me-2"></i>Profile Settings
                        </router-link>

                        <!-- Item -->
                        <router-link :to="all_routes.reports" class="dropdown-item d-flex align-items-center">
                            <i class="icon-proportions me-2"></i>Reports
                        </router-link>

                        <!-- Item-->
                        <div
                            class="form-check form-switch form-check-reverse d-flex align-items-center justify-content-between dropdown-item mb-0">
                            <label class="form-check-label d-flex align-items-center" for="notify"><i
                                    class="icon-bell me-2"></i>Notifications</label>
                            <input class="form-check-input me-0" type="checkbox" role="switch" id="notify" checked>
                        </div>

                        <!-- Item-->
                        <router-link :to="all_routes.businessSettings" class="dropdown-item d-flex align-items-center">
                            <i class="icon-settings me-2"></i>Settings
                        </router-link>

                        <!-- Item-->
                        <div class="pt-2 mt-2 border-top">
                            <router-link :to="all_routes.signIn" class="dropdown-item d-flex align-items-center text-danger">
                                <i class="icon-log-out me-2"></i>Sign Out
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
    <!-- Topbar End -->
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