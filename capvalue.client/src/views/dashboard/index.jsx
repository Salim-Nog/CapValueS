import React, { useState } from 'react';
import './index.css';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('rapport');

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2>Menu</h2>
                <ul>
                    <li
                        className={activeTab === 'rapport' ? 'active' : ''}
                        onClick={() => setActiveTab('rapport')}
                    >
                        Rapport de stage
                    </li>
                    <li
                        className={activeTab === 'presentation' ? 'active' : ''}
                        onClick={() => setActiveTab('presentation')}
                    >
                        Presentation
                    </li>
                    <li
                        className={activeTab === 'Tutoriel' ? 'active' : ''}
                        onClick={() => setActiveTab('Tutoriel')}
                    >
                        Tutoriel
                    </li>
                    <li
                        className={activeTab === 'Documents' ? 'active' : ''}
                        onClick={() => setActiveTab('Documents')}
                    >
                        Documents
                    </li>

                    <li
                        className={activeTab === 'Utilisateurs' ? 'active' : ''}
                        onClick={() => setActiveTab('Utilisateurs')}
                    >
                        Utilisateurs
                    </li>
                    <li
                        className={activeTab === 'sign out' ? 'active' : ''}
                        onClick={() => setActiveTab('sign out')}
                    >
                        sign out
                    </li>
                    
                </ul>
            </aside>

            <main className="main-content">
                {activeTab === 'rapport' && (
                    <div>
                        <h1>Rapport de stage</h1>
                        <p>Ici tu peux afficher le contenu de ton rapport de stage.</p>
                    </div>
                )}
                {activeTab === 'presentation' && (
                    <div>
                        <h1>Prentation</h1>
                        <p>Voici la page de présentation.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
