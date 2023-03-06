import { auth, provider } from "@/firebase"
import { Box, Button } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth"

function LoginHome() {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider)
    };

    return (
        <Box>
            <Button onClick={signInWithGoogle}>Login</Button>
        </Box>
    )
}

export default LoginHome