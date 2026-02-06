import React from 'react';
import { Search, Filter, Building2, Layers, MapPin, FileType, Globe, Calendar, Tag } from 'lucide-react';
import { organisations, subsectors, states, contentTypes, languages, years } from '../data/mockData';

const FilterSidebar = ({
    filters,
    setFilters,
    searchQuery,
    setSearchQuery
}) => {

    const setFilter = (key, val) => {
        setFilters(prev => ({ ...prev, [key]: val }));
    };

    return (
        <aside className="sidebar">
            <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
                <Filter size={20} className="text-secondary" />
                <span className="text-lg">Filters</span>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} />
                    <input
                        type="text"
                        placeholder="Search title or summary..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border)',
                            backgroundColor: 'var(--background)'
                        }}
                    />
                </div>
            </div>

            {/* Organisation */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-xs text-secondary flex items-center gap-2" style={{ marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    <Building2 size={14} /> Organisation
                </h3>
                <select
                    value={filters.org}
                    onChange={(e) => setFilter('org', e.target.value)}
                    className="filter-select"
                >
                    {organisations.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
            </div>

            {/* Subsector */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-xs text-secondary flex items-center gap-2" style={{ marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    <Layers size={14} /> Subsector
                </h3>
                <select
                    value={filters.subsector}
                    onChange={(e) => setFilter('subsector', e.target.value)}
                    className="filter-select"
                >
                    {subsectors.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
            </div>

            {/* State */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-xs text-secondary flex items-center gap-2" style={{ marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    <MapPin size={14} /> State
                </h3>
                <select
                    value={filters.state}
                    onChange={(e) => setFilter('state', e.target.value)}
                    className="filter-select"
                >
                    {states.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
            </div>

            {/* Content Type */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-xs text-secondary flex items-center gap-2" style={{ marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    <FileType size={14} /> Content Type
                </h3>
                <div className="flex flex-col gap-1">
                    {contentTypes.map(v => (
                        <div
                            key={v}
                            className={`filter-item ${filters.contentType === v ? 'active' : ''}`}
                            onClick={() => setFilter('contentType', v)}
                        >
                            {v}
                        </div>
                    ))}
                </div>
            </div>

            {/* Language */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-xs text-secondary flex items-center gap-2" style={{ marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    <Globe size={14} /> Language
                </h3>
                <div className="flex flex-col gap-1">
                    {languages.map(v => (
                        <div
                            key={v}
                            className={`filter-item ${filters.lan === v ? 'active' : ''}`}
                            onClick={() => setFilter('lan', v)}
                        >
                            {v}
                        </div>
                    ))}
                </div>
            </div>

            {/* Year */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-xs text-secondary flex items-center gap-2" style={{ marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    <Calendar size={14} /> Year
                </h3>
                <select
                    value={filters.year}
                    onChange={(e) => setFilter('year', e.target.value)}
                    className="filter-select"
                >
                    {years.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
            </div>
        </aside>
    );
};

export default FilterSidebar;
