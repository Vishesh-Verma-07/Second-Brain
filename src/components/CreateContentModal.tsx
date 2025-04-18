import CrossIcon from "../icons/CrossIcon";
import Button from "./ui/Button2";
import {Input} from "./ui/InputComponent";


export function CreateContentModal({open, onClose} : {open : boolean, onClose: () => void}){

    return <div>
        {open && <div className="w-screen h-screen bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                        <CrossIcon />
                        
                    </div>
                    <div>
                        <Input placeholder = {"Title"} onChange={() => {}}/>
                        <Input placeholder = {"link"} onChange={() => {}}/>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="submit" />

                    </div>
                </span>
            </div>
        </div>}
    </div>
}


