import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400"
  ];

  return (
    <div className="container section">
      <h2 className="title">میڈیا گیلری</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "20px"
      }}>
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            style={{ width: "100%", borderRadius: "15px" }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;