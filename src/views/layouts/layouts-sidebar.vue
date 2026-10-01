<template>
    <!-- Sidenav Menu Start -->
    <div class="sidebar" id="sidebar">

        <!-- Start Logo -->
        <div class="sidebar-logo">
            <div>
                <!-- Logo Normal -->
                <router-link :to="all_routes.dashboard" class="logo logo-normal">
                    <img src="@/assets/img/logo.svg" alt="Logo">
                </router-link>

                <!-- Logo Small -->
                <router-link :to="all_routes.dashboard" class="logo-small">
                    <img src="@/assets/img/logo-small.svg" alt="Logo">
                </router-link>

                <!-- Logo Dark -->
                <router-link :to="all_routes.dashboard" class="dark-logo">
                    <img src="@/assets/img/logo-dark.svg" alt="Logo">
                </router-link>
            </div>
            <button class="sidenav-toggle-btn btn border-0 p-0 active" id="toggle_btn" @click="toggleSidebar">
                <i class="icon-chevron-left"></i>
            </button>

            <!-- Sidebar Menu Close -->
            <button class="sidebar-close" @click="closeSidebar">
                <i class="icon-x align-middle"></i>
            </button>
        </div>
        <!-- End Logo -->

        <!-- Sidenav Menu -->
        <simplebar id="scrollbar" class="sidebar-inner" ref="scrollbar" data-simplebar>
            <div id="sidebar-menu" class="sidebar-menu">
                <ul role="menu" aria-label="Main navigation menu">
                    <li class="menu-title" aria-disabled="true"><span>Main</span></li>

                    <li>
                        <router-link :to="all_routes.dashboard">
                            <span class="menu-icon"><i
                                    class="icon-layout-dashboard"></i></span><span>Dashboard</span>
                        </router-link>
                    </li>

                    <li class="menu-title" aria-disabled="true"><span>Inventory</span></li>
                    <li>
                        <router-link :to="all_routes.medicines">
                            <span class="menu-icon"><i class="icon-list-todo"></i></span><span>Medicine List</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.categories">
                            <span class="menu-icon"><i class="icon-layout-grid"></i></span><span>Categories</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.units">
                            <span class="menu-icon"><i class="icon-monitor-up"></i></span><span>Units</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.racks">
                            <span class="menu-icon"><i class="icon-inbox"></i></span><span>Racks</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.batchManagement">
                            <span class="menu-icon"><i class="icon-boxes"></i></span><span>Batch Management</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.manufacturers">
                            <span class="menu-icon"><i
                                    class="icon-square-user"></i></span><span>Manufacturers</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.stockAdjustment">
                            <span class="menu-icon"><i class="icon-layers"></i></span><span>Stock Adjustment</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.stockTransfer">
                            <span class="menu-icon"><i class="icon-truck"></i></span><span>Stock Transfer</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.expiryTracking">
                            <span class="menu-icon"><i class="icon-triangle-alert"></i></span><span>Expiry
                                Tracking</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.lowStock">
                            <span class="menu-icon"><i class="icon-layers-2"></i></span><span>Low Stock</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.inventoryLogs">
                            <span class="menu-icon"><i class="icon-list-end"></i></span><span>Inventory Logs</span>
                        </router-link>
                    </li>

                    <li class="menu-title" aria-disabled="true"><span>Sales</span></li>
                    <li>
                        <router-link :to="all_routes.pos">
                            <span class="menu-icon"><i class="icon-tv-minimal"></i></span><span>POS Sales</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.salesReturn">
                            <span class="menu-icon"><i class="icon-refresh-ccw"></i></span><span>Sales Return</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.customers">
                            <span class="menu-icon"><i class="icon-users-round"></i></span><span>Customers</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.invoices">
                            <span class="menu-icon"><i class="icon-newspaper"></i></span><span>Invoices</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.payments">
                            <span class="menu-icon"><i class="icon-dollar-sign"></i></span><span>Payments</span>
                        </router-link>
                    </li>

                    <li class="menu-title" aria-disabled="true"><span>Purchases</span></li>
                    <li>
                        <router-link :to="all_routes.purchases">
                            <span class="menu-icon"><i class="icon-shopping-cart"></i></span><span>Purchases</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.purchaseOrders">
                            <span class="menu-icon"><i class="icon-shopping-bag"></i></span><span>Purchase
                                Orders</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.purchaseReturns">
                            <span class="menu-icon"><i class="icon-reply-all"></i></span><span>Purchase
                                Returns</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.vendors">
                            <span class="menu-icon"><i class="icon-users"></i></span><span>Vendors</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.vendorPayments">
                            <span class="menu-icon"><i class="icon-badge-dollar-sign"></i></span><span>Vendor
                                Payments</span>
                        </router-link>
                    </li>

                    <li class="menu-title" aria-disabled="true"><span>Prescriptions</span></li>
                    <li>
                        <router-link :to="all_routes.prescriptions">
                            <span class="menu-icon"><i class="icon-book-check"></i></span><span>Prescriptions</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.prescriptionVerification">
                            <span class="menu-icon"><i
                                    class="icon-circle-arrow-out-up-right"></i></span><span>Prescription
                                Verification</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.doctors">
                            <span class="menu-icon"><i
                                    class="icon-briefcase-medical"></i></span><span>Doctors</span>
                        </router-link>
                    </li>

                    <li class="menu-title" aria-disabled="true"><span>Reports</span></li>
                    <li>
                        <router-link :to="all_routes.salesReports">
                            <span class="menu-icon"><i class="icon-proportions"></i></span><span>Sales
                                Reports</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.purchaseReports">
                            <span class="menu-icon"><i class="icon-file-spreadsheet"></i></span><span>Purchase
                                Reports</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.inventoryReports">
                            <span class="menu-icon"><i class="icon-file-terminal"></i></span><span>Inventory
                                Reports</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.expiryReports">
                            <span class="menu-icon"><i class="icon-file-chart-column"></i></span><span>Expiry
                                Reports</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.profitLossReports">
                            <span class="menu-icon"><i class="icon-badge-percent"></i></span><span>Profit &
                                Loss</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.taxReports">
                            <span class="menu-icon"><i class="icon-file-symlink"></i></span><span>Tax Report</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.stockValuation">
                            <span class="menu-icon"><i class="icon-file-axis-3d"></i></span><span>Stock
                                Valuation</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.stockAging">
                            <span class="menu-icon"><i class="icon-file-search"></i></span><span>Stock Aging</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.customerOutstanding">
                            <span class="menu-icon"><i class="icon-users-round"></i></span><span>Customer
                                Outstanding</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.vendorOutstanding">
                            <span class="menu-icon"><i class="icon-file-user"></i></span><span>Vendor
                                Outstanding</span>
                        </router-link>
                    </li>
                    <li class="menu-title" aria-disabled="true"><span>Settings</span></li>
                    <li class="submenu">
                        <a href="javascript:void(0);" @click="toggleBusinessMenu"
                            :class="{ active: isBusinessMenuActive, subdrop: isBusinessMenuOpen }">
                            <span class="menu-icon"><i class="icon-building-2"></i></span><span>Business</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul :style="isBusinessMenuOpen ? { display: 'block' } : {}">
                            <li><router-link :to="all_routes.businessSettings">Business Settings</router-link></li>
                            <li><router-link :to="all_routes.profileSettings">Profile Settings</router-link></li>
                            <li><router-link :to="all_routes.localizationSettings">Localization</router-link></li>
                            <li><router-link :to="all_routes.branchesSettings">Branches</router-link></li>
                            <li><router-link :to="all_routes.notificationsSettings">Notifications</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="all_routes.invoiceSettings">
                            <span class="menu-icon"><i class="icon-file-text"></i></span><span>Billing</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.connectedApps">
                            <span class="menu-icon"><i class="icon-component"></i></span><span>System
                                Integrations</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.backupSettings">
                            <span class="menu-icon"><i class="icon-computer"></i></span><span>Backup</span>
                        </router-link>
                    </li>

                    <li class="menu-title" aria-disabled="true"><span>Authentication</span></li>
                    <li>
                        <router-link :to="all_routes.signIn">
                            <span class="menu-icon"><i class="icon-log-in"></i></span><span>Login</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.signUp">
                            <span class="menu-icon"><i
                                    class="icon-text-cursor-input"></i></span><span>Register</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.forgotPassword">
                            <span class="menu-icon"><i class="icon-shield-alert"></i></span><span>Forgot
                                Password</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.resetPassword">
                            <span class="menu-icon"><i class="icon-refresh-ccw-dot"></i></span><span>Reset
                                Password</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="all_routes.otp">
                            <span class="menu-icon"><i class="icon-mail-warning"></i></span><span>OTP
                                Verification</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </simplebar>

    </div>
    <!-- Sidenav Menu End -->
    <div class="sidebar-overlay" @click="closeSidebar"></div>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import { all_routes } from '@/router/all_routes.js'

