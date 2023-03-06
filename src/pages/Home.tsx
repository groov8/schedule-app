import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginHome from "./LoginHome"

function Home() {
    const [user] = useAuthState(auth);
  return (
    user ? <div>a</div>:
    <LoginHome/>
  )
}

export default Home