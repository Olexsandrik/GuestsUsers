import React from 'react';

export const Success = ({ count, setSuccess }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успішно!</h3>
      <p>Всім {count} користувачам відправлено запрошення.</p>
      <button onClick={()=>setSuccess(false)} className="send-invite-btn">Назад</button>
    </div>
  );
};
