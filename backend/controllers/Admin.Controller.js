
///***************delete user by id ********************* */
const deleteUser=( async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({ message: "User deleted successfully" })
        console.log("User deleted successfully")
    } catch (error) {
        console.log(error);
    }
})
///***************get all user ********************* */
const getAllUser = (async (req, res) => {
    try {

        const allUsers = await User.find()

        res.status(200).json(allUsers)

    } catch (error) {
        console.log(error);
    }
})

export {deleteUser,getAllUser}