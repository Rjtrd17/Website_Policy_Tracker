import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import PolicyCard from './components/PolicyCard';
import PDFViewerModal from './components/PDFViewerModal';
import { policies as allPolicies } from './data/mockData';

function App() {
    const [filters, setFilters] = useState({
        org: 'All',
        subsector: 'All',
        state: 'All',
        contentType: 'All',
        lan: 'All',
        year: 'All',
        tags: []
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPolicy, setSelectedPolicy] = useState(null);

    const filteredPolicies = useMemo(() => {
        return allPolicies.filter(policy => {
            const matchesOrg = filters.org === 'All' || policy.org === filters.org;
            const matchesSub = filters.subsector === 'All' || policy.subsector === filters.subsector;
            const matchesState = filters.state === 'All' || policy.state === filters.state;
            const matchesType = filters.contentType === 'All' || policy.contentType === filters.contentType;
            const matchesYear = filters.year === 'All' || policy.year.toString() === filters.year.toString();
            const matchesLan = filters.lan === 'All' || policy.lan === filters.lan;
            const matchesTags = filters.tags.length === 0 || filters.tags.every(t => policy.keywords?.includes(t));

            const matchesSearch = policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                policy.summary.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesOrg && matchesSub && matchesState && matchesType && matchesYear && matchesLan && matchesTags && matchesSearch;
        });
    }, [filters, searchQuery]);

    return (
        <div className="app-layout">
            {/* Mobile-friendly Sidebar handling could be added here, currently just visible on desktop/large screens based on CSS */}
            <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <main className="main-content">
                <Navbar />

                <div className="container" style={{ marginTop: '2rem' }}>
                    <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                        <h1 className="text-xl">
                            Policy Documents
                            <span className="text-secondary" style={{ marginLeft: '1rem', fontSize: '1rem', fontWeight: 'normal' }}>
                                ({filteredPolicies.length} results)
                            </span>
                        </h1>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {filteredPolicies.map(policy => (
                            <PolicyCard
                                key={policy.id}
                                policy={policy}
                                onOpenPdf={setSelectedPolicy}
                            />
                        ))}
                    </div>

                    {filteredPolicies.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
                            <p>No policies found matching your criteria.</p>
                            <button
                                className="btn btn-outline"
                                style={{ marginTop: '1rem' }}
                                onClick={() => {
                                    setFilters({ category: 'All', state: 'All' });
                                    setSearchQuery('');
                                }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {selectedPolicy && (
                <PDFViewerModal
                    policy={selectedPolicy}
                    onClose={() => setSelectedPolicy(null)}
                />
            )}
        </div>
    );
}

export default App;
