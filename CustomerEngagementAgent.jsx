import React, { useState } from 'react';

export default function CustomerEngagementAgent() {
  const [engagements, setEngagements] = useState([
    {
      platform: 'Instagram',
      type: 'Comment',
      user: '@trendlover92',
      message: 'Is this product available in black?',
      autoReply: 'Yes! It comes in black too — link in bio to order now 🖤'
    },
    {
      platform: 'TikTok',
      type: 'Comment',
      user: '@dailyfinds',
      message: 'How long does shipping take?',
      autoReply: 'Shipping takes 4-7 days depending on your location. Express available!'
    },
    {
      platform: 'Instagram',
      type: 'DM',
      user: '@zara.style',
      message: 'Can I get COD on this?',
      autoReply: 'Yes! We offer COD in most locations. Tap here to confirm availability 👉'
    }
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>💬 Customer Engagement Agent — Realtime Comment + DM Reply</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Platform</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Type</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>User</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Message</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>AI Auto-Reply</th>
          </tr>
        </thead>
        <tbody>
          {engagements.map((item, idx) => (
            <tr key={idx}>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.platform}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.type}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.user}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.message}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.autoReply}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
