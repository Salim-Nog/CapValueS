import React from 'react';
import './index.css';

import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem('isAuthenticated', 'false');
        navigate('/login');
    };
    const stats = [
        { title: 'Utilisateurs', value: 155500 },
        { title: 'Ventes', value: 320 },
        { title: 'Revenus', value: '12 400 €' },
        { title: 'Visites', value: 8700 },
    ];

    const users = [
        { id: 1, name: 'Alice Dupont', email: 'alice@example.com', role: 'Admin' },
        { id: 2, name: 'Bob Martin', email: 'bob@example.com', role: 'User' },
        { id: 3, name: 'Claire Durand', email: 'claire@example.com', role: 'User' },
    ];

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Tableau de bord</h1>
                <button onClick={handleLogout}>Se déconnecter</button>
                <nav>
                    <ul>
                        <li><a href="#stats">Statistiques</a></li>
                        <li><a href="#users">Utilisateurs</a></li>
                    </ul>
                </nav>
            </header>

            <section id="stats" className="stats-cards">
                {stats.map((stat, idx) => (
                    <div key={idx} className="card">
                        <h3>{stat.title}</h3>
                        <p>{stat.value}</p>
                    </div>
                ))}
            </section>

            <section id="users" className="users-table">
                <h2>Utilisateurs récents</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Rôle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default AdminDashboard;
