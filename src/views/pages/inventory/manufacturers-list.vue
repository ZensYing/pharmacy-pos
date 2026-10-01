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
                        <li class="breadcrumb-item active" aria-current="page">Manufacturers </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="d-flex align-items-center shadow p-1 rounded-pill border bg-white view-icons">
                        <router-link :to="all_routes.manufacturers" class="btn btn-sm btn-icon p-1 border-0 fs-14"><i
                                class="icon-grid-2x2"></i></router-link>
                        <router-link :to="all_routes.manufacturersList"
                            class="flex-shrink-0 btn btn-primary active btn-sm btn-icon border-0 ms-1 fs-14"><i
                                class="icon-list-todo"></i></router-link>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#add_manifacture"
                        class="btn btn-primary d-flex align-items-center gap-2"> <i class="icon-plus"></i> Add
                        New</a>
                </div>
            </div>

            <!-- start row -->
            <div class="row row-gap-4 mb-4">
                <div class="col-xxl-3 col-lg-6 col-sm-6">
                    <div class="card bg-info-gradient-200 text-center manufacturer-card mb-0">
                        <div class="card-body pt-0">
                            <div
                                class="avatar avatar-xl bg-white flex-shrink-0 bg-info-gradient-300 mb-3 text-purple">
                                <i class="icon-building-2 fs-24"></i>
                            </div>
                            <div>
                                <p class="d-block mb-2 fw-bold text-dark">Total Manufacturers</p>
                                <h3 class="fs-24 mb-0">120</h3>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-xxl-3 col-lg-6 col-sm-6">
                    <div class="card bg-success-gradient-200 text-center manufacturer-card mb-0">
                        <div class="card-body pt-0">
                            <div
                                class="avatar avatar-2 avatar-xl bg-white flex-shrink-0 bg-success-gradient-100 mb-3 text-success">
                                <i class="icon-building-2 fs-24"></i>
                            </div>
                            <div>
                                <p class="d-block mb-2 fw-bold text-dark">Active Manufacturers</p>
                                <h3 class="fs-24 mb-0">100</h3>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-xxl-3 col-lg-6 col-sm-6">
                    <div class="card bg-danger-gradient-200 text-center manufacturer-card mb-0">
                        <div class="card-body pt-0">
                            <div
                                class="avatar avatar-3 avatar-xl bg-white flex-shrink-0 bg-danger-gradient-100 mb-3 text-danger">
                                <i class="icon-building-2 fs-24"></i>
                            </div>
                            <div>
                                <p class="d-block mb-2 fw-bold text-dark">Inactive Manufacturers</p>
                                <h3 class="fs-24 mb-0">20</h3>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-xxl-3 col-lg-6 col-sm-6">
                    <div class="card bg-warning-gradient-200 text-center manufacturer-card mb-0">
                        <div class="card-body pt-0">
                            <div
                                class="avatar avatar-4 avatar-xl bg-white flex-shrink-0 bg-warning-gradient-100 mb-3 text-warning">
                                <i class="icon-building-2 fs-24"></i>
                            </div>
                            <div>
                                <p class="d-block mb-2 fw-bold text-dark">Low Stock Products</p>
                                <h3 class="fs-24 mb-0">200</h3>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-->
            </div>
            <!-- end row -->

            <!-- start card -->
            <div class="card mb-0">
                <div class="card-header">
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div class="d-inline-flex align-items-center flex-wrap flex-sm-nowrap gap-2">
                            <div class="input-icon input-icon-start position-relative">
                                <span class="input-icon-addon addon-search text-dark"><i class="icon-search"></i></span>
                                <input
                                    type="text"
                                    class="form-control search-addon"
                                    placeholder="Search"
                                    v-model="searchQuery"
                                />
                            </div>
                            <div class="input-group position-relative w-fit">
                                <span class="input-icon-addon fs-16 text-gray-9">
                                    <i class="icon-calendar-fold"></i>
                                </span>
                                <input type="text" class="form-control date-range bookingrange rounded-end" ref="dateRangeInput">
                            </div>
                        </div>
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <!-- sort by -->
                            <div class="dropdown sortby-dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown">
                                    <i class="icon-arrow-down-wide-narrow"></i> Sort by
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Manufacture
                                                Name <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Manufacture
                                                Name <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Contact
                                                Person <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Contact
                                                Person <span>Z-A</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Export -->
                            <div class="gap-3 d-flex align-items-center flex-wrap">
                                <div class="dropdown">
                                    <a href="javascript:void(0);"
                                        class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                        data-bs-toggle="dropdown">
                                        <i class="icon-arrow-up-to-line"></i>Export
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded">Export as
                                                PDF</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded">Export as
                                                Excel</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">

                    <!-- start table -->
                    <div class="table-responsive table-nowrap">
                        <a-table
                            class="table mb-0 datatable"
                            :columns="columns"
                            :data-source="paginatedData"
                            :pagination="false"
                        >
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'ID'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.ID }}</a>
                                </template>
                                <template v-if="column.key === 'ManufacturerName'">
                                    <h4 class="fs-14 fw-medium mb-0">{{ record.ManufacturerName }}</h4>
                                </template>
                                <template v-if="column.key === 'ContactPerson'">
                                    <div class="d-flex align-items-center fw-medium text-dark">
                                        <span
                                            class="avatar avatar-xs rounded-circle border border-orange text-orange bg-soft-orange me-2 fs-12 fw-medium">{{ record.ContactInitials }}</span>{{ record.ContactPerson }}
                                    </div>
                                </template>
                                <template v-if="column.key === 'LinkedMedicines'">
                                    {{ record.LinkedMedicines }}
                                    <span v-if="record.MoreCount" class="badge bg-light text-dark">+{{ record.MoreCount }} More</span>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-success': record.Status === 'Active',
                                                'badge-soft-danger': record.Status === 'Inactive',
                                            },
                                        ]"
                                    >
                                        <i class="fa-solid fa-circle fs-5 me-1"></i>
                                        {{ record.Status }}
                                    </span>
                                </template>
                                <template v-if="column.key === 'action'">
                                    <div class="text-end">
                                        <div class="action-item">
                                            <button class="btn btn-icon" type="button" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                                <i class="icon-ellipsis-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu p-3">
                                                <li>
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#edit_manifacture"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-pencil-line me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center text-danger"
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal" @click="setDelete(record)"><i
                                                            class="icon-trash-2 me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </template>
                            </template>
                        </a-table>

                        <BasePagination
                            :currentPage="currentPage"
                            :pageSize="pageSize"
                            :pageSizeOptions="pageSizeOptions"
                            :totalPages="totalPages"
                            :totalItems="filteredPages.length"
                            itemLabel="manufacturers"
                            @update:currentPage="onPageChange"
                            @update:pageSize="onPageSizeChange"
                        />
                    </div>
                    <!-- end table -->

                </div>
            </div>
            <!-- end card -->

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

    <!-- Start Delete Modal -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <span class="avatar avatar-xl rounded-circle bg-soft-danger mb-3">
                        <i class="icon-trash-2"></i>
                    </span>
                    <h4 class="mb-2">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light d-flex align-items-center" data-bs-dismiss="modal"><i
                                class="icon-x me-1"></i> Cancel</a>
                        <a href="#" class="btn btn-danger d-flex align-items-center" data-bs-dismiss="modal" @click="deleteItem"><i
                                class="icon-trash-2 me-1"></i>Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal -->

    <manufacturers-list-modal></manufacturers-list-modal>

