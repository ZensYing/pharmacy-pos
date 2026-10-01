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
                        <li class="breadcrumb-item active" aria-current="page">Manufacturer List </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="d-flex align-items-center shadow p-1 rounded-pill border bg-white view-icons">
                        <router-link :to="all_routes.manufacturers"
                            class="btn btn-sm btn-primary btn-icon p-1 border-0 fs-14 active"><i
                                class="icon-grid-2x2"></i></router-link>
                        <router-link :to="all_routes.manufacturersList"
                            class="flex-shrink-0 btn btn-sm btn-icon border-0 ms-1 fs-14"><i
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
            <div
                class="d-flex align-items-center justify-content-between gap-2 flex-wrap mt-4 mb-4 pt-4 border-top">
                <div class="input-icon input-icon-start position-relative">
                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                    <input type="text" class="form-control" placeholder="Search" v-model="searchQuery">
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
            <!-- end card -->

            <!-- start row -->
            <div class="row row-gap-4">
                <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6" v-for="record in paginatedData" :key="record.Code">
                    <div class="card mb-0">
                        <div class="card-body">
                            <div
                                class="d-flex align-items-center justify-content-between flex-wrap gap-2 bg-light p-3 rounded-3">
                                <div class="d-flex align-items-center gap-3">
                                    <div class="avatar avatar-xxl border bg-light rounded-circle p-2 bg-white">
                                        <img :src="getImageUrl(record.Image)" alt="hospital" class="img-fluid">
                                    </div>
                                    <div>
                                        <h3 class="fs-14 fw-bold text-dark mb-2">{{ record.Manufacturer }}</h3>
                                        <span class="badge badge-soft-info">{{ record.Code }}</span>
                                    </div>
                                </div>
                                <div class="action-item">
                                    <button class="btn btn-icon" type="button" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                        <i class="icon-ellipsis-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu p-3">
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                data-bs-toggle="modal" data-bs-target="#edit_manifacture"><i
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
                            <div class="mt-3 pt-3 border-top">
                                <div
                                    class="d-flex align-items-sm-center align-items-start justify-content-between flex-column flex-sm-row gap-2 mb-3">
                                    <p class="mb-0">Contact Person:</p>
                                    <div class="fs-14 fw-medium mb-0 d-flex align-items-center gap-2"> <a href="#"
                                            class="avatar avatar-xs rounded-circle fs-12"><img
                                                :src="getImageUrlOne(record.ContactImage)" class="rounded-circle"
                                                alt="user"></a> <a href="#">{{ record.ContactPerson }}</a></div>
                                </div>
                                <div
                                    class="d-flex align-items-sm-center align-items-start justify-content-between flex-column flex-sm-row gap-2 mb-3">
                                    <p class="mb-0">Email Address:</p>
                                    <div class="fs-14 fw-medium mb-0 d-flex align-items-center gap-1 text-dark">
                                        {{ record.Email }} <a href="#"
                                            class="text-body d-flex align-items-center"><i
                                                class="icon-copy ms-1"></i></a></div>
                                </div>
                                <div
                                    class="d-flex align-items-sm-center align-items-start justify-content-between flex-column flex-sm-row gap-2">
                                    <p class="mb-0">Phone:</p>
                                    <div class="fs-14 fw-medium mb-0 d-flex align-items-center gap-1 text-dark">{{ record.Phone }}
                                        <a href="#" class="text-body d-flex align-items-center"><i
                                                class="icon-copy ms-1"></i></a></div>
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
                itemLabel="manufacturers"
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

    <manufacturers-modal></manufacturers-modal>

</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { all_routes } from '@/router/all_routes.js'

const data = [
    {
        "Code": "#MNG016",
        "Image": "hospital-icon-1.svg",
        "Manufacturer": "ABC Pharma",
        "ContactPerson": "Steven Kelley",
        "ContactImage": "avatar-05.jpg",
        "Email": "steven@example.com",
        "Phone": "+1 89384 47384",
        "Status": "Active"
    },
    {
        "Code": "#MNG015",
        "Image": "hospital-icon-2.svg",
        "Manufacturer": "HealCare Labs",
        "ContactPerson": "Hilda Morris",
        "ContactImage": "avatar-06.jpg",
        "Email": "hilds@example.com",
        "Phone": "+1 65849 48035",
        "Status": "Active"
    },
    {
        "Code": "#MNG014",
        "Image": "hospital-icon-3.svg",
        "Manufacturer": "Medix Ltd",
        "ContactPerson": "Daniel Hadley",
        "ContactImage": "avatar-07.jpg",
        "Email": "daniel@example.com",
        "Phone": "+1 73829 49204",
        "Status": "Active"
    },
    {
        "Code": "#MNG013",
        "Image": "hospital-icon-4.svg",
        "Manufacturer": "SkinPlus Pharma",
        "ContactPerson": "Dorthy Gifford",
        "ContactImage": "avatar-04.jpg",
        "Email": "dorthy@example.com",
        "Phone": "+1 84205 13628",
        "Status": "Inactive"
    },
    {
        "Code": "#MNG012",
        "Image": "hospital-icon-5.svg",
        "Manufacturer": "NovaLife Pharma",
        "ContactPerson": "Jared Mercer",
        "ContactImage": "avatar-12.jpg",
        "Email": "jared@example.com",
        "Phone": "+1 93638 48290",
        "Status": "Active"
    },
    {
        "Code": "#MNG011",
        "Image": "hospital-icon-6.svg",
        "Manufacturer": "CareWell Labs",
        "ContactPerson": "Shirley Scott",
        "ContactImage": "avatar-31.jpg",
        "Email": "shirley@example.com",
        "Phone": "+1 84245 29403",
        "Status": "Active"
    },
    {
        "Code": "#MNG010",
        "Image": "hospital-icon-7.svg",
        "Manufacturer": "MedSure Pharma",
        "ContactPerson": "Joseph Shepard",
        "ContactImage": "avatar-11.jpg",
        "Email": "joseph@example.com",
        "Phone": "+1 74725 10853",
        "Status": "Active"
    },
    {
        "Code": "#MNG009",
        "Image": "hospital-icon-8.svg",
        "Manufacturer": "ABC Pharma",
        "ContactPerson": "Kathleen Bryant",
        "ContactImage": "avatar-02.jpg",
        "Email": "kathleen@example.com",
        "Phone": "+1 65456 74925",
        "Status": "Inactive"
    },
    {
        "Code": "#MNG008",
        "Image": "hospital-icon-9.svg",
        "Manufacturer": "NutriPlus Labs",
        "ContactPerson": "Ronald Emmons",
        "ContactImage": "avatar-08.jpg",
        "Email": "ronald@example.com",
        "Phone": "+1 89242 47294",
        "Status": "Active"
    }
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
            currentPage: 1,
            pageSize: 9,
            pageSizeOptions: [3, 6, 9, 18],
            itemToDelete: null,
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
        },
        getImageUrlOne(imageName) {
            return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
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
                    record.Manufacturer.toLowerCase().includes(query) ||
                    record.Code.toLowerCase().includes(query) ||
                    record.ContactPerson.toLowerCase().includes(query) ||
                    record.Email.toLowerCase().includes(query) ||
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
