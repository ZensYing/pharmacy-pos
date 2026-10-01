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
                        <li class="breadcrumb-item active" aria-current="page">Prescription Records </li>
                    </ol>
                </nav>
                <div class="d-flex align-items-center justify-content-end gap-2">
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                        data-bs-original-title="Refresh"><i class="icon-refresh-ccw"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-outline-light shadow"
                        data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximize"
                        data-bs-original-title="Maximize"><i class="icon-maximize"></i></a>
                </div>
            </div>

            <!-- start row -->
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <!-- start card -->
                    <form @submit.prevent="submitForm">
                        <div class="card mb-0">
                            <div class="card-body">
                                <router-link :to="all_routes.prescriptions"
                                    class="mb-4 fs-20 fw-bold d-flex align-items-center gap-2 w-fit"><span
                                        class="avatar avatar-sm bg-primary rounded-circle fs-16"><i
                                            class="icon-arrow-left"></i></span>Add New Prescription</router-link>

                                <h4 class="mb-4 fs-16 fw-bold">Prescription Upload</h4>
                                <div
                                    class="bg-light-50 border border-2 border-dashed rounded-3 p-4 d-flex align-items-center justify-content-center flex-column mb-4 position-relative">
                                    <span class="avatar avatar-lg bg-white rounded-circle mb-3 text-body shadow"><i
                                            class="icon-cloud-upload"></i></span>
                                    <h6 class="fs-14 fw-medium mb-1" v-if="!uploadedFileName">Click to upload or drag and drop</h6>
                                    <h6 class="fs-14 fw-medium mb-1" v-else>{{ uploadedFileName }}</h6>
                                    <p class="mb-0 fs-13"> Supports JPG, PNG, PDF (Max 10MB)</p>
                                    <input type="file" ref="uploadInput" accept=".jpg,.jpeg,.png,.pdf"
                                        class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer"
                                        @change="onFileChange">
                                </div>

                                <h4 class="mb-4 fs-16 fw-bold">Customer Details</h4>
                                <!-- start row -->
                                <div class="row row-gap-4 mb-4">
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Customer Name <span
                                                    class="text-danger">*</span></label>
                                            <vue-select
                                                :options="customerNameOptions"
                                                v-model="form.customerName"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Age</label>
                                            <input type="text" class="form-control" v-model="form.age">
                                        </div>
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Gender</label>
                                            <vue-select
                                                :options="genderOptions"
                                                v-model="form.gender"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Phone Number</label>
                                            <input type="text" class="form-control" v-model="form.phoneNumber">
                                        </div>
                                    </div> <!-- end col-->
                                </div>
                                <!-- end row -->

                                <h4 class="mb-4 fs-16 fw-bold">Doctor Selection</h4>
                                <!-- start row -->
                                <div class="row row-gap-4 mb-4">
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Doctor <span
                                                    class="text-danger">*</span></label>
                                            <vue-select
                                                :options="doctorOptions"
                                                v-model="form.doctor"
                                                placeholder="Select Doctor"
                                            />
                                        </div>
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Registration No</label>
                                            <input type="text" class="form-control" v-model="form.registrationNo">
                                        </div>
                                    </div> <!-- end col-->
                                    <div class="col-md-6">
                                        <div>
                                            <label class="form-label">Clinic / Hospital</label>
                                            <input type="text" class="form-control" v-model="form.clinic">
                                        </div>
                                    </div> <!-- end col-->
                                </div>
                                <!-- end row -->

                                <h4 class="mb-4 fs-16 fw-bold">Prescribed Medicine</h4>
                                <div class="table-responsive table-nowrap mb-0">
                                    <table class="table mb-0 border item-table">
                                        <thead class="table-light">
                                            <tr>
                                                <th class="no-sort">Items</th>
                                                <th class="no-sort text-center">Quantity</th>
                                                <th class="no-sort text-center">Unit</th>
                                                <th class="no-sort text-center">Rate</th>
                                                <th class="no-sort text-center">Tax</th>
                                                <th class="no-sort text-center">Discount</th>
                                                <th class="no-sort text-center">Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="(row, index) in medicineRows" :key="index">
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">

                                                        <button type="button" class="btn p-0 text-danger" @click="removeRow(index)">
                                                            <i class="icon-trash-2"></i>
                                                        </button>
                                                        <i class="icon-grip-vertical text-body"></i>
                                                        <vue-select
                                                            :options="itemOptions"
                                                            v-model="row.item"
                                                            placeholder="Select"
                                                        />
                                                    </div>
                                                </td>

                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.quantity">
                                                </td>

                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.unit">
                                                </td>

                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.rate">
                                                </td>

                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.tax">
                                                </td>

                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.discount">
                                                </td>

                                                <td>
                                                    <input type="text" class="form-control rounded-pill text-center"
                                                        v-model="row.total">
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <!-- Add New Button -->
                                <div class="text-center mb-4 mt-2">
                                    <button type="button"
                                        class="btn btn-primary rounded-pill d-flex align-items-center justify-content-center mx-auto gap-2"
                                        @click="addRow">
                                        <i class="icon-plus"></i> Add New
                                    </button>
                                </div>

                                <div class="mb-4 pb-4 border-bottom">
                                    <textarea class="form-control rounded-3" rows="4" placeholder="Add Notes"
                                        v-model="form.notes"></textarea>
                                </div>

                                <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <router-link :to="all_routes.prescriptions"
                                        class="btn btn-light d-inline-flex align-items-center gap-2 rounded-pill">
                                        <i class="icon-x"></i>Cancel </router-link>
                                    <button type="submit"
                                        class="btn btn-primary d-inline-flex align-items-center gap-2 rounded-pill">
                                        <i class="icon-plus"></i>Create New </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- end card -->
                </div>
            </div>
            <!-- end row -->

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

