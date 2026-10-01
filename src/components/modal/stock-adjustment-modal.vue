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

                    <!-- Item 1 -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#medicine"
                                    aria-expanded="false">
                                    Medicine
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="medicine" class="card-collapse collapse show">
                            <div>
                                <div class="input-icon input-icon-start position-relative mb-3">
                                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_01">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_01">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-1.svg" alt="icon"></span> Paracetamol
                                        500
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_02">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_02">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-2.svg" alt="icon"></span>Amoxicillin
                                        250
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_03">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_03">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-3.svg" alt="icon"></span>Cetirizine
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_04">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_04">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-4.svg" alt="icon"></span>Ceftriaxone
                                        20
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_05">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_05">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-5.svg" alt="icon"></span>Betnovate
                                    </label>
                                </div>
                                <div class="more-menu1">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_06">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_06">
                                            <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                    src="@/assets/img/icons/tablet-icon-6.svg"
                                                    alt="icon"></span>Amoxicillin 30
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_07">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_07">
                                            <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                    src="@/assets/img/icons/tablet-icon-7.svg" alt="icon"></span>Tetanus
                                            Toxoid
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_08">
                                        <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                            for="check_08">
                                            <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                    src="@/assets/img/icons/tablet-icon-8.svg"
                                                    alt="icon"></span>Atorvastatin
                                        </label>
                                    </div>
                                </div>
                                <div class="view-all mt-3">
                                    <a href="#" class="viewall1-button text-primary font-medium">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Adjusted By Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#adjusted-by"
                                    aria-expanded="false">
                                    Adjusted By
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="adjusted-by" class="card-collapse collapse show">
                            <div>
                                <div class="input-icon input-icon-start position-relative mb-3">
                                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_18">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_18">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                src="@/assets/img/profiles/avatar-05.jpg" alt="user"
                                                class="img-fluid rounded-circle"></span>Mervin Nesmith
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_19">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_19">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                src="@/assets/img/profiles/avatar-06.jpg" alt="user"
                                                class="img-fluid rounded-circle"></span>Joyce Kerns
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_20">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_20">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                src="@/assets/img/profiles/avatar-07.jpg" alt="user"
                                                class="img-fluid rounded-circle"></span>John Baxter
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_21">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_21">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                src="@/assets/img/profiles/avatar-04.jpg" alt="user"
                                                class="img-fluid rounded-circle"></span>Margaret Fehr
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_22">
                                    <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                        for="check_22">
                                        <span class="avatar avatar-xs rounded-circle"><img
                                                src="@/assets/img/profiles/avatar-12.jpg" alt="user"
                                                class="img-fluid rounded-circle"></span>Benjamin Walker
                                    </label>
                                </div>
                                <div class="more-menu3">
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_23">
                                        <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                            for="check_23">
                                            <span class="avatar avatar-xs rounded-circle"><img
                                                    src="@/assets/img/profiles/avatar-31.jpg" alt="user"
                                                    class="img-fluid rounded-circle"></span>Elizabeth Porter
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-2">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_24">
                                        <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                            for="check_24">
                                            <span class="avatar avatar-xs rounded-circle"><img
                                                    src="@/assets/img/profiles/avatar-11.jpg" alt="user"
                                                    class="img-fluid rounded-circle"></span>Freddie Brown
                                        </label>
                                    </div>
                                    <div class="form-check d-flex align-items-center ps-0 mb-0">
                                        <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                            id="check_25">
                                        <label class="form-check-label ms-2 d-flex align-items-center gap-2 w-100"
                                            for="check_25">
                                            <span class="avatar avatar-xs rounded-circle"><img
                                                    src="@/assets/img/profiles/avatar-02.jpg" alt="user"
                                                    class="img-fluid rounded-circle"></span>Dawn Peterson
                                        </label>
                                    </div>
                                </div>
                                <div class="view-all mt-3">
                                    <a href="#" class="viewall3-button text-primary font-medium">View More</a>
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
                                    Adjustment Type
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
                                        <span class="badge badge-soft-success d-inline-flex align-items-center">
                                            Increase</span>
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="category" type="checkbox"
                                        id="check_38">
                                    <label class="form-check-label ms-2 d-flex align-items-center w-100" for="check_38">
                                        <span class="badge badge-soft-warning d-inline-flex align-items-center">
                                            Decrease</span>
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

    <!-- start Add Stock Adjustment Modal -->
    <div class="modal fade" id="add_stock_adjustment">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-layers"></i></span>Create New Adjustment</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <!-- start row -->
                        <div class="row row-gap-3">
                            <div class="col-md-12">
                                <label class="form-label">Item </label>
                                <vue-select
                                    :options="itemOptions"
                                    v-model="selectedItem"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Rack No </label>
                                <vue-select
                                    :options="rackNoOptions"
                                    v-model="selectedRackNo"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Adjustment Type </label>
                                <vue-select
                                    :options="adjustmentTypeOptions"
                                    v-model="selectedAdjustmentType"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Date </label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-date-picker class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-days"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Time </label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-time-picker class="form-control" use12-hours format="h:mm A" placeholder="-- : --" />
                                    <span class="input-group-text">
                                        <i class="icon-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Before </label>
                                <input type="text" class="form-control" readonly disabled value="20">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Adjustment Quantity </label>
                                <input type="text" class="form-control" placeholder="0">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">After </label>
                                <input type="text" class="form-control" readonly disabled value="0">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Reason </label>
                                <textarea class="form-control rounded-3 resize-none" rows="4"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Adjusted By </label>
                                <vue-select
                                    :options="adjustedByOptions"
                                    v-model="selectedAdjustedBy"
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

    <!-- start Add Stock Adjustment Modal -->
    <div class="modal fade" id="edit_stock_adjustment">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-layers"></i></span>Edit Stock Adjustment</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <!-- start row -->
                        <div class="row row-gap-3">
                            <div class="col-md-12">
                                <label class="form-label">Item </label>
                                <vue-select
                                    :options="itemOptions"
                                    v-model="selectedItemEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Rack No </label>
                                <vue-select
                                    :options="rackNoOptions"
                                    v-model="selectedRackNoEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Adjustment Type </label>
                                <vue-select
                                    :options="adjustmentTypeOptions"
                                    v-model="selectedAdjustmentTypeEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Date </label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-date-picker class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-days"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Time </label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-time-picker class="form-control" use12-hours format="h:mm A" placeholder="-- : --" />
                                    <span class="input-group-text">
                                        <i class="icon-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Before </label>
                                <input type="text" class="form-control" readonly disabled value="20">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Adjustment Quantity </label>
                                <input type="text" class="form-control" placeholder="0" value="10">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">After </label>
                                <input type="text" class="form-control" readonly disabled value="30">
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Reason </label>
                                <textarea class="form-control rounded-3 resize-none" rows="4"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Adjusted By </label>
                                <vue-select
                                    :options="adjustedByOptions"
                                    v-model="selectedAdjustedByEdit"
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
    <!-- end Add Rack Modal -->
