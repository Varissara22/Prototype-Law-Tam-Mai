// ===== Mock Data =====
const MOCK_COMPANIES = {
    company1: {
        id: 'company1',
        name: 'บริษัทเทคโนโลยี จำกัด',
        isPremium: true, // Premium account
        jobs: [
            {
                id: 'job1',
                title: 'Senior Frontend Developer',
                department: 'Engineering',
                type: 'full-time',
                salaryMin: 50000,
                salaryMax: 80000,
                description: 'พัฒนาและดูแลระบบ Frontend ด้วย React และ TypeScript',
                requirements: 'ประสบการณ์ 3-5 ปี, มีความรู้ React, TypeScript, Next.js',
                status: 'active',
                applicantsCount: 45,
                viewsCount: 234,
                createdDate: '2025-01-15',
                closingDate: '2025-02-15',
                contractFile: 'contract_frontend.pdf'
            },
            {
                id: 'job2',
                title: 'UX/UI Designer',
                department: 'Design',
                type: 'full-time',
                salaryMin: 40000,
                salaryMax: 60000,
                description: 'ออกแบบ User Interface และ User Experience สำหรับแอปพลิเคชัน',
                requirements: 'ประสบการณ์ 2-4 ปี, มีความรู้ Figma, Adobe XD',
                status: 'active',
                applicantsCount: 32,
                viewsCount: 178,
                createdDate: '2025-01-10',
                closingDate: '2025-02-10',
                contractFile: 'contract_designer.pdf'
            },
            {
                id: 'job3',
                title: 'Backend Developer',
                department: 'Engineering',
                type: 'full-time',
                salaryMin: 45000,
                salaryMax: 70000,
                description: 'พัฒนา API และระบบ Backend ด้วย Node.js',
                requirements: 'ประสบการณ์ 2-4 ปี, มีความรู้ Node.js, MongoDB, PostgreSQL',
                status: 'closed',
                applicantsCount: 28,
                viewsCount: 156,
                createdDate: '2024-12-20',
                closingDate: '2025-01-20',
                contractFile: 'contract_backend.pdf'
            }
        ],
        applicants: [
            {
                id: 'app1',
                name: 'สมชาย ใจดี',
                email: 'somchai@email.com',
                phone: '081-234-5678',
                position: 'Senior Frontend Developer',
                jobId: 'job1',
                appliedDate: '2025-01-20',
                status: 'interview',
                experience: '5 ปี',
                education: 'ปริญญาตรี วิศวกรรมคอมพิวเตอร์',
                skills: ['React', 'TypeScript', 'Next.js', 'Node.js'],
                matchScore: 95,
                resume: 'resume_somchai.pdf',
                interviewDate: '2025-02-05',
                interviewRound: 2,
                notes: 'ผ่านรอบแรก มีความรู้และประสบการณ์ดี'
            },
            {
                id: 'app2',
                name: 'สมหญิง รักเรียน',
                email: 'somying@email.com',
                phone: '082-345-6789',
                position: 'Senior Frontend Developer',
                jobId: 'job1',
                appliedDate: '2025-01-22',
                status: 'review',
                experience: '4 ปี',
                education: 'ปริญญาตรี วิทยาการคอมพิวเตอร์',
                skills: ['React', 'Vue.js', 'JavaScript', 'CSS'],
                matchScore: 88,
                resume: 'resume_somying.pdf',
                notes: 'รอพิจารณาเอกสาร'
            },
            {
                id: 'app3',
                name: 'วิชัย มีสุข',
                email: 'wichai@email.com',
                phone: '083-456-7890',
                position: 'UX/UI Designer',
                jobId: 'job2',
                appliedDate: '2025-01-18',
                status: 'selected',
                experience: '3 ปี',
                education: 'ปริญญาตรี การออกแบบผลิตภัณฑ์',
                skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
                matchScore: 92,
                resume: 'resume_wichai.pdf',
                notes: 'ผ่านการคัดเลือก รอการเจรจาเงินเดือน'
            },
            {
                id: 'app4',
                name: 'สุดา เก่งงาน',
                email: 'suda@email.com',
                phone: '084-567-8901',
                position: 'Senior Frontend Developer',
                jobId: 'job1',
                appliedDate: '2025-01-25',
                status: 'review',
                experience: '6 ปี',
                education: 'ปริญญาโท วิศวกรรมซอฟต์แวร์',
                skills: ['React', 'Angular', 'TypeScript', 'GraphQL'],
                matchScore: 93,
                resume: 'resume_suda.pdf',
                notes: ''
            },
            {
                id: 'app5',
                name: 'ประเสริฐ รู้จริง',
                email: 'prasert@email.com',
                phone: '085-678-9012',
                position: 'Backend Developer',
                jobId: 'job3',
                appliedDate: '2025-01-05',
                status: 'hired',
                experience: '4 ปี',
                education: 'ปริญญาตรี วิศวกรรมคอมพิวเตอร์',
                skills: ['Node.js', 'Python', 'MongoDB', 'Docker'],
                matchScore: 90,
                resume: 'resume_prasert.pdf',
                contractSigned: true,
                startDate: '2025-02-01',
                notes: 'เซ็นสัญญาเรียบร้อย เริ่มงานวันที่ 1 กุมภาพันธ์'
            },
            {
                id: 'app6',
                name: 'มานี ทำดี',
                email: 'manee@email.com',
                phone: '086-789-0123',
                position: 'Senior Frontend Developer',
                jobId: 'job1',
                appliedDate: '2025-01-19',
                status: 'rejected',
                experience: '2 ปี',
                education: 'ปริญญาตรี วิทยาการคอมพิวเตอร์',
                skills: ['HTML', 'CSS', 'JavaScript'],
                matchScore: 65,
                resume: 'resume_manee.pdf',
                notes: 'ประสบการณ์ยังน้อยเกินไป'
            }
        ],
        stats: {
            totalApplicants: 145,
            selectedApplicants: 51,
            avgRecruitmentTime: 21,
            openPositions: 2
        }
    },
    company2: {
        id: 'company2',
        name: 'บริษัทใหม่',
        isPremium: false, // Free account
        jobs: [],
        applicants: [],
        stats: {
            totalApplicants: 0,
            selectedApplicants: 0,
            avgRecruitmentTime: 0,
            openPositions: 0
        }
    }
};

