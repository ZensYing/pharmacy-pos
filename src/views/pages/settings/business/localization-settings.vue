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
                            <router-link :to="all_routes.localizationSettings" class="nav-link active d-flex align-items-center">
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
                                                    class="icon-globe"></i></span>Language & Region</h4>
                                    </div>

                                    <!-- start row -->
                                    <div class="row row-gap-3">

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Language</label>
                                                <vue-select
                                                    :options="languageOptions"
                                                    v-model="selectedLanguage"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Timezone</label>
                                                <vue-select
                                                    :options="timezoneOptions"
                                                    v-model="selectedTimezone"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Date Format <span
                                                        class="text-danger">*</span></label>
                                                <vue-select
                                                    :options="dateFormatOptions"
                                                    v-model="selectedDateFormat"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Time Format</label>
                                                <vue-select
                                                    :options="timeFormatOptions"
                                                    v-model="selectedTimeFormat"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                    </div>
                                    <!-- end row -->

                                </div>

                                <div>

                                    <div class="mb-3 pb-3 border-bottom">
                                        <h4 class="d-flex align-items-center gap-2 mb-0"><span
                                                class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                                    class="icon-currency"></i></span>Currency & Units</h4>
                                    </div>

                                    <!-- start row -->
                                    <div class="row g-3">
                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Currency</label>
                                                <vue-select
                                                    :options="currencyOptions"
                                                    v-model="selectedCurrency"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Currency Symbol</label>
                                                <vue-select
                                                    :options="currencySymbolOptions"
                                                    v-model="selectedCurrencySymbol"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Financial Month</label>
                                                <vue-select
                                                    :options="financialMonthOptions"
                                                    v-model="selectedFinancialMonth"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Currency Position</label>
                                                <vue-select
                                                    :options="currencyPositionOptions"
                                                    v-model="selectedCurrencyPosition"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Thousand Seperator</label>
                                                <vue-select
                                                    :options="thousandSeperatorOptions"
                                                    v-model="selectedThousandSeperator"
                                                    placeholder="Select"
                                                />
                                            </div>
                                        </div> <!-- end col -->

                                        <div class="col-lg-6">
                                            <div>
                                                <label class="form-label">Decimal Seperator</label>
                                                <vue-select
                                                    :options="decimalSeperatorOptions"
                                                    v-model="selectedDecimalSeperator"
                                                    placeholder="Select"
                                                />
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
            selectedLanguage: null,
            languageOptions: [
                { label: "Select", value: "Select" },
                { label: "English", value: "English" },
                { label: "German", value: "German" },
                { label: "Arabic", value: "Arabic" },
                { label: "French", value: "French" },
            ],
            selectedTimezone: null,
            timezoneOptions: [
                { label: "Select", value: "Select" },
                { label: "Eastern Time (ET) — UTC −05:00 / −04:00 (DST)", value: "Eastern Time (ET) — UTC −05:00 / −04:00 (DST)" },
                { label: "Central Time (CT) — UTC −06:00 / −05:00 (DST)", value: "Central Time (CT) — UTC −06:00 / −05:00 (DST)" },
                { label: "Pacific Time (PT) — UTC −08:00 / −07:00 (DST)", value: "Pacific Time (PT) — UTC −08:00 / −07:00 (DST)" },
                { label: "Mountain Time (MT) — UTC −07:00 / −06:00 (DST)", value: "Mountain Time (MT) — UTC −07:00 / −06:00 (DST)" },
            ],
            selectedDateFormat: null,
            dateFormatOptions: [
                { label: "Select", value: "Select" },
                { label: "01 Jan 2026", value: "01 Jan 2026" },
                { label: "Jan 01, 2026", value: "Jan 01, 2026" },
                { label: "01-01-2026", value: "01-01-2026" },
                { label: "01/01/26", value: "01/01/26" },
            ],
            selectedTimeFormat: null,
            timeFormatOptions: [
                { label: "Select", value: "Select" },
                { label: "12 hrs", value: "12 hrs" },
                { label: "24hrs", value: "24hrs" },
            ],
            selectedCurrency: null,
            currencyOptions: [
                { label: "Select", value: "Select" },
                { label: "USD", value: "USD" },
                { label: "Dollar", value: "Dollar" },
                { label: "Euro", value: "Euro" },
                { label: "Pound", value: "Pound" },
                { label: "Rupee", value: "Rupee" },
            ],
            selectedCurrencySymbol: null,
            currencySymbolOptions: [
                { label: "Select", value: "Select" },
                { label: "$", value: "$" },
                { label: "₹", value: "₹" },
                { label: "£", value: "£" },
                { label: "€", value: "€" },
            ],
            selectedFinancialMonth: null,
            financialMonthOptions: [
                { label: "Select", value: "Select" },
                { label: "Jan", value: "Jan" },
                { label: "Apr", value: "Apr" },
                { label: "Oct", value: "Oct" },
            ],
            selectedCurrencyPosition: null,
            currencyPositionOptions: [
                { label: "Select", value: "Select" },
                { label: "$100", value: "$100" },
                { label: "100$", value: "100$" },
                { label: "$ 100", value: "$ 100" },
                { label: "100 $", value: "100 $" },
            ],
            selectedThousandSeperator: null,
            thousandSeperatorOptions: [
                { label: "Select", value: "Select" },
                { label: ".", value: "." },
                { label: ",", value: "," },
            ],
            selectedDecimalSeperator: null,
            decimalSeperatorOptions: [
                { label: "Select", value: "Select" },
                { label: ".", value: "." },
                { label: ",", value: "," },
                { label: "'", value: "'" },
            ],
        }
    },
    methods: {
        submitForm() {
            this.$router.push("/localization-settings");
        },
    },
}
</script>