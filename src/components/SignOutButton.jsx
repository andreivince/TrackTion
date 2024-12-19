import { supabase } from "../client"

export default function SignOutButton() {
    async function signout() {
        const { error } = await supabase.auth.signOut()
    }
    return (
        <div>
            <button
        onClick={signout} // Handle click event to toggle dropdown
        className="text-white bg-white-700 hover:bg-white-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
    >Sign Out</button>
        </div>
    )
}