// ===== State Management =====
class AppState {
    constructor() {
        this.currentCompany = null;
        this.currentPage = 'dashboard';
        this.currentJobStatus = 'active';
        this.currentApplicantStatus = 'all';
        this.init();
    }

    init() {
        const savedCompanyId = localStorage.getItem('currentCompanyId');
        if (savedCompanyId && MOCK_COMPANIES[savedCompanyId]) {
            this.loadCompany(savedCompanyId);
        }
    }

    loadCompany(companyId) {
        this.currentCompany = JSON.parse(JSON.stringify(MOCK_COMPANIES[companyId]));
        localStorage.setItem('currentCompanyId', companyId);
    }

    logout() {
        localStorage.removeItem('currentCompanyId');
        this.currentCompany = null;
    }

    getFilteredJobs() {
        if (!this.currentCompany) return [];
        return this.currentCompany.jobs.filter(job => job.status === this.currentJobStatus);
    }

    getFilteredApplicants() {
        if (!this.currentCompany) return [];
        if (this.currentApplicantStatus === 'all') {
            return this.currentCompany.applicants;
        }
        return this.currentCompany.applicants.filter(app => app.status === this.currentApplicantStatus);
    }

    getApplicantsByJob(jobId) {
        if (!this.currentCompany) return [];
        return this.currentCompany.applicants.filter(app => app.jobId === jobId);
    }

    addJob(jobData) {
        if (!this.currentCompany) return;
        const newJob = {
            id: `job${Date.now()}`,
            ...jobData,
            applicantsCount: 0,
            viewsCount: 0,
            createdDate: new Date().toISOString().split('T')[0]
        };
        this.currentCompany.jobs.push(newJob);
        this.saveState();
    }

    updateJob(jobId, jobData) {
        if (!this.currentCompany) return;
        const jobIndex = this.currentCompany.jobs.findIndex(j => j.id === jobId);
        if (jobIndex !== -1) {
            this.currentCompany.jobs[jobIndex] = {
                ...this.currentCompany.jobs[jobIndex],
                ...jobData
            };
            this.saveState();
        }
    }

    deleteJob(jobId) {
        if (!this.currentCompany) return;
        this.currentCompany.jobs = this.currentCompany.jobs.filter(j => j.id !== jobId);
        this.saveState();
    }

    updateApplicantStatus(applicantId, newStatus, notes = '') {
        if (!this.currentCompany) return;
        const applicant = this.currentCompany.applicants.find(a => a.id === applicantId);
        if (applicant) {
            applicant.status = newStatus;
            if (notes) {
                applicant.notes = notes;
            }
            this.saveState();
        }
    }

    saveState() {
        if (!this.currentCompany) return;
        const companyId = this.currentCompany.id;
        MOCK_COMPANIES[companyId] = JSON.parse(JSON.stringify(this.currentCompany));
    }

    isPremium() {
        return this.currentCompany && this.currentCompany.isPremium;
    }
}

