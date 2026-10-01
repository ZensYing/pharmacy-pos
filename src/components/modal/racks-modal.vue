<template>
    <!-- start offcanvas -->
    <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="add_filter">
        <div class="offcanvas-header d-block border-0">
            <div class="d-flex align-items-center justify-content-between">
                <h4 class="title d-flex align-items-center gap-2 mb-0"> <span
                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i class="icon-funnel"></i></span>
                    Filter</h4>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
                        class="icon-x"></i></button>
            </div>
        </div>
        <div class="offcanvas-body pt-0">
            <div class="filter-sidebar">
                <div class="filter-body">

                    <!-- Type Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#category"
                                    aria-expanded="false">
                                    Category
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="category" class="card-collapse collapse show">
                            <div>
                                <div class="input-icon input-icon-start position-relative mb-3">
                                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_09">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_09">
                                        Uncategorized
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_10">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_10">
                                        Tablet
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_11">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_11">
                                        Capsule
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_13">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_13">
                                        Oinment
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_14">
                                    <label
                                        class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                        for="check_14">
                                        Syrup
                                    </label>
                                </div>
                                <div class="more-menu2">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_15">
                                        <label
                                            class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                            for="check_15">
                                            Drops
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_16">
                                        <label
                                            class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                            for="check_16">
                                            Medical Devices
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_17">
                                        <label
                                            class="form-check-label w-100 d-flex align-items-center justify-content-between ms-2"
                                            for="check_17">
                                            Supplements
                                        </label>
                                    </div>
                                </div>
                                <div class="view-all mt-3">
                                    <a href="#" class="viewall2-button text-primary font-medium">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Stock Status Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#stock-status"
                                    aria-expanded="false">
                                    Temperature
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="stock-status" class="card-collapse collapse show">
                            <div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_34">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_34">
                                        <span class="badge badge-soft-orange d-inline-flex align-items-center"> Room
                                            Temp</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_35">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_35">
                                        <span class="badge badge-soft-info d-inline-flex align-items-center"> Cool &
                                            Dry</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_36">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_36">
                                        <span
                                            class="badge badge-soft-cyan d-inline-flex align-items-center">Refrigerated</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Status Items -->
                    <div class="filter-item mb-0 pb-0 border-0">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#status"
                                    aria-expanded="false">
                                    Status
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="status" class="card-collapse collapse show">
                            <div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_37">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_37">
                                        <span class="badge badge-soft-success d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Active</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_38">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_38">
                                        <span class="badge badge-soft-warning d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i> Maintenance</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_39">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_39">
                                        <span class="badge badge-soft-danger d-inline-flex align-items-center"><i
                                                class="fa-solid fa-circle fs-5 me-1"></i>Inactive</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="offcanvas-footer d-flex align-items-center justify-content-between gap-2 flex-wrap ">
            <a href="#" class="btn btn-light d-inline-flex align-items-center gap-2" data-bs-dismiss="offcanvas"><i
                    class="icon-x"></i>Cancel </a>
            <a href="#" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i class="icon-pocket"></i>
                Apply Filter </a>
        </div>
    </div>
    <!-- end offcanvas -->

    <!-- start Add Rack Modal -->
    <div class="modal fade" id="add_rack">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Create New Rack</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <!-- start row -->
                        <div class="row row-gap-3">
                            <div class="col-md-12">
                                <label class="form-label">Rack Code <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Category <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="categoryOptions"
                                    v-model="selectedCategory"
                                    :isMulti="true"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Rows <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="rowsOptions"
                                    v-model="selectedRows"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Columns <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="columnsOptions"
                                    v-model="selectedColumns"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Bins <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="binsOptions"
                                    v-model="selectedBins"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Alert Threshold (%) <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="alertThresholdOptions"
                                    v-model="selectedAlertThreshold"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Temperature <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="temperatureOptions"
                                    v-model="selectedTemperature"
                                    placeholder="Select"
                                />
                            </div>
                        </div>
                        <!-- end row -->
                    </form>

                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <a href="#" class="btn btn-light d-inline-flex align-items-center gap-2" data-bs-dismiss="modal"><i
                            class="icon-x"></i>Cancel </a>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i
                            class="icon-plus"></i> Create New </a>
                </div>
            </div>
        </div>
    </div>
    <!-- end Add Rack Modal -->

    <!-- start Edit Rack Modal -->
    <div class="modal fade" id="edit_racks">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Edit Rack</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <!-- start row -->
                        <div class="row row-gap-3">
                            <div class="col-md-12">
                                <label class="form-label">Rack Code <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="#RACK-001">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Category <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="categoryOptions"
                                    v-model="selectedCategoryEdit"
                                    :isMulti="true"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Rows <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="rowsOptions"
                                    v-model="selectedRowsEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Columns <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="columnsOptions"
                                    v-model="selectedColumnsEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Bins <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="binsOptions"
                                    v-model="selectedBinsEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Alert Threshold (%) <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="alertThresholdOptions"
                                    v-model="selectedAlertThresholdEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Temperature <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="temperatureOptions"
                                    v-model="selectedTemperatureEdit"
                                    placeholder="Select"
                                />
                            </div>
                        </div>
                        <!-- end row -->
                    </form>

                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <a href="#" class="btn btn-light d-inline-flex align-items-center gap-2" data-bs-dismiss="modal"><i
                            class="icon-x"></i>Cancel </a>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i
                            class="icon-save"></i> Save Changes </a>
                </div>
            </div>
        </div>
    </div>
    <!-- end Edit Rack Modal -->
</template>

<script>
export default {
    data() {
        return {
            selectedCategory: [],
            selectedCategoryEdit: [],
            categoryOptions: [
                { label: "Select", value: "Select" },
                { label: "Tablet", value: "Tablet" },
                { label: "Syrup", value: "Syrup" },
                { label: "Supplements", value: "Supplements" },
                { label: "Oinment", value: "Oinment" },
                { label: "Powders", value: "Powders" },
                { label: "Devices", value: "Devices" },
            ],
            selectedRows: null,
            selectedRowsEdit: null,
            rowsOptions: [
                { label: "Select", value: "Select" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "7", value: "7" },
            ],
            selectedColumns: null,
            selectedColumnsEdit: null,
            columnsOptions: [
                { label: "Select", value: "Select" },
                { label: "2", value: "2" },
                { label: "4", value: "4" },
                { label: "6", value: "6" },
                { label: "8", value: "8" },
                { label: "10", value: "10" },
            ],
            selectedBins: null,
            selectedBinsEdit: null,
            binsOptions: [
                { label: "Select", value: "Select" },
                { label: "150", value: "150" },
                { label: "200", value: "200" },
                { label: "250", value: "250" },
                { label: "300", value: "300" },
            ],
            selectedAlertThreshold: null,
            selectedAlertThresholdEdit: null,
            alertThresholdOptions: [
                { label: "Select", value: "Select" },
                { label: "10", value: "10" },
                { label: "20", value: "20" },
                { label: "30", value: "30" },
                { label: "40", value: "40" },
            ],
            selectedTemperature: null,
            selectedTemperatureEdit: null,
            temperatureOptions: [
                { label: "Select", value: "Select" },
                { label: "Room Temp", value: "Room Temp" },
                { label: "Cool & Dry", value: "Cool & Dry" },
                { label: "Refrigerated", value: "Refrigerated" },
            ]
        }
    }
}
</script>
