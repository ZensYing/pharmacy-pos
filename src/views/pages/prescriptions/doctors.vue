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
                        <li class="breadcrumb-item active" aria-current="page">Doctors </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="d-flex align-items-center shadow p-1 rounded-pill border bg-white view-icons">
                        <router-link :to="all_routes.doctors"
                            class="btn btn-sm btn-primary btn-icon p-1 border-0 fs-14 active"><i
                                class="icon-grid-2x2"></i></router-link>
                        <router-link :to="all_routes.doctorsList"
                            class="flex-shrink-0 btn btn-sm btn-icon border-0 ms-1 fs-14"><i
                                class="icon-list-todo"></i></router-link>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#add_doctor"
                        class="btn btn-primary d-flex align-items-center gap-2"> <i class="icon-plus"></i> Add
                        New</a>
                </div>
            </div>

            <!-- Filter -->
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                <div class="input-icon input-icon-start position-relative">
                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                    <input type="text" class="form-control" placeholder="Search Doctor ID" v-model="searchQuery">
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
                                        class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Doctor
                                        Name <span>A-Z</span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);"
                                        class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Doctor
                                        Name <span>Z-A</span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);"
                                        class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Specialization
                                        <span>A-Z</span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);"
                                        class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Specialization
                                        <span>Z-A</span></a>
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

            <!-- start row -->
            <div class="row row-gap-4">
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6" v-for="record in paginatedData" :key="record.Code">
                    <div class="card doctor-card mb-0">
                        <div class="card-body">
                            <div class="card-overlay overflow-hidden rounded-3">
                                <img :src="getImageUrl(record.Image)" alt="doctor" class="img-fluid w-100 h-100">
                                <span class="badge d-inline-flex align-items-center"
                                    :class="[
                                        {
                                            'badge-soft-success': record.Status === 'Active',
                                            'badge-soft-danger': record.Status === 'Inactive',
                                        },
                                    ]"
                                ><i class="fa-solid fa-circle fs-5 me-1"></i>{{ record.Status }}</span>
                            </div>
                            <div class="card-details">
                                <h5 class="card-title mb-1 fs-14 fw-bold">{{ record.Name }}</h5>
                                <p class="card-text fs-12 mb-0 d-flex align-items-center gap-2"><span
                                        class="badge bg-light text-dark">{{ record.Specialization }}</span> {{ record.License }}</p>
                                <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap my-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <i class="icon-house-plus text-dark"></i>
                                        <p class="fs-13 mb-0">{{ record.Clinic }}</p>
                                    </div>
                                    <div class="d-flex align-items-center gap-2">
                                        <i class="icon-phone-call text-dark"></i>
                                        <p class="fs-13 mb-0">{{ record.Phone }}</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between card-btn">
                                    <a href="#" class="d-flex align-items-center gap-1" data-bs-toggle="modal"
                                        data-bs-target="#edit_doctor"><i
                                            class="icon-pencil-ruler text-dark"></i>Edit</a>
                                    <a href="#" class="d-flex align-items-center gap-1" data-bs-toggle="modal"
                                        data-bs-target="#delete_modal" @click="setDelete(record)"><i
                                            class="icon-trash-2 text-dark"></i>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col -->
            </div>
            <!-- end row -->

            <BasePagination
                :currentPage="currentPage"
                :pageSize="pageSize"
                :pageSizeOptions="pageSizeOptions"
                :totalPages="totalPages"
                :totalItems="filteredPages.length"
                itemLabel="doctors"
                @update:currentPage="onPageChange"
                @update:pageSize="onPageSizeChange"
            />

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

    <doctors-modal></doctors-modal>

</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { all_routes } from '@/router/all_routes.js'
import DoctorsModal from '@/components/modal/doctors-modal.vue';

const data = [
    {
        "Code": "#DOC016",
        "Image": "doctor-img-1.jpg",
        "Name": "Dr. David Wilson",
        "Specialization": "Pediatrician",
        "License": "LIC-11324",
        "Clinic": "CityCare Medical Clinic",
        "Phone": "(704) 465-0127",
        "Status": "Active"
    },
    {
        "Code": "#DOC017",
        "Image": "doctor-img-2.jpg",
        "Name": "Dr. Michael Anderson",
        "Specialization": "Cardiologist",
        "License": "LIC-11324",
        "Clinic": "Sunrise Health Clinic",
        "Phone": "(704) 465-0127",
        "Status": "Inactive"
    },
    {
        "Code": "#DOC018",
        "Image": "doctor-img-3.jpg",
        "Name": "Dr. Sophia Martinez",
        "Specialization": "Dermatologist",
        "License": "LIC-11324",
        "Clinic": "Green Cross Clinic",
        "Phone": "(704) 978-0127",
        "Status": "Active"
    },
    {
        "Code": "#DOC019",
        "Image": "doctor-img-4.jpg",
        "Name": "Dr. James Carter",
        "Specialization": "Neurologist",
        "License": "LIC-11324",
        "Clinic": "Apollo Community Clinic",
        "Phone": "(704) 367-0127",
        "Status": "Active"
    },
    {
        "Code": "#DOC020",
        "Image": "doctor-img-5.jpg",
        "Name": "Dr. Olivia Brown",
        "Specialization": "Gynecologist",
        "License": "LIC-11324",
        "Clinic": "Harmony Health Center",
        "Phone": "(704) 587-0127",
        "Status": "Active"
    },
    {
        "Code": "#DOC021",
        "Image": "doctor-img-6.jpg",
        "Name": "Dr. Daniel Harris",
        "Specialization": "Ophthalmologist",
        "License": "LIC-11324",
        "Clinic": "PrimeCare Family Clinic",
        "Phone": "(704) 210-0127",
        "Status": "Active"
    },
    {
        "Code": "#DOC022",
        "Image": "doctor-img-7.jpg",
        "Name": "Dr. Isabella Clark",
        "Specialization": "Psychiatrist",
        "License": "LIC-11324",
        "Clinic": "MetroMed Clinic",
        "Phone": "(704) 555-0127",
        "Status": "Inactive"
    },
    {
        "Code": "#DOC023",
        "Image": "doctor-img-8.jpg",
        "Name": "Dr. Benjamin Lewis",
        "Specialization": "Endocrinologist",
        "License": "LIC-11324",
        "Clinic": "Shifa Medical Centre",
        "Phone": "(704) 555-0127",
        "Status": "Active"
    },
    {
        "Code": "#DOC024",
        "Image": "doctor-img-9.jpg",
        "Name": "Dr. Charlotte Walker",
        "Specialization": "Gastroenterologist",
        "License": "LIC-11324",
        "Clinic": "WellSpring Clinic",
        "Phone": "(704) 555-0127",
        "Status": "Active"
    }
]

export default {
    components: {
        BasePagination,
        'doctors-modal': DoctorsModal,
    },
    data() {
        return {
            all_routes,
            searchQuery: "",
            data,
            currentPage: 1,
            pageSize: 9,
            pageSizeOptions: [3, 6, 9, 18],
            itemToDelete: null,
        }
    },
    methods: {
        getImageUrl(imageName) {
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
                    record.Name.toLowerCase().includes(query) ||
                    record.Code.toLowerCase().includes(query) ||
                    record.Specialization.toLowerCase().includes(query) ||
                    record.Clinic.toLowerCase().includes(query) ||
                    record.Phone.toLowerCase().includes(query) ||
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
}
</script>
