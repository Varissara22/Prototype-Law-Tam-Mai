// ===== Mock Data =====
const MOCK_USERS = {
    somjai: {
        id: 'somjai',
        name: 'นางสมใจ งามเนียม',
        englishName: 'Somjai Ngarnyiam',
        birthdate: '12 พฤศจิกายน 2540',
        location: 'พหลโยธิน, กรุงเทพมหานคร',
        email: 'somjai.thepza@gmail.com',
        phone: '012-345-6789',
        instagram: 'somjai.Agent_007',
        github: 'SOMJAI_007',
        linkedin: 'agent_somjai',
        intro: 'Agent สมใจ พร้อมปฏิบัติการแทรกซึมทุกชนชาทมุกที่ท่านสั่งการ และนิยัดตอบตามคำสั่งการ',
        skills: [
            { name: 'ต่อสู้ระยะประชิด', status: 'verified' },
            { name: 'พลังตัว', status: 'verified' },
            { name: 'แทรกซึม', status: 'pending' },
            { name: 'เรซูเม่', status: 'verified' }
        ],
        documents: [
            { name: 'บัตรผู้พิการ', status: 'verified' },
            { name: 'ทะเบียนบ้าน', status: 'verified' },
            { name: 'เอกสารตรวจสุขภาพ', status: 'missing' },
            { name: 'เอกสารวุฒิการศึกษา', status: 'pending' },
            { name: 'เอกสารประวัติอาชญากรรม', status: 'pending' },
            { name: 'เรซูเม่', status: 'verified' }
        ],
        applications: [
            {
                id: '005679',
                title: 'ตำแหน่งยอดสายลับ-บริษัทเซ็นเซย์จำกัด',
                status: 'submitted',
                steps: [
                    { label: 'ส่งเอกสารสมัครงาน', sublabel: '(ดำเนินการสำเร็จ)', completed: true },
                    { label: 'ประกาศรายชื่อสัมภาษณ์', sublabel: '(ระหว่างการดำเนินการ)', completed: false },
                    { label: 'ประกาศผู้ผ่านการคัดเลือก', sublabel: '', completed: false },
                    { label: 'เซ็นสัญญาเสร็จสิ้น', sublabel: '', completed: false }
                ]
            },
            {
                id: '003636',
                title: 'ตำแหน่งแม่บ้านสายลับ-บริษัทเบอร์โลออน',
                status: 'interview',
                steps: [
                    { label: 'ส่งเอกสารสมัครงาน', sublabel: '(ดำเนินการสำเร็จ)', completed: true },
                    { label: 'ประกาศรายชื่อสัมภาษณ์', sublabel: '(คลิก เพื่อเช็ครายชื่อสัมภาษณ์)', completed: true },
                    { label: 'ประกาศผู้ผ่านการคัดเลือก', sublabel: '', completed: false },
                    { label: 'เซ็นสัญญาเสร็จสิ้น', sublabel: '', completed: false }
                ]
            },
            {
                id: '000001',
                title: 'ตำแหน่งผู้ช่วยสายลับ-บริษัทนานานำบ้งกี',
                status: 'rejected',
                steps: [
                    { label: 'ส่งเอกสารสมัครงาน', sublabel: '(ดำเนินการสำเร็จ)', completed: true },
                    { label: 'ประกาศรายชื่อสัมภาษณ์', sublabel: '(ไม่ผ่านการคัดเลือก)', completed: false, rejected: true },
                    { label: 'ประกาศผู้ผ่านการคัดเลือก', sublabel: '', completed: false },
                    { label: 'เซ็นสัญญาเสร็จสิ้น', sublabel: '', completed: false }
                ]
            }
        ],
        favoriteJobs: ['job1', 'job2']
    },
    newuser: {
        id: 'newuser',
        name: 'ผู้ใช้ใหม่ ทดลอง',
        englishName: 'New User',
        birthdate: '-',
        location: '-',
        email: 'puchaimai@gmail.com',
        phone: '-',
        instagram: '-',
        github: '-',
        linkedin: '-',
        intro: 'ยังไม่มีข้อมูล กรุณาเพิ่มข้อมูลของคุณ',
        skills: [],
        documents: [
            { name: 'บัตรผู้พิการ', status: 'pending' },
            { name: 'ทะเบียนบ้าน', status: 'pending' },
            { name: 'เอกสารตรวจสุขภาพ', status: 'pending' },
            { name: 'เอกสารวุฒิการศึกษา', status: 'pending' },
            { name: 'เอกสารประวัติอาชญากรรม', status: 'pending' },
            { name: 'เรซูเม่', status: 'pending' }
        ],
        applications: [],
        favoriteJobs: []
    }
};

