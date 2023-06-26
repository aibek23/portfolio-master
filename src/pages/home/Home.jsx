import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";
import Todolist from "../../components/todolist/Todolist";
import { Container } from "react-bootstrap";
import Carousel from "../../components/carousel/CarouselBox";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, mirror: "false", once: true });
  }, []);
  return (
    <>
      {/* <i className="header__line"></i> */}
      <Carousel />
      <div
        className="line"
        style={{
          width: "100%",
          height: "8px",
          background: "linear-gradient(#00000099, white)",
          margin: "0px auto",
        }}
      ></div>

      <div className="text-center mt-5 mb-5">
        <h1
          data-aos="fade-down"
          style={{
            color: "grey",
            fontSize: "2rem",
            fontWeight: "bold",
            position: "relative",
          }}
        >
          МОИ НАВЫКИ
          <div
            className="line"
            style={{
              width: "20%",
              height: "4px",
              backgroundColor: "#CBCBCBFF",
              margin: "10px auto",
            }}
          ></div>
        </h1>
      </div>
<div className="container">
<div className=" row ">
        <div className="col-lg-5 ">
          <div className="">
            <p>
              <ul>
                <li>
                  <p>Навыки и квалификации:</p>
                  <ul>
                    <li>Опыт работы с HTML, CSS, JavaScript и PHP</li>
                    <li>
                      Умение разрабатывать административные панели и инструменты
                      для взаимодействия с пользователями
                    </li>
                    <li>
                      Библиотеки и фреймворки, такие как React, Vue.js, Angular
                    </li>
                    <li>
                      Опыт работы с веб-аналитикой и инструментами для
                      отслеживания посещаемости сайтов
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Опыт работы:</p>
                  <ul>
                    <li>
                      <p>Я успешно разработал несколько сайтов, включая:</p>
                      <ul>
                        <li>
                          Сайты для курсов английского и немецкого языков с
                          административной панелью для добавления контента
                        </li>
                        <li>Сайт видеоконференций</li>
                      </ul>
                    </li>
                    <li>
                      Опыт работы в области веб-разработки и создания сайтов с
                      различными функциями, в том числе административных панелей
                      и инструментов для взаимодействия с пользователями
                    </li>
                    <li>
                      Опыт работы с веб-аналитикой и инструментами для
                      отслеживания посещаемости сайтов
                    </li>
                  </ul>
                </li>

                <li>
                  <p>Поиск новых возможностей:</p>
                  <ul>
                    <li>
                      <p>
                        Я заинтересован в поиске новых возможностей и готов
                        рассмотреть вакансии в области веб-разработки. Буду рад
                        обсудить возможности с вашей компанией.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="col-lg-7 mb-5">
          <div className="skills_main container">
            <div className="skills_wrapp ">
              <div className="containers d-flex justify-content-center">
                <div className="skills_container">
                  <div className="skills">
                    <span className="name">html</span>
                    <div className="percent">
                      <div className="progress" style={{ width: "90%" }}></div>
                    </div>
                    <span className="value">90%</span>
                  </div>
                  <div className="skills">
                    <span className="name">css</span>
                    <div className="percent">
                      <div className="progress" style={{ width: "85%" }}></div>
                    </div>
                    <span className="value">85%</span>
                  </div>
                  <div className="skills">
                    <span className="name">bootstrap</span>
                    <div className="percent">
                      <div className="progress" style={{ width: "73%" }}></div>
                    </div>
                    <span className="value">73%</span>
                  </div>
                  <div className="skills">
                    <span className="name">JavaScript</span>
                    <div className="percent">
                      <div className="progress" style={{ width: "80%" }}></div>
                    </div>
                    <span className="value">80%</span>
                  </div>
                  <div className="skills">
                    <span className="name">jquery</span>
                    <div className="percent">
                      <div className="progress" style={{ width: "45%" }}></div>
                    </div>
                    <span className="value">45%</span>
                  </div>
                  <div className="skills">
                    <span className="name">react.js</span>
                    <div className="percent">
                      <div className="progress" style={{ width: "88%" }}></div>
                    </div>
                    <span className="value">80%</span>
                  </div>
                  <div className="skills">
                    <span className="name">php</span>
                    <div className="percent">
                      <div className="progress" style={{ width: "55%" }}></div>
                    </div>
                    <span className="value">55%</span>
                  </div>
                  <div className="skills">
                    <span className="name">node.js</span>
                    <div className="percent">
                      <div className="progress" style={{ width: "70%" }}></div>
                    </div>
                    <span className="value">70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        
      </div>
</div>
     
      <div className="text-center mt-5 mb-5">
          <h1
            data-aos="fade-down"
            style={{
              color: "grey",
              fontSize: "2rem",
              fontWeight: "bold",
              position: "relative",
            }}
          >
            Решения на основе современных технологий
            <div
              className="line"
              style={{
                width: "50%",
                height: "4px",
                backgroundColor: "#CBCBCBFF",
                margin: "10px auto",
              }}
            ></div>
          </h1>
        </div>
        <div className="container">
          
     
      <div className="row ">
        

      <div className="container dis col-lg-6">
  <div className="logo__skills"     data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="1500">
    <img src="https://icon-library.com/images/vivaldi-icon/vivaldi-icon-11.jpg" alt="" />
  </div>
  <div className="logo__skills" data-aos="fade-right" data-aos-easing="ease-in-sine"
                                    data-aos-duration="1000">
    <img src="https://juststickers.in/wp-content/uploads/2021/02/figma.png" alt="" />
  </div>
  <div className="logo__skills" data-aos="fade-right"
  data-aos-easing="ease-in-sine"
  data-aos-duration="700">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png" alt="" />
  </div>
  <div className="logo__skills" data-aos="fade-up-left"  data-aos-easing="ease-in-sine"
                                    data-aos-duration="1500">
    <img src="https://yt3.ggpht.com/a/AGF-l78NE-R5qqmlSgRpoE80s-flZkpiIQmHezDuSw=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
  </div>
  <div className="logo__skills" data-aos="fade-up-left"  data-aos-easing="ease-in-sine"
                                    data-aos-duration="1000">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/WebStorm_Icon.png/1200px-WebStorm_Icon.png" alt="" />
  </div>
  <div className="logo__skills" data-aos="fade-up-left"  data-aos-easing="ease-in-sine"
                                    data-aos-duration="700">
    <img src="https://yandex-images.clstorage.net/Wl5mU6086/98f4b78TmO_/Q7uSzRULFJGRPIvZ_rIjr6OvHDGG9-3CgCLwxKBFbK4U42MxGv-ELbuaMfUAyI7S2QxS9dRfOexf7pGd-sv37tXowcvSmNYR0TxIm7hwYm1hrN4wg_YtVJXkMdLwhi29xuBhP5W3mmSgRP2rX1bTQs0aEmAETah80SDSy-Le7jcF89vF2hBXElxkAJV_eChq_e6ZNVh7NIGM9f-dt9gvMIH6c3lSu1shpA4_olXc204L0V4tyJuhNdpqRsimXmf5z_yWw1JRXJFVIwOZO35oL_6lGfKdsbvOhLm5EDLbJfZGf3b5VzXcoSuBOCwTVV2ITNTYpcvQoLxbo4sFKdFquwG_3gVaG1JQXmxOGjMy42v0JZ81G7j3iU25eFlw0Sf3Bzvxehm-ku0sR3ug1FHTR4Rf2CIO32w91eeIDSoXZfTNvFhE0V1TEtVuQ9D2-KpreGUdMpN28s6KPfjV-pggcI6ytfAQNdYkrok5ol2fWEYJH5GiRt1uvV0kicnkHWCwxXVXB90S01kXbknb9XVj6rNgnnmUuDvFwPM4H_kboDFL9v31XreX5e4GMK9W2ZsMwVrZpYYdr73QpAENq1Vq8oI3lIFZHJ-cnKdL0XA45q2zrB8ynHc0Sc0wuR3_1C47RvP4_VMynqzijD0jH1dUSc6bVuECHK4826VJTGkfqfqJv5FLUJuT0lGhBR00_2NtPirWON8_-YuAf_eVNBEvd0l98XgYcpikogw765rcFs1HkxZsgBBgc5NjykQp3KJxh7cZSJwbV1hcK4AdPDEn6jsg2_5ceDBDRHexHTcYZTMBNf58m7sUJ-qNdKAUFRzIBRqd5MHf7b2V5kGDq9Vl9kB73oHdkFzUV-lBV_4xqmi7IJgxGHZ3TII5P9y41ajwy7Y7c9w5kaqkjLPoVRhUigGS0CBO3Gh60mqKCqteYX8HP9BLXdPVFBcmg91x-ino8-4Xv1R8_4PKMLccPM" alt="" />
  </div>
  <div className="logo__skills" data-aos="fade-down-right" data-aos-easing="ease-in-sine"
                                    data-aos-duration="1500">
    <img src="https://images.sftcdn.net/images/t_app-icon-l/p/eef146f2-9b30-11e6-bbe1-00163ec9f5fa/130884048/colorpic-icon.png" alt="" />
  </div>
  <div className="logo__skills" data-aos="fade-down-right" data-aos-easing="ease-in-sine"
                                    data-aos-duration="1000">
    <img src="https://static.tildacdn.com/tild6661-3337-4233-a336-353530363538/telegram-1.png" alt="" />
  </div>
  {/* <div className="logo__skills" data-aos="fade-right">
    <img src="https://miro.medium.com/max/1160/0*vNNHKQFIrF-bfLYe.png" alt="" />
  </div> */}
  <div className="logo__skills" data-aos="fade-down-right" data-aos-easing="ease-in-sine"
                                    data-aos-duration="800">
    <img src="https://yandex-images.clstorage.net/l5iok2197/591f6bn7AWwh/p7-7iA11RGnC4sovELZdU33Pa4k9ktZl93_DtcFaBoxcx4tUAlYbz_kZABjVxmhm_uxgkH0OzRaNFst4SvEocfPbfzwcsAFN4xeKryDmfIap_npMndcHwdK6VyU0iuOMOnEsJgVA-XzOHueKIVZNBp6doVRMaBuH-LNLrf9iPtHlrIhqO8aFaCVi-N6QJJ2mPG6b7J8lZDSROuUQZ-xESXnD76TE8ZtPHH4kC-NGjoSNrsXlPClL4XsiWQ3-0Dzhdtw76xr0FKl08dke4FePdp2NuF_uRLWmozq2E6QsR_uJ0g-nRbKIz_zNNBvxlG6kfJ9U5y1LuWGI4wg8jdGeYsZe2Embp4QKhNI63tDHfCfNPlut_xZEBoGqROGG3YR5aPL89QZgGZ9eXLfaY8dOpA9NJ_btCclji0JZfk9Q7FPWjvpIq_cVatYi2J6wBW-WDi4K_U_X99YQOHTw9C32W3jRnSQ349idX96HCvLVTRS8TIS2L8p68uiBaW-cgD-BFE1KmUq0Nmm1gUpvgVWdV61sej8vt2SnUYoEo6a9J4gLkg8FlkFK_oyvt1qhxC6UXb105d6o2eDoIMsenRBvkrfviMnrxVeK5LALPsIFT3UdPknvHleGZKKK1JMk72ZJy_K9FjZzm99NDQRZwqd_Vu_OxoQde7iB6-NLDH6TX-NmLemb6-Y1CrdSeb8idr5mzb_7zLw3VcQTCCai1V91q_mSLvSWEjtNHb21qlH0HvY8TwY1rduJ0Jjh6h5uwc8Bhk4pqrklVmuXMiqNwZWshs08aWyPJcZlcwkG0gcdpQiYkI4U9_N5fIyu5IpyR8-WPm8kpi5K21Fa8wifzeBsIBYPurtYpyUYh5EaXmGnfZVP3Jv8TUcEJdGaphO2PmTribLPl1XTyK8v_gVrY_fel72sRUQ8uqtSWTO7HW2iXeN33vvKSMb3eJdDi6zQ1K2lHb9qXVxmFJQimdWhw" alt="" />
  </div>
  <div className="logo__skills" data-aos="zoom-in-right">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="" />
  </div>
  <div className="logo__skills" data-aos="zoom-in"  data-aos-duration="1000">
    <img src="https://cdn1.duabhmoobtojsiab.com/img/kuvyoghmoobaHR0cHM6Ly92ZWN0b3JpZmllZC5jb20vaW1hZ2VzL3JlYWN0LWpzLWljb24tMzMuanBn.jpg" alt="" />
  </div>
  <div className="logo__skills" data-aos="zoom-in-down"  data-aos-duration="800">
    <img src="https://avatars.mds.yandex.net/i?id=bc18015f84ab0fd327766d8a2de778bf-5687044-images-thumbs&n=13" alt="" />
  </div>
</div>
          <div className=" col-lg-6 " style={{"padding":"0 15px"}}>
          <div className="home_description">
  <ul className="skills_list">
    <li>Фреймворки, такие как React и Angular, для разработки больших и сложных веб-приложений</li>
    <li>Библиотеки, такие как jQuery и Lodash, для упрощения разработки и ускорения процесса</li>
    <li>Инструменты для работы с графическими материалами, такие как Figma, Photoshop, для создания дизайна интерфейсов</li>
    <li>Инструменты для управления состоянием, такие как Redux, для упрощения управления данными в приложении</li>
    <li>Сборщики модулей, такие как Webpack и Parcel, для сборки и оптимизации кода</li>
    <li>Инструменты для тестирования, такие как Jest и Enzyme, для проверки работоспособности кода</li>
    <li>Инструменты для управления зависимостями, такие как npm и Yarn, для установки и поддержки пакетов и библиотек</li>
    <li>Инструменты для разработки и отладки, такие как Chrome DevTools и React DevTools, для улучшения производительности и отладки кода</li>
  </ul>
  <p>
    Эти инструменты помогают мне разрабатывать качественные и эффективные веб-приложения. Я готов использовать все свои навыки и инструменты для создания уникального и эффективного продукта для вашей компании.
  </p>
</div>
          </div>
        </div>
        </div>
    </>
  );
};
export default Home;
