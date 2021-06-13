import {ToastContainer} from "react-toastify";
import {PropsWithChildren} from "react";


export type HeaderLayout = 'default' | 'compact';
export interface LayoutProps extends PropsWithChildren<{}>{
    headerLayout: HeaderLayout;
}

function Layout(props: LayoutProps){
    const { children, headerLayout } = props;
    return(
        <>
            <ToastContainer autoClose={5000} hideProgressBar />
            <div>
                {children}
            </div>

        </>
    )

}
export default Layout
