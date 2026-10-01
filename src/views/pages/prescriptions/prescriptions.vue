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
                        <li class="breadcrumb-item active" aria-current="page">Prescription Records </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <router-link :to="all_routes.addPrescription" class="btn btn-primary d-flex align-items-center gap-2"> <i
                            class="icon-plus"></i> Add New</router-link>
                </div>
            </div>

            <!-- start card -->
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <div class="input-icon input-icon-start position-relative">
                                <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                <input type="text" class="form-control" placeholder="Search Prescription ID" v-model="searchQuery">
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
                                    <i class="icon-circle-dot-dashed"></i> All Status
                                </a>
                                <div class="dropdown-menu dropdown-menu-start dropdown-menu-md">
                                    <ul class="list-unstyled mb-0">
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-primary d-inline-flex align-items-center"><i
                                                            class="fa-solid fa-circle fs-5 me-1"></i>
                                                        Verified</span></span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                            class="fa-solid fa-circle fs-5 me-1"></i>
                                                        Pending</span></span>
                                            </label>
                                        </li>
                                        <li class="dropdown-item rounded">
                                            <label class="d-flex align-items-center">
                                                <span class="d-flex align-items-center"><input
                                                        class="form-check-input m-0 me-2" type="checkbox"
                                                        checked /><span
                                                        class="badge badge-soft-info d-inline-flex align-items-center"><i
                                                            class="fa-solid fa-circle fs-5 me-1"></i>
                                                        Dispensed</span></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center gap-2"><i
                                class="icon-pocket"></i>Apply Filter</a>
                    </div>
                </div>
            </div>
            <!-- end card -->

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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Customer
                                                Name <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Customer
                                                Name <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Doctor
                                                Name <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Doctor
                                                Name <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Verification
                                                - Ascending <span>1-9</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Verification
                                                - Descending <span>9-1</span></a>
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
                                <template v-if="column.key === 'PrescriptionID'">
                                    <router-link :to="all_routes.editPrescription" class="text-info">{{ record.PrescriptionID }}</router-link>
                                </template>
                                <template v-if="column.key === 'CustomerName'">
                                    <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <span class="avatar avatar-sm">
                                            <img :src="getCustomerImageUrl(record.CustomerImage)" alt="user" class="rounded-circle">
                                        </span>
                                        {{ record.CustomerName }}
                                    </h4>
                                </template>
                                <template v-if="column.key === 'DoctorName'">
                                    <h4 class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2">
                                        <span class="avatar avatar-sm">
                                            <img :src="getDoctorImageUrl(record.DoctorImage)" alt="user" class="rounded-circle">
                                        </span>
                                        {{ record.DoctorName }}
                                    </h4>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-primary': record.Status === 'Verified',
                                                'badge-soft-danger': record.Status === 'Pending',
                                                'badge-soft-info': record.Status === 'Dispensed',
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
                                                    <router-link :to="all_routes.editPrescription"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-pencil-line me-2"></i>Edit</router-link>
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
                            itemLabel="prescriptions"
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

