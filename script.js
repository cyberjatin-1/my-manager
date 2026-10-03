/* =====================================================
   MY MANAGER WEBSITE
   Main JavaScript
===================================================== */


/* ================= PLAN DATA ================= */

const planData = {

  elite: {

    name: "Elite",

    forText: "FOR BUSINESS OWNERS",

    price: "₹24,999 / Year",

    icon: "♛",

    theme: "elite",

    subtitle:
      "Complete business support ecosystem.",

    services: [

      "Dedicated Business Manager",

      "Banking & Financial Assistance",

      "Business Loan Support",

      "Loan Settlement Assistance",

      "Staff Salary Account Support",

      "Investment Advisory",

      "Tax & ITR Coordination",

      "Insurance & Claim Assistance",

      "Factory & Fire Insurance",

      "Medical Check-up Coordination",

      "Digital Marketing Guidance",

      "Website & App Development",

      "ERP / Business Software",

      "Business Growth & Branding",

      "Government & Bank Liaison",

      "Representation on Your Behalf",

      "MSME & Government Schemes",

      "Licence & Registration Support",

      "Notice Response & Drafting",

      "Bank & Government Notices",

      "Document Preparation Support",

      "Compliance & Renewal Reminders",

      "CA / CS / Legal Coordination",

      "Vendor & Professional Network",

      "Quarterly Business Review",

      "Priority Helpline & Support",

      "Emergency Business Support",

      "Employee Welfare Support",

      "Exclusive Partner Benefits"

    ]

  },


  shaurya: {

    name: "Shaurya",

    forText: "FOR DEFENCE PERSONNEL",

    price: "₹6,370 / Lifetime",

    icon: "✦",

    theme: "shaurya",

    subtitle:
      "Dedicated support for defence personnel.",

    services: [

      "Lifetime Membership",

      "Banking & Loan Assistance",

      "Mediclaim Support",

      "Insurance Claim Assistance",

      "Financial Advisory",

      "Emergency Banking Support",

      "Priority Helpline",

      "Document Management",

      "Personal Assistance",

      "Service Coordination"

    ]

  },


  professional: {

    name: "Professional",

    forText: "FOR WORKING PROFESSIONALS",

    price: "₹6,370 / Year",

    icon: "▣",

    theme: "professional",

    subtitle:
      "Professional assistance and coordination.",

    services: [

      "Personal Manager Support",

      "Financial Coordination",

      "Insurance Assistance",

      "Document Support",

      "Priority Helpline"

    ]

  },


  aarogya: {

    name: "Aarogya",

    forText: "FOR DOCTORS",

    price: "₹6,370 / Year",

    icon: "♧",

    theme: "aarogya",

    subtitle:
      "Dedicated assistance for doctors.",

    services: [

      "Personal Manager Support",

      "Financial Coordination",

      "Insurance Assistance",

      "Document Support",

      "Priority Helpline"

    ]

  },


  global: {

    name: "Global",

    forText: "FOR NRI",

    price: "To be decided",

    icon: "◎",

    theme: "global",

    subtitle:
      "NRI-focused support and coordination.",

    services: [

      "Banking Coordination",

      "Document Support",

      "Insurance Assistance",

      "Financial Guidance",

      "Dedicated Assistance"

    ]

  },


  samaj: {

    name: "Samaj Gaurav",

    forText: "FOR SENIOR CITIZENS",

    price: "To be decided",

    icon: "♟",

    theme: "samaj",

    subtitle:
      "Assistance designed for senior citizens.",

    services: [

      "Personal Assistance",

      "Banking Support",

      "Insurance Coordination",

      "Document Management",

      "Priority Support"

    ]

  },


  women: {

    name: "Women",

    forText: "FOR WOMEN",

    price: "₹6,370 / Year",

    icon: "◉",

    theme: "women",

    subtitle:
      "Personal and financial support services.",

    services: [

      "Personal Manager Support",

      "Financial Coordination",

      "Insurance Assistance",

      "Document Support",

      "Priority Helpline"

    ]

  },


  student: {

    name: "Student",

    forText: "FOR STUDENTS",

    price: "₹99 / Year",

    icon: "◆",

    theme: "student",

    subtitle:
      "Affordable support for students.",

    services: [

      "Basic Personal Assistance",

      "Document Support",

      "Guidance & Coordination",

      "Priority Helpdesk"

    ]

  }

};



