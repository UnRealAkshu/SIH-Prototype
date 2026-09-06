const CATEGORIES = [
  "Bus Delay/Schedule",
  "Bus Condition/Maintenance",
  "Staff/Driver Conduct",
  "Ticketing/Fare",
  "Cleanliness",
  "Safety Issue",
  "Other"
];

const DEPARTMENTS = [
  "Bus Operations",
  "Maintenance",
  "Staff & Conduct",
  "Ticketing",
  "Other/Admin"
];

const PRIORITIES = ["Low", "Medium", "High", "Critical"];

const STATUSES = [
  "Submitted",
  "In Progress",
  "Resolved"
];

const PRIORITY_COLORS = {
  Low: "#2F9E5B",
  Medium: "#D6A419",
  High: "#D9622B",
  Critical: "#C23B3B"
};

const STRINGS = {
  en: {
    tagline: "Grievance classification & priority routing for SBSTC",
    navPassenger: "Passenger",
    navStaff: "Staff",

    tabSubmit: "Submit a complaint",
    tabTrack: "Track status",

    submitTitle: "Submit a complaint",

    formName: "Your name ",
    formPhone: "Phone number",
    formBus: "Bus number",
    formRoute: "Route (From → To)",
    formText: "Describe the problem",

    formTextPlaceholder:
      "e.g. My bus from Durgapur to Kolkata is 2 hours late and no one is giving information.",

    submitBtn: "Submit complaint",

    analyzing: "AI is reading your complaint…",

    howTitle: "How it works",
    how1: "Report the issue",
    how2: "AI reads & classifies",
    how3: "Routed automatically",
    how4: "Department resolves it",

    trackTitle: "Track your complaint",
    trackPlaceholder: "Enter Complaint ID or phone number",
    trackBtn: "Track",

    resultHeading: "Complaint received",
    idLabel: "Complaint ID",
    categoryLabel: "Category",
    priorityLabel: "Priority",
    deptLabel: "Routed to",
    confidenceLabel: "AI confidence",

    escalated: "Flagged for urgent action",

    statusSubmitted: "Submitted",
    statusProgress: "In progress",
    statusResolved: "Resolved",

    staffTitle: "Grievance dashboard",
    staffTotal: "Total complaints",
    staffOpen: "Open",
    staffProgress: "In progress",
    staffResolved: "Resolved",
    staffUrgent: "High / Critical",

    chartTitle: "Complaints by category",

    tableId: "ID",
    tableRoute: "Route / Bus",
    tableCategory: "Category",
    tablePriority: "Priority",
    tableDept: "Department",
    tableStatus: "Status",
    tableDate: "Received",

    refresh: "Refresh",

    sharedNote:
      "Demo data is stored locally in this browser for this prototype."
  },

  hi: {
    tagline: "SBSTC के लिए शिकायत वर्गीकरण और प्राथमिकता रूटिंग",
    navPassenger: "यात्री",
    navStaff: "SBSTC स्टाफ",

    tabSubmit: "शिकायत दर्ज करें",
    tabTrack: "स्थिति देखें",

    submitTitle: "शिकायत दर्ज करें",

    formName: "आपका नाम (वैकल्पिक)",
    formPhone: "फ़ोन नंबर (वैकल्पिक, ट्रैकिंग के लिए)",
    formBus: "बस नंबर (यदि पता हो)",
    formRoute: "रूट (कहाँ से कहाँ)",
    formText: "समस्या बताएं",

    formTextPlaceholder:
      "जैसे: मेरी बस दुर्गापुर से कोलकाता 2 घंटे लेट है और कोई जानकारी नहीं दे रहा।",

    submitBtn: "शिकायत भेजें",

    analyzing: "AI आपकी शिकायत पढ़ रहा है…",

    howTitle: "यह कैसे काम करता है",
    how1: "समस्या बताएं",
    how2: "AI समझता और वर्गीकृत करता है",
    how3: "स्वतः सही विभाग को भेजा गया",
    how4: "विभाग समाधान करता है",

    trackTitle: "शिकायत की स्थिति देखें",
    trackPlaceholder: "शिकायत आईडी या फ़ोन नंबर डालें",
    trackBtn: "खोजें",

    resultHeading: "शिकायत प्राप्त हुई",
    idLabel: "शिकायत आईडी",
    categoryLabel: "श्रेणी",
    priorityLabel: "प्राथमिकता",
    deptLabel: "भेजा गया",
    confidenceLabel: "AI विश्वास स्तर",

    escalated: "तुरंत कार्रवाई हेतु चिह्नित",

    statusSubmitted: "दर्ज हुई",
    statusProgress: "प्रगति पर",
    statusResolved: "हल हो गई",

    staffTitle: "शिकायत डैशबोर्ड",
    staffTotal: "कुल शिकायतें",
    staffOpen: "खुली",
    staffProgress: "प्रगति पर",
    staffResolved: "हल हो गई",
    staffUrgent: "उच्च / गंभीर",

    chartTitle: "श्रेणी अनुसार शिकायतें",

    tableId: "आईडी",
    tableRoute: "रूट / बस",
    tableCategory: "श्रेणी",
    tablePriority: "प्राथमिकता",
    tableDept: "विभाग",
    tableStatus: "स्थिति",
    tableDate: "प्राप्त हुई",

    refresh: "रीफ़्रेश करें",

    sharedNote:
      "डेमो डेटा इस ब्राउज़र में स्थानीय रूप से संग्रहीत है।"
  },

  bn: {
    tagline: "SBSTC-এর জন্য অভিযোগ শ্রেণীবিভাগ ও অগ্রাধিকার রাউটিং",
    navPassenger: "যাত্রী",
    navStaff: "SBSTC কর্মী",

    tabSubmit: "অভিযোগ জানান",
    tabTrack: "অবস্থা দেখুন",

    submitTitle: "অভিযোগ জানান",

    formName: "আপনার নাম (ঐচ্ছিক)",
    formPhone: "ফোন নম্বর (ঐচ্ছিক, ট্র্যাকিংয়ের জন্য)",
    formBus: "বাস নম্বর (জানা থাকলে)",
    formRoute: "রুট (কোথা থেকে কোথায়)",
    formText: "সমস্যাটি লিখুন",

    formTextPlaceholder:
      "যেমন: আমার বাস দুর্গাপুর থেকে কলকাতা ২ ঘণ্টা দেরি করছে এবং কেউ কোনো তথ্য দিচ্ছে না।",

    submitBtn: "অভিযোগ জমা দিন",

    analyzing: "AI আপনার অভিযোগ পড়ছে…",

    howTitle: "এটি কীভাবে কাজ করে",
    how1: "সমস্যাটি জানান",
    how2: "AI বুঝে শ্রেণীবদ্ধ করে",
    how3: "সঠিক বিভাগে পাঠানো হয়",
    how4: "বিভাগ সমাধান করে",

    trackTitle: "অভিযোগের অবস্থা দেখুন",
    trackPlaceholder: "অভিযোগ আইডি বা ফোন নম্বর দিন",
    trackBtn: "খুঁজুন",

    resultHeading: "অভিযোগ গৃহীত হয়েছে",
    idLabel: "অভিযোগ আইডি",
    categoryLabel: "বিভাগ",
    priorityLabel: "অগ্রাধিকার",
    deptLabel: "পাঠানো হয়েছে",
    confidenceLabel: "AI নিশ্চয়তা",

    escalated: "জরুরি পদক্ষেপের জন্য চিহ্নিত",

    statusSubmitted: "জমা হয়েছে",
    statusProgress: "চলমান",
    statusResolved: "সমাধান হয়েছে",

    staffTitle: "অভিযোগ ড্যাশবোর্ড",
    staffTotal: "মোট অভিযোগ",
    staffOpen: "খোলা",
    staffProgress: "চলমান",
    staffResolved: "সমাধান হয়েছে",
    staffUrgent: "উচ্চ / সংকটজনক",

    chartTitle: "বিভাগ অনুযায়ী অভিযোগ",

    tableId: "আইডি",
    tableRoute: "রুট / বাস",
    tableCategory: "বিভাগ",
    tablePriority: "অগ্রাধিকার",
    tableDept: "বিভাগ",
    tableStatus: "অবস্থা",
    tableDate: "প্রাপ্ত হয়েছে",

    refresh: "রিফ্রেশ করুন",

    sharedNote:
      "ডেমো ডেটা এই ব্রাউজারে স্থানীয়ভাবে সংরক্ষিত।"
  }
};

