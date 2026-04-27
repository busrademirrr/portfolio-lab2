// Supabase Configuration
const SUPABASE_URL = 'https://zvecvzkfuxsjnswqdrhv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2ZWN2emtmdXhzam5zd3Fkcmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyODk5MzcsImV4cCI6MjA5Mjg2NTkzN30.cj8tlYG55InL7bqwBIOXT1qBONYtYI1Jh-LlYxEpnSs';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fetch Experiences
async function loadExperiences() {
    const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('order_num', { ascending: true });
        
    if (error) {
        console.error('Error fetching experiences:', error);
        return;
    }
    
    const container = document.getElementById('experiences-container');
    if (!container) return;
    
    // Clear the container
    container.innerHTML = '';
    
    data.forEach(exp => {
        const article = document.createElement('article');
        article.className = 'experience-card glass-card';
        article.innerHTML = `
            <div class="card-header">
                <h3>${exp.title}</h3>
                <span class="date">${exp.date_range}</span>
            </div>
            <p class="company">${exp.company}</p>
            <p class="desc">${exp.description}</p>
        `;
        container.appendChild(article);
    });
}

// Fetch Projects
async function loadProjects() {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_num', { ascending: true });
        
    if (error) {
        console.error('Error fetching projects:', error);
        return;
    }
    
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    data.forEach(proj => {
        const article = document.createElement('article');
        article.className = 'project-card glass-card';
        article.innerHTML = `
            <div class="project-content">
                <h3>${proj.title}</h3>
                <p class="tech-stack">${proj.tech_stack}</p>
                <p class="desc">${proj.description}</p>
                ${proj.github_link ? `<a href="${proj.github_link}" target="_blank" class="project-link" aria-label="${proj.title} projesini incele">İncele &rarr;</a>` : ''}
            </div>
        `;
        container.appendChild(article);
    });
}

// Handle Form Submission
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Basic HTML5 validation check
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        const { error } = await supabase
            .from('messages')
            .insert([{ name, email, subject, message }]);
            
        submitBtn.disabled = false;
        
        if (error) {
            console.error('Error sending message:', error);
            alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
            submitBtn.textContent = originalBtnText;
        } else {
            alert('Mesajınız başarıyla gönderildi! Teşekkürler.');
            form.reset();
            submitBtn.textContent = 'Gönderildi ✓';
            setTimeout(() => {
                submitBtn.textContent = originalBtnText;
            }, 3000);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadExperiences();
    loadProjects();
    setupContactForm();
});
