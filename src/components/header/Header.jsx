import React from "react";
import logo from "../../logo.svg";
import "./Navbar.css";
import { useEffect, useState ,useRef } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
// import $ from "jquery"

const Header = () => {


    const [activeTab , setActiveTab] = useState(["home"])
      const navRef = useRef(null);
      const horiSelectorRef = useRef(null);


  function initAnimation() {
    const links = document.querySelectorAll(".nav-link");
    const items = document.querySelectorAll(".nav-item");
    if(links&&items){
    for (let i = 0; i < links.length; i++) {
      if (links[i].classList.contains("active")) {
        items[i].classList.add("_active");
        break;
      }
    }  }else{
        console.error("Элемент не найден");
    }
    }


    useEffect(() => {
      const navLinks = navRef.current.querySelectorAll(".nav-link");
      const navItems = navRef.current.querySelectorAll(".nav-item");
  
      for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].classList.contains("active")) {
          navItems[i].classList.add("_active");
        } else {
          navLinks[0].classList.add("active");
          navItems[0].classList.add("_active");
        }
      }
  
      const tabsNewAnim = navRef.current;
      const activeItemNewAnim = tabsNewAnim.querySelector("._active");
      const activeHeight = activeItemNewAnim.offsetHeight;
      const activeWidth = activeItemNewAnim.offsetWidth;
      const itemPosLeft = activeItemNewAnim.offsetLeft;
      const itemPosTop = activeItemNewAnim.offsetTop;
  
      horiSelectorRef.current.style.left = itemPosLeft + "px";
      horiSelectorRef.current.style.top = itemPosTop + "px";
      horiSelectorRef.current.style.width = activeWidth + "px";
      horiSelectorRef.current.style.height = activeHeight + "px";
    }, []);
  
    const handleNavClick = (e) => {
      const navLinks = navRef.current.querySelectorAll(".nav-link");
      const navItems = navRef.current.querySelectorAll(".nav-item");
  
      navItems.forEach((item) => {
        item.classList.remove("_active");
      });
  
      e.currentTarget.parentNode.classList.add("_active");
  
      const activeItemNewAnim = navRef.current.querySelector("._active");
      const activeHeight = activeItemNewAnim.offsetHeight;
      const activeWidth = activeItemNewAnim.offsetWidth;
      const itemPosLeft = activeItemNewAnim.offsetLeft;
      const itemPosTop = activeItemNewAnim.offsetTop;
  
      horiSelectorRef.current.style.left = itemPosLeft + "px";
      horiSelectorRef.current.style.top = itemPosTop + "px";
      horiSelectorRef.current.style.width = activeWidth + "px";
      horiSelectorRef.current.style.height = activeHeight + "px";
  
      if (window.innerWidth < 992) {
        setTimeout(() => {
          document.getElementById("offbtn").click();
        }, 800);
      }
    };
  
    useEffect(() => {
      const animation = () => {
        const tabsNewAnim = navRef.current;
        const activeItemNewAnim = tabsNewAnim.querySelector("._active");
        const activeHeight = activeItemNewAnim.offsetHeight;
        const activeWidth = activeItemNewAnim.offsetWidth;
        const itemPosLeft = activeItemNewAnim.offsetLeft;
        const itemPosTop = activeItemNewAnim.offsetTop;
  
        horiSelectorRef.current.style.left = itemPosLeft + "px";
        horiSelectorRef.current.style.top = itemPosTop + "px";
        horiSelectorRef.current.style.width = activeWidth + "px";
        horiSelectorRef.current.style.height = activeHeight + "px";
      };
  
      window.addEventListener("resize", () => {
        setTimeout(() => {
          animation();
        }, 2000);
      });
  
      animation();
    }, []);



  return (
    <nav
      className="navbar navbar-expand-lg navbar-mainbg pb-0 "
      style={{ backgroundColor: "#212529" }}
    >
      {/* Navbar content */}
      <NavLink to="/home" className="navbar-brand navbar-logo">
        <img
          src={logo}
          style={{
            height: "60px",
            marginLeft: "25px",
            position: "absolute",
            top: "1px",
          }}
          alt=""
        />
      </NavLink>
      <button
        style={{ marginRight: "1rem" }}
        //   onClick={function () { animation() }}
        className="btn btn-dark navbar-toggler"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div
        className="offcanvas offcanvas-end bg-dark"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div
          className="offcanvas-header"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <button
            id="offbtn"
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ color: "#fff" }}
          >
            <i className="far fa-window-close" style={{ fontSize: "30px" }}></i>
          </button>
        </div>
        <div
            className="offcanvas-body navbar-collapse collapse show pb-0 "
            style={{ backgroundColor: "#212529", paddingRight: "0" }}
            id="navbarSupportedContent"
            ref={navRef}
          >
        <ul className="navbar-nav ml-auto  "
              aria-labelledby="dropdownMenuButton">
          <div className="hori-selector" ref={horiSelectorRef}>
            <div className="left"></div>
            <div className="right"></div>
          </div>
          {["home","contact", "portfolio", "block"].map((tab, index) => (
  <li
    key={index}
    className={classnames("nav-item", { _active: tab === activeTab })}
    onClick={() => setActiveTab(tab)}
  >
    <NavLink className="nav-link" to={`/${tab.toLowerCase()}`} onClick={handleNavClick}>
      {tab==="home"?"главная":tab==="about"?"о нас":tab==="contact"?"контакты":tab==="portfolio"?"партфолио":tab==="block"?"блог":""}
    </NavLink>
  </li>
))}
        </ul>
            </div>
      </div>
    </nav>
  );
};
export default Header;