let lang = "en";
let role = "passenger";

let complaints = loadComplaints();
let result = null;


/* ----------------------------- */
/* Utility                       */
/* ----------------------------- */

const $ = (id) => document.getElementById(id);


function loadComplaints() {
  try {
    return JSON.parse(
      localStorage.getItem("buscare-complaints-v1") || "[]"
    );
  } catch (error) {
    return [];
  }
}


function saveComplaints() {
  localStorage.setItem(
    "buscare-complaints-v1",
    JSON.stringify(complaints)
  );
}


function makeId() {
  return (
    "SBSTC-" +
    Date.now().toString().slice(-6) +
    Math.floor(1000 + Math.random() * 9000)
  );
}


function escapeHtml(value = "") {
  return String(value).replace(
    /[&<>"']/g,
    function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[char];
    }
  );
}


/* ----------------------------- */
/* Demo AI Classification        */
/* ----------------------------- */

function analyzeComplaint(text, busNumber, route) {

  const t = text.toLowerCase();

  let category = "Other";
  let department = "Other/Admin";
  let priority = "Low";


  /* Safety / emergency */

  if (
    /(brake|fire|accident|dangerous|rash|harassment|unsafe|hit|smoke|emergency)/.test(t)
  ) {

    category =
      /(driver|conductor|staff)/.test(t)
        ? "Staff/Driver Conduct"
        : "Safety Issue";

    department =
      category === "Staff/Driver Conduct"
        ? "Staff & Conduct"
        : "Bus Operations";

    priority =
      /(brake|fire|accident|dangerous|rash|harassment|unsafe|emergency)/.test(t)
        ? "Critical"
        : "High";
  }


  /* Delay */

  else if (
    /(delay|late|cancel|missed|schedule)/.test(t)
  ) {

    category = "Bus Delay/Schedule";
    department = "Bus Operations";

    priority =
      /(2 hour|two hour|3 hour|three hour|hours late|बहुत देर|দেরি)/.test(t)
        ? "High"
        : "Medium";
  }


  /* Ticket */

  else if (
    /(fare|ticket|overcharg|conductor charged|pass)/.test(t)
  ) {

    category = "Ticketing/Fare";
    department = "Ticketing";
    priority = "Medium";
  }


  /* Cleanliness */

  else if (
    /(clean|dirty|garbage|smell|dirt)/.test(t)
  ) {

    category = "Cleanliness";
    department = "Maintenance";
    priority = "Medium";
  }


  /* Bus condition */

  else if (
    /(seat|ac |air conditioning|window|wheel|engine|tyre|tire|broken|maintenance)/.test(t)
  ) {

    category = "Bus Condition/Maintenance";
    department = "Maintenance";
    priority = "Medium";
  }


  /* Staff behaviour */

  else if (
    /(driver|conductor|behaviour|behavior|misbehav|rude)/.test(t)
  ) {

    category = "Staff/Driver Conduct";
    department = "Staff & Conduct";
    priority = "High";
  }


  /* Feedback */

  else if (
    /(suggest|feedback|good|thank)/.test(t)
  ) {

    category = "Other";
    department = "Other/Admin";
    priority = "Low";
  }


  /* Default */

  else {

    category = "Other";
    department = "Other/Admin";
    priority = "Low";
  }


  let confidence = 78;

  if (busNumber || route) {
    confidence += 7;
  }

  if (category !== "Other") {
    confidence += 8;
  }

  confidence = Math.min(confidence, 96);


  const summary = text
    .trim()
    .split(/\s+/)
    .slice(0, 12)
    .join(" ");


  return {
    category,
    department,
    priority,
    confidence,
    extractedBusNumber: busNumber || null,
    extractedRoute: route || null,
    summary
  };
}


