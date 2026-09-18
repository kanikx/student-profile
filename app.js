/* ----------------------------------------------------
   Student Profile, Mark Percentile & Transport System
   Application Core Logic & Reactive Controller
   ---------------------------------------------------- */

// Exact Read-Only Student Profile & Academic Data Store
const DEFAULT_STUDENT_DATA = {
  profile: {
    name: "KANIKA V",
    regNo: "24UCS23",
    dob: "16/03/2007",
    gender: "FEMALE",
    dept: "COMPUTER SCIENCE",
    college: "THIAGARAJAR COLLEGE",
    year: "2024-2027",
    semester: "5TH",
    email: "24UCS23@TCARTS.IN",
    phone: "8248335837",
    address: "307, SRI BALAJI ILLAM, SOLAIALAGU PURAM 3RD STREET, MADURAI - 11",
    photoUrl: "profile-photo.png"
  },
  subjects: {
    sem1: [
      { code: "U24P1TA11", name: "POTHUTAMIL-I (TAMIL ILAKKIYA VARALARU-I)", intStr: "19/25", extStr: "42/75", totalObt: 61, totalMax: 100, credit: 3, gpa: 6.1, grade: "C", result: "Pass" },
      { code: "U24P2EN11", name: "ENGLISH THROUGH PROSE", intStr: "17/25", extStr: "42/75", totalObt: 59, totalMax: 100, credit: 3, gpa: 5.9, grade: "D", result: "Pass" },
      { code: "U24AEES11", name: "ENVIRONMENTAL STUDIES", intStr: "12/15", extStr: "29/35", totalObt: 41, totalMax: 50, credit: 2, gpa: 8.2, grade: "A", result: "Pass" },
      { code: "UCS24CT11", name: "PROGRAMMING IN C", intStr: "20/25", extStr: "57/75", totalObt: 77, totalMax: 100, credit: 4, gpa: 7.7, grade: "B", result: "Pass" },
      { code: "UCS24CT12", name: "DIGITAL PRINCIPLES & COMPUTER ORGANIZATION", intStr: "14/25", extStr: "41/75", totalObt: 55, totalMax: 100, credit: 4, gpa: 5.5, grade: "D", result: "Pass" },
      { code: "UCS24CL11", name: "PROGRAMMING IN C LAB", intStr: "36/40", extStr: "60/60", totalObt: 96, totalMax: 100, credit: 2, gpa: 9.6, grade: "O", result: "Pass" },
      { code: "UMA24GT11S", name: "DISCRETE MATHEMATICAL STRUCTURES", intStr: "19/25", extStr: "57/75", totalObt: 76, totalMax: 100, credit: 5, gpa: 7.6, grade: "B", result: "Pass" }
    ],
    sem2: [
      { code: "U24P1TA21", name: "POTHU TAMIL - II (TAMIL ILAKKIYAVARALARU - II)", intStr: "22/25", extStr: "42/75", totalObt: 64, totalMax: 100, credit: 3, gpa: 6.4, grade: "C", result: "Pass" },
      { code: "U24P2EN21", name: "ENGLISH THROUGH FICTION", intStr: "18/25", extStr: "41/75", totalObt: 59, totalMax: 100, credit: 3, gpa: 5.9, grade: "D", result: "Pass" },
      { code: "U24AEVE21", name: "VALUE EDUCATION", intStr: "10/15", extStr: "27/35", totalObt: 37, totalMax: 50, credit: 2, gpa: 7.4, grade: "B", result: "Pass" },
      { code: "UCS24CT21", name: "JAVA PROGRAMMING", intStr: "18/25", extStr: "58/75", totalObt: 76, totalMax: 100, credit: 4, gpa: 7.6, grade: "B", result: "Pass" },
      { code: "UCS24CL21", name: "JAVA PROGRAMMING LAB", intStr: "40/40", extStr: "57/60", totalObt: 97, totalMax: 100, credit: 2, gpa: 9.7, grade: "O", result: "Pass" },
      { code: "UCS24CL22", name: "WEB TECHNOLOGY LAB", intStr: "35/40", extStr: "59/60", totalObt: 94, totalMax: 100, credit: 2, gpa: 9.4, grade: "O", result: "Pass" },
      { code: "UMA24GT21S", name: "BASIC STATISTICS", intStr: "18/25", extStr: "62/75", totalObt: 80, totalMax: 100, credit: 5, gpa: 8.0, grade: "A", result: "Pass" }
    ],
    sem3: [
      { code: "UCS24CT31", name: "RELATIONAL DATABASE MANAGEMENT SYSTEMS", intStr: "23/25", extStr: "47/75", totalObt: 70, totalMax: 100, credit: 4, gpa: 7.0, grade: "B", result: "Pass" },
      { code: "UCS24CT32", name: "DATA STRUCTURES AND ALGORITHMS", intStr: "14/25", extStr: "40/75", totalObt: 54, totalMax: 100, credit: 4, gpa: 5.4, grade: "D", result: "Pass" },
      { code: "UCS24CL31", name: "RELATIONAL DATABASE MANAGEMENT SYSTEMS LAB", intStr: "39/40", extStr: "55/60", totalObt: 94, totalMax: 100, credit: 2, gpa: 9.4, grade: "O", result: "Pass" },
      { code: "UCS24CL32", name: "DATA STRUCTURES LAB", intStr: "34/40", extStr: "59/60", totalObt: 93, totalMax: 100, credit: 2, gpa: 9.3, grade: "O", result: "Pass" },
      { code: "UMA24GT31S", name: "COMPUTATIONAL METHODS", intStr: "22/25", extStr: "59/75", totalObt: 81, totalMax: 100, credit: 5, gpa: 8.1, grade: "A", result: "Pass" },
      { code: "U24P1TA31", name: "POTHUTAMIL-III (TAMILAGA VARALARUM PANPADUM)", intStr: "21/25", extStr: "46/75", totalObt: 67, totalMax: 100, credit: 3, gpa: 6.7, grade: "C", result: "Pass" },
      { code: "UMA24NT31", name: "MATHEMATICS FOR COMPETITIVE EXAMINATIONS - I", intStr: "11/15", extStr: "32/35", totalObt: 43, totalMax: 50, credit: 2, gpa: 8.6, grade: "A", result: "Pass" }
    ],
    sem4: [
      { code: "U24P1TA41", name: "POTHUTAMIL – IV (THAMIZHUM ARIVIYALUM)", intStr: "20/25", extStr: "54/75", totalObt: 74, totalMax: 100, credit: 3, gpa: 7.4, grade: "B", result: "Pass" },
      { code: "UMA24NT41", name: "MATHEMATICS FOR COMPETITIVE EXAMINATIONS - II", intStr: "11/15", extStr: "31/35", totalObt: 42, totalMax: 50, credit: 2, gpa: 8.4, grade: "A", result: "Pass" },
      { code: "UCS24CT41", name: "ADVANCED JAVA PROGRAMMING", intStr: "14/25", extStr: "48/75", totalObt: 62, totalMax: 100, credit: 4, gpa: 6.2, grade: "C", result: "Pass" },
      { code: "UCS24CT42", name: "COMPUTER NETWORKS", intStr: "19/25", extStr: "37/75", totalObt: 56, totalMax: 100, credit: 4, gpa: 5.6, grade: "D", result: "Pass" },
      { code: "UCS24CL41", name: "ADVANCED JAVA PROGRAMMING LAB", intStr: "32/40", extStr: "47/60", totalObt: 79, totalMax: 100, credit: 2, gpa: 7.9, grade: "B", result: "Pass" },
      { code: "UCS24CL42", name: "PHP PROGRAMMING LAB", intStr: "40/40", extStr: "58/60", totalObt: 98, totalMax: 100, credit: 2, gpa: 9.8, grade: "O", result: "Pass" },
      { code: "UMA24GT41S", name: "OPERATIONS RESEARCH", intStr: "21/25", extStr: "48/75", totalObt: 69, totalMax: 100, credit: 5, gpa: 6.9, grade: "C", result: "Pass" },
      { code: "U24PVNSS41", name: "NSS", intStr: "68/75", extStr: "22/25", totalObt: 90, totalMax: 100, credit: 1, gpa: 9.0, grade: "O", result: "Pass" }
    ]
  },
  transport: {
    transportType: "Government Bus",
    busNum: "Government Bus",
    routeNum: "Crime Branch → Theppakulam",
    route: "Crime Branch → Theppakulam",
    morningTravelTime: "8:10 AM – 8:25 AM",
    travelTime: "8:10 AM – 8:25 AM",
    studentStop: "Theppakulam",
    stops: [
      {
        id: "st_1",
        name: "Crime Branch",
        boardingTime: "8:10 AM",
        departureTime: "8:10 AM",
        isStudentStop: false
      },
      {
        id: "st_2",
        name: "Theppakulam",
        boardingTime: "8:10 AM",
        departureTime: "8:25 AM",
        isStudentStop: true
      }
    ]
  }
};

