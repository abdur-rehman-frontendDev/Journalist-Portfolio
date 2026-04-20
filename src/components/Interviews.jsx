import { motion } from "framer-motion";
import { User } from "lucide-react"; // simple icon

const data = [
  {
    name: "جنرل معین الدین حیدر",
    pos: "سابق گورنر سندھ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGVOqNKY9ul82L9517lyZcKvD9ObLKdiUpg&s",
  },
  {
    name: "جنرل رحمت خان",
    pos: "صدر الشفاء آئی ہسپتال، اسلام آباد",
    img: "https://dailymumtaz.com/wp-content/uploads/2023/03/rehmat-khan.jpg",
  },
  {
    name: "حاجی غلام علی",
    pos: "سابق گورنر خیبر پختونخوا",
    img: "https://img.dunyanews.tv/news/2023/September/09-07-23/news_big_images/753296_46556836.jpg",
  },
  {
    name: "سردار محمد لطیف خان کھوسہ",
    pos: "سابق گورنر پنجاب",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Latifkhosa.jpg/330px-Latifkhosa.jpg",
  },
  {
    name: "راجہ محمد ظفر الحق",
    pos: "سابق قائد ایوان، سینیٹ آف پاکستان",
    img: "https://i.aaj.tv/wp-content/uploads/2017/11/raja-zafar-ulhaq-1.png",
  },
  {
    name: "ڈاکٹر حفیظ الرحمن",
    pos: "صدر الخدمت فاؤنڈیشن پاکستان",
    img: "https://urdu.geo.tv/assets/uploads/updates/2022-12-10/309693_7826374_updates.jpg",
  },
  {
    name: "لیاقت بلوچ",
    pos: "نائب امیر جماعت اسلامی پاکستان",
    img: "https://www.city42.tv/digital_images/large/2025-09-14/news-1757834984-8351.jpg",
  },
  {
    name: "پروفیسر ابراہیم خان",
    pos: "سابق سینیٹر جماعت اسلامی پاکستان",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnNRWPznmUeoQPezR-39KbSyDTJtvfvPrJw&s",
  },
  {
    name: "مہتاب اکبر راشدی",
    pos: "ممبر قومی اسمبلی پاکستان",
    img: "https://jang.com.pk/assets/uploads/akhbar/2021-09-24/988805_2874138_10-mehtab_akhbar.jpg",
  },
  {
    name: "رشدہ لودھی",
    pos: "پارلیمانی سیکرٹری صحت، پنجاب",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphoExpoBl2Op2Di7ZafvbLZpLm4oSmR-6KQ&s",
  },
  {
    name: "اسد محمود",
    pos: "ممبر صوبائی اسمبلی پنجاب، پاکستان تحریک انصاف",
    img: "",
  },
  {
    name: "کامران مرتضیٰ",
    pos: " سینیٹر، سینیٹ آف پاکستان (جمعیت علماء اسلام)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcGR-rou7WRmAXFy3sCOck6Gxt1zyrnt74A&s",
  },
  {
    name: "زبیر طفیل",
    pos: "سابق صدر فیڈریشن چیمبر آف کامرس",
    img: "https://dunya.com.pk/news/2024/October/10-13-24/news_big_images/2418138_44647568.jpg",
  },
  {
    name: "گلزار فیروز",
    pos: "سابق صدر فیڈریشن چیمبر آف کامرس",
    img: "https://dunya.com.pk/news/2024/February/02-10-24/news_big_images/2307181_42794095.jpg",
  },
  {
    name: "آصف لکھانی",
    pos: "نائب صدر، فیڈریشن چیمبر آف کامرس",
    img: "",
  },
  {
    name: "انعم بابر",
    pos: "اسسٹنٹ کمشنر، شرقپور شریف",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtE1IIndQyEoay0TLTBgsOeuV7NvRgmbR_cQ&s",
  },
  {
    name: "عدیل صدیقی",
    pos: "صدر فیڈریشن چیمبر آف کامرس",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHXNQRngoJ-7ixcLvzKDxvPj9wwg7sljExg&s",
  },
  {
    name: "حاجی غنی حاجی عثمان",
    pos: "ڈائریکٹر پاکستان اسٹاک ایکسچینج",
    img: "",
  },
  {
    name: "ثاقب فیاض مگوں",
    pos: "صدر فیڈریشن چیمبر آف کامرس",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7Bl13n6-ZHTUBgJU98POZ6QmPCj0O_BAAA&s",
  },
  {
    name: "محمد شریف انصاری",
    pos: "سابق وزیر سندھ",
    img: "",
  },
  {
    name: "جسٹس عبدالشکور",
    pos: "ماہر قانون اسلام آباد",
    img: "",
  },
  {
    name: "جسٹس اعجاز احمد چوہدری",
    pos: "راولپنڈی ہائیکورٹ",
    img: "",
  },
  {
    name: "جسٹس عبدالرحمن لودھی",
    pos: "ماہر قانون اسلام آباد",
    img: "",
  },
  {
    name: "جسٹس ناصرہ جاوید اقبال",
    pos: "ماہر قانون لاہور",
    img: "",
  },
  {
    name: "جسٹس حسنات احمد خان",
    pos: "ماہر قانون لاہور",
    img: "",
  },
  {
    name: "جسٹس حافظ نسیم",
    pos: "سابق وزیر اعلیٰ سندھ",
    img: "",
  },
  // {
  //   name: " جسٹس طاہر علی",
  //   pos: "سابق صدر سپریم کورٹ بار",
  //   img: "",
  // },
  {
    name: "یاسین آزاد",
    pos: "سابق صدر سپریم کورٹ بار",
    img: "",
  },
  {
    name: "حامد خان",
    pos: "ماہر قانون سربراہ پروفیشنل گروپ",
    img: "",
  },
  {
    name: "پیر مسعود چشتی",
    pos: "وائس چیئرمین پاکستان بار کونسل",
    img: "",
  },
  // {
  //   name: "خواجہ ضیاء الدین",
  //   pos: "وائس چیئرمین پنجاب بار کونسل",
  //   img: "",
  // },
  {
    name: "محمد حبیب جالی",
    pos: "صدر سندھ ہائی کورٹ بار",
    img: "",
  },
  {
    name: "منیر احمد ملک",
    pos: "ممبر کراچی بار",
    img: "",
  },
  {
    name: "اشرف مجید",
    pos: "صدر ڈسٹرکٹ بار رحیم یار خان",
    img: "",
  },
  {
    name: "محمد یوسف لغاری",
    pos: "سابق ایڈووکیٹ جنرل سندھ",
    img: "",
  },
  {
    name: "محمد اشفاق ملک",
    pos: "ڈپٹی پراسیکیوٹر جنرل پنجاب ملتان",
    img: "",
  },
  {
    name: "احمد اویس",
    pos: "سابق ایڈووکیٹ جنرل پنجاب لاہور",
    img: "",
  },
  // {
  //   name: "تہمینہ رانا",
  //   pos: "ڈپٹی ایڈووکیٹ جنرل پنجاب ملتان",
  //   img: "",
  // },
  // {
  //   name: "مائزہ بشریٰ نقوی",
  //   pos: "صدر ڈسٹرکٹ بار ملتان",
  //   img: "",
  // },
  {
    name: "چوہدری محمد حیات",
    pos: "صدر ہائیکورٹ بار ملتان",
    img: "",
  },
  {
    name: "اسد منظور بٹ",
    pos: "سابق صدر لاہور ہائیکورٹ بار",
    img: "",
  },
  {
    name: "عرفان حیات باجوہ",
    pos: "صدر لاہور بار",
    img: "",
  },
];
const Interviews = () => {
  return (
    <div className="container section">
      <h2 className="title">اہم انٹرویوز</h2>

      <div className="hero">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Image */}
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid var(--primary)",
                  }}
                />
              ) : (
                <div
                  style={{
                    minWidth: "70px",
                    minHeight: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid var(--primary)",
                  }}
                >
                  <User size={30} />
                </div>
              )}

              {/* Info */}
              <div>
                <h4>{item.name}</h4>
                <p>{item.pos}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Interviews;
