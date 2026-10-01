<template>
    <!-- Start Category Modal -->
    <div class="modal fade" id="add_category">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Create New Category</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <div class="mb-3">
                            <label class="form-label">Category <span class="text-danger">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Storage Type</label>
                            <vue-select 
                                :options="StorageType"
                                v-model="selected"
                                placeholder="Select"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea class="form-control rounded-3 resize-none" rows="4"></textarea>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked"
                                checked>
                            <label class="form-check-label" for="switchCheckChecked">Prescription Required</label>
                        </div>
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
    <!-- End Category Modal -->

    <!-- Start Edit Category Modal -->
    <div class="modal fade" id="edit_category">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title d-flex align-items-center gap-2"><span
                            class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                class="icon-user-plus"></i></span>Edit Category</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-x"></i></button>
                </div>
                <div class="modal-body pt-0">

                    <form>
                        <div class="mb-3">
                            <label class="form-label">Category <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" value="Tablet">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Storage Type</label>
                            <vue-select 
                                :options="StorageType"
                                v-model="selectedOne"
                                placeholder="Select"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea class="form-control rounded-3 resize-none"
                                rows="4">Oral solid medicines</textarea>
                        </div>
                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input" type="checkbox" role="switch" id="editSwitchCheckChecked"
                                checked>
                            <label class="form-check-label" for="editSwitchCheckChecked">Prescription Required</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="editStatusSwitch"
                                checked>
                            <label class="form-check-label" for="editStatusSwitch">Status</label>
                        </div>
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
    <!-- End Edit Category Modal -->
</template>

<script>
export default {
    data() {
        return {
            selected: null,
            selectedOne: ['Room Temperature'],
            StorageType: [
                { label: "Select", value: "Select" },
                { label: "Room Temperature", value: "Room Temperature" },
                { label: "Cool & Dry", value: "Cool & Dry" },
                { label: "Refrigerated", value: "Refrigerated" },
            ]
        }
    }
}
</script>