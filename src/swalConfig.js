import Swal from "sweetalert2";
import "./swalConfig.css";

const MySwal = Swal.mixin({
  background: "#F8FAFC",
  color: "#1E293B",
  confirmButtonColor: "#2C5F7A",
  cancelButtonColor: "#4A8B8B",
  customClass: {
    popup: "swal-popup-custom",
    title: "swal-title-custom",
    confirmButton: "swal-confirm-button-custom",
    cancelButton: "swal-cancel-button-custom",
    icon: "swal-icon-custom",
  },
});

export default MySwal;
