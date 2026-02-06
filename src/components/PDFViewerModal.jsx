import React from 'react';
import { X, Download, Share2 } from 'lucide-react';

const PDFViewerModal = ({ policy, onClose }) => {
    if (!policy) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            backdropFilter: 'blur(4px)'
        }}>
            <div style={{
                backgroundColor: 'white',
                width: '90%',
                height: '90%',
                maxWidth: '1000px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h3 className="text-lg">{policy.title}</h3>
                        <span className="text-sm text-secondary">Document Preview</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-outline" style={{ padding: '0.5rem' }}>
                            <Download size={20} />
                        </button>
                        <button className="btn btn-outline" style={{ padding: '0.5rem' }}>
                            <Share2 size={20} />
                        </button>
                        <button className="btn" onClick={onClose} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, backgroundColor: '#f1f5f9', padding: '1rem', overflow: 'hidden' }}>
                    <iframe
                        src={policy.pdfUrl}
                        title="PDF Preview"
                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', backgroundColor: 'white' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PDFViewerModal;