</template>

<script>
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

import BasePagination from '@/components/BasePagination.vue';
import { all_routes } from '@/router/all_routes.js'
import ManufacturersListModal from '@/components/modal/manufacturers-list-modal.vue';

const data = [
    {
        "ID": "#MNG016",
        "ManufacturerName": "ABC Pharma",
        "ContactPerson": "Steven Kelley",
        "ContactInitials": "SK",
        "Phone": "+1 89384 47384",
        "Email": "steven@example.com",
        "Address": "123 Pharma St, New York",
        "LinkedMedicines": "Paracetamol, Amoxicillin,",
        "MoreCount": 1,
        "Status": "Active"
    },
    {
        "ID": "#MNG015",
        "ManufacturerName": "HealCare Labs",
        "ContactPerson": "Hilda Morris",
        "ContactInitials": "HM",
        "Phone": "+1 65849 48035",
        "Email": "hilda@example.com",
        "Address": "456 Med Rd, Los Angeles",
        "LinkedMedicines": "Cetirizine, Betnovate",
        "MoreCount": 0,
        "Status": "Active"
    },
    {
        "ID": "#MNG014",
        "ManufacturerName": "Medix Ltd",
        "ContactPerson": "Daniel Hadley",
        "ContactInitials": "DH",
        "Phone": "+1 73829 49204",
        "Email": "daniel@example.com",
        "Address": "789 Bio Blvd, Chicago",
        "LinkedMedicines": "Metformin, Ondansetron",
        "MoreCount": 0,
        "Status": "Active"
    },
    {
        "ID": "#MNG013",
        "ManufacturerName": "SkinPlus Pharma",
        "ContactPerson": "Dorthy Gifford",
        "ContactInitials": "DG",
        "Phone": "+1 84205 13628",
        "Email": "dorthy@example.com",
        "Address": "321 Green Ave, Houston",
        "LinkedMedicines": "Atorvastatin, Paracetamol,",
        "MoreCount": 3,
        "Status": "Inactive"
    },
    {
        "ID": "#MNG012",
        "ManufacturerName": "NovaLife Pharma",
        "ContactPerson": "Jared Mercer",
        "ContactInitials": "JM",
        "Phone": "+1 93638 48290",
        "Email": "jared@example.com",
        "Address": "654 Med St, Phoenix",
        "LinkedMedicines": "Betnovate, Ondansetron",
        "MoreCount": 0,
        "Status": "Active"
    },
    {
        "ID": "#MNG011",
        "ManufacturerName": "CareWell Labs",
        "ContactPerson": "Shirley Scott",
        "ContactInitials": "SS",
        "Phone": "+1 84245 29403",
        "Email": "shirley@example.com",
        "Address": "987 Health Way, Dallas",
        "LinkedMedicines": "Metformin, Amoxicillin",
        "MoreCount": 0,
        "Status": "Active"
    },
    {
        "ID": "#MNG010",
        "ManufacturerName": "MedSure Pharma",
        "ContactPerson": "Joseph Shepard",
        "ContactInitials": "JS",
        "Phone": "+1 74725 10853",
        "Email": "joseph@example.com",
        "Address": "543 Pharma Ln, San Antonio",
        "LinkedMedicines": "Paracetamol, Atorvastatin,",
        "MoreCount": 1,
        "Status": "Active"
    },
    {
        "ID": "#MNG009",
        "ManufacturerName": "BioLife Labs",
        "ContactPerson": "Kathleen Bryant",
        "ContactInitials": "KB",
        "Phone": "+1 65456 74925",
        "Email": "kathleen@example.com",
        "Address": "234 Care Rd, San Diego",
        "LinkedMedicines": "Amoxicillin, Cetirizine",
        "MoreCount": 0,
        "Status": "Active"
    },
    {
        "ID": "#MNG008",
        "ManufacturerName": "NutriPlus Labs",
        "ContactPerson": "Ronald Emmons",
        "ContactInitials": "RE",
        "Phone": "+1 89242 47294",
        "Email": "ronald@example.com",
        "Address": "876 Med Ave, Seattle",
        "LinkedMedicines": "Betnovate, Paracetamol",
        "MoreCount": 0,
        "Status": "Active"
    },
    {
        "ID": "#MNG007",
        "ManufacturerName": "NutraCare Pharma",
        "ContactPerson": "Erika Williams",
        "ContactInitials": "EW",
        "Phone": "+1 93646 50393",
        "Email": "erika@example.com",
        "Address": "234 Health St, Denver",
        "LinkedMedicines": "Ondansetron, Atorvastatin,",
        "MoreCount": 2,
        "Status": "Active"
    }
]

