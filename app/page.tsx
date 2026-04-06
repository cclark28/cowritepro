'use client';

export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0A0A0A' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '24px 48px', borderBottom: '1px solid #E5E5E5' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>CowritePRO</h1>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: '#0A0A0A' }}>Pricing</button>
      </nav>

      <section style={{ padding: '96px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '56px', fontWeight: '700', margin: '0 0 24px 0', lineHeight: '1.2' }}>
          Marketing Copy. Automated.
        </h2>
        <p style={{ fontSize: '18px', color: '#3F3F3F', margin: '0 0 48px 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Generate on-brand marketing copy in seconds. AI-powered, human-reviewed, fully integrated.
        </p>
        <button style={{ background: '#0A0A0A', color: 'white', border: 'none', padding: '16px 32px', fontSize: '16px', fontWeight: '600', borderRadius: '6px', cursor: 'pointer' }}>
          Get Started Free
        </button>
      </section>

      <section style={{ padding: '96px 48px', background: '#F8F9FA' }}>
        <h3 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '48px', textAlign: 'center' }}>Copy Examples</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ background: 'white', padding: '32px', borderRadius: '8px', border: '1px solid #E5E5E5' }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Email Subject Lines</h4>
            <p style={{ margin: '0 0 24px 0', color: '#3F3F3F' }}>'Don't miss: 40% off + free shipping (today only)'</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#7A7A7A' }}>Urgency + incentive + scarcity</p>
          </div>
          <div style={{ background: 'white', padding: '32px', borderRadius: '8px', border: '1px solid #E5E5E5' }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Ad Headlines</h4>
            <p style={{ margin: '0 0 24px 0', color: '#3F3F3F' }}>'Save 10 hours/week on copywriting'</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#7A7A7A' }}>Benefit-focused, time-saving appeal</p>
          </div>
          <div style={{ background: 'white', padding: '32px', borderRadius: '8px', border: '1px solid #E5E5E5' }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Social Media Posts</h4>
            <p style={{ margin: '0 0 24px 0', color: '#3F3F3F' }}>'Your brand voice, on every platform.'</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#7A7A7A' }}>Concise, voice-consistent messaging</p>
          </div>
          <div style={{ background: 'white', padding: '32px', borderRadius: '8px', border: '1px solid #E5E5E5' }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Landing Page Copy</h4>
            <p style={{ margin: '0 0 24px 0', color: '#3F3F3F' }}>'Built for teams that ship fast.'</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#7A7A7A' }}>Value proposition + target audience</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '96px 48px' }}>
        <h3 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '48px', textAlign: 'center' }}>Pricing</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
          {[
            { name: 'Free', price: '$0', limit: '5 drafts/mo', features: ['Basic copy generation', 'No human review'] },
            { name: 'Starter', price: '$79', limit: '50 drafts/mo', features: ['Bulk copy', '48h SLA'] },
            { name: 'Pro', price: '$199', limit: 'Unlimited', features: ['Optional human review', '24h SLA'], featured: true },
            { name: 'Enterprise', price: '$499', limit: 'Unlimited', features: ['Dedicated editor', '4h SLA'] },
          ].map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.featured ? '#0A0A0A' : 'white',
                color: plan.featured ? 'white' : '#0A0A0A',
                padding: '32px',
                borderRadius: '8px',
                border: plan.featured ? 'none' : '1px solid #E5E5E5',
              }}
            >
              <h4 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '600' }}>{plan.name}</h4>
              <p style={{ margin: '0 0 16px 0', fontSize: '32px', fontWeight: '700' }}>{plan.price}</p>
              <p style={{ margin: '0 0 24px 0', fontSize: '14px', opacity: 0.8 }}>{plan.limit}</p>
              <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none' }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{ margin: '8px 0', fontSize: '14px' }}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: '#0A0A0A', color: 'white', padding: '48px', textAlign: 'center' }}>
        <p style={{ margin: '0', fontSize: '16px' }}>© 2026 CowritePRO. All rights reserved.</p>
      </footer>
    </div>
  );
}
