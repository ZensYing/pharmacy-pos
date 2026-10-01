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

                    <!-- Item Item -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#item"
                                    aria-expanded="false">
                                    Item
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="item" class="card-collapse collapse show">
                            <div>
                                <div class="input-icon input-icon-start position-relative mb-3">
                                    <span class="input-icon-addon text-dark"><i class="icon-search"></i></span>
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="item" type="checkbox"
                                        id="check_01">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_01">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-1.svg" alt="icon"></span> Paracetamol
                                        500
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="item" type="checkbox"
                                        id="check_02">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_02">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-2.svg" alt="icon"></span>Amoxicillin
                                        250
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="item" type="checkbox"
                                        id="check_03">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2 gap-2"
                                        for="check_03">
                                        <span class="avatar avatar-xs bg-light rounded-circle p-1"><img
                                                src="@/assets/img/icons/tablet-icon-3.svg" alt="icon"></span>Cetirizine
                                    </label>
                                </div>
                                <div class="view-all mt-3">
                                    <a href="#" class="viewall1-button text-primary font-medium">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Branch Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#from-branch"
                                    aria-expanded="false">
                                    From Branch
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="from-branch" class="card-collapse collapse show">
                            <div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="from-branch" type="checkbox"
                                        id="check_04">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2" for="check_04">
                                        Main Branch, Newyork
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="from-branch" type="checkbox"
                                        id="check_05">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2" for="check_05">
                                        Branch 2, Los Angeles
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="from-branch" type="checkbox"
                                        id="check_06">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2" for="check_06">
                                        Branch 3, San Diego
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="from-branch" type="checkbox"
                                        id="check_07">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2" for="check_07">
                                        Branch 4, Dallas
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- To Branch Items -->
                    <div class="filter-item">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#to-branch"
                                    aria-expanded="false">
                                    To Branch
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="to-branch" class="card-collapse collapse show">
                            <div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="to-branch" type="checkbox"
                                        id="check_08">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2" for="check_08">
                                        Main Branch, Newyork
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-2">
                                    <input class="form-check-input ms-0 mt-0" name="to-branch" type="checkbox"
                                        id="check_09">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2" for="check_09">
                                        Branch 3, San Diego
                                    </label>
                                </div>
                                <div class="form-check d-flex align-items-center ps-0 mb-0">
                                    <input class="form-check-input ms-0 mt-0" name="to-branch" type="checkbox"
                                        id="check_10">
                                    <label class="form-check-label w-100 d-flex align-items-center ms-2" for="check_10">
                                        Branch 5, San Antonio
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Date & Time Items -->
                    <div class="filter-item mb-0 pb-0 border-0">
                        <div class="d-flex align-items-center">
                            <h3 class="filter-header">
                                <button class="filter-title" data-bs-toggle="collapse" data-bs-target="#date-time"
                                    aria-expanded="false">
                                    Date & Time
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </h3>
                        </div>
                        <div id="date-time" class="card-collapse collapse show">
                            <div>
                                <div class="input-group w-auto input-group-flat mb-0">
                                    <a-date-picker class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-days"></i>
                                    </span>
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

    <!-- start Add Stock Transfer Modal -->
    <div class="modal fade" id="add_stock_transfer">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-truck"></i></span>Create New Transfer</h4>
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
                                <label class="form-label">From Branch </label>
                                <vue-select
                                    :options="branchOptions"
                                    v-model="selectedFromBranch"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">To Branch </label>
                                <vue-select
                                    :options="branchOptions"
                                    v-model="selectedToBranch"
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
                            <div class="col-md-12">
                                <label class="form-label">Quantity </label>
                                <input type="text" class="form-control" placeholder="0">
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
    <!-- end Add Stock Transfer Modal -->

    <!-- start Edit Stock Transfer Modal -->
    <div class="modal fade" id="edit_stock_transfer">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-truck"></i></span>Edit Stock Transfer</h4>
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
                                <label class="form-label">From Branch </label>
                                <vue-select
                                    :options="branchOptions"
                                    v-model="selectedFromBranchEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">To Branch </label>
                                <vue-select
                                    :options="branchOptions"
                                    v-model="selectedToBranchEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Date </label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-date-picker class="form-control" data-date-format="d/m/Y" placeholder="dd/mm/yyyy" v-model:value="editDate" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-days"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Time </label>
                                <div class="input-group w-auto input-group-flat">
                                    <a-time-picker class="form-control" use12-hours format="h:mm A" placeholder="-- : --" v-model:value="editTime" />
                                    <span class="input-group-text">
                                        <i class="icon-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Quantity </label>
                                <input type="text" class="form-control" placeholder="0" value="30">
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
    <!-- end Edit Stock Transfer Modal -->
</template>

<script>
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export default {
    data() {
        return {
            editDate: dayjs('24/04/2026', 'DD/MM/YYYY'),
            editTime: dayjs('10:00 AM', 'h:mm A'),
            selectedItem: null,
            selectedItemEdit: ['Paracetamol 500'],
            itemOptions: [
                { label: "Select", value: "Select" },
                { label: "Paracetamol 500", value: "Paracetamol 500" },
                { label: "Amoxicillin 250", value: "Amoxicillin 250" },
                { label: "Cetirizine", value: "Cetirizine" },
            ],
            selectedFromBranch: null,
            selectedFromBranchEdit: ['Main Branch, Newyork'],
            selectedToBranch: null,
            selectedToBranchEdit: ['Branch 2, Los Angeles'],
            branchOptions: [
                { label: "Select", value: "Select" },
                { label: "Main Branch, Newyork", value: "Main Branch, Newyork" },
                { label: "Branch 2, Los Angeles", value: "Branch 2, Los Angeles" },
                { label: "Branch 3, San Diego", value: "Branch 3, San Diego" },
            ],
            selectedAdjustedBy: null,
            selectedAdjustedByEdit: ['Mervin Nesmith'],
            adjustedByOptions: [
                { label: "Select", value: "Select" },
                { label: "Mervin Nesmith", value: "Mervin Nesmith" },
                { label: "John Doe", value: "John Doe" },
                { label: "Joyce Kerns", value: "Joyce Kerns" },
            ]
        }
    }
}
</script>
