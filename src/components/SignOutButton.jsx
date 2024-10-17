import { supabase } from "../client"

export default function SignOutButton() {
    async function signout() {
        const { error } = await supabase.auth.signOut()
    }
    return (
        <div>
            <button onClick={signout}>
                Sing Out
            </button>
        </div>
    )
}