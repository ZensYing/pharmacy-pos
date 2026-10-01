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
                        <li class="breadcrumb-item active" aria-current="page">Stock Adjustment</li>
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
                        data-bs-target="#add_stock_adjustment"> <i class="icon-plus"></i> Add New</a>
                </div>
            </div>

            <!-- start card -->
            <div class="card">
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
                                                - Ascending <span>1-9</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Date
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
                                <template v-if="column.key === 'ID'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.ID }}</a>
                                </template>
                                <template v-if="column.key === 'Item'">
                                    <h4 class="fs-14 fw-medium mb-0">{{ record.Item }}</h4>
                                </template>
                                <template v-if="column.key === 'RackID'">
                                    <a href="javascript:void(0);" class="text-info">{{ record.RackID }}</a>
                                </template>
                                <template v-if="column.key === 'AdjustmentType'">
                                    <span class="badge"
                                        :class="[
                                            {
                                                'badge-soft-success': record.AdjustmentType === 'Increase',
                                                'badge-soft-danger': record.AdjustmentType === 'Decrease',
                                            },
                                        ]"
                                    >{{ record.AdjustmentType }}</span>
                                </template>
                                <template v-if="column.key === 'AdjQty'">
                                    <span
                                        :class="record.AdjustmentType === 'Increase' ? 'text-success fw-bold' : 'text-danger fw-bold'"
                                    >{{ record.AdjQty }}</span>
                                </template>
                                <template v-if="column.key === 'AdjustedBy'">
                                    <div class="d-flex align-items-center fw-medium text-dark">
                                        <span class="avatar avatar-xs rounded-circle me-2">
                                            <img :src="getImageUrlOne(record.AdjustedByImage)" class="rounded-circle" alt="user">
                                        </span> {{ record.AdjustedBy }}
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
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#edit_stock_adjustment"><i
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
                            itemLabel="adjustments"
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

    <stock-adjustment-modal></stock-adjustment-modal>

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
        "ID": "#ADJ016",
        "Item": "Paracetamol 500",
        "AdjustmentDate": "24 Apr 2026, 10:00 AM",
        "RackID": "#RCK016",
        "AdjustmentType": "Increase",
        "Before": "20",
        "AdjQty": "+10",
        "After": "30",
        "Reason": "Physical Count",
        "AdjustedByImage": "avatar-05.jpg",
        "AdjustedBy": "Mervin Nesmith",
    },
    {
        "ID": "#ADJ015",
        "Item": "Amoxicillin 250",
        "AdjustmentDate": "20 Apr 2026, 04:15 PM",
        "RackID": "#RCK015",
        "AdjustmentType": "Decrease",
        "Before": "200",
        "AdjQty": "-20",
        "After": "180",
        "Reason": "Stock Correction",
        "AdjustedByImage": "avatar-06.jpg",
        "AdjustedBy": "Joyce Kerns",
    },
    {
        "ID": "#ADJ014",
        "Item": "Cetirizine",
        "AdjustmentDate": "10 Apr 2026, 11:30 AM",
        "RackID": "#RCK014",
        "AdjustmentType": "Increase",
        "Before": "40",
        "AdjQty": "+10",
        "After": "50",
        "Reason": "Physical Count",
        "AdjustedByImage": "avatar-07.jpg",
        "AdjustedBy": "John Baxter",
    },
    {
        "ID": "#ADJ013",
        "Item": "Ceftriaxone 20",
        "AdjustmentDate": "21 Mar 2026, 09:10 AM",
        "RackID": "#RCK013",
        "AdjustmentType": "Decrease",
        "Before": "120",
        "AdjQty": "-10",
        "After": "110",
        "Reason": "Damaged",
        "AdjustedByImage": "avatar-04.jpg",
        "AdjustedBy": "Margaret Fehr",
    },
    {
        "ID": "#ADJ012",
        "Item": "Betnovate",
        "AdjustmentDate": "18 Mar 2026, 03:00 PM",
        "RackID": "#RCK012",
        "AdjustmentType": "Increase",
        "Before": "60",
        "AdjQty": "+10",
        "After": "70",
        "Reason": "Stock Correction",
        "AdjustedByImage": "avatar-12.jpg",
        "AdjustedBy": "Benjamin Walker",
    },
    {
        "ID": "#ADJ011",
        "Item": "Amoxicillin 30",
        "AdjustmentDate": "06 Mar 2026, 09:30 AM",
        "RackID": "#RCK011",
        "AdjustmentType": "Decrease",
        "Before": "310",
        "AdjQty": "-10",
        "After": "300",
        "Reason": "Expired",
        "AdjustedByImage": "avatar-31.jpg",
        "AdjustedBy": "Elizabeth Porter",
    },
    {
        "ID": "#ADJ010",
        "Item": "Tetanus Toxoid",
        "AdjustmentDate": "26 Feb 2026, 05:40 PM",
        "RackID": "#RCK010",
        "AdjustmentType": "Decrease",
        "Before": "250",
        "AdjQty": "-20",
        "After": "230",
        "Reason": "Physical Count",
        "AdjustedByImage": "avatar-11.jpg",
        "AdjustedBy": "Freddie Brown",
    },
    {
        "ID": "#ADJ009",
        "Item": "Atorvastatin",
        "AdjustmentDate": "17 Feb 2026, 09:00 AM",
        "RackID": "#RCK009",
        "AdjustmentType": "Increase",
        "Before": "35",
        "AdjQty": "+15",
        "After": "50",
        "Reason": "Damaged",
        "AdjustedByImage": "avatar-02.jpg",
        "AdjustedBy": "Dawn Peterson",
    },
    {
        "ID": "#ADJ008",
        "Item": "Metformin 100",
        "AdjustmentDate": "20 Jan 2026, 01:15 PM",
        "RackID": "#RCK008",
        "AdjustmentType": "Decrease",
        "Before": "150",
        "AdjQty": "-10",
        "After": "140",
        "Reason": "Expired",
        "AdjustedByImage": "avatar-08.jpg",
        "AdjustedBy": "James Howard",
    },
    {
        "ID": "#ADJ007",
        "Item": "Ondansetron",
        "AdjustmentDate": "12 Jan 2026, 04:30 PM",
        "RackID": "#RCK007",
        "AdjustmentType": "Increase",
        "Before": "120",
        "AdjQty": "+10",
        "After": "130",
        "Reason": "Stock Correction",
        "AdjustedByImage": "avatar-13.jpg",
        "AdjustedBy": "Doris Crosby",
    },
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
        title: "Item",
        dataIndex: "Item",
        key: "Item",
        sorter: {
            compare: (a, b) => (a.Item.toLowerCase() > b.Item.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Adjustment Date",
        dataIndex: "AdjustmentDate",
        key: "AdjustmentDate",
        sorter: {
            compare: (a, b) => (a.AdjustmentDate.toLowerCase() > b.AdjustmentDate.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Rack ID",
        dataIndex: "RackID",
        key: "RackID",
        sorter: {
            compare: (a, b) => (a.RackID.toLowerCase() > b.RackID.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Adjustment Type",
        dataIndex: "AdjustmentType",
        key: "AdjustmentType",
        sorter: {
            compare: (a, b) => (a.AdjustmentType.toLowerCase() > b.AdjustmentType.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Before",
        dataIndex: "Before",
        key: "Before",
        sorter: {
            compare: (a, b) => (a.Before.toLowerCase() > b.Before.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Adj Qty",
        dataIndex: "AdjQty",
        key: "AdjQty",
        sorter: {
            compare: (a, b) => (a.AdjQty.toLowerCase() > b.AdjQty.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "After",
        dataIndex: "After",
        key: "After",
        sorter: {
            compare: (a, b) => (a.After.toLowerCase() > b.After.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Reason",
        dataIndex: "Reason",
        key: "Reason",
        sorter: {
            compare: (a, b) => (a.Reason.toLowerCase() > b.Reason.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Adjusted By",
        dataIndex: "AdjustedBy",
        key: "AdjustedBy",
        sorter: {
            compare: (a, b) => (a.AdjustedBy.toLowerCase() > b.AdjustedBy.toLowerCase() ? -1 : 1),
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
                    record.Item.toLowerCase().includes(query) ||
                    record.AdjustmentDate.toLowerCase().includes(query) ||
                    record.RackID.toLowerCase().includes(query) ||
                    record.AdjustmentType.toLowerCase().includes(query) ||
                    record.Before.toLowerCase().includes(query) ||
                    record.AdjQty.toLowerCase().includes(query) ||
                    record.After.toLowerCase().includes(query) ||
                    record.Reason.toLowerCase().includes(query) ||
                    record.AdjustedBy.toLowerCase().includes(query)
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
