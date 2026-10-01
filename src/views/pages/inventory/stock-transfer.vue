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
                        <li class="breadcrumb-item active" aria-current="page">Stock Transfer</li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <a href="#" class="btn btn-primary d-flex align-items-center gap-2" data-bs-toggle="modal"
                        data-bs-target="#add_stock_transfer"> <i class="icon-plus"></i> Add New</a>
                </div>
            </div>

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

                            <!-- Filter -->
                            <a href="#" class="btn btn-white btn-icon" data-bs-toggle="offcanvas"
                                data-bs-target="#add_filter" aria-controls="add_filter"><i
                                    class="icon-funnel"></i></a>
                            <!-- column -->
                            <div class="dropdown">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle btn btn-white d-inline-flex align-items-center gap-2"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-label="column">
                                    <i class="icon-columns-3"></i> Columns
                                </a>
                                <div class="dropdown-menu dropdown-menu-start dropdown-menu-md">
                                    <div>
                                        <draggable
                                            v-model="columns"
                                            @start="drag=true"
                                            @end="drag=false"
                                            item-key="key"
                                        >
                                            <div class="mb-3" v-for="element in columns" :key="element.key">
                                                <label class="d-flex align-items-center">
                                                    <i class="icon-grip-vertical me-2"></i>
                                                    <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                                    {{element.title}}
                                                </label>
                                            </div>
                                        </draggable>
                                    </div>
                                </div>
                            </div>

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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Items
                                                <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Items
                                                <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Date
                                                & Time - Ascending <span>1-9</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Date
                                                & Time - Descending <span>9-1</span></a>
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
                                <template v-if="column.key === 'From'">
                                    <span class="fw-medium text-dark">{{ record.From }}</span>
                                </template>
                                <template v-if="column.key === 'To'">
                                    <span class="fw-medium text-dark">{{ record.To }}</span>
                                </template>
                                <template v-if="column.key === 'By'">
                                    <div class="d-flex align-items-center fw-medium text-dark">
                                        <span class="avatar avatar-xs rounded-circle me-2">
                                            <img :src="getImageUrlOne(record.ByImage)" class="rounded-circle" alt="user">
                                        </span>
                                        {{ record.By }}
                                    </div>
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
                                                        data-bs-target="#edit_stock_transfer"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-pencil-line me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center text-danger"
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"  @click="setDelete(record)"><i
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
                            itemLabel="transfers"
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

    <stock-transfer-modal></stock-transfer-modal>

</template>

<script>
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { all_routes } from '@/router/all_routes.js'

const data = [
    {
        "ID": "#TRA016",
        "DateTime": "24 Apr 2026, 10:00 AM",
        "From": "Main Branch, Newyork",
        "To": "Branch 2, Los Angeles",
        "Items": "Paracetamol 500",
        "Quantity": "30",
        "By": "Mervin Nesmith",
        "ByImage": "avatar-05.jpg"
    },
    {
        "ID": "#TRA015",
        "DateTime": "20 Apr 2026, 04:15 PM",
        "From": "Branch 2, Los Angeles",
        "To": "Branch 3, San Diego",
        "Items": "Amoxicillin 250",
        "Quantity": "180",
        "By": "Joyce Kerns",
        "ByImage": "avatar-06.jpg"
    },
    {
        "ID": "#TRA014",
        "DateTime": "10 Apr 2026, 11:30 AM",
        "From": "Branch 4, Dallas",
        "To": "Branch 2, Los Angeles",
        "Items": "Cetirizine",
        "Quantity": "50",
        "By": "John Baxter",
        "ByImage": "avatar-07.jpg"
    },
    {
        "ID": "#TRA013",
        "DateTime": "21 Mar 2026, 09:10 AM",
        "From": "Main Branch, Newyork",
        "To": "Branch 3, San Diego",
        "Items": "Ceftriaxone 20",
        "Quantity": "110",
        "By": "Margaret Fehr",
        "ByImage": "avatar-04.jpg"
    },
    {
        "ID": "#TRA012",
        "DateTime": "18 Mar 2026, 03:00 PM",
        "From": "Branch 2, Los Angeles",
        "To": "Branch 5, San Antonio",
        "Items": "Betnovate",
        "Quantity": "70",
        "By": "Benjamin Walker",
        "ByImage": "avatar-12.jpg"
    },
    {
        "ID": "#TRA011",
        "DateTime": "06 Mar 2026, 09:30 AM",
        "From": "Branch 4, Dallas",
        "To": "Branch 3, San Diego",
        "Items": "Amoxicillin 30",
        "Quantity": "300",
        "By": "Elizabeth Porter",
        "ByImage": "avatar-31.jpg"
    },
    {
        "ID": "#TRA010",
        "DateTime": "26 Feb 2026, 05:40 PM",
        "From": "Branch 5, San Antonio",
        "To": "Main Branch, Newyork",
        "Items": "Tetanus Toxoid",
        "Quantity": "230",
        "By": "Freddie Brown",
        "ByImage": "avatar-11.jpg"
    },
    {
        "ID": "#TRA009",
        "DateTime": "17 Feb 2026, 09:00 AM",
        "From": "Main Branch, Newyork",
        "To": "Branch 2, Los Angeles",
        "Items": "Atorvastatin",
        "Quantity": "50",
        "By": "Dawn Peterson",
        "ByImage": "avatar-02.jpg"
    },
    {
        "ID": "#TRA008",
        "DateTime": "20 Jan 2026, 01:15 PM",
        "From": "Branch 3, San Diego",
        "To": "Branch 5, San Antonio",
        "Items": "Metformin 100",
        "Quantity": "140",
        "By": "James Howard",
        "ByImage": "avatar-08.jpg"
    },
    {
        "ID": "#TRA007",
        "DateTime": "12 Jan 2026, 04:30 PM",
        "From": "Branch 2, Los Angeles",
        "To": "Main Branch, Newyork",
        "Items": "Ondansetron",
        "Quantity": "130",
        "By": "Doris Crosby",
        "ByImage": "avatar-13.jpg"
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
        title: "Date & Time",
        dataIndex: "DateTime",
        key: "DateTime",
        sorter: {
            compare: (a, b) => (a.DateTime.toLowerCase() > b.DateTime.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "From",
        dataIndex: "From",
        key: "From",
        sorter: {
            compare: (a, b) => (a.From.toLowerCase() > b.From.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "To",
        dataIndex: "To",
        key: "To",
        sorter: {
            compare: (a, b) => (a.To.toLowerCase() > b.To.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Items",
        dataIndex: "Items",
        key: "Items",
        sorter: {
            compare: (a, b) => (a.Items.toLowerCase() > b.Items.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Quantity",
        dataIndex: "Quantity",
        key: "Quantity",
        sorter: {
            compare: (a, b) => (a.Quantity.toLowerCase() > b.Quantity.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "By",
        dataIndex: "By",
        key: "By",
        sorter: {
            compare: (a, b) => (a.By.toLowerCase() > b.By.toLowerCase() ? -1 : 1),
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
        draggable: VueDraggableNext,
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
                    record.ID.toLowerCase().includes(query) ||
                    record.DateTime.toLowerCase().includes(query) ||
                    record.From.toLowerCase().includes(query) ||
                    record.To.toLowerCase().includes(query) ||
                    record.Items.toLowerCase().includes(query) ||
                    record.Quantity.toLowerCase().includes(query) ||
                    record.By.toLowerCase().includes(query)
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