</template>

<script>
import { all_routes } from '@/router/all_routes.js'

export default {
    data() {
        return {
            all_routes,
            uploadedFileName: null,
            form: {
                customerName: "",
                age: "",
                gender: "",
                phoneNumber: "",
                doctor: "",
                registrationNo: "",
                clinic: "",
                notes: "",
            },
            medicineRows: [
                { item: "", quantity: "", unit: "", rate: "", tax: "", discount: "", total: "" },
                { item: "", quantity: "", unit: "", rate: "", tax: "", discount: "", total: "" },
                { item: "", quantity: "", unit: "", rate: "", tax: "", discount: "", total: "" },
            ],
            customerNameOptions: [
                { label: "Select", value: "" },
                { label: "Jane Cooper", value: "Jane Cooper" },
                { label: "Wade Warren", value: "Wade Warren" },
                { label: "Robert Fox", value: "Robert Fox" },
                { label: "Ronald Richards", value: "Ronald Richards" },
                { label: "Savannah Nguyen", value: "Savannah Nguyen" },
            ],
            genderOptions: [
                { label: "Select", value: "" },
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
            ],
            doctorOptions: [
                { label: "Select Doctor", value: "" },
                { label: "Dr. Michael Anderson", value: "Dr. Michael Anderson" },
                { label: "Dr. Sarah Smith", value: "Dr. Sarah Smith" },
                { label: "Dr. John Doe", value: "Dr. John Doe" },
                { label: "Dr. Emily Johnson", value: "Dr. Emily Johnson" },
                { label: "Dr. David Williams", value: "Dr. David Williams" },
            ],
            itemOptions: [
                { label: "Select", value: "" },
                { label: "Paracetamol", value: "Paracetamol" },
                { label: "Amoxicillin", value: "Amoxicillin" },
                { label: "Ibuprofen", value: "Ibuprofen" },
                { label: "Azithromycin", value: "Azithromycin" },
                { label: "Ciprofloxacin", value: "Ciprofloxacin" },
            ],
        }
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            this.uploadedFileName = file.name;
            const reader = new FileReader();
            reader.onload = () => {};
            reader.readAsDataURL(file);
        },
        addRow() {
            this.medicineRows.push({ item: "", quantity: "", unit: "", rate: "", tax: "", discount: "", total: "" });
        },
        removeRow(index) {
            this.medicineRows.splice(index, 1);
        },
        submitForm() {
            this.$router.push(all_routes.prescriptions);
        },
    },
}
</script>