class StudentApp {
  constructor() {
    this.data = this.loadData();
    this.chartInstance = null;
    this.init();
  }

  // Load data from LocalStorage or use exact student data
  loadData() {
    const saved = localStorage.getItem('personal_student_app_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.profile || parsed.profile.name !== 'KANIKA V') {
          parsed.profile = DEFAULT_STUDENT_DATA.profile;
        }
        if (!parsed.subjects || !parsed.subjects.sem1 || parsed.subjects.sem1.length === 0) {
          parsed.subjects = DEFAULT_STUDENT_DATA.subjects;
        }
        if (
          !parsed.transport ||
          !parsed.transport.transportType ||
          parsed.transport.transportType === '—' ||
          !parsed.transport.stops ||
          parsed.transport.stops.length === 0 ||
          !parsed.transport.stops.some(s => s.isStudentStop && s.name === 'Theppakulam')
        ) {
          parsed.transport = JSON.parse(JSON.stringify(DEFAULT_STUDENT_DATA.transport));
        } else {
          parsed.transport.transportType = DEFAULT_STUDENT_DATA.transport.transportType;
          parsed.transport.busNum = DEFAULT_STUDENT_DATA.transport.busNum;
          parsed.transport.routeNum = DEFAULT_STUDENT_DATA.transport.routeNum;
          parsed.transport.route = DEFAULT_STUDENT_DATA.transport.route;
          parsed.transport.morningTravelTime = DEFAULT_STUDENT_DATA.transport.morningTravelTime;
          parsed.transport.travelTime = DEFAULT_STUDENT_DATA.transport.travelTime;
          parsed.transport.studentStop = DEFAULT_STUDENT_DATA.transport.studentStop;
          parsed.transport.stops = DEFAULT_STUDENT_DATA.transport.stops;
        }
        localStorage.setItem('personal_student_app_data', JSON.stringify(parsed));
        return parsed;
      } catch (e) {
        console.error("Error parsing saved student data:", e);
      }
    }
    return JSON.parse(JSON.stringify(DEFAULT_STUDENT_DATA));
  }

  // Save data to LocalStorage
  saveData() {
    localStorage.setItem('personal_student_app_data', JSON.stringify(this.data));
    this.render();
  }

  // Application initialization
  init() {
    this.setupTheme();
    this.setupNavigation();
    this.setupModals();
    this.setupForms();
    this.render();
    this.initMarksChart();
  }

  // Dark / Light Mode theme setup
  setupTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('app_theme') || 'light';

    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);

    toggleBtn?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('app_theme', next);
      this.updateThemeIcon(next);
    });
  }

  updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  // Navigation controller for direct dashboard and sidebar view switching (ONLY ONE VIEW VISIBLE AT A TIME)
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navigateBtns = document.querySelectorAll('.navigate-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const toggleBtn = document.getElementById('sidebar-toggle');
    const pageTitle = document.getElementById('current-page-title');
    const pageSubtitle = document.getElementById('current-page-subtitle');

    const titlesMap = {
      'dashboard-page': { title: 'Dashboard', subtitle: 'Welcome to your personal student portal' },
      'profile-page': { title: 'My Profile', subtitle: 'Official Read-Only Student Information' },
      'marks-page': { title: 'Mark Percentile', subtitle: 'Academic marks up to 2nd year (Sem 1 to 4)' },
      'transport-page': { title: 'Transport Sequence', subtitle: 'Numbered transportation route and stop order' }
    };

    const switchView = (targetId) => {
      // Hide all page views
      document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
        view.style.display = 'none';
      });

      // Show strictly target view
      const targetView = document.getElementById(targetId);
      if (targetView) {
        targetView.classList.add('active');
        targetView.style.display = 'block';
      }

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-view') === targetId);
      });

      if (titlesMap[targetId]) {
        if (pageTitle) pageTitle.textContent = titlesMap[targetId].title;
        if (pageSubtitle) pageSubtitle.textContent = titlesMap[targetId].subtitle;
      }

      sidebar?.classList.remove('open');
      overlay?.classList.remove('show');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (targetId === 'marks-page') {
        setTimeout(() => this.initMarksChart(), 100);
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const viewId = link.getAttribute('data-view');
        switchView(viewId);
      });
    });

    navigateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        switchView(target);
      });
    });

    toggleBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
      overlay?.classList.toggle('show');
    });

    overlay?.addEventListener('click', () => {
      sidebar?.classList.remove('open');
      overlay?.classList.remove('show');
    });

    // Reset data button
    const resetBtn = document.getElementById('reset-data-btn');
    resetBtn?.addEventListener('click', () => {
      if (confirm("Reset data to official student records?")) {
        localStorage.removeItem('personal_student_app_data');
        this.data = JSON.parse(JSON.stringify(DEFAULT_STUDENT_DATA));
        this.saveData();
        this.showToast("Data reset to official student records.", "info");
      }
    });

    // Initial page load: ensure dashboard is active and non-active pages hidden
    switchView('dashboard-page');
  }

  // Modal setup for transport stops
  setupModals() {
    const closeBtns = document.querySelectorAll('[data-close]');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close');
        this.closeModal(modalId);
      });
    });

    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal(modal.id);
        }
      });
    });

    // Add Transport Stop Modal launch
    document.getElementById('add-stop-btn')?.addEventListener('click', () => {
      document.getElementById('stop-form')?.reset();
      document.getElementById('stop-edit-id').value = '';
      document.getElementById('stop-modal-title').innerHTML = '<i class="fa-solid fa-location-dot"></i> Add Transport Stop';
      document.getElementById('stop-seq').value = this.data.transport.stops.length + 1;
      this.openModal('stop-modal');
    });

    // Edit Transport Header Modal launch
    document.getElementById('edit-transport-info-btn')?.addEventListener('click', () => {
      document.getElementById('hdr-type').value = this.data.transport.transportType !== '—' ? this.data.transport.transportType : '';
      document.getElementById('hdr-bus').value = this.data.transport.busNum !== '—' ? this.data.transport.busNum : '';
      document.getElementById('hdr-route').value = this.data.transport.routeNum !== '—' ? this.data.transport.routeNum : '';
      this.openModal('transport-header-modal');
    });
  }

  openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'flex';
    }
  }

  closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  // Form submission listeners for transport
  setupForms() {
    // 1. Transport Stop Form
    const stopForm = document.getElementById('stop-form');
    stopForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('stop-name').value.trim();
      const seq = parseInt(document.getElementById('stop-seq').value) || 1;
      const boardingTime = document.getElementById('stop-boarding').value.trim();
      const departureTime = document.getElementById('stop-departure').value.trim();
      const isStudentStop = document.getElementById('stop-is-student').checked;
      const editId = document.getElementById('stop-edit-id').value;

      if (!name) {
        this.showToast("Stop name is required.", "error");
        return;
      }

      let stops = this.data.transport.stops;
      if (isStudentStop) {
        stops.forEach(s => s.isStudentStop = false);
      }

      if (editId) {
        const target = stops.find(s => s.id === editId);
        if (target) {
          target.name = name;
          target.boardingTime = boardingTime;
          target.departureTime = departureTime;
          target.isStudentStop = isStudentStop;
        }
        this.showToast("Transport stop updated!", "success");
      } else {
        const newStop = {
          id: 'st_' + Date.now(),
          name: name,
          boardingTime: boardingTime,
          departureTime: departureTime,
          isStudentStop: isStudentStop
        };

        const targetIndex = Math.max(0, Math.min(seq - 1, stops.length));
        stops.splice(targetIndex, 0, newStop);
        this.showToast("New transport stop added!", "success");
      }

      this.saveData();
      this.closeModal('stop-modal');
    });

    // 2. Transport Header Form
    const hdrForm = document.getElementById('transport-header-form');
    hdrForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.data.transport.transportType = document.getElementById('hdr-type').value.trim() || '—';
      this.data.transport.busNum = document.getElementById('hdr-bus').value.trim() || '—';
      this.data.transport.routeNum = document.getElementById('hdr-route').value.trim() || '—';

      this.saveData();
      this.closeModal('transport-header-modal');
      this.showToast("Transport info updated!", "success");
    });
  }

  // Master render routine updating all components and pages
  render() {
    this.renderProfile();
    const metrics = this.renderMarks();
    this.renderTransport();
    this.renderDashboard(metrics);
  }

  // Render 1. Dashboard View
  renderDashboard(metrics) {
    const p = this.data.profile;
    const t = this.data.transport;
    const photo = p.photoUrl || 'profile-photo.png';

    const sbAv = document.getElementById('sidebar-avatar');
    if (sbAv) sbAv.src = photo;

    const hdrAv = document.getElementById('header-avatar');
    if (hdrAv) hdrAv.src = photo;

    document.getElementById('sidebar-name').textContent = p.name;
    document.getElementById('sidebar-reg').textContent = p.regNo;

    document.getElementById('header-name').textContent = p.name;
    document.getElementById('header-year').textContent = p.semester;

    document.getElementById('dash-welcome-name').textContent = p.name;
    document.getElementById('dash-welcome-dept').textContent = p.dept;
    document.getElementById('dash-overall-percent').textContent = `${metrics.overallPct}%`;
    document.getElementById('dash-bus-route').textContent = t.routeNum;
    document.getElementById('dash-reg-no').textContent = p.regNo;

    document.getElementById('dash-preview-name').textContent = p.name;
    document.getElementById('dash-preview-reg').textContent = p.regNo;
    document.getElementById('dash-preview-dept').textContent = p.dept;

    document.getElementById('dash-preview-yr1').textContent = `${metrics.yr1Pct}%`;
    document.getElementById('dash-preview-yr2').textContent = `${metrics.yr2Pct}%`;
    document.getElementById('dash-preview-overall').textContent = `${metrics.overallPct}%`;

    document.getElementById('dash-preview-transport-type').textContent = t.transportType;
    document.getElementById('dash-preview-bus-info').textContent = t.busNum !== '—' ? `${t.busNum} (${t.routeNum})` : '—';
    document.getElementById('dash-preview-stops-count').textContent = `${t.stops.length} Stops`;
  }

  // Render 2. My Profile View (STRICTLY READ-ONLY for KANIKA V)
  renderProfile() {
    const p = this.data.profile;
    const photo = p.photoUrl || 'profile-photo.png';

    const mainAv = document.getElementById('prof-display-avatar');
    if (mainAv) mainAv.src = photo;

    document.getElementById('prof-display-name').textContent = p.name;
    document.getElementById('prof-display-dept').textContent = `${p.dept} — ${p.college}`;
    document.getElementById('prof-display-year').textContent = p.year;
    document.getElementById('prof-display-sem').textContent = `${p.semester} SEMESTER`;

    document.getElementById('prof-field-name').textContent = p.name;
    document.getElementById('prof-field-reg').textContent = p.regNo;
    document.getElementById('prof-field-dob').textContent = p.dob;
    document.getElementById('prof-field-gender').textContent = p.gender;
    document.getElementById('prof-field-dept').textContent = p.dept;
    document.getElementById('prof-field-college').textContent = p.college;
    document.getElementById('prof-field-year').textContent = p.year;
    document.getElementById('prof-field-sem').textContent = p.semester;
    document.getElementById('prof-field-email').textContent = p.email;
    document.getElementById('prof-field-phone').textContent = p.phone;
    document.getElementById('prof-field-address').textContent = p.address;
  }

  // Render 3. Mark Percentile View & Calculations
  renderMarks() {
    const semMetrics = {};
    let yr1Obt = 0, yr1Max = 0, yr1Credit = 0, yr1GpaWeighted = 0;
    let yr2Obt = 0, yr2Max = 0, yr2Credit = 0, yr2GpaWeighted = 0;

    const semNames = {
      sem1: 'Semester 1',
      sem2: 'Semester 2',
      sem3: 'Semester 3',
      sem4: 'Semester 4'
    };

    ['sem1', 'sem2', 'sem3', 'sem4'].forEach(semKey => {
      const tbody = document.getElementById(`${semKey}-tbody`);
      const subjects = this.data.subjects[semKey] || [];
      if (!tbody) return;

      tbody.innerHTML = '';
      let sObt = 0, sMax = 0, sCredit = 0, sGpaWeighted = 0;

      subjects.forEach(sub => {
        sObt += sub.totalObt;
        sMax += sub.totalMax;
        sCredit += sub.credit;
        sGpaWeighted += (sub.gpa * sub.credit);

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${semNames[semKey]}</strong></td>
          <td><code class="code-badge">${sub.code}</code></td>
          <td><strong>${sub.name}</strong></td>
          <td>${sub.intStr}</td>
          <td>${sub.extStr}</td>
          <td><strong>${sub.totalObt} / ${sub.totalMax}</strong></td>
          <td>${sub.credit}</td>
          <td><strong>${sub.gpa.toFixed(1)}</strong></td>
          <td><span class="badge grade-badge grade-${sub.grade}">${sub.grade}</span></td>
          <td><span class="badge badge-success"><i class="fa-solid fa-check"></i> ${sub.result}</span></td>
        `;
        tbody.appendChild(tr);
      });

      const pct = sMax > 0 ? ((sObt / sMax) * 100).toFixed(1) : "0.0";
      const semGpa = sCredit > 0 ? (sGpaWeighted / sCredit).toFixed(2) : "0.00";

      semMetrics[semKey] = { pct, gpa: semGpa, obt: sObt, max: sMax, credit: sCredit };

      // Update Sem Badge
      const avgBadge = document.getElementById(`${semKey}-avg`);
      if (avgBadge) avgBadge.textContent = `${pct}%`;

      // Update Top Summary Cards
      const cardPct = document.getElementById(`card-${semKey}-pct`);
      const cardGpa = document.getElementById(`card-${semKey}-gpa`);
      const cardBar = document.getElementById(`card-${semKey}-bar`);
      if (cardPct) cardPct.textContent = `${pct}%`;
      if (cardGpa) cardGpa.textContent = semGpa;
      if (cardBar) cardBar.style.width = `${pct}%`;

      if (semKey === 'sem1' || semKey === 'sem2') {
        yr1Obt += sObt;
        yr1Max += sMax;
        yr1Credit += sCredit;
        yr1GpaWeighted += sGpaWeighted;
      } else {
        yr2Obt += sObt;
        yr2Max += sMax;
        yr2Credit += sCredit;
        yr2GpaWeighted += sGpaWeighted;
      }
    });

    const yr1Pct = yr1Max > 0 ? ((yr1Obt / yr1Max) * 100).toFixed(1) : "0.0";
    const yr2Pct = yr2Max > 0 ? ((yr2Obt / yr2Max) * 100).toFixed(1) : "0.0";

    const totalObtAll = yr1Obt + yr2Obt;
    const totalMaxAll = yr1Max + yr2Max;
    const totalCreditAll = yr1Credit + yr2Credit;
    const overallPct = totalMaxAll > 0 ? ((totalObtAll / totalMaxAll) * 100).toFixed(1) : "0.0";
    const overallCgpa = totalCreditAll > 0 ? ((yr1GpaWeighted + yr2GpaWeighted) / totalCreditAll).toFixed(2) : "0.00";

    document.getElementById('overall-yr1-pct').textContent = `${yr1Pct}%`;
    document.getElementById('overall-yr2-pct').textContent = `${yr2Pct}%`;
    document.getElementById('overall-total-pct').textContent = `${overallPct}%`;
    document.getElementById('overall-cgpa').textContent = overallCgpa;

    return { yr1Pct, yr2Pct, overallPct, overallCgpa, semMetrics };
  }

  // Render 4. Transport Sequence View (Read-Only)
  renderTransport() {
    const t = this.data.transport;
    const typeElem = document.getElementById('trans-type-display');
    if (typeElem) typeElem.textContent = `🚌 ${t.transportType || 'Government Bus'}`;

    const routeElem = document.getElementById('trans-route-display');
    if (routeElem) routeElem.textContent = `📍 ${t.routeNum || t.route || 'Crime Branch → Theppakulam'}`;

    const timeElem = document.getElementById('trans-time-display');
    if (timeElem) timeElem.textContent = `⏰ ${t.morningTravelTime || t.travelTime || '8:10 AM – 8:25 AM'}`;

    const stopElem = document.getElementById('trans-stop-display');
    if (stopElem) stopElem.textContent = `📌 My Stop: ${t.studentStop || 'Theppakulam'}`;

    const container = document.getElementById('transport-stops-container');
    if (!container) return;

    container.innerHTML = '';
    const stops = t.stops || [];

    if (stops.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-bus text-muted" style="font-size: 2.5rem; margin-bottom: 0.5rem;"></i>
          <p>No transport stops added to sequence route yet.</p>
        </div>
      `;
      return;
    }

    stops.forEach((stop, index) => {
      const seqNum = index + 1;
      const isStudent = stop.isStudentStop;

      const stopCard = document.createElement('div');
      stopCard.className = `sequence-stop-item ${isStudent ? 'student-stop' : ''}`;
      stopCard.innerHTML = `
        <div class="seq-number">${seqNum}</div>
        <div class="seq-content">
          <div class="seq-title-row">
            <h4>${stop.name} ${isStudent ? '<span class="badge badge-student"><i class="fa-solid fa-user-pin"></i> My Stop</span>' : ''}</h4>
          </div>
          <div class="seq-times">
            <span><i class="fa-solid fa-clock"></i> Boarding: <strong>${stop.boardingTime}</strong></span>
            <span><i class="fa-solid fa-flag-checkered"></i> Departure: <strong>${stop.departureTime}</strong></span>
          </div>
        </div>
      `;
      container.appendChild(stopCard);
    });
  }

  attachTransportEventListeners() {
    document.querySelectorAll('[data-move-up]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-move-up'));
        if (idx > 0) {
          const stops = this.data.transport.stops;
          const temp = stops[idx];
          stops[idx] = stops[idx - 1];
          stops[idx - 1] = temp;
          this.saveData();
          this.showToast("Sequence position moved up!", "info");
        }
      });
    });

    document.querySelectorAll('[data-move-down]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-move-down'));
        const stops = this.data.transport.stops;
        if (idx < stops.length - 1) {
          const temp = stops[idx];
          stops[idx] = stops[idx + 1];
          stops[idx + 1] = temp;
          this.saveData();
          this.showToast("Sequence position moved down!", "info");
        }
      });
    });

    document.querySelectorAll('[data-edit-stop]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-edit-stop');
        const stop = this.data.transport.stops.find(s => s.id === id);
        if (stop) {
          document.getElementById('stop-edit-id').value = stop.id;
          document.getElementById('stop-name').value = stop.name;
          document.getElementById('stop-seq').value = this.data.transport.stops.indexOf(stop) + 1;
          document.getElementById('stop-boarding').value = stop.boardingTime;
          document.getElementById('stop-departure').value = stop.departureTime;
          document.getElementById('stop-is-student').checked = !!stop.isStudentStop;
          document.getElementById('stop-modal-title').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit Transport Stop';
          this.openModal('stop-modal');
        }
      });
    });

    document.querySelectorAll('[data-delete-stop]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-delete-stop');
        if (confirm("Delete this transport stop from sequence route?")) {
          this.data.transport.stops = this.data.transport.stops.filter(s => s.id !== id);
          this.saveData();
          this.showToast("Transport stop removed from sequence.", "info");
        }
      });
    });
  }

  // Academic Performance Chart (Chart.js)
  initMarksChart() {
    const canvas = document.getElementById('marksChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    const semPercentages = [];
    ['sem1', 'sem2', 'sem3', 'sem4'].forEach(semKey => {
      const subs = this.data.subjects[semKey] || [];
      let semObt = 0, semMax = 0;
      subs.forEach(s => {
        semObt += s.totalObt;
        semMax += s.totalMax;
      });
      semPercentages.push(semMax > 0 ? parseFloat(((semObt / semMax) * 100).toFixed(1)) : 0);
    });

    this.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
        datasets: [{
          label: 'Semester Percentage (%)',
          data: semPercentages,
          backgroundColor: [
            'rgba(30, 58, 138, 0.85)',
            'rgba(37, 99, 235, 0.85)',
            'rgba(14, 165, 233, 0.85)',
            'rgba(217, 119, 6, 0.85)'
          ],
          borderColor: [
            '#1e3a8a',
            '#2563eb',
            '#0ea5e9',
            '#d97706'
          ],
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: value => value + '%'
            }
          }
        }
      }
    });
  }

  // Toast Notification System
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Instantiate application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new StudentApp();
});
