import React from 'react';
import { Calendar, FileText, ArrowRight } from 'lucide-react';

const PolicyCard = ({ policy, onOpenPdf }) => {
    return (
        <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="flex flex-wrap gap-1" style={{ marginBottom: '1rem' }}>
                <span className="badge" style={{ background: '#fdf2f2', color: '#9b1c1c' }}>{policy.org}</span>
                <span className="badge" style={{ background: '#f5f3ff', color: '#5b21b6' }}>{policy.contentType}</span>
                <span className="badge badge-cat">{policy.subsector}</span>
                <span className="badge badge-state">{policy.state}</span>
                <span className="badge" style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>{policy.lan}</span>
                <span className="badge badge-year">{policy.year}</span>
            </div>

            <h3 className="text-md" style={{ marginBottom: '0.75rem', fontWeight: 700, lineHeight: 1.4 }}>
                {policy.title}
            </h3>

            <p className="text-secondary" style={{ marginBottom: '1rem', fontSize: '13px', flex: 1 }}>
                {policy.summary}
            </p>

            {policy.keywords && policy.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1" style={{ marginBottom: '1.5rem' }}>
                    {policy.keywords.map(tag => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div style={{ marginTop: 'auto' }}>
                <button
                    className="btn btn-primary"
                    onClick={() => onOpenPdf(policy)}
                    style={{ width: '100%', gap: '0.5rem' }}
                >
                    <FileText size={18} />
                    View Document
                    <ArrowRight size={18} style={{ marginLeft: 'auto' }} />
                </button>
            </div>
        </div>
    );
};

export default PolicyCard;
