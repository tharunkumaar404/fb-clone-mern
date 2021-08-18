import {session, useSession} from "next-auth/client";
import Image from "next-auth/image";

function InputBox() {
    return (
        <div>
         <div>
             <Image
             className="rounded-full"
             src={session.user.image}
             width={40}
             height={40}
             layout="fixed"
             />

             <form className="flex flex-1">
                 <input 
                 type="text"
                 placeholder={`Whats on your mind, ${session.user.name}`} />
             </form>
         </div>
        </div>
    );
}

export default InputBox;
