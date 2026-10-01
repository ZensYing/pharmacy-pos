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
                        <li class="breadcrumb-item active" aria-current="page">Batch Management </li>
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

            <!-- start card -->
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <div class="input-icon input-icon-start position-relative">
                                <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                <input type="text" class="form-control" placeholder="Search" v-model="searchQuery" />
                            </div>
                            <div class="input-group position-relative w-fit">
                                <span class="input-icon-addon fs-16 text-gray-9">
                                    <i class="icon-calendar-fold"></i>
                                </span>
                                <input type="text" class="form-control date-range bookingrange rounded-end" ref="dateRangeInput">
                            </div>
                            <!-- Status -->
                            <div class="dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-label="column">
                                    <i class="icon-circle-dot-dashed"></i> Expiry
                                </a>
                                <div class="dropdown-menu dropdown-menu-start dropdown-menu-md">
                                    <ul class="list-unstyled mb-0">
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                            class="fa-solid fa-circle fs-5 me-1"></i>
                                                        Active</span></span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-warning d-inline-flex align-items-center"><i
                                                            class="fa-solid fa-circle fs-5 me-1"></i> Near
                                                        Expiry</span></span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                            class="fa-solid fa-circle fs-5 me-1"></i>
                                                        Expired</span></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Suppliers -->
                            <div class="dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-label="column">
                                    <i class="icon-user"></i> Suppliers
                                </a>
                                <div class="dropdown-menu dropdown-menu-start dropdown-menu-md">
                                    <ul class="list-unstyled mb-0">
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />MedLife Distributors</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />HealthCare Pharma</span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked />GreenCross Medicals</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary d-flex align-items-center gap-2"><i
                                class="icon-pocket"></i>Apply Filter</a>
                    </div>
                </div>
            </div>
            <!-- end card -->

            <!-- Batch Item -->
            <div class="card mb-3" v-for="(medicine, index) in filteredMedicines" :key="medicine.SKU">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <h5 class="mb-0 d-flex align-items-center flex-wrap gap-2">{{ medicine.Item }} <span
                                class="badge badge-soft-info">SKU : {{ medicine.SKU }}</span></h5>
                        <div class="d-flex align-items-center gap-3">
                            <span class="badge badge-soft-warning d-inline-flex align-items-center gap-1">
                                <i class="icon-boxes fs-14"></i> Stocks Available : {{ medicine.StocksAvailable }}
                            </span>
                            <a :href="'#batch' + (index + 1)" class="btn btn-icon btn-xs collapse-btn"
                                :class="{ collapsed: index !== 0 }" data-bs-toggle="collapse"
                                :aria-expanded="index === 0 ? 'true' : 'false'">
                                <i :class="index === 0 ? 'icon-chevron-up' : 'icon-chevron-down'"></i>
                            </a>
                        </div>
                    </div>
                    <div class="collapse mt-4" :class="{ show: index === 0 }" :id="'batch' + (index + 1)">
                        <div class="table-responsive table-nowrap border rounded-3">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>Batch No</th>
                                        <th>Rack No</th>
                                        <th>Purchase Date</th>
                                        <th>Expiry Date</th>
                                        <th>Qty Received</th>
                                        <th>Qty Sold</th>
                                        <th>Qty Available</th>
                                        <th>Supplier</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="batch in medicine.Batches" :key="batch.BatchNo">
                                        <td>{{ batch.BatchNo }}</td>
                                        <td>{{ batch.RackNo }}</td>
                                        <td>{{ batch.PurchaseDate }}</td>
                                        <td>{{ batch.ExpiryDate }}</td>
                                        <td>{{ batch.QtyReceived }}</td>
                                        <td>{{ batch.QtySold }}</td>
                                        <td>{{ batch.QtyAvailable }}</td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img :src="getImageUrl(batch.SupplierImage)" alt="supplier">
                                                </span>
                                                <span class="fs-14 fw-medium text-dark">{{ batch.Supplier }}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="badge d-inline-flex align-items-center"
                                                :class="[
                                                    {
                                                        'badge-soft-success': batch.Status === 'Active',
                                                        'badge-soft-warning': batch.Status === 'Near Expiry',
                                                        'badge-soft-danger': batch.Status === 'Expired',
                                                    },
                                                ]"
                                            >
                                                <i class="fa-solid fa-circle fs-5 me-1"></i>
                                                {{ batch.Status }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Load More -->
            <div class="d-flex justify-content-center mt-4">
                <button class="btn btn-white">Load More</button>
            </div>

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
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

import { all_routes } from '@/router/all_routes.js'

const batches = [
    {
        "BatchNo": "BT2604110",
        "RackNo": "R1S1A1",
        "PurchaseDate": "24 Apr 2026",
        "ExpiryDate": "24 Apr 2028",
        "QtyReceived": "180",
        "QtySold": "180",
        "QtyAvailable": "150",
        "SupplierImage": "supplier-img-1.jpg",
        "Supplier": "MedLife Distributors",
        "Status": "Active"
    },
    {
        "BatchNo": "BT2604012",
        "RackNo": "R1S2A4",
        "PurchaseDate": "20 Apr 2026",
        "ExpiryDate": "19 Apr 2029",
        "QtyReceived": "200",
        "QtySold": "200",
        "QtyAvailable": "120",
        "SupplierImage": "supplier-img-2.jpg",
        "Supplier": "HealthCare Pharma",
        "Status": "Active"
    },
    {
        "BatchNo": "BT2603205",
        "RackNo": "R3S1A3",
        "PurchaseDate": "10 Apr 2026",
        "ExpiryDate": "08 Apr 2028",
        "QtyReceived": "150",
        "QtySold": "150",
        "QtyAvailable": "70",
        "SupplierImage": "supplier-img-3.jpg",
        "Supplier": "GreenCross Medicals",
        "Status": "Active"
    },
    {
        "BatchNo": "BT2603145",
        "RackNo": "R1S1B2",
        "PurchaseDate": "21 Mar 2026",
        "ExpiryDate": "20 Mar 2028",
        "QtyReceived": "120",
        "QtySold": "120",
        "QtyAvailable": "50",
        "SupplierImage": "supplier-img-4.jpg",
        "Supplier": "NovaCure Pharma",
        "Status": "Active"
    },
    {
        "BatchNo": "BT2602126",
        "RackNo": "R2S1B4",
        "PurchaseDate": "18 Mar 2026",
        "ExpiryDate": "15 Mar 2030",
        "QtyReceived": "160",
        "QtySold": "160",
        "QtyAvailable": "20",
        "SupplierImage": "supplier-img-5.jpg",
        "Supplier": "CareWell Agency",
        "Status": "Near Expiry"
    },
    {
        "BatchNo": "BT2601045",
        "RackNo": "R1S2B2",
        "PurchaseDate": "12 Jan 2026",
        "ExpiryDate": "10 Mar 2026",
        "QtyReceived": "120",
        "QtySold": "120",
        "QtyAvailable": "10",
        "SupplierImage": "supplier-img-6.jpg",
        "Supplier": "PrimeCare Pharma",
        "Status": "Expired"
    }
]

const data = [
    { "SKU": "#TAB0016", "Item": "Paracetamol 500", "StocksAvailable": "120", "Batches": batches },
    { "SKU": "#TAB015", "Item": "Amoxicillin 250", "StocksAvailable": "200", "Batches": batches },
    { "SKU": "#SYR014", "Item": "Cetirizine", "StocksAvailable": "150", "Batches": batches },
    { "SKU": "#TAB013", "Item": "Ceftriaxone 20", "StocksAvailable": "180", "Batches": batches },
    { "SKU": "#CRE012", "Item": "Betnovate", "StocksAvailable": "110", "Batches": batches },
    { "SKU": "#TAB011", "Item": "Amoxicillin 30", "StocksAvailable": "140", "Batches": batches },
    { "SKU": "#INJ010", "Item": "Tetanus Toxoid", "StocksAvailable": "130", "Batches": batches },
]

export default {
    data() {
        return {
            all_routes,
            searchQuery: "",
            data,
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/supplier/${imageName}`, import.meta.url).href;
        },
    },
    computed: {
        filteredMedicines() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((medicine) => {
                return (
                    medicine.SKU.toLowerCase().includes(query) ||
                    medicine.Item.toLowerCase().includes(query)
                );
            });
        },
    },
    setup() {
        const dateRangeInput = ref(null);

        // Move the function declaration outside of the onMounted callback
        function booking_range(start, end) {
            return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
        }

        onMounted(() => {
            if (dateRangeInput.value) {
                const start = moment().subtract(6, "days");
                const end = moment();

                new DateRangePicker(
                dateRangeInput.value,
                    {
                        startDate: start,
                        endDate: end,
                        ranges: {
                        Today: [moment(), moment()],
                        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                        "Last 7 Days": [moment().subtract(6, "days"), moment()],
                        "Last 30 Days": [moment().subtract(29, "days"), moment()],
                        "This Month": [moment().startOf("month"), moment().endOf("month")],
                        "Last Month": [
                            moment().subtract(1, "month").startOf("month"),
                            moment().subtract(1, "month").endOf("month"),
                        ],
                        },
                    },
                    booking_range
                );

                booking_range(start, end);
            }
        });

        return {
            dateRangeInput,
        };
    },
}
</script>
