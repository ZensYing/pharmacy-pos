<template>
    <!-- Add Payment modal -->
    <div class="modal custom-modal fade" id="add_payment_modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h4 class="modal-title fw-bold">Collect Payment</h4>
                    <span class="text-warning fs-14">#INV016</span>
                </div>
                <form action="#">
                    <div class="modal-body">
                        <!-- Payment Summary -->
                        <div class="card mb-4 bg-light">
                            <div class="card-header border-0">
                                <h6 class="fw-bold mb-0">Payment Summary</h6>
                            </div>
                            <div class="card-body pt-0">
                                <div class="p-3 bg-white rounded-3">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span class="text-gray-9 fs-14">Bill Total</span>
                                        <span class="fw-semibold text-dark fs-14">$12,569</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span class="text-gray-9 fs-14">Already Paid</span>
                                        <span class="fw-semibold text-dark fs-14">$12,000</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="text-gray-9 fs-14">Due Amount</span>
                                        <span class="fw-semibold text-danger fs-14">$569</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Payment Amount -->
                        <div class="mb-3">
                            <div class="d-flex align-items-center justify-content-between mb-1">
                                <label class="form-label mb-0">Payment Amount <span class="text-danger">*</span></label>
                                <span class="fs-13 text-gray-9">Bill total: $569</span>
                            </div>
                            <input type="text" class="form-control" value="$569">
                        </div>
                        <!-- Payment Method -->
                        <div class="mb-0">
                            <label class="form-label">Payment Method <span class="text-danger">*</span></label>
                            <vue-select
                                :options="paymentMethodOptions"
                                v-model="selectedPaymentMethod"
                                placeholder="Select"
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="d-flex align-items-center gap-2 w-100 justify-content-between">
                            <button class="btn btn-light d-inline-flex align-items-center gap-2"
                                data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-teal">Complete Payment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Add Payment modal -->
</template>

<script>
export default {
    data() {
        return {
            selectedPaymentMethod: null,
            paymentMethodOptions: [
                { label: "Card", value: "Card" },
                { label: "Cash", value: "Cash" },
                { label: "UPI", value: "UPI" },
            ]
        }
    }
}
</script>