/* ----------------------------- */
/* Status Stepper                */
/* ----------------------------- */

function statusStepper(status) {

  const idx = STATUSES.indexOf(status);

  const labels = [
    STRINGS[lang].statusSubmitted,
    STRINGS[lang].statusProgress,
    STRINGS[lang].statusResolved
  ];


  return `
    <div class="stepper">

      ${labels
        .map(
          (label, i) => `
            <div class="step">

              <div class="circle ${i <= idx ? "done" : ""}">
                ${i < idx ? "✓" : i + 1}
              </div>

              <span class="label">
                ${label}
              </span>

            </div>

            ${
              i < 2
                ? `
                  <div class="line ${i < idx ? "done" : ""}"></div>
                `
                : ""
            }
          `
        )
        .join("")}

    </div>
  `;
}


/* ----------------------------- */
/* Result Card                   */
/* ----------------------------- */

function resultCard(c, withStepper = false) {

  const urgent =
    c.priority === "High" ||
    c.priority === "Critical";

  const tr = STRINGS[lang];


  return `
    <div class="result-head">

      <div>

        <h2>
          ✅ ${tr.resultHeading}
        </h2>

        <div class="id">
          ${tr.idLabel}: ${escapeHtml(c.id)}
        </div>

      </div>

    </div>


    ${
      urgent
        ? `
          <div class="flag">
            ⚠️ ${tr.escalated}
          </div>
        `
        : ""
    }


    <div class="result-grid">


      <div class="metric">

        <small>
          ${tr.categoryLabel}
        </small>

        <strong>
          ${escapeHtml(c.category)}
        </strong>

      </div>


      <div class="metric">

        <small>
          ${tr.priorityLabel}
        </small>

        <strong>

          <span
            class="priority-dot"
            style="background:${PRIORITY_COLORS[c.priority]}"
          ></span>

          ${escapeHtml(c.priority)}

        </strong>

      </div>


      <div class="metric">

        <small>
          ${tr.deptLabel}
        </small>

        <strong>
          ${escapeHtml(c.department)}
        </strong>

      </div>


      <div class="metric">

        <small>
          ${tr.confidenceLabel}
        </small>

        <strong>
          ${c.confidence}%
        </strong>

      </div>

    </div>


    ${
      c.extractedRoute
        ? `
          <div class="muted">
            Route:
            ${escapeHtml(c.extractedRoute)}
          </div>
        `
        : ""
    }


    ${
      c.extractedBusNumber
        ? `
          <div class="muted">
            Bus No:
            ${escapeHtml(c.extractedBusNumber)}
          </div>
        `
        : ""
    }


    ${
      c.summary
        ? `
          <p
            class="muted"
            style="margin-top:10px"
          >
            “${escapeHtml(c.summary)}”
          </p>
        `
        : ""
    }


    ${
      withStepper
        ? statusStepper(c.status)
        : `
          <div
            class="muted"
            style="margin-top:10px"
          >
            Save this complaint ID to track it later.
          </div>
        `
    }

  `;
}


