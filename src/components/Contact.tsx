import { useState, type FormEvent } from 'react';
import { useReveal } from '../hooks/useReveal';
import type { FormState } from '../types';

export function Contact() {
  useReveal();
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', msg: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) return;
    const to = 'shaikbabasaheb.dev@gmail.com';
    const sub = encodeURIComponent(form.subject || `Portfolio Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Babasaheb,\n\n${form.msg}\n\n---\nFrom: ${form.name}\nReply to: ${form.email}`
    );
    window.location.href = `mailto:${to}?subject=${sub}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact">
      <div className="section-label reveal">Get In Touch</div>
      <h2 className="section-title reveal reveal-d1">
        Let's <span>Connect</span>
      </h2>
      <div className="contact-grid">
        <div className="contact-info reveal">
          <h3>Open to new<br />opportunities</h3>
          <p>
            Whether you have a project in mind, a role to fill, or just want to connect — my inbox is
            always open. Let's build something great together.
          </p>
          <div className="contact-links">
            <a href="mailto:shaikbabasaheb.dev@gmail.com" className="contact-link">
              <div className="contact-icon">✉</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">shaikbabasaheb.dev@gmail.com</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/shaikbabasaheb"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">in</div>
              <div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">linkedin.com/in/shaikbabasaheb</div>
              </div>
            </a>
            <a
              href="https://github.com/shaikbabasahebdev"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">
                <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">github.com/shaikbabasahebdev</div>
              </div>
            </a>
          </div>
        </div>

        <div className="reveal reveal-d1">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Subject (optional)</label>
              <input
                className="form-input"
                placeholder="Project inquiry…"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                rows={5}
                placeholder="Tell me about your project…"
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {sent ? 'Opening email client… ✓' : 'Send via Email →'}
            </button>
            <div className={`form-success${sent ? ' show' : ''}`}>
              ✓ Email client opened! I'll get back to you soon.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
