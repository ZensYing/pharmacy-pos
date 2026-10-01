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
                        <li class="breadcrumb-item active" aria-current="page">Racks </li>
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
                        data-bs-target="#add_rack"> <i class="icon-plus"></i> Add New</a>
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
                                    <router-link :to="all_routes.racks" class="text-info">{{ record.ID }}</router-link>
                                </template>
                                <template v-if="column.key === 'Categories'">
                                    <div class="d-flex align-items-center gap-1 flex-wrap">
                                        <span
                                            v-for="cat in record.Categories"
                                            :key="cat"
                                            class="badge"
                                            :class="[
                                                {
                                                    'badge-soft-orange': cat === 'Tablet' || cat === 'Supplements',
                                                    'badge-soft-pink': cat === 'Syrup',
                                                    'badge-soft-cyan': cat === 'Oinment',
                                                    'badge-soft-purple': cat === 'Powders',
                                                    'badge-soft-indigo': cat === 'Devices',
                                                },
                                            ]"
                                        >{{ cat }}</span>
                                    </div>
                                </template>
                                <template v-if="column.key === 'Capacity'">
                                    <div class="d-flex align-items-center gap-4">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="progress" style="height: 5px; width: 98px;">
                                                <div class="progress-bar"
                                                    :class="record.CapacityColor"
                                                    role="progressbar"
                                                    :style="{ width: record.CapacityPercent + '%' }"
                                                    :aria-valuenow="record.CapacityPercent"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <span>{{ record.CapacityPercent }}%</span>
                                        </div>
                                        <span
                                            class="badge badge-soft-info d-inline-flex align-items-center gap-1"><i
                                                class="icon-inbox"></i>Assign Medicine</span>
                                    </div>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge d-inline-flex align-items-center"
                                        :class="[
                                            {
                                                'badge-soft-success': record.Status === 'Active',
                                                'badge-soft-warning': record.Status === 'Maintenance',
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
                                                    <a href="#"
                                                        class="dropdown-item rounded d-flex align-items-center"
                                                        data-bs-toggle="modal" data-bs-target="#edit_racks"><i
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
                            itemLabel="racks"
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

    <racks-modal></racks-modal>

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
        "ID": "#RCK016",
        "Categories": ["Tablet"],
        "Rows": "5",
        "Bin": "150",
        "Temperature": "Room Temp",
        "CapacityPercent": 60,
        "CapacityColor": "bg-primary",
        "Status": "Inactive"
    },
    {
        "ID": "#RCK015",
        "Categories": ["Tablet"],
        "Rows": "4",
        "Bin": "120",
        "Temperature": "Cool & Dry",
        "CapacityPercent": 70,
        "CapacityColor": "bg-warning",
        "Status": "Maintenance"
    },
    {
        "ID": "#RCK014",
        "Categories": ["Syrup"],
        "Rows": "3",
        "Bin": "100",
        "Temperature": "Room Temp",
        "CapacityPercent": 60,
        "CapacityColor": "bg-primary",
        "Status": "Active"
    },
    {
        "ID": "#RCK013",
        "Categories": ["Tablet"],
        "Rows": "4",
        "Bin": "130",
        "Temperature": "Refrigerated",
        "CapacityPercent": 50,
        "CapacityColor": "bg-info",
        "Status": "Inactive"
    },
    {
        "ID": "#RCK012",
        "Categories": ["Tablet", "Supplements"],
        "Rows": "6",
        "Bin": "150",
        "Temperature": "Room Temp",
        "CapacityPercent": 60,
        "CapacityColor": "bg-primary",
        "Status": "Active"
    },
    {
        "ID": "#RCK011",
        "Categories": ["Oinment"],
        "Rows": "8",
        "Bin": "100",
        "Temperature": "Cool & Dry",
        "CapacityPercent": 30,
        "CapacityColor": "bg-success",
        "Status": "Maintenance"
    },
    {
        "ID": "#RCK010",
        "Categories": ["Devices", "Supplements"],
        "Rows": "5",
        "Bin": "60",
        "Temperature": "Room Temp",
        "CapacityPercent": 60,
        "CapacityColor": "bg-primary",
        "Status": "Active"
    },
    {
        "ID": "#RCK009",
        "Categories": ["Powders"],
        "Rows": "6",
        "Bin": "130",
        "Temperature": "Room Temp",
        "CapacityPercent": 40,
        "CapacityColor": "bg-success",
        "Status": "Active"
    },
    {
        "ID": "#RCK008",
        "Categories": ["Devices"],
        "Rows": "4",
        "Bin": "50",
        "Temperature": "Room Temp",
        "CapacityPercent": 20,
        "CapacityColor": "bg-success",
        "Status": "Active"
    },
    {
        "ID": "#RCK007",
        "Categories": ["Supplements"],
        "Rows": "3",
        "Bin": "80",
        "Temperature": "Room Temp",
        "CapacityPercent": 80,
        "CapacityColor": "bg-danger",
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
        title: "Categories",
        dataIndex: "Categories",
        key: "Categories",
        sorter: false,
    },
    {
        title: "Rows",
        dataIndex: "Rows",
        key: "Rows",
        sorter: {
            compare: (a, b) => (a.Rows.toLowerCase() > b.Rows.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Bin",
        dataIndex: "Bin",
        key: "Bin",
        sorter: {
            compare: (a, b) => (a.Bin.toLowerCase() > b.Bin.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Temperature",
        dataIndex: "Temperature",
        key: "Temperature",
        sorter: {
            compare: (a, b) => (a.Temperature.toLowerCase() > b.Temperature.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Capacity",
        dataIndex: "Capacity",
        key: "Capacity",
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
                    record.Categories.join(" ").toLowerCase().includes(query) ||
                    record.Rows.toLowerCase().includes(query) ||
                    record.Bin.toLowerCase().includes(query) ||
                    record.Temperature.toLowerCase().includes(query) ||
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
