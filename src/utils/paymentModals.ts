// src/utils/modals.ts
import Swal from "sweetalert2";

export const showSuccessModal = (plan: string, email: string, phone: string, onConfirm?: () => void) => {
  return Swal.fire({
    title: "Payment Successful 🎉",
    html: `
      <p>Thank you for purchasing the <strong>${plan}</strong> plan.</p>
      <p>We’ll contact you soon at <strong>${email}</strong> or <strong>${phone}</strong>.</p>
    `,
    icon: "success",
    confirmButtonText: "Back to Home",
    confirmButtonColor: "#6366f1",
  }).then(() => {
    if (onConfirm) onConfirm();
  });
};

export const showErrorModal = (title: string, message: string) => {
  return Swal.fire(title, message, "error");
};
