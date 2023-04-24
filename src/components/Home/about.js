import about from "../../assets/images/about.png";
const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-3 sm:px-0 py-10 sm:py-16  flex flex-col items-center scroll-smooth"
    >
      <div>
        <h2 className="text-3xl md:text-5xl mb-2 md:mb-6 text-main-dark font-bold">
          من نحن؟
        </h2>
        <p className="max-w-3xl text-gray-500">
          شركة مهنية ذات مسؤولية محدودة، جنسيتها سعودية، مرخصة من وزارة العدل
          ووزارة التجارة في المملكة العربية السعودية، وكذلك من الهيئة السعودية
          للمحامين، مركزها الرئيسي فـي محافظة جدة، تتمتع بخبرات على أعلى مستوى،
          وتدمج في عملها بين التمسك بأحكام الشريعة الإسلامية والأنظمة المرعية في
          المملكة العربية السعودية، ومـا بين منهجيات الممارسات القانونية
          العالمية الرفيعة لتقديم خدمات وحلول قانونية متميزة ومبتكرة بمهنية
          واحترافية عالية.
        </p>
      </div>
      <div
        className="mt-12 md:mt-20 flex flex-col md:flex-row md:justify-between items-center gap-16 md:gap-36 child:text-start"
        dir="ltr"
      >
        <img className="w-80 lg:w-96 rounded-2xl" src={about} alt="about us" />
        <div dir="rtl">
          <div className="mb-6">
            <h3 className="font-bold text-2xl lg:text-3xl text-main-color-light">
              قـيمنـا
            </h3>
            <p>
              ● <span className="text-xl font-semibold">الصدق والامانة</span>{" "}
              والحرص الدائم علـى الامتثــال والالــتزام القانوني.
              <br />●{" "}
              <span className="text-xl font-semibold">إحترام القانون</span>{" "}
              والتمسك الكامل بالأخلاق السامية لمهنة المحاماة. <br />●{" "}
              <span className="text-xl font-semibold">النزاهة والشفافية</span>{" "}
              فـي كـل اجراءات العمل ومــع جميع العــملاء.{" "}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl lg:text-3xl text-main-color-light">
              رؤيـتنـا
            </h3>
            <p className="max-w-md">
              يتطلع فريق شركة الوسام للمحاماة والاستشارات القانونية والتحكيــم،
              لأن يكــون النموذج السعــودي الرائد في تقديم الخدمـــات
              القانونـــية الاحترافية للأفراد والشــركات وفق أعلى المعايير
              المحــلية والعـــالمية الموثوقة وبالموائمة مع رؤية المملكة العربية
              السعودية للعام 2030م.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;