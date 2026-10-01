<template>
    <!-- Start Unit Modal -->
    <div class="modal fade" id="add_unit">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Create New Unit</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <!-- start row -->
                        <div class="row row-gap-3">
                            <div class="col-md-12">
                                <label class="form-label">Unit Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Short Code <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Base Unit <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="baseUnitOptions"
                                    v-model="selectedBaseUnit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Applicable For <span class="text-danger">*</span></label>
                                <vue-select
                                    :options="applicableForOptions"
                                    v-model="selectedApplicableFor"
                                    :isMulti="true"
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
    <!-- End Unit Modal -->

    <!-- Start Edit Unit Modal -->
    <div class="modal fade" id="edit_unit">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Edit Unit</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <!-- start row -->
                        <div class="row row-gap-3">
                            <div class="col-md-12">
                                <label class="form-label">Unit Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="Tablet">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Short Code <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" value="tab">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Base Unit</label>
                                <vue-select
                                    :options="baseUnitOptions"
                                    v-model="selectedBaseUnitEdit"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-12">
                                <label class="form-label">Applicable For</label>
                                <vue-select
                                    :options="applicableForOptions"
                                    v-model="selectedApplicableForEdit"
                                    :isMulti="true"
                                    placeholder="Select"
                                />
                            </div>
                            <div class="col-md-12">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="switchCheckChecked2" checked>
                                    <label class="form-check-label" for="switchCheckChecked2">Status</label>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                    </form>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <a href="#" class="btn btn-light d-inline-flex align-items-center gap-2" data-bs-dismiss="modal"><i
                            class="icon-x"></i>Cancel </a>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center gap-2"> <i
                            class="icon-save"></i> Save Changes</a>
                </div>
            </div>
        </div>
    </div>
    <!-- End Edit Unit Modal -->
</template>

<script>
export default {
    data() {
        return {
            selectedBaseUnit: null,
            selectedBaseUnitEdit: ['Tablet'],
            baseUnitOptions: [
                { label: "Select", value: "Select" },
                { label: "Tablet", value: "Tablet" },
                { label: "Bottle", value: "Bottle" },
                { label: "Tube", value: "Tube" },
                { label: "Packet", value: "Packet" },
            ],
            selectedApplicableFor: [],
            selectedApplicableForEdit: [],
            applicableForOptions: [
                { label: "Select", value: "Select" },
                { label: "Tablet", value: "Tablet" },
                { label: "Strip", value: "Strip" },
                { label: "Tube", value: "Tube" },
                { label: "Packet", value: "Packet" },
            ]
        }
    }
}
</script>
