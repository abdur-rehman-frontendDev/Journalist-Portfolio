import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import ProfileImage from "../assets/profile.jpg";

const About = () => {
  const { lang } = useLang();

  return (
    <motion.div
      className="container section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* <h2 className="title">
        {lang === "ur"
          ? "شیخ عزیز الرحمن - سینیئر صحافی"
          : "Sheikh Aziz Rahman - Senior Journalist"}
      </h2> */}

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          flexWrap: "wrap",
          gap: "30px",
          alignItems: "flex-start",
        }}
      >
        {/* Profile Image */}
        <motion.div
          style={{
            flex: "0 0 300px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 0 30px var(--primary)",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={ProfileImage}
            alt="شیخ عزیز الرحمن"
            style={{ width: "100%", display: "block" }}
          />
        </motion.div>

        {/* Info Cards */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {/* Profile Card */}
          <motion.div className="card" whileHover={{ scale: 1.02 }}>
            <h3>{lang === "ur" ? "پروفائل" : "Profile"}</h3>
            <p>سینیئر صحافی | گولڈ میڈلسٹ</p>
            <p>ایم اے اکنامکس 1996</p>
            <p>سابقہ پریس سیکرٹری معاونین خصوصی برائے وزیر اعلیٰ سندھ</p>
            <p>37 سالہ صحافتی خدمات</p>
          </motion.div>

          {/* Media House Card */}
          <motion.div className="card" whileHover={{ scale: 1.02 }}>
            <h3>{lang === "ur" ? "میڈیا ہاؤس" : "Media House"}</h3>
            <p>رحمان ہاؤس، سوئی گیس روڈ، کوٹ عبدالمالک، شیخوپورہ روڈ، لاہور</p>
            <p>📞 03258257381 | 03468682037</p>
          </motion.div>

          {/* Elegant Paragraph Content */}
          <motion.div className="card" whileHover={{ scale: 1.02 }}>
            <h3>قائد کا پاکستان - ہماری پہچان پاکستان</h3>
            <p>آزاد ریاست - آزاد صحافت</p>
            <ul>
              <li>
                سینیئر صحافی محمود شام کی سربراہی کے ساتھ سینئر صحافی گولڈ
                میڈلسٹ شیخ عزیز الرحمن کی قیادت میں کشمیر نیوز چینل ڈیجیٹل
                پاکستان کشمیریوں کی عظیم قربانیوں کو خراجِ تحسین پیش کرتے ہوئے کراچی سے
                خیبر تک اپنی صحافتی خدمات پیش کرتے ہوئے پاکستان کی اہم ترین
                شخصیات کے انٹرویوز قیمتی رائے سے عالمی سطح تک کشمیر کی ازادی کے
                لیے کوشاں۔
              </li>
              <li>
                ادارے کو پاکستان میں اعلی اور بہترین صحافتی خدمات پر 9 نومبر
                2025 کو اقبال ڈے کے موقع پر علامہ اقبال گولڈ میڈل سے نوازا گیا۔
              </li>
              <li>
                ادارے کو پاکستان اداروں کی میڈیا لسٹ پر ہونے پر فخر ہے{" "}
                <i>
                  <b>الحمدللہ۔</b>
                </i>
              </li>
              <li>
                انتظامیہ کو پاکستان کی اہم ترین شخصیات کے انٹرویوز کرنے کا اعزاز
                حاصل ہے۔
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
