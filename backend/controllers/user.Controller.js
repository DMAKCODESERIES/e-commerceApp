 const registerUser= ( async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const registeredUser = await User.findOne({ email });
        if (registeredUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ email, password, name });
        await user.save();

        res.status(201).json({ message: "User added successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding user" });
    }
});





///***************login ********************* */
const loginUser =( async (req, res, next) => {
    try {
        const { email, password } = await req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const user = await User.findOne({ email })
        if (!user || password !== user.password) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        const secretkey = "hftfff65444d43es3dbhb"
        const token = jwt.sign({ id: user.id }, secretkey, { expiresIn: '1h' })
        console.log(token)
        await User.findByIdAndUpdate(user.id, { token: token })
        res.status(200).json({ message: "Login Successful", token });
    } catch (error) {

        console.log(error);
    }
})

///***************update user by id ********************* */
const updateUser=( async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(user)
        console.log("User updated successfully")
    } catch (error) {
        console.log(error);
    }
})
///***************logout ********************* */
const logout=( async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        else (
            jwt.verify(token, 'hftfff65444d43es3dbhb', async (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: "Invalid token" });
                }
                console.log("Decoded Token:", decoded);
                const user = await User.findByIdAndUpdate(decoded.id, { token: null }, { new: true });
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                }
                res.status(200).json({ message: "Logout Successful" });
            }));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


export { registerUser,  loginUser, updateUser,logout }