/* ----------------------------- */
/* Passenger Result              */
/* ----------------------------- */

function renderResult() {

  $("howItWorks").classList.toggle(
    "hidden",
    !!result
  );

  $("resultState").classList.toggle(
    "hidden",
    !result
  );


  if (result) {

    $("resultState").innerHTML =
      resultCard(result, false);

  }
}


/* ----------------------------- */
/* Submit Complaint               */
/* ----------------------------- */

function submitComplaint() {

  const text =
    $("complaintText").value.trim();


  if (!text) {

    $("formError").textContent =
      "Please describe the problem.";

    $("formError").classList.remove(
      "hidden"
    );

    return;
  }


  $("formError").classList.add(
    "hidden"
  );


  $("loadingState").classList.remove(
    "hidden"
  );

  $("howItWorks").classList.add(
    "hidden"
  );

  $("resultState").classList.add(
    "hidden"
  );


  setTimeout(() => {

    const ai = analyzeComplaint(
      text,
      $("busNumber").value.trim(),
      $("route").value.trim()
    );


    const complaint = {

      id: makeId(),

      name:
        $("name").value.trim() ||
        null,

      phone:
        $("phone").value.trim() ||
        null,

      busNumber:
        $("busNumber").value.trim() ||
        null,

      route:
        $("route").value.trim() ||
        null,

      text,

      category: ai.category,

      department: ai.department,

      priority: ai.priority,

      confidence: ai.confidence,

      extractedBusNumber:
        ai.extractedBusNumber,

      extractedRoute:
        ai.extractedRoute,

      summary:
        ai.summary,

      status:
        "Submitted",

      createdAt:
        Date.now()
    };


    complaints.unshift(
      complaint
    );

    saveComplaints();


    result = complaint;


    $("loadingState").classList.add(
      "hidden"
    );


    renderResult();


  }, 900);
}


/* ----------------------------- */
/* Track Complaint               */
/* ----------------------------- */

