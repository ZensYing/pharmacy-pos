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
                        <li class="breadcrumb-item active" aria-current="page">Units </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                    <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center gap-2" data-bs-toggle="modal"
                        data-bs-target="#add_unit"> <i class="icon-plus"></i> Add New</a>
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
                                                class="dropdown-item rounded text-dark d-flex align-items-center justify-content-between">Unit
                                                Name <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Unit
                                                Name <span>Z-A</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Short
                                                Code <span>A-Z</span></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="dropdown-item rounded  text-dark d-flex align-items-center justify-content-between">Short
                                                Code <span>Z-A</span></a>
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
                                <template v-if="column.key === 'UnitName'">
                                    <h4 class="fs-14 fw-medium mb-0">{{ record.UnitName }}</h4>
                                </template>
                                <template v-if="column.key === 'Category'">
                                    <span class="badge"
                                        :class="[
                                            {
                                                'badge-soft-warning': record.Category === 'Solid',
                                                'badge-soft-cyan': record.Category === 'Liquid',
                                                'badge-soft-purple': record.Category === 'Packaging',
                                                'badge-soft-orange': record.Category === 'Powder',
                                                'badge-soft-pink': record.Category === 'Semi-solid',
                                            },
                                        ]"
                                    >{{ record.Category }}</span>
                                </template>
                                <template v-if="column.key === 'BaseUnit'">
                                    <span class="badge badge-soft-success d-inline-flex align-items-center">
                                        <i class="fa-solid fa-circle fs-5 me-1"></i>
                                        {{ record.BaseUnit }}
                                    </span>
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
                                                    <a href="javascript:void(0);" data-bs-toggle="modal"
                                                        data-bs-target="#edit_unit"
                                                        class="dropdown-item rounded d-flex align-items-center"><i
                                                            class="icon-pencil-line me-2"></i>Edit</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);"
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
                            itemLabel="units"
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

    <units-modal></units-modal>

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
        "ID": "#UNT016",
        "UnitName": "Tablet",
        "ShortCode": "tab",
        "Category": "Solid",
        "BaseUnit": "Tablet",
        "ConversionRate": "1",
        "Status": "Active"
    },
    {
        "ID": "#UNT015",
        "UnitName": "Capsule",
        "ShortCode": "cap",
        "Category": "Solid",
        "BaseUnit": "Capsule",
        "ConversionRate": "1",
        "Status": "Active"
    },
    {
        "ID": "#UNT014",
        "UnitName": "Bottle",
        "ShortCode": "btl",
        "Category": "Liquid",
        "BaseUnit": "Bottle",
        "ConversionRate": "1",
        "Status": "Active"
    },
    {
        "ID": "#UNT013",
        "UnitName": "Strip",
        "ShortCode": "strip",
        "Category": "Packaging",
        "BaseUnit": "Tablet",
        "ConversionRate": "10",
        "Status": "Active"
    },
    {
        "ID": "#UNT012",
        "UnitName": "Box",
        "ShortCode": "box",
        "Category": "Packaging",
        "BaseUnit": "Strip",
        "ConversionRate": "10",
        "Status": "Active"
    },
    {
        "ID": "#UNT011",
        "UnitName": "Drop",
        "ShortCode": "Drp",
        "Category": "Liquid",
        "BaseUnit": "Tube",
        "ConversionRate": "20",
        "Status": "Active"
    },
    {
        "ID": "#UNT010",
        "UnitName": "Sachet",
        "ShortCode": "scht",
        "Category": "Powder",
        "BaseUnit": "Sachet",
        "ConversionRate": "1",
        "Status": "Active"
    },
    {
        "ID": "#UNT009",
        "UnitName": "Vial",
        "ShortCode": "vial",
        "Category": "Liquid",
        "BaseUnit": "Vial",
        "ConversionRate": "1",
        "Status": "Active"
    },
    {
        "ID": "#UNT008",
        "UnitName": "Tube",
        "ShortCode": "tube",
        "Category": "Semi-solid",
        "BaseUnit": "Tube",
        "ConversionRate": "1",
        "Status": "Inactive"
    },
    {
        "ID": "#UNT007",
        "UnitName": "Ampoule",
        "ShortCode": "amp",
        "Category": "Liquid",
        "BaseUnit": "Ampoule",
        "ConversionRate": "1",
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
        title: "Unit Name",
        dataIndex: "UnitName",
        key: "UnitName",
        sorter: {
            compare: (a, b) => (a.UnitName.toLowerCase() > b.UnitName.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Short Code",
        dataIndex: "ShortCode",
        key: "ShortCode",
        sorter: {
            compare: (a, b) => (a.ShortCode.toLowerCase() > b.ShortCode.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Category",
        dataIndex: "Category",
        key: "Category",
        sorter: {
            compare: (a, b) => (a.Category.toLowerCase() > b.Category.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Base Unit",
        dataIndex: "BaseUnit",
        key: "BaseUnit",
        sorter: {
            compare: (a, b) => (a.BaseUnit.toLowerCase() > b.BaseUnit.toLowerCase() ? -1 : 1),
        },
    },
    {
        title: "Conversion Rate",
        dataIndex: "ConversionRate",
        sorter: {
            compare: (a, b) => (a.ConversionRate.toLowerCase() > b.ConversionRate.toLowerCase() ? -1 : 1),
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
                    record.UnitName.toLowerCase().includes(query) ||
                    record.ShortCode.toLowerCase().includes(query) ||
                    record.Category.toLowerCase().includes(query) ||
                    record.BaseUnit.toLowerCase().includes(query) ||
                    record.ConversionRate.toLowerCase().includes(query) ||
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
