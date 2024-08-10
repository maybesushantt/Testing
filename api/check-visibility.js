export default function handler(req, res) {
  const isVisible = false; // Change this to false to make the site invisible
  res.status(200).json({ visible: isVisible });
}
