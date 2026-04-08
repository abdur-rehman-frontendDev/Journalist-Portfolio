import { motion } from "framer-motion";

const data = [
  {
    name: "جنرل معین الدین حیدر",
    pos: "سابق گورنر سندھ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGVOqNKY9ul82L9517lyZcKvD9ObLKdiUpg&s"
  },
  {
    name: "حاجی غلام علی",
    pos: "سابق گورنر خیبر پختونخوا",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "لطیف کھوسہ",
    pos: "سابق گورنر پنجاب",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "جنرل معین الدین حیدر",
    pos: "سابق گورنر سندھ",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "حاجی غلام علی",
    pos: "سابق گورنر خیبر پختونخوا",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "لطیف کھوسہ",
    pos: "سابق گورنر پنجاب",
    img: "https://via.placeholder.com/100"
  },{
    name: "جنرل معین الدین حیدر",
    pos: "سابق گورنر سندھ",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "حاجی غلام علی",
    pos: "سابق گورنر خیبر پختونخوا",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "لطیف کھوسہ",
    pos: "سابق گورنر پنجاب",
    img: "https://via.placeholder.com/100"
  },{
    name: "جنرل معین الدین حیدر",
    pos: "سابق گورنر سندھ",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "حاجی غلام علی",
    pos: "سابق گورنر خیبر پختونخوا",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "لطیف کھوسہ",
    pos: "سابق گورنر پنجاب",
    img: "https://via.placeholder.com/100"
  },
  
];

const Interviews = () => {
  return (
    <div className="container section">
      <h2 className="title">اہم انٹرویوز</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
        gap: "20px"
      }}>
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid var(--primary)"
                }}
              />

              {/* Info */}
              <div>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{item.pos}</p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Interviews;