const columns = [
    {
        title: "ID",
        dataIndex: "ID",
        key: "ID",
        sorter: {
            compare: (a, b) => (a.ID.toLowerCase() > b.ID.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Manufacturer Name",
        dataIndex: "ManufacturerName",
        key: "ManufacturerName",
        sorter: {
            compare: (a, b) => (a.ManufacturerName.toLowerCase() > b.ManufacturerName.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Contact Person",
        dataIndex: "ContactPerson",
        key: "ContactPerson",
        sorter: {
            compare: (a, b) => (a.ContactPerson.toLowerCase() > b.ContactPerson.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Phone",
        dataIndex: "Phone",
        sorter: {
            compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Email",
        dataIndex: "Email",
        sorter: {
            compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Address",
        dataIndex: "Address",
        sorter: {
            compare: (a, b) => (a.Address.toLowerCase() > b.Address.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Linked Medicines",
        dataIndex: "LinkedMedicines",
        key: "LinkedMedicines",
        sorter: false,
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        sorter: {
            compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Action",
        key: "action",
        sorter: false,
    },
]

export default {
    components: {
        BasePagination,
        'manufacturers-list-modal': ManufacturersListModal,
    },
    data() {
        return {
            all_routes,
            searchQuery: "",
            data,
            columns,
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 20, 50],
            itemToDelete: null,
        }
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
        },
        onPageSizeChange(size) {
            this.pageSize = Number(size);
            this.currentPage = 1;
        },
        setDelete(record) {
            this.itemToDelete = record;
        },
        deleteItem() {
            if (this.itemToDelete) {
                this.data = this.data.filter(item => item !== this.itemToDelete);
                this.itemToDelete = null;
            }
        },
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.ID.toLowerCase().includes(query) ||
                    record.ManufacturerName.toLowerCase().includes(query) ||
                    record.ContactPerson.toLowerCase().includes(query) ||
                    record.Phone.toLowerCase().includes(query) ||
                    record.Email.toLowerCase().includes(query) ||
                    record.Address.toLowerCase().includes(query) ||
                    record.LinkedMedicines.toLowerCase().includes(query) ||
                    record.Status.toLowerCase().includes(query)
                );
            });
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.pageSize;
            return this.filteredPages.slice(start, start + this.pageSize);
        },
        totalPages() {
            return Math.ceil(this.filteredPages.length / this.pageSize) || 1;
        },
    },
    setup() {
        const dateRangeInput = ref(null);

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