const data = [
    {
        "PrescriptionID": "#PRS016",
        "CustomerName": "Jane Cooper",
        "CustomerImage": "avatar-01.jpg",
        "DoctorName": "Dr. Michael Anderson",
        "DoctorImage": "doctor-img-1.jpg",
        "PrescriptionDate": "28 Jan 2026",
        "ValidUntill": "28 Jan 2027",
        "Status": "Verified"
    },
    {
        "PrescriptionID": "#PRS015",
        "CustomerName": "Wade Warren",
        "CustomerImage": "avatar-02.jpg",
        "DoctorName": "Dr. Emily Thompson",
        "DoctorImage": "doctor-img-2.jpg",
        "PrescriptionDate": "15 Feb 2026",
        "ValidUntill": "15 Feb 2027",
        "Status": "Pending"
    },
    {
        "PrescriptionID": "#PRS014",
        "CustomerName": "Cameron Williamson",
        "CustomerImage": "avatar-03.jpg",
        "DoctorName": "Dr. David Wilson",
        "DoctorImage": "doctor-img-3.jpg",
        "PrescriptionDate": "10 Mar 2026",
        "ValidUntill": "10 Mar 2027",
        "Status": "Verified"
    },
    {
        "PrescriptionID": "#PRS013",
        "CustomerName": "Brooklyn Simmons",
        "CustomerImage": "avatar-04.jpg",
        "DoctorName": "Dr. Sophia Martinez",
        "DoctorImage": "doctor-img-4.jpg",
        "PrescriptionDate": "14 Apr 2026",
        "ValidUntill": "14 Apr 2027",
        "Status": "Dispensed"
    },
    {
        "PrescriptionID": "#PRS012",
        "CustomerName": "Leslie Alexander",
        "CustomerImage": "avatar-05.jpg",
        "DoctorName": "Dr. James Carter",
        "DoctorImage": "doctor-img-5.jpg",
        "PrescriptionDate": "30 May 2026",
        "ValidUntill": "30 May 2027",
        "Status": "Dispensed"
    },
    {
        "PrescriptionID": "#PRS011",
        "CustomerName": "Robert Fox",
        "CustomerImage": "avatar-06.jpg",
        "DoctorName": "Dr. Olivia Brown",
        "DoctorImage": "doctor-img-6.jpg",
        "PrescriptionDate": "02 Jun 2026",
        "ValidUntill": "02 Jun 2027",
        "Status": "Pending"
    },
    {
        "PrescriptionID": "#PRS010",
        "CustomerName": "Micheal John",
        "CustomerImage": "avatar-07.jpg",
        "DoctorName": "Dr. Daniel Harris",
        "DoctorImage": "doctor-img-7.jpg",
        "PrescriptionDate": "07 Jul 2026",
        "ValidUntill": "07 Jul 2027",
        "Status": "Verified"
    },
    {
        "PrescriptionID": "#PRS009",
        "CustomerName": "Darlene Robertson",
        "CustomerImage": "avatar-08.jpg",
        "DoctorName": "Dr. Isabella Clark",
        "DoctorImage": "doctor-img-8.jpg",
        "PrescriptionDate": "21 Aug 2026",
        "ValidUntill": "21 Aug 2027",
        "Status": "Pending"
    },
    {
        "PrescriptionID": "#PRS008",
        "CustomerName": "Dianne Russell",
        "CustomerImage": "avatar-09.jpg",
        "DoctorName": "Dr. Benjamin Lewis",
        "DoctorImage": "doctor-img-9.jpg",
        "PrescriptionDate": "17 Nov 2026",
        "ValidUntill": "17 Nov 2027",
        "Status": "Dispensed"
    },
    {
        "PrescriptionID": "#PRS007",
        "CustomerName": "Devon Lane",
        "CustomerImage": "avatar-10.jpg",
        "DoctorName": "Dr. Charlotte Walker",
        "DoctorImage": "doctor-img-1.jpg",
        "PrescriptionDate": "10 Dec 2026",
        "ValidUntill": "10 Dec 2027",
        "Status": "Verified"
    }
]

const columns = [
    {
        title: "Prescription ID",
        dataIndex: "PrescriptionID",
        key: "PrescriptionID",
        sorter: {
            compare: (a, b) => (a.PrescriptionID.toLowerCase() > b.PrescriptionID.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Customer Name",
        dataIndex: "CustomerName",
        key: "CustomerName",
        sorter: {
            compare: (a, b) => (a.CustomerName.toLowerCase() > b.CustomerName.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Doctor Name",
        dataIndex: "DoctorName",
        key: "DoctorName",
        sorter: {
            compare: (a, b) => (a.DoctorName.toLowerCase() > b.DoctorName.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Prescription Date",
        dataIndex: "PrescriptionDate",
        sorter: {
            compare: (a, b) => (a.PrescriptionDate.toLowerCase() > b.PrescriptionDate.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Valid Untill",
        dataIndex: "ValidUntill",
        sorter: {
            compare: (a, b) => (a.ValidUntill.toLowerCase() > b.ValidUntill.toLowerCase() ? -1 : 1),
        },
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
        getCustomerImageUrl(imageName) {
            return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
        },
        getDoctorImageUrl(imageName) {
            return new URL(`/src/assets/img/doctors/${imageName}`, import.meta.url).href;
        },
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
                    record.PrescriptionID.toLowerCase().includes(query) ||
                    record.CustomerName.toLowerCase().includes(query) ||
                    record.DoctorName.toLowerCase().includes(query) ||
                    record.PrescriptionDate.toLowerCase().includes(query) ||
                    record.ValidUntill.toLowerCase().includes(query) ||
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