// ===== UI Controller =====
class UIController {
    constructor(state) {
        this.state = state;
        this.elements = {
            loginModal: document.getElementById('loginModal'),
            app: document.getElementById('app'),
            companySelect: document.getElementById('companySelect'),
            loginBtn: document.getElementById('loginBtn'),
            logoutBtn: document.getElementById('logoutBtn'),
            sidebarCompanyName: document.getElementById('sidebarCompanyName'),
            
            // Pages
            dashboardPage: document.getElementById('dashboardPage'),
            jobsPage: document.getElementById('jobsPage'),
            applicantsPage: document.getElementById('applicantsPage'),
            searchPage: document.getElementById('searchPage'),
            settingsPage: document.getElementById('settingsPage'),
            
            // Containers
            dashboardContainer: document.getElementById('dashboardContainer'),
            jobsContainer: document.getElementById('jobsContainer'),
            applicantsContainer: document.getElementById('applicantsContainer'),
            searchResults: document.getElementById('searchResults'),
            
            // Modals
            jobModal: document.getElementById('jobModal'),
            applicantModal: document.getElementById('applicantModal'),
            jobForm: document.getElementById('jobForm'),
            
            // Buttons
            createJobBtn: document.getElementById('createJobBtn')
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
        
        // Job tabs
        document.querySelectorAll('[data-status]').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const status = e.currentTarget.dataset.status;
                this.filterJobs(status);
            });
        });
        
        // Applicant tabs
        document.querySelectorAll('[data-applicant-status]').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const status = e.currentTarget.dataset.applicantStatus;
                this.filterApplicants(status);
            });
        });
        
        // Create job button
        if (this.elements.createJobBtn) {
            this.elements.createJobBtn.addEventListener('click', () => this.showJobModal());
        }
        
        // Job form
        if (this.elements.jobForm) {
            this.elements.jobForm.addEventListener('submit', (e) => this.handleJobSubmit(e));
        }
        
        // File upload
        const fileInput = document.getElementById('jobContract');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
        }
        
        // Modal close buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                modal.classList.remove('active');
            });
        });
    }

    handleLogin() {
        const companyId = this.elements.companySelect.value;
        if (!companyId) {
            alert('กรุณาเลือกบริษัท');
            return;
        }
        
        this.state.loadCompany(companyId);
        this.showApp();
        this.renderAll();
    }

    handleLogout() {
        this.state.logout();
        this.showLogin();
    }

    showLogin() {
        this.elements.loginModal.classList.add('active');
        this.elements.app.style.display = 'none';
    }

    showApp() {
        this.elements.loginModal.classList.remove('active');
        this.elements.app.style.display = 'flex';
        this.elements.sidebarCompanyName.textContent = this.state.currentCompany.name;
        
        // Update nav items based on premium status
        const premiumNavItems = ['dashboard', 'search'];
        document.querySelectorAll('.nav-item').forEach(item => {
            const page = item.dataset.page;
            if (premiumNavItems.includes(page) && !this.state.isPremium()) {
                // Add locked class
                item.classList.add('premium-locked');
                item.style.opacity = '0.6';
                
                // Add lock icon if not exists
                if (!item.querySelector('.lock-icon')) {
                    const lockIcon = document.createElement('span');
                    lockIcon.className = 'lock-icon';
                    lockIcon.innerHTML = `
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                    `;
                    lockIcon.style.marginLeft = 'auto';
                    item.appendChild(lockIcon);
                }
            } else {
                item.classList.remove('premium-locked');
                item.style.opacity = '1';
                const lockIcon = item.querySelector('.lock-icon');
                if (lockIcon) {
                    lockIcon.remove();
                }
            }
        });
    }

    navigateTo(page) {
        // Check if page requires premium
        const premiumPages = ['dashboard', 'search'];
        if (premiumPages.includes(page) && !this.state.isPremium()) {
            this.showPremiumGate(page);
            return;
        }
        
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });
        
        // Show page
        document.querySelectorAll('.page-content').forEach(p => {
            p.classList.remove('active');
        });
        
        const pageElement = document.getElementById(`${page}Page`);
        if (pageElement) {
            pageElement.classList.add('active');
        }
        
        this.state.currentPage = page;
        
        // Render page content
        switch(page) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'jobs':
                this.renderJobs();
                break;
            case 'applicants':
                this.renderApplicants();
                break;
            case 'search':
                this.renderSearchPage();
                break;
        }
    }

    renderAll() {
        this.renderDashboard();
        this.renderJobs();
        this.renderApplicants();
    }

    showPremiumGate(page) {
        const pageTitles = {
            'dashboard': 'แดชบอร์ดภาพรวมการรับสมัคร',
            'search': 'ค้นหาและกรองผู้สมัคร'
        };
        
        const pageDescriptions = {
            'dashboard': 'ดูสถิติและข้อมูลวิเคราะห์การรับสมัครงานแบบละเอียด พร้อมกราฟและแผนภูมิ',
            'search': 'ค้นหาและกรองผู้สมัครตามความเหมาะสม ด้วย AI ที่จัดเรียงตามทักษะ ประสบการณ์ และวุฒิการศึกษา'
        };
        
        // Get the page element
        const pageElement = document.getElementById(`${page}Page`);
        if (pageElement) {
            // Show page first
            document.querySelectorAll('.page-content').forEach(p => {
                p.classList.remove('active');
            });
            pageElement.classList.add('active');
            
            // Replace content with premium gate
            const originalContent = pageElement.innerHTML;
            pageElement.setAttribute('data-original-content', originalContent);
            
            pageElement.innerHTML = `
                <div class="premium-gate">
                    <div class="premium-gate-content">
                        <div class="premium-icon">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" style="color: var(--premium);">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h2>${pageTitles[page]}</h2>
                        <p class="premium-description">${pageDescriptions[page]}</p>
                        
                        <div class="premium-features">
                            <h3>ฟีเจอร์ Premium ที่คุณจะได้รับ:</h3>
                            <ul>
                                ${page === 'dashboard' ? `
                                    <li>แดชบอร์ดสถิติแบบเรียลไทม์</li>
                                    <li>กราฟแนวโน้มการสมัครงาน</li>
                                    <li>วิเคราะห์ช่องทางผู้สมัคร</li>
                                    <li>รายงานประสิทธิภาพการรับสมัคร</li>
                                ` : ''}
                                ${page === 'search' ? `
                                    <li>ค้นหาผู้สมัครด้วย AI</li>
                                    <li>กรองตามทักษะและประสบการณ์</li>
                                    <li>จัดเรียงตามความเหมาะสม (Match Score)</li>
                                    <li>วิเคราะห์คุณสมบัติแบบอัตโนมัติ</li>
                                ` : ''}
                            </ul>
                        </div>
                        
                        <div class="premium-pricing">
                            <div class="price-tag">
                                <div class="price-amount">฿2,999</div>
                                <div class="price-period">/เดือน</div>
                            </div>
                            <p class="price-description">ปลดล็อกฟีเจอร์ทั้งหมด ไม่มีข้อจำกัด</p>
                        </div>
                        
                        <div class="premium-actions">
                            <button class="btn btn-premium btn-large" onclick="app.ui.upgradeToPremium()">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                อัปเกรดเป็น Premium
                            </button>
                            <button class="btn btn-outline" onclick="app.ui.navigateTo('jobs')">
                                กลับไปหน้าจัดการงาน
                            </button>
                        </div>
                        
                        <p class="premium-trial">ทดลองใช้ฟรี 14 วัน ไม่ต้องใช้บัตรเครดิต</p>
                    </div>
                </div>
            `;
        }
    }

    upgradeToPremium() {
        if (confirm('ต้องการอัปเกรดเป็น Premium หรือไม่?\n\nราคา: ฿2,999/เดือน\n- ทดลองใช้ฟรี 14 วัน\n- ยกเลิกได้ทุกเมื่อ\n- เข้าถึงฟีเจอร์ทั้งหมด')) {
            // In real app, this would handle payment
            alert('ขอบคุณที่สนใจ!\n\nในระบบจริง คุณจะถูกนำไปยังหน้าชำระเงิน\nสำหรับ Demo นี้ กรุณาเลือกบัญชี "บริษัทเทคโนโลยี จำกัด" เพื่อทดลองฟีเจอร์ Premium');
        }
    }

    // ===== Dashboard Rendering =====
    renderDashboard() {
        if (!this.state.currentCompany) return;
        
        const stats = this.state.currentCompany.stats;
        
        // Update stats
        document.getElementById('totalApplicants').textContent = stats.totalApplicants;
        document.getElementById('selectedApplicants').textContent = stats.selectedApplicants;
        document.getElementById('avgTime').textContent = stats.avgRecruitmentTime;
        document.getElementById('openPositions').textContent = stats.openPositions;
        
        // Render popular positions
        this.renderPopularPositions();
        
        // Render charts (mock data for now)
        this.renderCharts();
    }

    renderPopularPositions() {
        const container = document.getElementById('popularPositions');
        const jobs = this.state.currentCompany.jobs.slice(0, 5);
        const maxApplicants = Math.max(...jobs.map(j => j.applicantsCount), 1);
        
        if (jobs.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--gray-500);">ยังไม่มีข้อมูล</p>';
            return;
        }
        
        container.innerHTML = jobs.map(job => {
            const percentage = (job.applicantsCount / maxApplicants) * 100;
            return `
                <div class="position-bar">
                    <div class="position-name">${job.title}</div>
                    <div class="position-progress">
                        <div class="position-fill" style="width: ${percentage}%"></div>
                    </div>
                    <div class="position-count">${job.applicantsCount} คน</div>
                </div>
            `;
        }).join('');
    }

    renderCharts() {
        // Placeholder for charts - in real app, use Chart.js or similar
        const applicantsChart = document.getElementById('applicantsChart');
        const sourcesChart = document.getElementById('sourcesChart');
        
        if (applicantsChart) {
            applicantsChart.parentElement.innerHTML = `
                <div style="padding: 60px; text-align: center; color: var(--gray-500);">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <line x1="12" y1="20" x2="12" y2="10"/>
                        <line x1="18" y1="20" x2="18" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="16"/>
                    </svg>
                    <p style="margin-top: 20px;">กราฟแนวโน้มการสมัครงาน</p>
                    <small>ข้อมูล Mock สำหรับการแสดงผล</small>
                </div>
            `;
        }
        
        if (sourcesChart) {
            sourcesChart.parentElement.innerHTML = `
                <div style="padding: 60px; text-align: center; color: var(--gray-500);">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="12" x2="12" y2="2"/>
                        <line x1="12" y1="12" x2="20" y2="12"/>
                    </svg>
                    <p style="margin-top: 20px;">กราฟช่องทางผู้สมัคร</p>
                    <small>ข้อมูล Mock สำหรับการแสดงผล</small>
                </div>
            `;
        }
    }

    // ===== Jobs Management =====
    filterJobs(status) {
        this.state.currentJobStatus = status;
        
        // Update active tab
        document.querySelectorAll('[data-status]').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.status === status) {
                tab.classList.add('active');
            }
        });
        
        this.renderJobs();
    }

    renderJobs() {
        const jobs = this.state.getFilteredJobs();
        
        if (jobs.length === 0) {
            this.elements.jobsContainer.innerHTML = `
                <div class="empty-state">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="50" fill="#f3e5f5"/>
                        <rect x="35" y="40" width="50" height="40" rx="5" fill="#6A1B9A" opacity="0.3"/>
                    </svg>
                    <h3>ยังไม่มีประกาศงาน</h3>
                    <p>เริ่มต้นสร้างประกาศรับสมัครงานแรกของคุณ</p>
                    <button class="btn btn-primary" onclick="app.ui.showJobModal()">สร้างประกาศงาน</button>
                </div>
            `;
            return;
        }
        
        this.elements.jobsContainer.innerHTML = jobs.map(job => `
            <div class="job-management-card">
                <div class="job-card-header">
                    <div>
                        <h3 class="job-card-title">${job.title}</h3>
                        <div class="job-card-meta">
                            <span>เปิดรับ: ${new Date(job.createdDate).toLocaleDateString('th-TH')}</span>
                            <span>แผนก: ${job.department}</span>
                            <span>เงินเดือน: ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()} บาท</span>
                        </div>
                    </div>
                    <span class="job-status-badge ${job.status}">${this.getStatusText(job.status)}</span>
                </div>
                
                <div class="job-card-stats">
                    <div class="job-stat">
                        <div class="job-stat-value">${job.applicantsCount}</div>
                        <div class="job-stat-label">ผู้สมัคร</div>
                    </div>
                    <div class="job-stat">
                        <div class="job-stat-value">${job.viewsCount}</div>
                        <div class="job-stat-label">จำนวนการดู</div>
                    </div>
                    <div class="job-stat">
                        <div class="job-stat-value">${this.getDaysRemaining(job.closingDate)}</div>
                        <div class="job-stat-label">วันที่เหลือ</div>
                    </div>
                </div>
                
                <div class="job-card-actions">
                    <button class="btn btn-outline" onclick="app.ui.viewJobDetail('${job.id}')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        ดูรายละเอียด
                    </button>
                    <button class="btn btn-outline" onclick="app.ui.editJob('${job.id}')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                        แก้ไข
                    </button>
                    <button class="btn btn-outline" onclick="app.ui.duplicateJob('${job.id}')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        ทำซ้ำ
                    </button>
                    <button class="btn btn-outline" style="color: var(--error);" onclick="app.ui.deleteJob('${job.id}')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                        ลบ
                    </button>
                </div>
            </div>
        `).join('');
    }

    getStatusText(status) {
        const statusMap = {
            'active': 'กำลังเปิดรับ',
            'closed': 'ปิดรับแล้ว',
            'draft': 'แบบร่าง'
        };
        return statusMap[status] || status;
    }

    getDaysRemaining(closingDate) {
        const today = new Date();
        const closing = new Date(closingDate);
        const diffTime = closing - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    }

    // ===== Job Modal =====
    showJobModal(jobId = null) {
        this.elements.jobModal.classList.add('active');
        
        if (jobId) {
            // Edit mode
            const job = this.state.currentCompany.jobs.find(j => j.id === jobId);
            if (job) {
                document.getElementById('jobModalTitle').textContent = 'แก้ไขประกาศงาน';
                document.getElementById('jobTitle').value = job.title;
                document.getElementById('jobDepartment').value = job.department;
                document.getElementById('jobType').value = job.type;
                document.getElementById('jobSalaryMin').value = job.salaryMin;
                document.getElementById('jobSalaryMax').value = job.salaryMax;
                document.getElementById('jobDescription').value = job.description;
                document.getElementById('jobRequirements').value = job.requirements;
            }
        } else {
            // Create mode
            document.getElementById('jobModalTitle').textContent = 'สร้างประกาศงานใหม่';
            this.elements.jobForm.reset();
        }
    }

    closeJobModal() {
        this.elements.jobModal.classList.remove('active');
        this.elements.jobForm.reset();
    }

    handleJobSubmit(e) {
        e.preventDefault();
        
        const jobData = {
            title: document.getElementById('jobTitle').value,
            department: document.getElementById('jobDepartment').value,
            type: document.getElementById('jobType').value,
            salaryMin: parseInt(document.getElementById('jobSalaryMin').value),
            salaryMax: parseInt(document.getElementById('jobSalaryMax').value),
            description: document.getElementById('jobDescription').value,
            requirements: document.getElementById('jobRequirements').value,
            status: 'active',
            closingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        };
        
        this.state.addJob(jobData);
        this.closeJobModal();
        this.renderJobs();
        this.renderDashboard();
        
        alert('เผยแพร่ประกาศงานเรียบร้อย! ระบบ AI ได้ตรวจสอบสัญญาจ้างแล้ว');
    }

    handleFileUpload(e) {
        const file = e.target.files[0];
        const statusDiv = document.getElementById('contractStatus');
        
        if (file) {
            // Simulate AI checking
            statusDiv.className = 'contract-status';
            statusDiv.innerHTML = 'กำลังตรวจสอบสัญญาด้วย AI...';
            statusDiv.style.display = 'block';
            
            setTimeout(() => {
                statusDiv.className = 'contract-status success';
                statusDiv.innerHTML = `
                    <strong>สัญญาจ้างผ่านการตรวจสอบ</strong>
                    <br><small>AI ได้ตรวจสอบความถูกต้องและความเป็นธรรมแล้ว</small>
                    <br><small>ไฟล์: ${file.name}</small>
                `;
            }, 2000);
        }
    }

    saveDraft() {
        alert('บันทึกแบบร่างสำเร็จ! คุณสามารถกลับมาแก้ไขได้ภายหลัง');
        this.closeJobModal();
    }

    editJob(jobId) {
        this.showJobModal(jobId);
    }

    duplicateJob(jobId) {
        const job = this.state.currentCompany.jobs.find(j => j.id === jobId);
        if (job) {
            const newJob = {
                ...job,
                id: undefined,
                title: `${job.title} (สำเนา)`,
                status: 'draft'
            };
            this.state.addJob(newJob);
            this.renderJobs();
            alert('ทำสำเนาประกาศงานเรียบร้อย!');
        }
    }

    deleteJob(jobId) {
        if (confirm('คุณแน่ใจหรือไม่ว่าต้องการลบประกาศงานนี้?')) {
            this.state.deleteJob(jobId);
            this.renderJobs();
            this.renderDashboard();
            alert('ลบประกาศงานเรียบร้อย!');
        }
    }

    viewJobDetail(jobId) {
        const job = this.state.currentCompany.jobs.find(j => j.id === jobId);
        if (job) {
            alert(`รายละเอียดงาน:\n\n${job.title}\n\n${job.description}\n\nคุณสมบัติ:\n${job.requirements}`);
        }
    }

    // ===== Applicants Management =====
    filterApplicants(status) {
        this.state.currentApplicantStatus = status;
        
        // Update active tab
        document.querySelectorAll('[data-applicant-status]').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.applicantStatus === status) {
                tab.classList.add('active');
            }
        });
        
        this.renderApplicants();
    }

    renderApplicants() {
        const applicants = this.state.getFilteredApplicants();
        
        // Populate job filter
        const jobFilter = document.getElementById('jobFilter');
        if (jobFilter) {
            jobFilter.innerHTML = '<option value="">ทุกตำแหน่ง</option>' + 
                this.state.currentCompany.jobs.map(job => 
                    `<option value="${job.id}">${job.title}</option>`
                ).join('');
        }
        
        if (applicants.length === 0) {
            this.elements.applicantsContainer.innerHTML = `
                <div class="empty-state">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="50" fill="#e3f2fd"/>
                        <circle cx="60" cy="45" r="15" fill="#0066A1" opacity="0.3"/>
                        <path d="M35 90c0-13.807 11.193-25 25-25s25 11.193 25 25" fill="#0066A1" opacity="0.3"/>
                    </svg>
                    <h3>ยังไม่มีผู้สมัคร</h3>
                    <p>เมื่อมีผู้สมัครงานจะแสดงที่นี่</p>
                </div>
            `;
            return;
        }
        
        this.elements.applicantsContainer.innerHTML = applicants.map(applicant => `
            <div class="applicant-card" onclick="app.ui.showApplicantDetail('${applicant.id}')">
                <div class="applicant-header">
                    <div class="applicant-info">
                        <div class="applicant-avatar"></div>
                        <div>
                            <h3 class="applicant-name">${applicant.name}</h3>
                            <div class="applicant-position">สมัคร: ${applicant.position}</div>
                        </div>
                    </div>
                    <span class="applicant-status-badge ${applicant.status}">${this.getApplicantStatusText(applicant.status)}</span>
                </div>
                
                <div class="applicant-details">
                    <div class="detail-item">
                        <div class="detail-label">วันที่สมัคร</div>
                        <div class="detail-value">${new Date(applicant.appliedDate).toLocaleDateString('th-TH')}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">ประสบการณ์</div>
                        <div class="detail-value">${applicant.experience}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">วุฒิการศึกษา</div>
                        <div class="detail-value">${applicant.education}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">ความเหมาะสม</div>
                        <div class="detail-value" style="color: var(--success);">${applicant.matchScore}%</div>
                    </div>
                </div>
                
                <div class="applicant-skills">
                    ${applicant.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                
                <div class="applicant-actions" onclick="event.stopPropagation()">
                    <button class="btn btn-outline" onclick="app.ui.updateApplicantStatus('${applicant.id}', 'interview')">
                        นัดสัมภาษณ์
                    </button>
                    <button class="btn btn-primary" onclick="app.ui.updateApplicantStatus('${applicant.id}', 'selected')">
                        ผ่านการคัดเลือก
                    </button>
                    <button class="btn btn-outline" style="color: var(--error);" onclick="app.ui.updateApplicantStatus('${applicant.id}', 'rejected')">
                        ไม่ผ่าน
                    </button>
                </div>
            </div>
        `).join('');
    }

    getApplicantStatusText(status) {
        const statusMap = {
            'review': 'รอพิจารณา',
            'interview': 'นัดสัมภาษณ์',
            'selected': 'ผ่านการคัดเลือก',
            'hired': 'รับเข้าทำงาน',
            'rejected': 'ไม่ผ่าน'
        };
        return statusMap[status] || status;
    }

    showApplicantDetail(applicantId) {
        const applicant = this.state.currentCompany.applicants.find(a => a.id === applicantId);
        if (!applicant) return;
        
        const modal = document.getElementById('applicantModal');
        const content = document.getElementById('applicantDetailContent');
        
        content.innerHTML = `
            <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
                <div class="applicant-avatar" style="width: 100px; height: 100px;"></div>
                <div style="flex: 1;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${applicant.name}</h3>
                    <p style="color: var(--gray-600); margin-bottom: 1rem;">สมัคร: ${applicant.position}</p>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                        <span>Email: ${applicant.email}</span>
                        <span>เบอร์โทร: ${applicant.phone}</span>
                    </div>
                    <span class="applicant-status-badge ${applicant.status}">${this.getApplicantStatusText(applicant.status)}</span>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <h4 style="margin-bottom: 1rem;">ข้อมูลทั่วไป</h4>
                    <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 8px;">
                        <p style="margin-bottom: 0.5rem;"><strong>ประสบการณ์:</strong> ${applicant.experience}</p>
                        <p style="margin-bottom: 0.5rem;"><strong>การศึกษา:</strong> ${applicant.education}</p>
                        <p style="margin-bottom: 0.5rem;"><strong>วันที่สมัคร:</strong> ${new Date(applicant.appliedDate).toLocaleDateString('th-TH')}</p>
                        <p><strong>ความเหมาะสม:</strong> <span style="color: var(--success); font-weight: bold;">${applicant.matchScore}%</span></p>
                    </div>
                </div>
                
                <div>
                    <h4 style="margin-bottom: 1rem;">ทักษะ</h4>
                    <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 8px;">
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${applicant.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            ${applicant.interviewDate ? `
                <div style="background: var(--warning-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="margin-bottom: 0.5rem;">การสัมภาษณ์</h4>
                    <p><strong>วันที่นัด:</strong> ${new Date(applicant.interviewDate).toLocaleDateString('th-TH')}</p>
                    <p><strong>รอบที่:</strong> ${applicant.interviewRound}</p>
                </div>
            ` : ''}
            
            ${applicant.notes ? `
                <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h4 style="margin-bottom: 0.5rem;">บันทึกเพิ่มเติม</h4>
                    <p>${applicant.notes}</p>
                </div>
            ` : ''}
            
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button class="btn btn-outline" onclick="window.open('${applicant.resume}', '_blank')">
                    ดาวน์โหลด Resume
                </button>
                <button class="btn btn-primary" onclick="app.ui.scheduleInterview('${applicant.id}')">
                    กำหนดรอบสัมภาษณ์
                </button>
                <button class="btn btn-primary" onclick="app.ui.sendEmail('${applicant.id}')">
                    ส่งอีเมลแจ้งผล
                </button>
            </div>
        `;
        
        modal.classList.add('active');
    }

    updateApplicantStatus(applicantId, newStatus) {
        if (confirm(`ต้องการเปลี่ยนสถานะเป็น "${this.getApplicantStatusText(newStatus)}" หรือไม่?`)) {
            this.state.updateApplicantStatus(applicantId, newStatus);
            this.renderApplicants();
            this.renderDashboard();
            
            // Auto send email notification
            if (newStatus === 'interview' || newStatus === 'selected' || newStatus === 'rejected') {
                alert('เปลี่ยนสถานะสำเร็จ! ระบบได้ส่งอีเมลแจ้งผู้สมัครอัตโนมัติแล้ว');
            }
        }
    }

    scheduleInterview(applicantId) {
        const date = prompt('กำหนดวันสัมภาษณ์ (YYYY-MM-DD):');
        if (date) {
            const applicant = this.state.currentCompany.applicants.find(a => a.id === applicantId);
            if (applicant) {
                applicant.interviewDate = date;
                applicant.interviewRound = (applicant.interviewRound || 0) + 1;
                this.state.saveState();
                alert('กำหนดรอบสัมภาษณ์เรียบร้อย! ระบบได้ส่งอีเมลแจ้งผู้สมัครแล้ว');
            }
        }
    }

    sendEmail(applicantId) {
        const applicant = this.state.currentCompany.applicants.find(a => a.id === applicantId);
        if (applicant) {
            alert(`ส่งอีเมลถึง ${applicant.email} เรียบร้อย!\n\nเนื้อหา: แจ้งสถานะการสมัครงาน "${this.getApplicantStatusText(applicant.status)}"`);
        }
    }

    // ===== Search & Filter Page (Premium) =====
    renderSearchPage() {
        const searchResults = document.getElementById('searchResults');
        const jobFilter = document.getElementById('searchJobFilter');
        
        // Populate job filter
        if (jobFilter) {
            jobFilter.innerHTML = '<option value="">เลือกตำแหน่ง</option>' + 
                this.state.currentCompany.jobs.map(job => 
                    `<option value="${job.id}">${job.title}</option>`
                ).join('');
        }
        
        // Show premium feature demo
        if (this.state.currentCompany.applicants.length > 0) {
            const sortedApplicants = [...this.state.currentCompany.applicants]
                .sort((a, b) => b.matchScore - a.matchScore)
                .slice(0, 5);
            
            searchResults.innerHTML = sortedApplicants.map(applicant => `
                <div class="search-result-card">
                    <div style="display: flex; gap: 1.5rem; align-items: center; flex: 1;">
                        <div class="applicant-avatar" style="width: 60px; height: 60px;"></div>
                        <div style="flex: 1;">
                            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">${applicant.name}</h3>
                            <p style="color: var(--gray-600); margin-bottom: 0.5rem;">${applicant.position}</p>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                ${applicant.skills.slice(0, 3).map(skill => 
                                    `<span class="skill-tag">${skill}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="match-score">
                        <div class="match-score-value">${applicant.matchScore}%</div>
                        <div class="match-score-label">ความเหมาะสม</div>
                    </div>
                </div>
            `).join('');
        } else {
            searchResults.innerHTML = `
                <div class="empty-state">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="50" fill="#fff8e1"/>
                        <circle cx="50" cy="50" r="20" stroke="#D4A017" stroke-width="3" fill="none"/>
                        <line x1="65" y1="65" x2="80" y2="80" stroke="#D4A017" stroke-width="3"/>
                    </svg>
                    <h3>ยังไม่มีผู้สมัคร</h3>
                    <p>เมื่อมีผู้สมัครงาน ระบบจะช่วยกรองและจัดเรียงตามความเหมาะสม</p>
                </div>
            `;
        }
    }
}

// ===== Initialize App =====
class App {
    constructor() {
        this.state = new AppState();
        this.ui = new UIController(this.state);
        
        // Show login if no company
        if (!this.state.currentCompany) {
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
