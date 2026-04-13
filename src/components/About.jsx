import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import ProfileImage from "../assets/profile.jpg";

const About = () => {
  const { lang } = useLang();

  return (
    <section className="about">
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={ProfileImage} alt="شیخ عزیز الرحمن" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-block">
            <h2 className="title">{lang === "ur" ? "پروفائل" : "Profile"}</h2>
            <p>سینیئر صحافی | گولڈ میڈلسٹ</p>
            <p>ایم اے اکنامکس 1996</p>
            <p>سابقہ پریس سیکرٹری معاونین خصوصی برائے وزیر اعلیٰ سندھ</p>
            <p>37 سالہ صحافتی خدمات</p>
          </div>

          <div className="about-highlight">
            <h3 className="title">
              {lang === "ur" ? "میڈیا ہاؤس" : "Media House"}
            </h3>
            <p>رحمان ہاؤس، سوئی گیس روڈ، کوٹ عبدالمالک، شیخوپورہ روڈ، لاہور</p>
            <p>📞 03258257381 | 03468682037</p>
          </div>

          <div className="about-block">
            <h2 className="title">قائد کا پاکستان - ہماری پہچان پاکستان</h2>
            <p className="tagline" style={{ textAlign: "center" }}>
              آزاد ریاست - آزاد صحافت
            </p>

            <p>
              سینیئر صحافی محمود شام کی سربراہی کے ساتھ سینئر صحافی گولڈ میڈلسٹ
              شیخ عزیز الرحمن کی قیادت میں کشمیر نیوز چینل ڈیجیٹل پاکستان
              کشمیریوں کی عظیم قربانیوں کو خراجِ تحسین پیش کرتے ہوئے کراچی سے
              خیبر تک اپنی صحافتی خدمات پیش کرتے ہوئے پاکستان کی اہم ترین شخصیات
              کے انٹرویوز قیمتی رائے سے عالمی سطح تک کشمیر کی ازادی کے لیے
              کوشاں۔
            </p>

            <ul>
              <li>
                ادارے کو پاکستان میں اعلی اور بہترین صحافتی خدمات پر 9 نومبر
                2025 کو اقبال ڈے کے موقع پر علامہ اقبال گولڈ میڈل سے نوازا گیا۔
              </li>
              <li>ادارے کو پاکستان اداروں کی میڈیا لسٹ پر ہونے پر فخر ہے</li>
              <li>
                انتظامیہ کو پاکستان کی اہم ترین شخصیات کے انٹرویوز کرنے کا اعزاز
                حاصل ہے۔
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
