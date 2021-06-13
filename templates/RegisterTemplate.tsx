import React from "react";
import Register from "@/components/organisms/Register";

function RegisterTemplate(){
    return(
        <div className={' flex content-center justify-center h-screen'} style={{
        backgroundImage: `url(/images/auth-background.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
    }}>
            <Register/>
    </div>
    )

}
export default RegisterTemplate
