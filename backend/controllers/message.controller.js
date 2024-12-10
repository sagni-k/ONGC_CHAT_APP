export const sendMessage = async (req,res) => {
    try {
        const{message} = req.body;
        const {id:receiverId } = req.params;
        const senderId = req.user._Id;
        
    }  catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}