</template>

<script>
export default {
    data() {
        return {
            selectedItem: null,
            selectedItemEdit: ['Amoxicillin 250'],
            itemOptions: [
                { label: "Select", value: "Select" },
                { label: "Paracetamol 500", value: "Paracetamol 500" },
                { label: "Amoxicillin 250", value: "Amoxicillin 250" },
                { label: "Cetirizine", value: "Cetirizine" },
                { label: "Paracetamol 500", value: "Paracetamol 500" },
                { label: "Amoxicillin 250", value: "Amoxicillin 250" },
                { label: "Cetirizine", value: "Cetirizine" },
            ],
            selectedRackNo: null,
            selectedRackNoEdit: ['#RCK020'],
            rackNoOptions: [
                { label: "Select", value: "Select" },
                { label: "#RCK016", value: "#RCK016" },
                { label: "#RCK020", value: "#RCK020" },
                { label: "#RCK025", value: "#RCK025" },
                { label: "#RCK030", value: "#RCK030" },
                { label: "#RCK035", value: "#RCK035" },
            ],
            selectedAdjustmentType: null,
            selectedAdjustmentTypeEdit: ['Increase'],
            adjustmentTypeOptions: [
                { label: "Select", value: "Select" },
                { label: "Increase", value: "Increase" },
                { label: "Decrease", value: "Decrease" },
            ],
            selectedAdjustedBy: null,
            selectedAdjustedByEdit: ['John Baxter'],
            adjustedByOptions: [
                { label: "Select", value: "Select" },
                { label: "Mervin Nesmith", value: "Mervin Nesmith" },
                { label: "John Doe", value: "John Doe" },
                { label: "Joyce Kerns", value: "Joyce Kerns" },
                { label: "John Baxter", value: "John Baxter" },
                { label: "Margaret Fehr", value: "Margaret Fehr" },
            ]
        }
    }
}
</script>
