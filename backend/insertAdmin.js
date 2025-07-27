const mongoose = require("mongoose");
const Admin = require("./models/Admin");

mongoose.connect("mongodb+srv://Habiba:habibakhanpass@cluster0.rvsdsnk.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0", {

  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("✅ MongoDB connected");

  const existingAdmin = await Admin.findOne({ username: "admin123" });
  if (existingAdmin) {
    console.log("⚠️ Admin already exists. Skipping insertion.");
    mongoose.disconnect();
    return;
  }

  const admin = new Admin({
    username: "admin123",
    password: "adminpass", // plain password, will be hashed by pre-save hook
  });

  await admin.save();
  console.log("✅ Admin inserted successfully");
  mongoose.disconnect();
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