function trackComplaint() {

  const q =
    $("trackQuery").value
      .trim()
      .toLowerCase();


  if (!q) {

    $("trackResult").innerHTML = `
      <div class="muted">
        Please enter a complaint ID or phone number.
      </div>
    `;

    return;
  }


  const c =
    complaints.find(
      (x) =>
        x.id.toLowerCase() === q ||
        (
          x.phone &&
          x.phone.toLowerCase() === q
        )
    );


  if (!c) {

    $("trackResult").innerHTML = `
      <div class="muted">
        No complaint found with that ID or number.
      </div>
    `;

    return;
  }


  $("trackResult").innerHTML = `
    <div class="card">
      ${resultCard(c, true)}
    </div>
  `;
}


/* ----------------------------- */
/* Staff Dashboard               */
/* ----------------------------- */

function renderStaff() {

  $("statTotal").textContent =
    complaints.length;


  $("statOpen").textContent =
    complaints.filter(
      (c) => c.status === "Submitted"
    ).length;


  $("statProgress").textContent =
    complaints.filter(
      (c) => c.status === "In Progress"
    ).length;


  $("statResolved").textContent =
    complaints.filter(
      (c) => c.status === "Resolved"
    ).length;


  $("statUrgent").textContent =
    complaints.filter(
      (c) =>
        c.priority === "High" ||
        c.priority === "Critical"
    ).length;


  /* Category chart */

  const catCounts = {};

  CATEGORIES.forEach(
    (c) => {
      catCounts[c] =
        complaints.filter(
          (x) => x.category === c
        ).length;
    }
  );


  const max =
    Math.max(
      1,
      ...Object.values(catCounts)
    );


  $("categoryChart").innerHTML =
    Object.entries(catCounts)
      .filter(
        ([, value]) => value > 0
      )
      .map(
        ([key, value]) => `
          <div class="bar-row">

            <div>
              ${escapeHtml(key)}
            </div>

            <div class="bar-track">

              <div
                class="bar-fill"
                style="width:${
                  (value / max) * 100
                }%"
              ></div>

            </div>

            <b>
              ${value}
            </b>

          </div>
        `
      )
      .join("") ||
    `
      <div class="muted">
        No complaints yet.
      </div>
    `;


  /* Filters */

  const filters = {

    dept:
      $("filterDept").value,

    priority:
      $("filterPriority").value,

    status:
      $("filterStatus").value
  };


  const filtered =
    complaints.filter(
      (c) =>

        (
          filters.dept === "All" ||
          c.department === filters.dept
        )

        &&

        (
          filters.priority === "All" ||
          c.priority === filters.priority
        )

        &&

        (
          filters.status === "All" ||
          c.status === filters.status
        )
    );


  /* Table */

  $("complaintTableBody").innerHTML =
    filtered
      .map(
        (c) => `

          <tr>

            <td>
              ${escapeHtml(c.id)}
            </td>


            <td>

              ${escapeHtml(
                c.route ||
                c.extractedRoute ||
                "—"
              )}

              ${
                c.busNumber ||
                c.extractedBusNumber
                  ? `
                    ·
                    ${escapeHtml(
                      c.busNumber ||
                      c.extractedBusNumber
                    )}
                  `
                  : ""
              }

            </td>


            <td>
              ${escapeHtml(
                c.category
              )}
            </td>


            <td>

              <span class="badge">

                <span
                  class="priority-dot"
                  style="
                    background:
                    ${PRIORITY_COLORS[c.priority]}
                  "
                ></span>

                ${escapeHtml(
                  c.priority
                )}

              </span>

            </td>


            <td>
              ${escapeHtml(
                c.department
              )}
            </td>


            <td>

              <select
                class="status-select"
                data-id="${escapeHtml(c.id)}"
              >

                ${STATUSES
                  .map(
                    (s) => `
                      <option
                        ${
                          s === c.status
                            ? "selected"
                            : ""
                        }
                      >
                        ${s}
                      </option>
                    `
                  )
                  .join("")}

              </select>

            </td>


            <td>

              ${new Date(
                c.createdAt
              ).toLocaleString()}

            </td>

          </tr>

        `
      )
      .join("");


  if (!filtered.length) {

    $("complaintTableBody").innerHTML = `
      <tr>

        <td
          colspan="7"
          class="muted"
          style="padding:25px;text-align:center"
        >
          No complaints match the filters.
        </td>

      </tr>
    `;
  }


  /* Status update */

  document
    .querySelectorAll(
      ".status-select"
    )
    .forEach((el) => {

      el.addEventListener(
        "change",
        (e) => {

          const c =
            complaints.find(
              (x) =>
                x.id ===
                e.target.dataset.id
            );


          if (c) {

            c.status =
              e.target.value;

            saveComplaints();

            renderStaff();
          }

        }
      );

    });
}


