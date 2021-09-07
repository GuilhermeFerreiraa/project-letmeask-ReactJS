import { ButtonHTMLAttributes } from "react";
import '../Styles/button.scss';
type Buttonprops = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutLined?:  boolean
};  

export function Button({isOutLined = false, ...props}: Buttonprops){
    return(
        <button 
        className={`button ${isOutLined ? 'outlined' : ''}`} {...props}/>
    )
}
// named export - quando a exportação não tem o default 