// {
//   function animation() {
//     let linkactiv = $(".nav-link");
//     let itemnav = $(".nav-item");
//     for (let i = 0; i < linkactiv.length; i++) {
//       if (linkactiv[i].className === "nav-link active") {
//         itemnav[i].classList.add("_active");
//       } else {
//         linkactiv[0].classList.add("active");
//         itemnav[0].classList.add("_active");
//       }
//     }
//     var tabsNewAnim = $("#navbarSupportedContent");
//     var activeItemNewAnim = tabsNewAnim.find("._active");
//     var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//     var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//     var itemPosNewAnimLeft = activeItemNewAnim.position();
//     $(".hori-selector").css({
//       top: Math.floor(itemPosNewAnimLeft.top) + "px",
//       left: Math.floor(itemPosNewAnimLeft.left) + "px",
//       height: activeWidthNewAnimHeight + "px",
//       width: activeWidthNewAnimWidth + "px",
//     });
//     $("#navbarSupportedContent").on("click", "li", function (e) {
//       $("#navbarSupportedContent ul li").removeClass("_active");
//       $(this).addClass("_active");
//       var activeWidthNewAnimHeight = $(this).innerHeight();
//       var activeWidthNewAnimWidth = $(this).innerWidth();
//       var itemPosNewAnimTop = $(this).position();
//       if (window.innerWidth - document.body.offsetWidth > 0) {
//         $(".hori-selector").css({
//           top: Math.floor(itemPosNewAnimTop.top) + "px",
//           left: Math.floor(this.getBoundingClientRect().left - 95) + "px",
//           height: activeWidthNewAnimHeight + "px",
//           width: activeWidthNewAnimWidth + "px",
//         });
//       } else {
//         $(".hori-selector").css({
//           top: Math.floor(itemPosNewAnimTop.top) + "px",
//           left: Math.floor(itemPosNewAnimTop.left) + "px",
//           height: activeWidthNewAnimHeight + "px",
//           width: activeWidthNewAnimWidth + "px",
//         });
//       }
//       if (window.innerWidth < 992) {
//         setTimeout(function () {
//           $("#offbtn").trigger("click");
//         }, 800);
//       }
//     });
//   }
//   useEffect(() => {
//     $(window).on("resize", function () {
//       setTimeout(function () {
//         animation();
//       }, 2000);
//     });
//     animation();
//   }, []);
//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg navbar-mainbg pb-0 "
//         style={{ backgroundColor: "#212529" }}
//       >
//         <NavLink to="" className="navbar-brand navbar-logo">
//           <img
//             src={logo}
//             style={{
//               height: "60px",
//               marginLeft: "25px",
//               position: "absolute",
//               top: "1px",
//             }}
//             alt=""
//           />
//         </NavLink>
//         <button
//           style={{ marginRight: "1rem" }}
//           onClick={function () {
//             animation();
//           }}
//           className="btn btn-dark navbar-toggler"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasExample"
//           aria-controls="offcanvasExample"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <i className="fas fa-bars text-white"></i>
//         </button>
//         <div
//           className="offcanvas offcanvas-end bg-dark"
//           id="offcanvasExample"
//           aria-labelledby="offcanvasExampleLabel"
//         >
//           <div
//             className="offcanvas-header"
//             style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
//           >
//             <button
//               id="offbtn"
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//               style={{ color: "#fff" }}
//             >
//               <i
//                 className="far fa-window-close"
//                 style={{ fontSize: "30px" }}
//               ></i>
//             </button>
//           </div>
//           <div
//             className="offcanvas-body navbar-collapse collapse show pb-0 "
//             style={{ backgroundColor: "#212529", paddingRight: "0" }}
//             id="navbarSupportedContent"
//           >
//             <ul
//               className="navbar-nav ml-auto  "
//               aria-labelledby="dropdownMenuButton"
//             >
//               <div className="hori-selector">
//                 <div className="left"></div>
//                 <div className="right"></div>
//               </div>
//               <li className="nav-item ">
//                 <NavLink className="nav-link " to="/home">
//                   <i className="fas fa-tachometer-alt"></i>главная
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/about" exact>
//                   <i className="far fa-address-book"></i>обо мне
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/portfolio" exact>
//                   <i className="far fa-clone"></i>портфолио
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact" exact>
//                   <i className="far fa-copy"></i>контакт
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/block" exact>
//                   <i className="far fa-chart-bar"></i>блок
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
