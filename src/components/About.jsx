import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import ProfileImage from "../assets/profile.jpg";

const About = () => {
  const { lang } = useLang();

  return (
    <section className="about">
      <div className="about-container">

        {/* Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={ProfileImage} alt="شیخ عزیز الرحمن" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Profile (simple text, no card) */}
          <div className="about-block">
            <h2 className="title">{lang === "ur" ? "پروفائل" : "Profile"}</h2>
            <p>سینیئر صحافی | گولڈ میڈلسٹ</p>
            <p>ایم اے اکنامکس 1996</p>
            <p>سابقہ پریس سیکرٹری معاونین خصوصی برائے وزیر اعلیٰ سندھ</p>
            <p>37 سالہ صحافتی خدمات</p>
          </div>

          {/* Media House (highlight box) */}
          <div className="about-highlight">
            <h3 className="title">{lang === "ur" ? "میڈیا ہاؤس" : "Media House"}</h3>
            <p>رحمان ہاؤس، سوئی گیس روڈ، کوٹ عبدالمالک، لاہور</p>
            <p>📞 03258257381 | 03468682037</p>
          </div>

          {/* Mission / Story */}
          <div className="about-block">
            <h2 className="title">قائد کا پاکستان - ہماری پہچان پاکستان</h2>
            <p className="tagline">آزاد ریاست - آزاد صحافت</p>

            <p>
              کشمیر نیوز چینل ڈیجیٹل پاکستان، سینیئر صحافی محمود شام کی
              سربراہی اور شیخ عزیز الرحمن کی قیادت میں، کشمیریوں کی قربانیوں
              کو اجاگر کرتے ہوئے پاکستان بھر میں صحافتی خدمات سرانجام دے رہا
              ہے۔
            </p>

            <ul>
              <li>
                اہم قومی شخصیات کے انٹرویوز کے ذریعے عالمی سطح پر کشمیر کی آواز۔
              </li>
              <li>
                9 نومبر 2025 کو علامہ اقبال گولڈ میڈل سے نوازا گیا۔
              </li>
              <li>پاکستان کے نمایاں میڈیا اداروں کی فہرست میں شامل۔</li>
              <li>اعلیٰ سطحی صحافتی خدمات کا اعزاز۔</li>
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;


// import { motion } from "framer-motion";
// import { useLang } from "../context/LanguageContext";
// import ProfileImage from "../assets/profile.jpg";

// const About = () => {
//   const { lang } = useLang();

//   return (
//     <motion.div
//       className="container section"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row-reverse",
//           flexWrap: "wrap",
//           gap: "30px",
//           alignItems: "flex-start",
//         }}
//       >
//         <motion.div
//           style={{
//             flex: "0 0 300px",
//             borderRadius: "20px",
//             overflow: "hidden",
//             boxShadow: "0 0 30px var(--primary)",
//           }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <img
//             src={ProfileImage}
//             alt="شیخ عزیز الرحمن"
//             style={{ width: "100%", display: "block" }}
//           />
//         </motion.div>

//         <div
//           style={{
//             flex: 1,
//             minWidth: "280px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "15px",
//           }}
//         >
//           <motion.div className="card" whileHover={{ scale: 1.02 }}>
//             <h3>{lang === "ur" ? "پروفائل" : "Profile"}</h3>
//             <p>سینیئر صحافی | گولڈ میڈلسٹ</p>
//             <p>ایم اے اکنامکس 1996</p>
//             <p>سابقہ پریس سیکرٹری معاونین خصوصی برائے وزیر اعلیٰ سندھ</p>
//             <p>37 سالہ صحافتی خدمات</p>
//           </motion.div>

//           <motion.div className="card" whileHover={{ scale: 1.02 }}>
//             <h3>{lang === "ur" ? "میڈیا ہاؤس" : "Media House"}</h3>
//             <p>رحمان ہاؤس، سوئی گیس روڈ، کوٹ عبدالمالک، شیخوپورہ روڈ، لاہور</p>
//             <p>📞 03258257381 | 03468682037</p>
//           </motion.div>

//           <motion.div className="card" whileHover={{ scale: 1.02 }}>
//             <h3>قائد کا پاکستان - ہماری پہچان پاکستان</h3>
//             <p>آزاد ریاست - آزاد صحافت</p>
//             <ul>
//               <li>
//                 سینیئر صحافی محمود شام کی سربراہی کے ساتھ سینئر صحافی گولڈ
//                 میڈلسٹ شیخ عزیز الرحمن کی قیادت میں کشمیر نیوز چینل ڈیجیٹل
//                 پاکستان کشمیریوں کی عظیم قربانیوں کو خراجِ تحسین پیش کرتے ہوئے
//                 کراچی سے خیبر تک اپنی صحافتی خدمات پیش کرتے ہوئے پاکستان کی اہم
//                 ترین شخصیات کے انٹرویوز قیمتی رائے سے عالمی سطح تک کشمیر کی
//                 ازادی کے لیے کوشاں۔
//               </li>
//               <li>
//                 ادارے کو پاکستان میں اعلی اور بہترین صحافتی خدمات پر 9 نومبر
//                 2025 کو اقبال ڈے کے موقع پر علامہ اقبال گولڈ میڈل سے نوازا گیا۔
//               </li>
//               <li>
//                 ادارے کو پاکستان اداروں کی میڈیا لسٹ پر ہونے پر فخر ہے{" "}
//                 <i>
//                   <b>الحمدللہ۔</b>
//                 </i>
//               </li>
//               <li>
//                 انتظامیہ کو پاکستان کی اہم ترین شخصیات کے انٹرویوز کرنے کا اعزاز
//                 حاصل ہے۔
//               </li>
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;
