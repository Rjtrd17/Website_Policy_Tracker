import React from 'react';
import { ShieldCheck, Bell } from 'lucide-react';

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
            padding: '1rem 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 10
        }}>
            <div className="flex justify-between items-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div className="flex items-center gap-2">
                    <div style={{
                        backgroundColor: 'var(--primary)',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        color: 'white',
                        display: 'flex'
                    }}>
                        <ShieldCheck size={24} />
                    </div>
                    <span className="text-xl">PolicyTracker</span>
                </div>

                <div className="flex items-center gap-4">
                    <button className="btn btn-outline" style={{ padding: '0.5rem' }}>
                        <Bell size={20} />
                    </button>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#e2e8f0',
                        borderRadius: '50%',
                        overflow: 'hidden'
                    }}>
                        <img src="https://ui-avatars.com/api/?name=Admin+User&background=random" alt="User" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
