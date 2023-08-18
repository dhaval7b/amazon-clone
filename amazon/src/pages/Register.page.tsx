import AuthLayout from "../features/auth/Auth.layout";
import RegistrationFormComponent from "../features/auth/components/RegistrationForm";

const RegisterPage = () => {
    return ( 
        <AuthLayout>  
            <RegistrationFormComponent />
        </AuthLayout> 
    );
}
 
export default RegisterPage;