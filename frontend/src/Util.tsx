export const control = () => {

    const localUser = localStorage.getItem("User")
    if (localUser) {
        try {
            return localUser;
        } catch (error) {
            localStorage.removeItem("User")
            return null
        }
    } else {
        return null
    }

}