import { motion } from "framer-motion";

const data = [
  {
    name: "جنرل معین الدین حیدر",
    pos: "سابق گورنر سندھ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGVOqNKY9ul82L9517lyZcKvD9ObLKdiUpg&s"
  },
  {
    name: "جنرل رحمت خان",
    pos: "صدر الشفاء آئی ہسپتال، اسلام آباد",
    img: "https://dailymumtaz.com/wp-content/uploads/2023/03/rehmat-khan.jpg"
  },
  {
    name: "حاجی غلام علی",
    pos: "سابق گورنر خیبر پختونخوا",
    img: "https://img.dunyanews.tv/news/2023/September/09-07-23/news_big_images/753296_46556836.jpg"
  },
  {
    name: "سردار محمد لطیف خان کھوسہ",
    pos: "سابق گورنر پنجاب",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Latifkhosa.jpg/330px-Latifkhosa.jpg"
  },
  {
    name: "راجہ محمد ظفر الحق",
    pos: "سابق قائد ایوان، سینیٹ آف پاکستان",
    img: "https://i.aaj.tv/wp-content/uploads/2017/11/raja-zafar-ulhaq-1.png"
  },
  {
    name: "ڈاکٹر حفیظ الرحمن",
    pos: "صدر الخدمت فاؤنڈیشن پاکستان",
    img: "https://urdu.geo.tv/assets/uploads/updates/2022-12-10/309693_7826374_updates.jpg"
  },
  {
    name: "لیاقت بلوچ",
    pos: "نائب امیر جماعت اسلامی پاکستان",
    img: "https://www.city42.tv/digital_images/large/2025-09-14/news-1757834984-8351.jpg"
  },
  {
    name: "پروفیسر ابراہیم خان",
    pos: "سابق سینیٹر جماعت اسلامی پاکستان",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnNRWPznmUeoQPezR-39KbSyDTJtvfvPrJw&s"
  },
  {
    name: "مہتاب اکبر راشدی",
    pos: "ممبر قومی اسمبلی پاکستان",
    img: "https://jang.com.pk/assets/uploads/akhbar/2021-09-24/988805_2874138_10-mehtab_akhbar.jpg"
  },
  {
    name: "رشدہ لودھی",
    pos: "پارلیمانی سیکرٹری صحت، پنجاب",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphoExpoBl2Op2Di7ZafvbLZpLm4oSmR-6KQ&s"
  },
  // {
  //   name: "اسد محمود",
  //   pos: "ممبر صوبائی اسمبلی پنجاب",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp5lRDRLdyIBmPP_JnsZrNxH-snlYsCsdqg&s"
  // },
  {
    name: "کامران مرتضیٰ",
    pos: "سینیٹ آف پاکستان",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcGR-rou7WRmAXFy3sCOck6Gxt1zyrnt74A&s"
  },
  {
    name: "زبیر طفیل",
    pos: "سابق صدر فیڈریشن چیمبر آف کامرس",
    img: "https://dunya.com.pk/news/2024/October/10-13-24/news_big_images/2418138_44647568.jpg"
  },
  // {
  //   name: "گلزار فیروز",
  //   pos: "سابق صدر فیڈریشن چیمبر آف کامرس",
  //   img: "https://dunya.com.pk/news/2024/February/02-10-24/news_big_images/2307181_42794095.jpg"
  // },
  // {
  //   name: "آصف لکھانی",
  //   pos: "نائب صدر فیڈریشن چیمبر آف کامرس",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8huW04UsYmI7tF51m6mJfieHMYbxY19R_Vg&s"
  // },
  // {
  //   name: "انجم نثار",
  //   pos: "اسسٹنٹ کمشنر، ٹکسلا شریف",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtE1IIndQyEoay0TLTBgsOeuV7NvRgmbR_cQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsGOKqKR0g8Vm0_Vz6UUai67Vl5kcnlMW5w&s"
  // },
  // {
  //   name: "ثاقب فیاض مگن",
  //   pos: "صدر/چیئرمین آل پاکستان میمن فیڈریشن",
  //   img: ""
  // },
  // {
  //   name: "حاجی محمد صالح میمن",
  //   pos: "ڈائریکٹر پاکستان اسٹاک ایکسچینج",
  //   img: ""
  // }
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
                <h4 style={{ margin: 0 }}>{item.name}</h4>
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