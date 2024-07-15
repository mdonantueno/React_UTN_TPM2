import React from 'react';

function Register() {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" name="firstName" />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" name="lastName" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" name="phone" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label>Confirmar Password:</label>
          <input type="password" name="confirmPassword" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