const MOCK_JOBS = [
    {
        id: 'job1',
        title: 'ตำแหน่งปลายลับ',
        company: 'บริษัทปลายลับ จำกัด',
        description: 'รายละเอียดงาน: ศึกษาธรรมชาติของคู่ต่อสู้กระเจิดกระเลือดโดยการปลอมเป็นปู่สายลับประเมินอยู่กับเหล่านู',
        salary: '35,000 บาท/เดือน',
        category: 'recommended'
    },
    {
        id: 'job2',
        title: 'ตำแหน่งโปรแกรมเมอร์สายลับ',
        company: 'บริษัทเทคสายลับ',
        description: 'รายละเอียดงาน: ปลอมเป็นโปรแกรมเมอร์อย่างเป็นธรรมชาติเพื่อล้วงข้อมูลจากบริษัทไอทีโครโปชอฟ',
        salary: '100,000 บาท/มิชชั่น',
        category: 'recommended'
    },
    {
        id: 'job3',
        title: 'ตำแหน่งพ่อแม่สายลับ',
        company: 'องค์กรครอบครัว',
        description: 'รายละเอียดงาน: ปลอมตัวเป็นพ่อแม่เพื่อเฝ้าระวังเป้าหมายทุกวัน 24 ชั่วโมง',
        salary: '50,000 บาท/เดือน',
        category: 'closing'
    },
    {
        id: 'job4',
        title: 'ตำแหน่งครูสายลับ',
        company: 'โรงเรียนนานาชาติ',
        description: 'รายละเอียดงาน: สอนเด็กๆ และเฝ้าระวังกิจกรรมต้องสงสัย',
        salary: '45,000 บาท/เดือน',
        category: 'new'
    },
    {
        id: 'job5',
        title: 'ตำแหน่งพนักงานขับรถสายลับ',
        company: 'บริษัทขนส่ง',
        description: 'รายละเอียดงาน: ขับรถส่งของพร้อมทั้งติดตามเป้าหมาย',
        salary: '38,000 บาท/เดือน',
        category: 'new'
    },
    {
        id: 'job6',
        title: 'ตำแหน่งนักข่าวสายลับ',
        company: 'สถานีโทรทัศน์',
        description: 'รายละเอียดงาน: รายงานข่าวและสืบสวนข้อมูลลับ',
        salary: '55,000 บาท/เดือน',
        category: 'closing'
    }
];

// ===== State Management =====
class AppState {
    constructor() {
        this.currentUser = null;
        this.currentPage = 'jobs';
        this.currentCategory = 'recommended';
        this.jobs = MOCK_JOBS;
        this.init();
    }

    init() {
        // Load saved state from localStorage
        const savedUserId = localStorage.getItem('currentUserId');
        if (savedUserId && MOCK_USERS[savedUserId]) {
            this.loadUser(savedUserId);
        }
    }

    loadUser(userId) {
        this.currentUser = JSON.parse(JSON.stringify(MOCK_USERS[userId]));
        
        // Load saved favorites from localStorage
        const savedFavorites = localStorage.getItem(`favorites_${userId}`);
        if (savedFavorites) {
            this.currentUser.favoriteJobs = JSON.parse(savedFavorites);
        }
        
        localStorage.setItem('currentUserId', userId);
    }

    logout() {
        localStorage.removeItem('currentUserId');
        this.currentUser = null;
    }

    toggleFavorite(jobId) {
        if (!this.currentUser) return;
        
        const index = this.currentUser.favoriteJobs.indexOf(jobId);
        if (index === -1) {
            this.currentUser.favoriteJobs.push(jobId);
        } else {
            this.currentUser.favoriteJobs.splice(index, 1);
        }
        
        // Save to localStorage
        localStorage.setItem(
            `favorites_${this.currentUser.id}`,
            JSON.stringify(this.currentUser.favoriteJobs)
        );
    }

    isFavorite(jobId) {
        if (!this.currentUser) return false;
        return this.currentUser.favoriteJobs.includes(jobId);
    }

    getFilteredJobs() {
        return this.jobs.filter(job => job.category === this.currentCategory);
    }

    getFavoriteJobs() {
        if (!this.currentUser) return [];
        return this.jobs.filter(job => this.currentUser.favoriteJobs.includes(job.id));
    }
}