/* ----------------------------- */
/* Populate Filters              */
/* ----------------------------- */

function populateFilters() {

  $("filterDept").innerHTML =
    `
      <option value="All">
        Department: All
      </option>
    ` +

    DEPARTMENTS
      .map(
        (x) =>
          `<option>${x}</option>`
      )
      .join("");


  $("filterPriority").innerHTML =
    `
      <option value="All">
        Priority: All
      </option>
    ` +

    PRIORITIES
      .map(
        (x) =>
          `<option>${x}</option>`
      )
      .join("");


  $("filterStatus").innerHTML =
    `
      <option value="All">
        Status: All
      </option>
    ` +

    STATUSES
      .map(
        (x) =>
          `<option>${x}</option>`
      )
      .join("");
}


/* ----------------------------- */
/* Switch Passenger / Staff      */
/* ----------------------------- */

function switchRole(next) {

  role = next;


  $("passengerRole")
    .classList.toggle(
      "active",
      role === "passenger"
    );


  $("staffRole")
    .classList.toggle(
      "active",
      role === "staff"
    );


  $("passengerView")
    .classList.toggle(
      "hidden",
      role !== "passenger"
    );


  $("staffView")
    .classList.toggle(
      "hidden",
      role !== "staff"
    );


  if (role === "staff") {
    renderStaff();
  }
}


/* ----------------------------- */
/* Language                      */
/* ----------------------------- */

function applyLanguage() {

  const tr =
    STRINGS[lang];


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach((el) => {

      const key =
        el.dataset.i18n;


      if (tr[key]) {
        el.textContent =
          tr[key];
      }

    });


  document
    .querySelectorAll(
      "[data-i18n-placeholder]"
    )
    .forEach((el) => {

      const key =
        el.dataset.i18nPlaceholder;


      if (tr[key]) {
        el.placeholder =
          tr[key];
      }

    });


  if (result) {
    renderResult();
  }

}


/* ----------------------------- */
/* Event Listeners               */
/* ----------------------------- */

$("submitComplaint")
  .addEventListener(
    "click",
    submitComplaint
  );


$("trackBtn")
  .addEventListener(
    "click",
    trackComplaint
  );


$("refreshStaff")
  .addEventListener(
    "click",
    () => {

      complaints =
        loadComplaints();

      renderStaff();

    }
  );


$("filterDept")
  .addEventListener(
    "change",
    renderStaff
  );


$("filterPriority")
  .addEventListener(
    "change",
    renderStaff
  );


$("filterStatus")
  .addEventListener(
    "change",
    renderStaff
  );


$("passengerRole")
  .addEventListener(
    "click",
    () =>
      switchRole("passenger")
  );


$("staffRole")
  .addEventListener(
    "click",
    () =>
      switchRole("staff")
  );


$("submitTab")
  .addEventListener(
    "click",
    () => {

      $("submitTab")
        .classList.add(
          "active"
        );

      $("trackTab")
        .classList.remove(
          "active"
        );

      $("submitPanel")
        .classList.remove(
          "hidden"
        );

      $("trackPanel")
        .classList.add(
          "hidden"
        );

    }
  );


$("trackTab")
  .addEventListener(
    "click",
    () => {

      $("trackTab")
        .classList.add(
          "active"
        );

      $("submitTab")
        .classList.remove(
          "active"
        );

      $("submitPanel")
        .classList.add(
          "hidden"
        );

      $("trackPanel")
        .classList.remove(
          "hidden"
        );

    }
  );


$("languageSelect")
  .addEventListener(
    "change",
    (e) => {

      lang =
        e.target.value;

      applyLanguage();

    }
  );


/* ----------------------------- */
/* Initialize                    */
/* ----------------------------- */

populateFilters();
applyLanguage();
