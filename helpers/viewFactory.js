class ViewFactory {
    static createView(type, data) {
        switch (type) {
            case 'user':
                return ViewFactory.userView(data);
            case 'game':
                return ViewFactory.gameView(data);
            case 'usersList':
                return ViewFactory.usersListView(data);
            case 'gamesList':
                return ViewFactory.gamesListView(data);
            default:
                return '<h1>Tipo de vista no soportado</h1>';
        }
    }
    static usersListView(users) {
        if (!users || users.length === 0) return '<h2>No hay usuarios registrados</h2>';
        let rows = users.map(user => `
            <tr>
                <td>${user._id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
            </tr>
        `).join('');
        return `
            <div>
                <h2>Lista de Usuarios</h2>
                <table border="1" cellpadding="5">
                    <thead>
                        <tr>
                            <th>ObjectId</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        `;
    }

    static gamesListView(games) {
        if (!games || games.length === 0) return '<h2>No hay juegos registrados</h2>';
        let rows = games.map(game => `
            <tr>
                <td>${game._id}</td>
                <td>${game.title}</td>
                <td>${game.type}</td>
                <td>${game.year}</td>
                <td>${game.description}</td>
            </tr>
        `).join('');
        return `
            <div>
                <h2>Lista de Juegos</h2>
                <table border="1" cellpadding="5">
                    <thead>
                        <tr>
                            <th>ObjectId</th>
                            <th>Nombre</th>
                            <th>Género</th>
                            <th>Año</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        `;
    }

    static userView(user) {
        if (!user) return '<h2>Usuario no encontrado</h2>';
        return `
            <div>
                <h2>Perfil de Usuario</h2>
                <p><strong>Nombre:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Teléfono:</strong> ${user.phone}</p>
            </div>
        `;
    }

    static gameView(game) {
        if (!game) return '<h2>Juego no encontrado</h2>';
        return `
            <div>
                <h2>Detalle de Juego</h2>
                <p><strong>Nombre:</strong> ${game.title}</p>
                <p><strong>Género:</strong> ${game.type}</p>
                <p><strong>Año:</strong> ${game.year}</p>
                <p><strong>Descripción:</strong> ${game.description}</p>
            </div>
        `;
    }
}

export default ViewFactory;