/* ================= PAGE ELEMENTS ================= */

const pages =
  document.querySelectorAll(".page");


const navControls =
  document.querySelectorAll("[data-page]");


const planControls =
  document.querySelectorAll("[data-plan]");


const sidebar =
  document.getElementById("sidebar");


const menuBtn =
  document.getElementById("menuBtn");



/* ================= SHOW PAGE ================= */

function showPage(pageName) {

  pages.forEach(page => {

    page.classList.toggle(
      "active",
      page.id === `page-${pageName}`
    );

  });


  document
    .querySelectorAll(
      ".side-link, .bottom-link"
    )
    .forEach(link => {

      link.classList.toggle(
        "active",
        link.dataset.page === pageName
      );

    });


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  if (sidebar) {

    sidebar.classList.remove(
      "mobile-open"
    );

  }

}



/* ================= OPEN PLAN ================= */

function openPlan(planKey) {

  const plan =
    planData[planKey];


  if (!plan) {
    return;
  }


  /* Plan title */

  document
    .getElementById("detailTitle")
    .textContent =
      plan.name;


  /* Plan category */

  document
    .getElementById("detailFor")
    .textContent =
      plan.forText;


  /* Price */

  document
    .getElementById("detailPrice")
    .textContent =
      plan.price;


  /* Icon */

  document
    .getElementById("detailIcon")
    .textContent =
      plan.icon;


  /* Subtitle */

  document
    .getElementById("detailSubtitle")
    .textContent =
      plan.subtitle;



  /* Hero */

  const hero =
    document.getElementById(
      "detailHero"
    );


  hero.className =
    "detail-hero";


  if (plan.theme === "shaurya") {

    hero.classList.add(
      "shaurya-theme"
    );

  }



  /* Services */

  const serviceGrid =
    document.getElementById(
      "serviceGrid"
    );


  serviceGrid.innerHTML =
    plan.services
      .map(service => {

        return `

          <div class="service-item">

            <span>✓</span>

            <div>
              ${service}
            </div>

          </div>

        `;

      })
      .join("");



  /* WhatsApp message */

  const message =
    encodeURIComponent(

      `Hello Mr. Bhanu Prakash Mishra,

I am interested in the ${plan.name} Plan (${plan.price}) of My Manager.

Please share the membership procedure, payment details and next steps.

Thank you.`

    );



  /* WhatsApp button */

  document
    .getElementById("buyPlanBtn")
    .href =
      `https://wa.me/918875542008?text=${message}`;



  /* Button text */

  document
    .getElementById("buyPlanBtn")
    .textContent =

      plan.price === "To be decided"

        ? "Enquire on WhatsApp"

        : `Choose ${plan.name} Plan`;



  /* Open details */

  showPage("details");

}



/* ================= PAGE NAVIGATION ================= */

navControls.forEach(control => {

  control.addEventListener(
    "click",
    () => {

      showPage(
        control.dataset.page
      );

    }
  );

});



/* ================= PLAN CLICK ================= */

planControls.forEach(control => {

  control.addEventListener(
    "click",
    () => {

      openPlan(
        control.dataset.plan
      );

    }
  );

});



/* ================= MOBILE MENU ================= */

if (menuBtn) {

  menuBtn.addEventListener(
    "click",
    () => {

      sidebar.classList.toggle(
        "mobile-open"
      );

    }
  );

}



/* ================= CLOSE MENU ================= */

document
  .querySelectorAll(".side-link")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        sidebar.classList.remove(
          "mobile-open"
        );

      }
    );

  });
