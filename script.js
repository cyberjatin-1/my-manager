/* =====================================================
   MY MANAGER
   Final Main JavaScript
===================================================== */


/* ================= PLAN DATA ================= */

const planData = {

  elite: {
    name: "Elite",
    forText: "FOR BUSINESS OWNERS",
    price: "₹24,999 / Lifetime",
    icon: "♛",
    theme: "elite",
    subtitle: "Complete business support ecosystem.",
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
    subtitle: "Dedicated support for defence personnel.",
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
    price: "₹6,370 / Lifetime",
    icon: "▣",
    theme: "professional",
    subtitle: "Professional assistance and coordination.",
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
    price: "₹6,370 / Lifetime",
    icon: "♧",
    theme: "aarogya",
    subtitle: "Dedicated assistance for doctors.",
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
    price: "Coming Soon",
    icon: "◎",
    theme: "global",
    subtitle: "NRI-focused support and coordination.",
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
    price: "Coming Soon",
    icon: "♟",
    theme: "samaj",
    subtitle: "Assistance designed for senior citizens.",
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
    price: "₹6,370 / Lifetime",
    icon: "◉",
    theme: "women",
    subtitle: "Personal and financial support services.",
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
    price: "₹99 / Lifetime",
    icon: "◆",
    theme: "student",
    subtitle: "Affordable support for students.",
    services: [
      "Basic Personal Assistance",
      "Document Support",
      "Guidance & Coordination",
      "Priority Helpdesk"
    ]
  }

};


/* ================= ELEMENTS ================= */

const pages = document.querySelectorAll(".page");

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
    .querySelectorAll(".side-link, .bottom-link")
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


  /* Close mobile sidebar */

  if (sidebar) {

    sidebar.classList.remove(
      "mobile-open"
    );

  }

}


/* ================= OPEN PLAN ================= */

function openPlan(planKey) {

  const plan = planData[planKey];

  if (!plan) {
    return;
  }


  const detailTitle =
    document.getElementById("detailTitle");

  const detailFor =
    document.getElementById("detailFor");

  const detailPrice =
    document.getElementById("detailPrice");

  const detailIcon =
    document.getElementById("detailIcon");

  const detailSubtitle =
    document.getElementById("detailSubtitle");

  const detailHero =
    document.getElementById("detailHero");

  const serviceGrid =
    document.getElementById("serviceGrid");


  /* ================= DETAILS ================= */

  if (detailTitle) {
    detailTitle.textContent = plan.name;
  }

  if (detailFor) {
    detailFor.textContent = plan.forText;
  }

  if (detailPrice) {
    detailPrice.textContent = plan.price;
  }

  if (detailIcon) {
    detailIcon.textContent = plan.icon;
  }

  if (detailSubtitle) {
    detailSubtitle.textContent =
      plan.subtitle;
  }


  /* ================= HERO THEME ================= */

  if (detailHero) {

    detailHero.className = "detail-hero";

    detailHero.classList.add(
      `${plan.theme}-theme`
    );

  }


  /* ================= SERVICES ================= */

  if (serviceGrid) {

    serviceGrid.innerHTML =
      plan.services
        .map(service => {

          return `
            <div class="service-item">
              <span>✓</span>
              <div>${service}</div>
            </div>
          `;

        })
        .join("");

  }


  /* ================= WHATSAPP ================= */

  const message = encodeURIComponent(

`Hello Jatin Mishra,

I am interested in the ${plan.name} Plan (${plan.price}) of My Manager.

Please share the membership procedure, payment details and next steps.

Thank you.`

  );


  const buyPlanBtn =
    document.getElementById("buyPlanBtn");


  if (buyPlanBtn) {

    buyPlanBtn.href =
      `https://wa.me/919649950866?text=${message}`;

    buyPlanBtn.textContent =
      plan.price === "Coming Soon"
        ? "Enquire on WhatsApp"
        : "Buy Plan";

  }


  showPage("details");

}


/* ================= PAGE NAVIGATION ================= */

navControls.forEach(control => {

  control.addEventListener(
    "click",
    event => {

      event.preventDefault();

      const pageName =
        control.dataset.page;

      if (pageName) {
        showPage(pageName);
      }

    }
  );

});


/* ================= PLAN CLICK ================= */

planControls.forEach(control => {

  control.addEventListener(
    "click",
    () => {

      const planKey =
        control.dataset.plan;

      if (planKey) {
        openPlan(planKey);
      }

    }
  );

});


/* ================= MOBILE MENU ================= */

if (menuBtn && sidebar) {

  menuBtn.addEventListener(
    "click",
    () => {

      sidebar.classList.toggle(
        "mobile-open"
      );

    }
  );

}


/* ================= SIDEBAR LINKS ================= */

document
  .querySelectorAll(".side-link")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        if (sidebar) {

          sidebar.classList.remove(
            "mobile-open"
          );

        }

      }
    );

  });


/* ================= DEFAULT BUY BUTTON ================= */

const defaultBuy =
  document.getElementById("buyPlanBtn");

if (defaultBuy) {

  defaultBuy.textContent =
    "Buy Plan";

}


/* =====================================================
   INITIAL STATE
===================================================== */

showPage("home");


console.log(
  "My Manager website loaded successfully."
);
