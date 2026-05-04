router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ msg: "All fields required" });

  if (!email.includes("@"))
    return res.status(400).json({ msg: "Invalid email" });

  const existing = await User.findOne({ email });
  if (existing)
    return res.status(400).json({ msg: "Email already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });

  res.json(user);
});