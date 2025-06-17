import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config/index";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function AuthLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return <div></div>;
}