export default {
    components: {
        simplebar,
    },
    data() {
        return {
            all_routes,
            businessMenuOpen: null,
        }
    },
    computed: {
        isBusinessMenuActive() {
            const businessRoutes = [
                all_routes.businessSettings,
                all_routes.profileSettings,
                all_routes.localizationSettings,
                all_routes.branchesSettings,
                all_routes.notificationsSettings,
            ];
            return businessRoutes.includes(this.$route.path);
        },
        isBusinessMenuOpen() {
            return this.businessMenuOpen === null ? this.isBusinessMenuActive : this.businessMenuOpen;
        },
    },
    mounted() {
        this.initMouseoverListener();
    },
    methods: {
        closeSidebar() {
            const body = document.body;
            body.classList.remove("slide-nav");
            const overlay = document.querySelector(".sidebar-overlay");
            if (overlay) overlay.classList.remove("opened");
        },
        toggleBusinessMenu() {
            this.businessMenuOpen = !this.isBusinessMenuOpen;
        },
        toggleSidebar() {
            const body = document.body;
            body.classList.toggle("mini-sidebar");
        },
        initMouseoverListener() {
            document.addEventListener("mouseover", this.handleMouseover);
        },
        handleMouseover(e) {
            e.stopPropagation();

            const body = document.body;
            const toggleBtn = document.getElementById("toggle_btn");

            if (body.classList.contains("mini-sidebar")) {
                const target = e.target.closest(".sidebar, .header-left");

                if (target) {
                    body.classList.add("expand-menu");
                    } else if (body.classList.contains("expand-menu")) {
                    body.classList.remove("expand-menu");
                }

                e.preventDefault();
            }
        },
    },
    beforeUnmount() {
        document.removeEventListener("mouseover", this.handleMouseover);
    },
}
</script>