// ===== UI Controller =====
class UIController {
    constructor(state) {
        this.state = state;
        this.elements = {
            loginModal: document.getElementById('loginModal'),
            userSelect: document.getElementById('userSelect'),
            loginBtn: document.getElementById('loginBtn'),
            logoutBtn: document.getElementById('logoutBtn'),
            app: document.getElementById('app'),
            sidebarUserName: document.getElementById('sidebarUserName'),
            jobsContainer: document.getElementById('jobsContainer'),
            applicationsContainer: document.getElementById('applicationsContainer'),
            favoriteJobsContainer: document.getElementById('favoriteJobsContainer')
        };
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Login
        this.elements.loginBtn.addEventListener('click', () => this.handleLogin());
        
        // Logout
        this.elements.logoutBtn.addEventListener('click', () => this.handleLogout());
        
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const page = e.currentTarget.dataset.page;
                this.navigateTo(page);
            });
        });
        
        // Category tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.switchCategory(category);
            });
        });
    }

    handleLogin() {
        const userId = this.elements.userSelect.value;
        if (!userId) {
            alert('กรุณาเลือกผู้ใช้');
            return;
        }
        
        this.state.loadUser(userId);
        this.showApp();
        this.renderAll();
    }

    handleLogout() {
        if (confirm('คุณต้องการออกจากระบบหรือไม่?')) {
            this.state.logout();
            this.showLogin();
        }
    }

    showLogin() {
        this.elements.loginModal.classList.add('active');
        this.elements.app.style.display = 'none';
    }

    showApp() {
        this.elements.loginModal.classList.remove('active');
        this.elements.app.style.display = 'flex';
    }

    navigateTo(page) {
        this.state.currentPage = page;
        
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });
        
        // Update pages
        document.querySelectorAll('.page-content').forEach(pageEl => {
            pageEl.classList.remove('active');
        });
        document.getElementById(`${page}Page`).classList.add('active');
    }

    switchCategory(category) {
        this.state.currentCategory = category;
        
        // Update tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === category) {
                btn.classList.add('active');
            }
        });
        
        this.renderJobs();
    }

    renderAll() {
        this.renderUserInfo();
        this.renderJobs();
        this.renderApplications();
        this.renderProfile();
    }

    renderUserInfo() {
        if (this.state.currentUser) {
            this.elements.sidebarUserName.textContent = this.state.currentUser.name;
        }
    }

    renderJobs() {
        const jobs = this.state.getFilteredJobs();
        
        if (jobs.length === 0) {
            this.elements.jobsContainer.innerHTML = `
                <div class="empty-state">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="50" fill="#f0f0f0"/>
                        <path d="M40 60h40M60 40v40" stroke="#999" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                    <h3>ไม่พบงาน</h3>
                    <p>ยังไม่มีงานในหมวดนี้ขณะนี้</p>
                </div>
            `;
            return;
        }
        
        this.elements.jobsContainer.innerHTML = jobs.map(job => `
            <div class="job-card" data-job-id="${job.id}">
                <div class="job-card-header">
                    <div class="job-logo">
                        LOGO<br>และชื่อบริษัท
                    </div>
                    <div class="job-info">
                        <h3 class="job-title">${job.title}</h3>
                    </div>
                </div>
                <p class="job-description">${job.description}</p>
                <div class="job-salary">เงินเดือน: ${job.salary}</div>
                <div class="job-actions">
                    <button class="like-btn ${this.state.isFavorite(job.id) ? 'liked' : ''}" data-job-id="${job.id}">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="${this.state.isFavorite(job.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        <span>${this.state.isFavorite(job.id) ? 'ชื่นชอบ' : 'ชื่นชอบ'}</span>
                    </button>
                    <button class="btn btn-primary">รายละเอียดเพิ่มเติม</button>
                </div>
            </div>
        `).join('');
        
        // Attach like button listeners
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const jobId = e.currentTarget.dataset.jobId;
                this.toggleFavorite(jobId);
            });
        });
    }

    toggleFavorite(jobId) {
        this.state.toggleFavorite(jobId);
        this.renderJobs();
        this.renderFavoriteJobs();
    }

    renderApplications() {
        if (!this.state.currentUser || this.state.currentUser.applications.length === 0) {
            this.elements.applicationsContainer.innerHTML = `
                <div class="empty-state">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="50" fill="#FFF8E1"/>
                        <rect x="35" y="35" width="50" height="50" rx="5" fill="#D4A017" opacity="0.3"/>
                        <path d="M45 55h30M45 65h20" stroke="#D4A017" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <h3>ยังไม่มีรายการสมัครงาน</h3>
                    <p>เริ่มต้นค้นหางานที่ใช่สำหรับคุณและสมัครงานได้เลย</p>
                    <button class="btn btn-primary" onclick="app.ui.navigateTo('jobs')">เริ่มค้นหางาน</button>
                </div>
            `;
            return;
        }
        
        this.elements.applicationsContainer.innerHTML = this.state.currentUser.applications.map(app => `
            <div class="application-card">
                <div class="application-header">
                    <div>
                        <h3 class="application-title">${app.title}</h3>
                        <div class="application-id">เลขที่ใบสมัคร: ${app.id}</div>
                    </div>
                </div>
                <div class="status-label">สถานะการสมัครงาน</div>
                <div class="progress-tracker">
                    ${app.steps.map((step, index) => {
                        let stepClass = '';
                        if (step.rejected) {
                            stepClass = 'rejected';
                        } else if (step.completed) {
                            stepClass = 'completed';
                        } else if (index === app.steps.findIndex(s => !s.completed)) {
                            stepClass = 'active';
                        }
                        
                        return `
                            <div class="progress-step ${stepClass}">
                                <div class="step-icon">
                                    ${step.completed ? '✓' : (step.rejected ? '✗' : (index + 1))}
                                </div>
                                <div class="step-label">
                                    ${step.label}
                                    ${step.sublabel ? `<div class="step-sublabel">${step.sublabel}</div>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `).join('');
    }

    renderProfile() {
        if (!this.state.currentUser) return;
        
        const user = this.state.currentUser;
        
        // Basic info
        document.getElementById('profileName').textContent = user.name;
        document.getElementById('profileBirthdate').textContent = user.birthdate;
        document.getElementById('profileLocation').textContent = user.location;
        document.getElementById('profileEmail').textContent = user.email;
        document.getElementById('profilePhone').textContent = user.phone;
        document.getElementById('profileInstagram').textContent = user.instagram;
        document.getElementById('profileGithub').textContent = user.github;
        document.getElementById('profileLinkedin').textContent = user.linkedin;
        document.getElementById('profileIntro').textContent = user.intro;
        
        // Skills
        const skillsContainer = document.getElementById('skillsContainer');
        if (user.skills.length === 0) {
            skillsContainer.innerHTML = '<p style="color: var(--gray-500);">ยังไม่มีข้อมูลความเชี่ยวชาญ</p>';
        } else {
            skillsContainer.innerHTML = user.skills.map(skill => `
                <span class="skill-tag" data-status="${skill.status}">${skill.name}</span>
            `).join('');
        }
        
        // Documents
        const documentsContainer = document.getElementById('documentsContainer');
        documentsContainer.innerHTML = user.documents.map(doc => {
            const statusText = {
                verified: 'อัปโหลดสำเร็จ',
                pending: 'ยังไม่ได้อัปโหลด',
                missing: 'เอกสารมีดเงาย'
            };
            
            const actions = doc.status === 'verified' 
                ? `
                    <button class="btn btn-sm">แก้ไข</button>
                    <button class="btn btn-sm btn-ghost">ดูตัวอย่าง</button>
                `
                : doc.status === 'pending'
                ? `<button class="btn btn-sm btn-upload">อัปโหลดเอกสาร</button>`
                : `
                    <button class="btn btn-sm btn-upload">อัปโหลด</button>
                    <button class="btn btn-sm btn-ghost">ดูตัวอย่าง</button>
                `;
            
            return `
                <div class="document-item">
                    <span class="doc-name">${doc.name}</span>
                    <div class="doc-actions">
                        <span class="doc-status ${doc.status}">${statusText[doc.status]}</span>
                        ${actions}
                    </div>
                </div>
            `;
        }).join('');
        
        // Favorite jobs
        this.renderFavoriteJobs();
    }

    renderFavoriteJobs() {
        const favoriteJobs = this.state.getFavoriteJobs();
        
        if (favoriteJobs.length === 0) {
            this.elements.favoriteJobsContainer.innerHTML = `
                <div class="empty-state">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#E91E63" stroke-width="1">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <p style="margin-top: 1rem;">ยังไม่มีงานที่ชื่นชอบ<br>กดปุ่ม ❤️ ที่รายการงานเพื่อเพิ่มลงรายการโปรด</p>
                </div>
            `;
            return;
        }
        
        this.elements.favoriteJobsContainer.innerHTML = favoriteJobs.map(job => `
            <div class="job-card" style="padding: var(--space-lg);">
                <div class="job-logo" style="width: 60px; height: 60px; margin-bottom: var(--space-md); font-size: 0.7rem;">
                    LOGO<br>และชื่อบริษัท
                </div>
                <h4 style="font-size: 1rem; margin-bottom: var(--space-sm);">${job.title}</h4>
                <button class="btn btn-primary" style="width: 100%; font-size: 0.9rem;">รายละเอียดเพิ่มเติม</button>
            </div>
        `).join('');
    }
}

// ===== Initialize App =====
class App {
    constructor() {
        this.state = new AppState();
        this.ui = new UIController(this.state);
        
        // Show login if no user
        if (!this.state.currentUser) {
            this.ui.showLogin();
        } else {
            this.ui.showApp();
            this.ui.renderAll();
        }
    }
}

// Initialize when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new App();
});
