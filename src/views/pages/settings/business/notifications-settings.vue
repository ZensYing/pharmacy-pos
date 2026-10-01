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

                <div class="col-lg-8 col-xxl-9 notifiction-settings-table">

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
                            <router-link :to="all_routes.branchesSettings" class="nav-link d-flex align-items-center">
                                <i class="icon-building me-2"></i>Branches
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="all_routes.notificationsSettings" class="nav-link active d-flex align-items-center">
                                <i class="icon-bell me-2"></i>Notifications
                            </router-link>
                        </li>
                    </ul>

                    <!-- start card -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <!-- Table 1 -->
                            <div class="d-flex justify-content-between flex-wrap gap-2 mb-3 pb-3 border-bottom">
                                <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                            class="icon-box"></i></span>Inventory & Stock Alerts</h4>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-borderless align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th class="p-0 bg-transparent"></th>
                                            <th
                                                class="text-center text-dark fw-medium fs-14 bg-transparent p-2 pb-3">
                                                Push</th>
                                            <th
                                                class="text-center text-dark fw-medium fs-14 bg-transparent p-2 pb-3">
                                                Email</th>
                                            <th
                                                class="text-center text-dark fw-medium fs-14 bg-transparent p-2 pb-3">
                                                SMS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Medicine Added</h5>
                                                        <p class="mb-0 text-body fs-13">Notifies when a new medicine
                                                            is created in the master list.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Low stock alert
                                                            (below minimum level)</h5>
                                                        <p class="mb-0 text-body fs-13">Notifies when item quantity
                                                            falls below the minimum stock threshold.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Out of stock alert
                                                        </h5>
                                                        <p class="mb-0 text-body fs-13">Alerts when an item becomes
                                                            completely unavailable for sale.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Stock received
                                                            confirmation</h5>
                                                        <p class="mb-0 text-body fs-13">Confirms when new stock is
                                                            successfully received into inventory.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Stock adjustment
                                                            approval required</h5>
                                                        <p class="mb-0 text-body fs-13">Notifies approvers when a
                                                            stock correction needs authorization.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Stock transfer sent
                                                            / received</h5>
                                                        <p class="mb-0 text-body fs-13">Alerts when stock is
                                                            transferred between branches or locations.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Table 2 -->

                            <div
                                class="d-flex justify-content-between flex-wrap gap-2 mb-3 pb-3 border-bottom mt-3">
                                <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                            class="icon-baggage-claim"></i></span>Expiry & Purchase / Supplier</h4>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-borderless align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th class="p-0 bg-transparent"></th>
                                            <th
                                                class="text-center text-dark fw-medium fs-14 bg-transparent p-2 pb-3">
                                                Push</th>
                                            <th
                                                class="text-center text-dark fw-medium fs-14 bg-transparent p-2 pb-3">
                                                Email</th>
                                            <th
                                                class="text-center text-dark fw-medium fs-14 bg-transparent p-2 pb-3">
                                                SMS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Expired batch alert
                                                        </h5>
                                                        <p class="mb-0 text-body fs-13">Notifies when a medicine
                                                            batch has crossed its expiry date.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Purchase order
                                                            created</h5>
                                                        <p class="mb-0 text-body fs-13">Alerts when a new purchase
                                                            order is generated.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Purchase order
                                                            approved</h5>
                                                        <p class="mb-0 text-body fs-13">Notifies when a purchase
                                                            order is approved for processing.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Purchase order
                                                            received</h5>
                                                        <p class="mb-0 text-body fs-13">Confirms that ordered items
                                                            have been received into stock.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Table 3 -->
                            <div
                                class="d-flex justify-content-between flex-wrap gap-2 mb-3 pb-3 mt-3 border-bottom">
                                <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                            class="icon-user"></i></span>User & Activity Alerts</h4>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-borderless align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th class="p-0 bg-transparent"></th>
                                            <th
                                                class="text-center text-dark fw-medium fs-14 bg-transparent p-2 pb-3">
                                                Push</th>
                                            <th
                                                class="text-center text-dark fw-medium fs-14 bg-transparent p-2 pb-3">
                                                Email</th>
                                            <th
                                                class="text-center text-dark fw-medium fs-14 bg-transparent p-2 pb-3">
                                                SMS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">New user added</h5>
                                                        <p class="mb-0 text-body fs-13">Notifies when a new user
                                                            account is created.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Role or permission
                                                            changed</h5>
                                                        <p class="mb-0 text-body fs-13">Alerts when user roles or
                                                            access rights are updated.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">Login from new
                                                            device</h5>
                                                        <p class="mb-0 text-body fs-13">Notifies when a user signs
                                                            in from an unrecognized device.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">User account
                                                            deactivated</h5>
                                                        <p class="mb-0 text-body fs-13">Notifies when a user account
                                                            is disabled.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="form-check form-switch me-2">
                                                        <input class="form-check-input" type="checkbox"
                                                            role="switch" checked="">
                                                    </div>
                                                    <div>
                                                        <h5 class="mb-2 text-dark fs-14 fw-bold">System maintenance
                                                            notice</h5>
                                                        <p class="mb-0 text-body fs-13">Informs users about
                                                            scheduled system maintenance or downtime.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox" checked="">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                            <td class="text-center p-2 py-3">
                                                <div class="form-check form-check-md d-inline-flex">
                                                    <input class="form-check-input" type="checkbox">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="d-flex align-items-center justify-content-end gap-2 mt-4 pt-4 border-top">
                                <button type="submit" class="btn btn-primary d-flex align-items-center"><i
                                        class="icon-save me-2"></i>Save Changes</button>
                            </div>

                        </div>
                    </div>
                    <!-- End card -->
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